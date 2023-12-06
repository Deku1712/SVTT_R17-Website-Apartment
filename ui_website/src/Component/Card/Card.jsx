import React from 'react'
import { Carousel } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';



export default function Card(props) {
    const post = props.post;
    const navigate = useNavigate();

    const viewDetail = () => {
        navigate(`/posts/${post.id}`)
    }


    return (

        <div
            key={post.id}
            className="p-2  rounded-2xl group  transform  ease-in-out duration-200 hover:shadow-2xl"

        >
            <Carousel
                
                interval={null}
                slide={true}
                className="group-hover:translate-y-[-5px] overflow-hidden rounded-[15px] transform transition-transform ease duration-200"
                
            >
                {post.imgs.map((onlyimg, index) => (
                    <Carousel.Item key={index}>
                        <div className="w-full h-[284px]">
                            <img
                                className="w-full h-full object-cover"
                                src={onlyimg.url_img}

                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className=' cursor-pointer' onClick={viewDetail}>
                <div className="py-2 flex justify-between text-gray-700  " >
                    <div className="font-bold">{post.title}</div>
                    <div className="flex items-center space-x-1">
                        <span className="pr-1">
                            <i className="fa fa-star" aria-hidden="true"></i>
                        </span>
                        {/* Đánh giá */}
                        <div className="num-rating">5</div>
                    </div>
                </div>
                {/* Mô tả khách sạn */}
                <h3 className="text-sm text-gray-700">{post.area}</h3>
                <div>
                    <p className="flex text-lg font-medium text-gray-900">{post.price}</p>
                </div>
            </div>
        </div>



    )
}
