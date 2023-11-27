import axios from "axios"


const POST_BASE_URL = "http://localhost:8080/TamOJT/api/posts"


class Manage{
    getPosts(){
        return axios.get(POST_BASE_URL);
    }
    getPostById(id){
        return axios.get(POST_BASE_URL+"/" + id)
    }
    

}
export default new Manage();