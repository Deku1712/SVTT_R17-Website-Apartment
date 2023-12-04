import "../../styles/modalLogin.css";
import Modal from "react-bootstrap/Modal";

function ModalSignUp(props) {
  const { show, handleClose } = props;
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
        <div class="bg-white px-8">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2 mt-3">
                User Name
              </label>
              <input
                class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="text"
                placeholder="Input Your UserName"
              />
              <p className="text-red-500 text-xs italic hidden">
                Please choose a password.
              </p>

              <label class="block text-gray-700 text-sm font-bold mb-2 mt-3">
                Password
              </label>
              <input
                class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="text"
                placeholder="Input Your Password"
              />
              <p className="text-red-500 text-xs italic hidden">
                Please choose a password.
              </p>

              <label class="block text-gray-700 text-sm font-bold mb-2 mt-3">
                Re-enter Password
              </label>
              <input
                class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="text"
                placeholder="Re-enter Your Password"
              />
              <p className="text-red-500 text-xs italic hidden">
                Please choose a password.
              </p>
              <button className="rounded bg-gray-500 w-100 mt-14 p-2 text-white hover:bg-gray-400">
                Continue
              </button>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          {/* <a className="custom-footer-modal"> */}
          <a className="custom-footer-modal">
            <div className="logo-login">
              <i className="fa-brands fa-facebook text-2xl text-blue-600"></i>
            </div>
            <div className="title-login text-black">Continue With Facebook</div>
            <div></div>
          </a>
          <a className="custom-footer-modal">
            <div className="logo-login text-2xl text-red-600">
              <i class="fa-brands fa-google"></i>
            </div>
            <div className="title-login text-black">Continue With Google</div>
            <div></div>
          </a>
          <a className="custom-footer-modal">
            <div className="logo-login text-2xl ">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="title-login text-black">Continue With Email</div>
            <div></div>
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalSignUp;
