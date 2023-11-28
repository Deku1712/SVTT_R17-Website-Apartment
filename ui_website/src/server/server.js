const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require('fs');
const app = express();
const port = 3001;
const cors = require("cors");
app.use(cors());
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
}));

// Endpoint để trả về ảnh từ thư mục
app.get("/images/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'imgs', filename);

    console.log("Requested file path:", filePath);

    // Kiểm tra xem tệp có tồn tại không
    if (fs.existsSync(filePath)) {
        console.log("File found. Streaming to client...");

        // Đọc ảnh từ thư mục và trả về cho client
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    } else {
        console.log("File not found. Sending 404 response.");
        res.status(404).send("File not found");
    }
});
app.delete('/deleteImage/:imageName', (req, res) => {
    const filename = req.params.imageName;
    const filePath = path.join(__dirname, 'imgs', filename);
  
    // Check if the file exists
    if (fs.existsSync(filePath)) {
      // Delete the file
      fs.unlinkSync(filePath);
      res.status(200).send('Image deleted successfully');
    } else {
      res.status(404).send('Image not found');
    }
  });
// Các cấu hình lưu trữ ảnh
const apartmentStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'imgs');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const roomStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'imgs');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

// Hàm middleware để xử lý upload ảnh phòng
const handleRoomImageUpload = (req, res, next) => {
    const upload = multer({ storage: roomStorage }).array("room_imgs");

    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        
        next(); // Gọi next để tiếp tục xử lý route sau khi upload hoàn thành
    });
};



const uploadApartment = multer({ storage: apartmentStorage }).single("apartment_img");
app.post("/uploadApartment", (req, res) => {
    uploadApartment(req, res, (err) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.send("Apartment image uploaded!");
    });
});
//Route để nhận file ảnh của phòng
app.post("/uploadRoomImages", handleRoomImageUpload, async (req, res) => {
    try {
        if (req.files.length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        // Get the array of new file names
        const newNames = req.files.map((file) => ({ newName: file.filename }));

        // Send the array of new file names in the response
        res.json({ paths: newNames });
    } catch (error) {
        console.error("Error uploading room images: ", error);
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
