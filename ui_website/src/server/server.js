const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require('fs');
const app = express();
const port = 3001;

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

    upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }

        // Kiểm tra và đổi tên tệp nếu cần
        const files = req.files || [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const filePath = path.join(__dirname, 'imgs', file.filename);

            if (fs.existsSync(filePath)) {
                // Tệp đã tồn tại, đổi tên
                const fileExt = path.extname(file.originalname);
                const newFileName = `${file.filename.replace(fileExt, '')}_${Date.now()}${fileExt}`;
                const newFilePath = path.join(__dirname, 'imgs', newFileName);

                // Đổi tên tệp
                fs.renameSync(filePath, newFilePath);

                // Cập nhật thông tin trong req.files
                files[i].filename = newFileName;
                files[i].path = newFilePath;
            }
        }

        next(); // Gọi next để tiếp tục xử lý route sau khi upload hoàn thành
    });
};


const handleApartmentImageUpload = (req, res, next) => {
    const upload = multer({ storage: apartmentStorage }).single("apartment_img");

    upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }

        // Kiểm tra và đổi tên tệp nếu cần
        const file = req.file;
        const filePath = path.join(__dirname, 'imgs', file.filename);

        if (fs.existsSync(filePath)) {
            // Tệp đã tồn tại, đổi tên
            const fileExt = path.extname(file.originalname);
            const newFileName = `${file.filename.replace(fileExt, '')}_${Date.now()}${fileExt}`;
            const newFilePath = path.join(__dirname, 'imgs', newFileName);

            // Đổi tên tệp
            fs.renameSync(filePath, newFilePath);

            // Cập nhật thông tin trong req.file
            file.filename = newFileName;
            file.path = newFilePath;
        }

        next(); // Gọi next để tiếp tục xử lý route sau khi upload hoàn thành
    });
};
app.post("/uploadApartment", handleApartmentImageUpload, (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file was uploaded.');
        }
        res.send("Apartment image uploaded!");
    } catch (error) {
        console.error("Error uploading apartment image: ", error);
        res.status(500).send(error.message);
    }
});
// Route để nhận file ảnh của phòng
app.post("/uploadRoomImages", handleRoomImageUpload, async (req, res) => {
    try {
        if (req.files.length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        res.send("Room images uploaded!");
    } catch (error) {
        console.error("Error uploading room images: ", error);
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
