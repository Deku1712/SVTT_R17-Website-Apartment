import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import LayoutImg from "../Modal/LayoutImg";
import Comments from "../Comment/Comments";

export const CardDetail = () => {
    const { id } = useParams();
    const posts_store = useSelector(state => state.postReducer);
    const posts = posts_store.posts;
    const [post, setPost] = useState();

    const [show, setShow] = useState(false)


    useEffect(() => {
        const selectedPost = posts.find((p) => p.id == id);
        if (selectedPost) {
            setPost(selectedPost);
            // console.log(selectedPost)
        }
        else {
            console.log("no nononononoonn")
        }
    }, [posts_store]);





    return (
        <div className=' bg-white'>
            {post &&
                <div className='pt-2 '>
                    <LayoutImg show={show} setShow={setShow} imgs={post.imgs} />
                    <h4 className='mx-auto  max-w-2xl sm:px-6  lg:max-w-7xl lg:px-8 text-start'>{post.title}</h4>

                    {/* img */}
                    <div className="mx-auto mt-4 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl  lg:grid-cols-3 lg:gap-x-4 lg:px-8 rounded overflow-hidden relative">
                        <div className=" border-black border-1 rounded-lg bg-white p-1 text-lg cursor-pointer absolute bottom-3 end-12 " onClick={() => setShow(true)} >
                            <i class="fa-solid fa-list mr-2"></i> Xem tất cả ảnh.
                        </div>
                        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                            <img
                                src={post.imgs[0].url_img}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img
                                    src={post.imgs[1].url_img}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img
                                    src={post.imgs[2].url_img}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img
                                    src={post.imgs[3].url_img}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img
                                    src={post.imgs[4].url_img}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>


                    <div className='bodyPost relative '>
                        <div className='flex  flex-col lg:flex-row'>

                            <div className="mx-auto mt-6 w-full sm:px-6  lg:w-8/12 lg:px-8">
                                <div className="">
                                    <div className=' text-3xl font-bold text-gray-900 mx-auto text-start mb-2'>Student Home</div>
                                    <div className=' text-xl  text-gray-900 mx-auto text-start'>

                                        <div className=" font-extralight mb-1" >Size : {post.size} </div>
                                        <div className=" font-extralight mb-1"  >
                                            <i class="fa-solid fa-location-dot mr-2"></i>
                                            <span>
                                                {post.address}
                                            </span>
                                        </div>
                                        <div className=" font-extralight mb-1 " >
                                            <i class="fa-regular fa-clock mr-2"></i>
                                            <span>
                                                {post.createTime}
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                <div className=' p-2 mt-2 border rounded text-xl  text-gray-900 mx-auto text-start'>
                                    <p className=' font-semibold'>Đặc Điểm Căn Hộ</p>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className='col-span-1'>
                                            Diện Tích : {post.area}
                                        </div>
                                        <div className='col-span-1'>
                                            lkasjdflk
                                        </div>
                                        <div className='col-span-1'>
                                            lkasjdflk
                                        </div>
                                        <div className='col-span-1'>
                                            lkasjdflk
                                        </div>
                                    </div>


                                </div>

                                <div className=' p-2 mt-2 border rounded text-xl  text-gray-900 mx-auto text-start'>
                                    <p className=' font-semibold'>Mô tả chi tiết</p>
                                    <div>
                                        <p>
                                            {post.description}
                                        </p>
                                    </div>

                                </div>


                            </div>

                            <div className="mx-auto mt-6 w-full  sm:px-6  lg:w-3/12   lg:px-8">
                                <div className="border rounded p-2 shadow w-full">
                                    <div className='flex items-center  '>
                                        <div className='w-2/12 rounded-full '>
                                            <img className=' w-full h-full object-cover  rounded-full ' src="https://th.bing.com/th/id/OIP.5TlT4Tgv6oqPOz9SSumULAHaHa?rs=1&pid=ImgDetMain" alt="" />
                                        </div>
                                        <div className=' flex flex-col'>
                                            <p className=' text-start font-semibold ml-2 my-0'>Tran viet ngoc Tam
                                            </p>
                                            <p>
                                                Chủ sở hữu
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col' >
                                        <button className='btn btn-success m-2'>
                                            0944549140
                                        </button>
                                        <button className='btn btn-info m-2'>
                                            Chat với người bán
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <Comments comments={post.comments} />
                    </div>



                </div>
            }


        </div>
    )
}
