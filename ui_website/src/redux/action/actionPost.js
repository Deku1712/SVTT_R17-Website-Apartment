import Service from "../../Service/Service";
import { FAILD, FETCH_POSTS_DATA, FETCH_USER_DATA, FETCH_USER_FAILD, FETCH_USER_SUCCESS, SUCCESS } from "./actionTypes"

export const fetchPostData = () => {
    return async (dispatch) => {
        dispatch({type: FETCH_POSTS_DATA});

        try {
            const res_posts = await Service.getPosts();
            
            dispatch({
                type: SUCCESS,
                payload: {
                    posts_data : res_posts.data
                }
            })
        } catch (error) {
            dispatch({
                type : FAILD,
                payload: error,
            })
            
        }
    }
}

