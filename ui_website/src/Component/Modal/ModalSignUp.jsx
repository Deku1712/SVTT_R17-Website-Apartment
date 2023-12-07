import { useState } from "react";
import { postLogin, postRegister } from "../../Service/LoginService";
import "../../styles/modalLogin.css";
import Modal from "react-bootstrap/Modal";

function ModalSignUp(props) {
  const { show, handleClose, setShowModalLogin } = props;

  const [userRegister, setUserRegister] = useState({
    username: '',
    password: '',
    fullname: '',
    repass: '',
    role: true
  })

  // console.log(userRegister)

  const onSubmitRegister = async () => {
    console.log("vl >> " + userRegister)
    if (userRegister.username !== '' && userRegister.password !== '' && userRegister.fullname !== '' && userRegister.repass !== '') {
      if (userRegister.password === userRegister.repass) {
        let res = await postRegister(userRegister);
        handleClose();
        setShowModalLogin(true);
        console.log(res);
      }
    }
    // console.log(userLogin)
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="w-[100%] flex justify-center items-center">
            Sign Up
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="bg-white px-8">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-3">
                Full Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="text"
                placeholder="Input Your UserName"
                value={userRegister.fullname}
                onChange={(e) => setUserRegister({ ...userRegister, fullname: e.target.value })}
              />
              {/* User Name */}
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-3">
                User Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="text"
                placeholder="Input Your UserName"
                value={userRegister.username}
                onChange={(e) => setUserRegister({ ...userRegister, username: e.target.value })}
              />
              <p className="text-red-500 text-xs italic hidden">
                Please choose a password.
              </p>
              {/* Role */}
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-3">
                Select Role
              </label>
              <select
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-400 text-sm  rounded-lg  block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black "
                onChange={(e) => setUserRegister({ ...userRegister, role: e.target.value })}
                defaultValue={true}
              >
                <option value={true}>User (Find House)</option>
                <option value={false}>Owner (Owner House)</option>
              </select>

              <p className="text-red-500 text-xs italic hidden">
                Please input a password.
              </p>
              {/* Password */}
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-3">
                Password
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="password"
                placeholder="Input Your Password"
                value={userRegister.password}
                onChange={(e) => setUserRegister({ ...userRegister, password: e.target.value })}
              />
              <p className="text-red-500 text-xs italic hidden">
                Please choose a password.
              </p>
              {/* Re-enter Password */}
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-3">
                Re-enter Password
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="password"
                placeholder="Re-enter Your Password"
                value={userRegister.repass}
                onChange={(e) => setUserRegister({ ...userRegister, repass: e.target.value })}
              />
              <p className="text-red-500 text-xs italic hidden">
                Please input a password.
              </p>
              <button
                className="rounded bg-gray-500 w-100 mt-14 p-2 text-white hover:bg-gray-400"
                onClick={onSubmitRegister}
              >
                Continue
              </button>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          {/* <a className="custom-footer-modal"> */}
          <a className="custom-footer-modal">
            <i className="fa-brands fa-facebook text-2xl text-blue-600"></i>
            <div className="text-black">Continue With Facebook</div>
            <div></div>
          </a>
          <a className="custom-footer-modal">
            <i className="fa-brands fa-google text-2xl text-red-600"></i>
            <div className="text-black">Continue With Google</div>
            <div></div>
          </a>
          <a className="custom-footer-modal">
            <i className="fa-solid fa-envelope text-2xl"></i>
            <div className="text-black">Continue With Email</div>
            <div></div>
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalSignUp;
