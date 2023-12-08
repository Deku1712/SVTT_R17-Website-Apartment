import React from 'react'

export default function PostDetail() {
    return (
        <div className=' bg-white'>

            <div className='pt-2 '>
                <h3 className='mx-auto  max-w-2xl sm:px-6  lg:max-w-7xl lg:px-8 text-start'>Cho thue phong tro gia re</h3>

                {/* img */}
                <div className="mx-auto mt-4 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-4 lg:px-8 rounded overflow-hidden">
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src="https://th.bing.com/th/id/R.4767ebb8ecef372ffac44a880c04ee82?rik=t78C9Yxxsv9n5Q&pid=ImgRaw&r=0"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src="https://th.bing.com/th/id/R.4767ebb8ecef372ffac44a880c04ee82?rik=t78C9Yxxsv9n5Q&pid=ImgRaw&r=0"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src="https://th.bing.com/th/id/R.4767ebb8ecef372ffac44a880c04ee82?rik=t78C9Yxxsv9n5Q&pid=ImgRaw&r=0"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src="https://th.bing.com/th/id/R.4767ebb8ecef372ffac44a880c04ee82?rik=t78C9Yxxsv9n5Q&pid=ImgRaw&r=0"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src="https://th.bing.com/th/id/R.4767ebb8ecef372ffac44a880c04ee82?rik=t78C9Yxxsv9n5Q&pid=ImgRaw&r=0"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>


                <div className='bodyPost relative '>
                    <div className='flex  flex-col lg:flex-row'>

                        <div className="mx-auto mt-6 max-w-2xl sm:px-6  lg:max-w-7xl lg:px-8">
                            <div>
                                <div className=' text-3xl font-bold text-gray-900 mx-auto text-start'>Student Home</div>
                                <div className=' text-xl  text-gray-900 mx-auto text-start'>

                                    <div >Size : 42 phòng </div>
                                    <div  >
                                        <i class="fa-solid fa-location-dot"></i>
                                        <span>
                                            Address: 42 Khasi dong 4.
                                        </span>
                                    </div>
                                    <div >
                                        <i class="fa-regular fa-clock"></i>
                                        <span>
                                            Đăng Hôm qua
                                        </span>
                                    </div>
                                </div>

                            </div>

                            <div className=' p-2 mt-2 border rounded text-xl  text-gray-900 mx-auto text-start'>
                                <p className=' font-semibold'>Đặc Điểm Căn Hộ</p>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        lkasjdflk
                                    </div>
                                    <div className='col-sm-6'>
                                        lkasjdflk
                                    </div><div className='col-sm-6'>
                                        lkasjdflk
                                    </div><div className='col-sm-6'>
                                        lkasjdflk
                                    </div>
                                </div>

                            </div>

                            <div className=' p-2 mt-2 border rounded text-xl  text-gray-900 mx-auto text-start'>
                                <p className=' font-semibold'>Description</p>
                                <div>
                                    <p>
                                        There is a place filled with sunshine & sea breeze near My Khe beach called Astro House, where you can catch the vibe of Santorini in Danang. Nested on 2nd floor, city views appear through the big windows.
                                    </p>
                                </div>

                            </div>


                        </div>

                        <div className="mx-auto mt-6 max-w-2xl sm:px-6  lg:max-w-7xl lg:px-8">
                            <div className="border rounded p-2 shadow">
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
                </div>



            </div>


        </div>
    )
}
