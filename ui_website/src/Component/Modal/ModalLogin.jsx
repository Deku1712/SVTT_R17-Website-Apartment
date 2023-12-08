import { useState } from "react";
import { postLogin, setAuthToken } from "../../Service/LoginService";
import "../../styles/modalLogin.css";
import Modal from "react-bootstrap/Modal";

function ModalLogin(props) {
  const { show, handleClose, setOnLogin } = props;

  const [userLogin, setUserLogin] = useState({
    username: '',
    password: ''
  })

  const onSubmitLogin = async () => {
    if (userLogin.username !== '' && userLogin.password !== '') {
      let res = await postLogin(userLogin);
      if (res.status === 200) {
        const accessToken = res.data.access_token;
        setAuthToken(accessToken)
        console.log(accessToken)
        setOnLogin(true);
        handleClose();
      }

      console.log(res);
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
            Login
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="bg-white px-8">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-3">
                User Name
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="text"
                placeholder="Input Your UserName"
                value={userLogin.username}
                onChange={(e) => setUserLogin({ ...userLogin, username: e.target.value })}
              />
              <p className="text-red-500 text-xs italic hidden">
                Please choose a password.
              </p>

              <label className="block text-gray-700 text-sm font-bold mb-2 mt-3">
                Password
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="password"
                placeholder="Input Your Password"
                value={userLogin.password}
                onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
              />
              <p className="text-red-500 text-xs italic hidden">
                Please choose a password.
              </p>
              <button
                className="rounded bg-gray-500 w-100 mt-14 p-2 text-white hover:bg-gray-400"
                onClick={onSubmitLogin}
              >
                Continue
              </button>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
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

export default ModalLogin;
