import { useEffect } from "react"
import { getProfile } from "../../Service/LoginService"
import { useState } from "react"

export const Profile = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        getProfile();
    }, [])

    const getProfile = async () => {
        let res = await getProfile()
        console.log(res);
        setUser(res.data);
    }

    return (<div>

        <p>hello</p>
    </div>)
}