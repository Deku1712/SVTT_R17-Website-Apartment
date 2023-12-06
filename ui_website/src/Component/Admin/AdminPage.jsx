const products = [
  {
    name: "Organic Landing page",
    category: "Web Design",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    price: 20,
    downloaded: 793,
    rating: 4.9,
    // platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "12/01/22",
  },
  {
    name: "Traffic Landing page",
    category: "Web Design",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    price: 24,
    downloaded: 34,
    rating: 4.4,
    // platformIcons: [FigmaIcon, AIIcon],
    createdAt: "10/01/22",
  },
  {
    name: "POS Dashboard",
    category: "Web Design",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    price: 16,
    downloaded: 896,
    rating: 4.6,
    // platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "01/01/22",
  },
  {
    name: "Gallery page",
    category: "Web Design",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    price: 38,
    downloaded: 194,
    rating: 4.6,
    // platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "04/01/22",
  },
  {
    name: "WFH Landing page",
    category: "Web Design",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    price: 22,
    downloaded: 404,
    rating: 4.3,
    // platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "12/12/21",
  },
];

function AdminPage() {
  return (
    <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
      {/* Navbar right */}
      <div className="w-[20%] bg-white mt-[80px] border-[2px] pt-3 min-h-screen fixed">
        <ul className="p-0 flex flex-col">
          <li>
            <a className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group">
              <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
              <i class="pr-3 w-[35px] fa-solid fa-user"></i>
              <span className="font-semibold">Manage User</span>
            </a>
          </li>
          <li>
            <a className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group">
              <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
              <i className="pr-3 w-[35px] fa fa-window-restore"></i>
              <span className="font-semibold">Manage Post</span>
            </a>
          </li>
          <li>
            <a className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group">
              <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
              <i class="pr-3 w-[35px] fa-solid fa-money-bill"></i>
              <span className="font-semibold">Manage Payment</span>
            </a>
          </li>
          <li>
            <a className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group">
              <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
              <i class="pr-3 w-[35px] fa-solid fa-signal"></i>
              <span className="font-semibold">Manage Statements</span>
            </a>
          </li>
          <li>
            <a className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group">
              <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
              <i class="pr-3 w-[35px] fa-solid fa-flag"></i>
              <span className="font-semibold">Manage Report</span>
            </a>
          </li>
        </ul>
      </div>
      {/* Main */}
      <main className="w-[100%] pl-[20%] flex-1 mt-[80px] pb-8">
        <div className="flex items-center justify-between py-7 px-10">
          <div>
            <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
              Products
            </h1>
            <p className="text-sm font-medium text-gray-500">bla bla bla</p>
          </div>
          <button className="inline-flex gap-x-2 items-center justify-center py-2.5 px-6 text-white bg-slate-500 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
            <i class="pr-3 fa-solid fa-flag"></i>
            <span className="text-sm font-semibold tracking-wide">
              Create item
            </span>
          </button>
        </div>

        <ul className="flex gap-x-24 items-center px-4 border-y border-gray-200 m-0">
          <li>
            <button className="flex gap-x-2 items-center py-3 px-5 text-gray-500 hover:text-red-700 relative group">
              <i class="pr-3 w-[35px] fa-solid fa-money-bill"></i>
              <span>Name</span>
              <span className="absolute w-full h-0.5 left-3 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
            </button>
          </li>
          <li>
            <button className="flex gap-x-2 items-center py-3 px-5 text-gray-500 hover:text-red-700 relative group">
              <i class="pr-3 w-[35px] fa-solid fa-money-bill"></i>
              <span>Name</span>
              <span className="absolute w-full h-0.5 left-3 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
            </button>
          </li>
          <li>
            <button className="flex gap-x-2 items-center py-3 px-5 text-gray-500 hover:text-red-700 relative group">
              <i class="pr-3 w-[35px] fa-solid fa-money-bill"></i>
              <span>Name</span>
              <span className="absolute w-full h-0.5 left-3 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
            </button>
          </li>
          <li>
            <button className="flex gap-x-2 items-center py-3 px-5 text-gray-500 hover:text-red-700 relative group">
              <i class="pr-3 w-[35px] fa-solid fa-money-bill"></i>
              <span className="font-medium">Name</span>
              <span className="absolute w-full h-0.5 left-3 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
            </button>
          </li>
        </ul>

        <table className="w-full border-b boder-gray-500">
          <thead>
            <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
              <td className="pl-10">
                <div className="flex items-center gap-x-4">
                  <input
                    type="checkbox"
                    className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                    // defaultIndeterminate
                  />
                  <span>Product Name</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">Pricing</td>
              <td className="py-4 px-4 text-center">Download</td>
              <td className="py-4 px-4 text-center">Rating</td>
              <td className="py-4 px-4 text-center">Platforms</td>
              <td className="py-4 pr-10 pl-4 text-center">
                <i class="pr-3 w-[35px] fa-solid fa-money-bill"></i>
              </td>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                className="hover:bg-gray-100 transition-colors group"
                key={product.id}
              >
                <td className="flex gap-x-4 items-center py-4 pl-6">
                  <input
                    type="checkbox"
                    className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                  />
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                  />
                  <div>
                    <a className="text-lg font-semibold text-gray-700 cursor-pointer no-underline">
                      {product.name}
                    </a>
                    <div className="font-medium text-gray-400">
                      {product.category}
                    </div>
                  </div>
                </td>
                <td className="font-medium text-center">${product.price}</td>
                <td className="font-medium text-center">
                  {product.downloaded}
                </td>
                <td className="font-medium text-center">
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-400">/5</span>
                </td>
                <td className="font-medium text-center">Platforms</td>
                <td className="font-medium text-center">
                  <span className="inline-block group-hover:hidden">
                    {product.createdAt}
                  </span>
                  <div className="hidden group-hover:flex group-hover:items-center group-hover:justify-center group-hover:text-gray-500 group-hover:gap-x-2">
                    <button className="p-2 hover:rounded-md hover:bg-gray-200">
                      <i class="w-6 h-6 fill-current fa-solid fa-money-bill"></i>
                    </button>
                    <button className="p-2 hover:rounded-md hover:bg-gray-200">
                      <i class="w-6 h-6 fill-current fa-solid fa-money-bill"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex gap-x-2 justify-center pt-8">
          {(() => {
            const elements = [];
            for (let i = 0; i < 5; i++) {
              elements.push(
                <button
                  className="flex items-center justify-center w-8 h-8 font-medium rounded-full"
                  key={i}
                >
                  {i + 1}
                </button>
              );
            }
            return elements;
          })()}
        </div>
      </main>
    </div>
  );
}

export default AdminPage;

// const = [ {name, icon: }]
