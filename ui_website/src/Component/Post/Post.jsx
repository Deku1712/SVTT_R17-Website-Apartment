import React from 'react'
import './Post.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import PostModal from '../Modal/PostModal';

export default function Post(props) {
    const post = props.p;
    console.log(post)

    const [showPostModal, setShowPostModal] = useState(false);

    const navigate = useNavigate();

    const viewPost = (id) => {
        navigate(`/posts/${id}`)
    }
    return (
        <div className='postCard w-[750px] m-3 transition-all  p-1 rounded-lg bg-white border cursor-pointer'
           
        >
            <PostModal show = {showPostModal} setShow = {setShowPostModal}/>
            <div className=''>
                <div className='post_top flex bg-white rounded items-center justify-between '>
                    <div className='post_top_left  flex items-center p-2 '>
                        <img className='w-[50px] h-[50px] object-cover  rounded-full ' src="https://th.bing.com/th/id/OIP.5TlT4Tgv6oqPOz9SSumULAHaHa?rs=1&pid=ImgDetMain" alt="" />
                        <div className='text-sm font-semibold leading-6 text-gray-900 mx-2'>
                            Rapuzel
                        </div>
                    </div>

                    <div className='post_top_right flex items-center mx-3 '>
                        <i class="fa-solid fa-house"></i>
                        <div className='text-sm font-semibold leading-5 text-gray-900 mx-2'>
                            Post look
                        </div>
                    </div>
                </div>

                <div className='post_body'>
                    <div className=' text-base leading-5 text-gray-900 mx-2 my-2 text-start'>
                        {post.title}

                    </div>
                    <div className='h-[400px] my-3 '>
                        <img className='  w-full h-full object-fill' src={post.imgs[0].url_img} />
                    </div>

                </div>

                <div className='post_footer flex justify-center border-t-2 my-1 pt-2 '>
                    <div className='group_icon w-full flex justify-between items-center mx-2 '>
                        <i className="fa-regular fa-heart mx-2" style={{ fontSize: '24px' }}></i>
                        <i class="fa-regular fa-comment" style={{ fontSize: '24px' }} onClick={() => setShowPostModal(true) } ></i>
                        <i className="fa-regular fa-paper-plane mx-2" style={{ fontSize: '24px' }}></i>
                    </div>

                </div>
            </div>
        </div>
    )
}
