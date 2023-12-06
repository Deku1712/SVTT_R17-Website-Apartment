
import { useState } from 'react';
import { postLogin } from '../../Service/LoginService';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [userLogin, setUserLogin] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate();

    const onSubmitLogin = async () => {
        if (userLogin.username !== '' && userLogin.password !== '') {
            let res = await postLogin(userLogin);
            console.log(res.data);
            // navigate("/")
        }
        console.log(userLogin)
    };


    // onSubmitRegister = (e) => {
    //     // this.state.onRegister(e, this.state.firstName, this.state.lastName, this.state.login, this.state.password);
    // };

    return (<>
        <div className='container'>
            <div className="login-container col-6">
                <div className="title">Login</div>
                <div className="text">Email or username</div>
                <input type="text" className="form-control" placeholder="Enter your username"
                    value={userLogin.username}
                    onChange={(e) => setUserLogin({ ...userLogin, username: e.target.value })}
                /><br />
                <input type="text" className="form-control" placeholder="Enter your password"
                    value={userLogin.password}
                    onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
                /><br />
                <button onClick={onSubmitLogin}>Login</button>
                <div>Go back</div>
            </div>
        </div>
    </>)
}

export default Login;