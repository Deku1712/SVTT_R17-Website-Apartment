import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import "../../styles/header.css";
import ModalSignUp from "../Modal/ModalSignUp";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props) {
  const { setShowModalSignUp, setShowModalLogin } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className=" bg-white mb-2 fixed z-50 w-full">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="w-20 h-auto"
                src="https://png.pngtree.com/element_our/sm/20180413/sm_5ad0c06ab28e6.jpg"
                // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            {/* Logo */}
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Icon Choose */}
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            {/* <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                News
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover> */}
            <ul className="flex items-center gap-[4vw] m-0">
              <li>
                <NavLink
                  // style={({ isActive }) => ({
                  //   backgroundColor: isActive ? "blue" : "black",
                  // })}
                  className="text-gray-500  no-underline hover:text-black text-md font-bold"
                  to="/"
                >
                  <i className="pr-3 fa fa-globe" aria-hidden="true"></i>
                  Home Page
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-gray-500  no-underline hover:text-black text-md font-bold"
                  to="/alo"
                >
                  <i
                    className="pr-3 fa fa-window-restore"
                    aria-hidden="true"
                    aria-label="All Post"
                  ></i>
                  All Post
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-gray-500 no-underline hover:text-black text-md font-bold"
                  to="/AddApartment"
                >
                  <i className="pr-3 fa fa-home" aria-hidden="true"></i>
                  Post Look
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-gray-500 no-underline hover:text-black text-md font-bold"
                  to="/edit-apartment"
                >
                  <i className="pr-3 fa fa-eye" aria-hidden="true"></i>
                  Post Find
                </NavLink>
              </li>
            </ul>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Dropdown drop="down-centered" className="border rounded-lg">
              <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                <i className="fa-solid fa-user pr-3"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setShowModalLogin(true)}>Login</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setShowModalSignUp(true)}>Sign Up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        {/* <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          News
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button> */}
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="py-6">
                  <Dropdown
                    className="bg-white mx-3 block px-3 py-2.5"
                    drop="down-centered"
                  >
                    <Dropdown.Toggle variant="econdary" id="dropdown-basic">
                      <i class="fa-solid fa-user"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        href="#/action-1"
                        className="custom-dropdown"
                      >
                        Sign Up
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <button onClick={() => setShowModalSignUp(true)}>
                          Sign Up
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="py-6">
                  <a
                    className="text-gray-500  no-underline mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black"
                    href=""
                  >
                    <i className="pr-3 fa fa-globe" aria-hidden="true"></i>
                    Home Page
                  </a>
                </div>
                <div className="py-6">
                  <a
                    className="text-gray-500  no-underline mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black"
                    href=""
                  >
                    <i
                      className="pr-3 fa fa-window-restore"
                      aria-hidden="true"
                    ></i>
                    All Post
                  </a>
                </div>
                <div className="py-6">
                  <a
                    className="text-gray-500  no-underline mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black"
                    href=""
                  >
                    <i className="pr-3 fa fa-home" aria-hidden="true"></i>
                    Post Look
                  </a>
                </div>
                <div className="py-6">
                  <a
                    className="text-gray-500  no-underline mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black"
                    href=""
                  >
                    <i className="pr-3 fa fa-eye" aria-hidden="true"></i>
                    Post Find
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
