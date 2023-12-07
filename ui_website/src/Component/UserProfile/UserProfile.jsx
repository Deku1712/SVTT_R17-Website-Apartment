// const inforItems = [
//   {
//     itemName: "User Name",
//     itemInfo: "Ken",
//   },
//   {
//     itemName: "Email",
//     itemInfo: "Ken",
//   },
//   {
//     itemName: "Address",
//     itemInfo: "Ken",
//   },
//   {
//     itemName: "Phone",
//     itemInfo: "Ken",
//   },
//   {
//     itemName: "Post",
//     itemInfo: "Ken",
//   },
// ];

import { useNavigate } from "react-router-dom";

function UserProfile(props) {

  const { userData, onLogin } = props;
  const navigate = useNavigate;
  console.log(onLogin)

  if (onLogin) {
    return navigate("/")
  }

  return (
    <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex p-0 m-0">
      {/* Navbar right */}
      <div className="w-2/12 min-h-screen bg-white mt-[80px] border-[2px] pt-3  ">
        <ul className="p-0 flex flex-col fixed">
          <li className=" relative">
            <a className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group">
              <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
              <i class="pr-3 w-[35px] fa-solid fa-user"></i>
              <span className="font-semibold">Manage User</span>
            </a>
          </li>
          <li className=" relative">
            <a className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group">
              <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
              <i className="pr-3 w-[35px] fa fa-window-restore"></i>
              <span className="font-semibold">Manage Post</span>
            </a>
          </li>
          <li className=" relative">
            <a className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group">
              <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
              <i class="pr-3 w-[35px] fa-solid fa-money-bill"></i>
              <span className="font-semibold">Manage Payment</span>
            </a>
          </li>
          <li className=" relative">
            <a className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group">
              <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
              <i class="pr-3 w-[35px] fa-solid fa-signal"></i>
              <span className="font-semibold">Manage Statements</span>
            </a>
          </li>
          <li className=" relative">
            <a className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group">
              <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
              <i class="pr-3 w-[35px] fa-solid fa-flag"></i>
              <span className="font-semibold">Manage Report</span>
            </a>
          </li>
        </ul>
      </div>

      <main className="w-10/12  float-right mt-[80px] px-16 flex justify-between flex-wrap">
        {/* Left Profile */}
        <div className="flex justify-center items-center flex-col gap-y-5 p-16">
          <div className="font-semibold text-2xl">{userData.fullname}</div>
          {/* Img Profile */}
          <a className="cursor-pointer rounded-full">
            <img
              src={userData.avatar}
              className="w-44 aspect-[3/3] object-cover object-top border border-gray-200 rounded-full"
            />
          </a>
          {/* Name Profile */}
          <div className="font-semibold text-gray-900">@{userData.username}</div>
          <button className="inline-flex gap-x-2 items-center justify-center py-2.5 px-6 text-black border-[2px]  rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1">
            <i class="fa-solid fa-pen-to-square"></i>
            <span className="text-sm font-semibold tracking-wide">
              Edit User
            </span>
          </button>
          <button className="custom-footer-modal m-0 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1">
            <i className="fa-brands fa-facebook text-2xl text-blue-600 w-[32px] pr-2"></i>
            <div className="title-login text-black">Link With Facebook</div>
            <div></div>
          </button>
          <button className="custom-footer-modal m-0 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1">
            <i class="fa-brands fa-google text-2xl text-red-600 w-[32px] pr-2"></i>
            <div className="title-login text-black">Link With Google</div>
            <div></div>
          </button>
        </div>
        {/* Right Profile  */}
        <div className="w-[60%] flex justify-center items-center flex-col">
          <ul className="w-[100%] px-3">

            <li className="p-3 border-b-[2px]  border-b-gray-400 flex">
              <div className="font-semibold w-[150px]">Username:</div>
              <div className="font-semibold text-gray-400">
                {userData.username}
              </div>
            </li>

          </ul>
        </div>
      </main>
    </div>
  );
}

export default UserProfile;

// const = [ {name, icon: }]
