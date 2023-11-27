import { Carousel } from "react-bootstrap";
import "../styles/homepage.css";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc: [
      "https://www.hoteljob.vn/files/quang-ba-khach-san.jpg",
      "https://images.squarespace-cdn.com/content/v1/5aadf482aa49a1d810879b88/1626698419120-J7CH9BPMB2YI728SLFPN/1.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    ],
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc: [
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    ],
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc: [
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    ],
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: [
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    ],
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc: [
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    ],
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc: [
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    ],
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: [
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    ],
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function HomePage() {
  return (
    // <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
    <>
      {/* <nav className="flex justify-between items-center w-[100%] mx-auto"> */}
      <header className="">
        <nav className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 fixed flex justify-between items-center w-[90%]  z-50 bg-white p-3">
          <div>
            {/* <img
              className="w-20"
              src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg"
            /> */}
            <i class="fa fa-h-square" aria-hidden="true"></i>
          </div>
          <div className="">
            <ul className="flex items-center gap-[4vw] m-0">
              <li>
                <a
                  className="text-gray-500  no-underline custom-a text-md font-bold"
                  href=""
                >
                  <i className="pr-3 fa fa-globe" aria-hidden="true"></i>Home
                  Page
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500  no-underline custom-a text-md font-bold"
                  href=""
                >
                  <i
                    className="pr-3 fa fa-window-restore"
                    aria-hidden="true"
                  ></i>
                  All Post
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500  no-underline custom-a text-md font-bold"
                  href=""
                >
                  <i className="pr-3 fa fa-home" aria-hidden="true"></i>Post
                  Look
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500   no-underline custom-a text-md font-bold"
                  href=""
                >
                  <i className="pr-3 fa fa-eye" aria-hidden="true"></i>Post Find
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Sign in
            </button>
          </div>
        </nav>
      </header>

      {/* Làm phần Header */}
      <div className="bg-white pt-3">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.href}
                className="group no-underline"
              >
                <Carousel
                  interval={null}
                  slide={true}
                  className="custom-carousel"
                >
                  {product.imageSrc.map((onlyimg, index) => (
                    <Carousel.Item key={index}>
                      <div className="custom-img-contain">
                        <img
                          className="custom-img"
                          src={onlyimg}
                          alt={product.imageAlt}
                        />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="py-2 flex justify-content-between text-gray-700">
                  <div className="font-bold">Tên Khách Sạn</div>
                  <div className="d-flex hotel-rating">
                    <span className="pr-3">
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    {/* Đánh giá */}
                    <div className="num-rating">5</div>
                  </div>
                </div>
                {/* Mô tả khách sạn */}
                <h3 className="text-sm text-gray-700">
                  View Sông Hàn, Gần chợ đêm ...
                </h3>
                <div>
                  <p className="flex text-lg font-medium text-gray-900">
                    3-5 triệu / tháng
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
