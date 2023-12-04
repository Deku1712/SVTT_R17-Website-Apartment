import React, { useState } from 'react'
import Comments from './Comments'

export default function Comment(props) {
    const user = props.replyUser;
    const cmt = props.comment;
    
    const [showMore, setShowMore] = useState(false);

    return (

        <div className=' w-full bg-white rounded-2xl mb-2   '>
            <div className={cmt.reply_level == 2 ? "  ml-5" : ""}>
                <div className='top w-full  border-b-1 p-2 flex items-center '>
                    <img src="https://i.pinimg.com/originals/c8/bd/45/c8bd45cace908c61201a03c53aa502bd.jpg" alt="" className=' w-[50px] h-[50px] object-cover rounded-full mr-2' />
                    <div>
                        
                        {cmt.user.fullname}
                        {user && <>
                            <i class="fa-solid fa-caret-right mr-3 ml-3"></i>
                        {user}
                        
                        </>}
                        
                        <p>{cmt.createTime}</p>
                    </div>
                </div>
                <div className='body pl-2 '>
                    {cmt.comment}

                </div>
                <div className='bot p-2 flex justify-start  items-center mt-1 '>
                    <i class="fa-regular fa-heart text-xl mr-3 hover:text-pink-500 ">  </i>
                    <i class="fa-solid fa-reply text-xl mr-3"></i>
                    {cmt.cmtChild.length != 0 &&
                    <div className='p-0 m-0  font-semibold hover:text-purple-950 cursor-pointer  ' onClick={() => setShowMore(!showMore)}>{cmt.cmtChild && cmt.cmtChild.length } Show more</div>
                    }
                </div>


            {cmt.cmtChild && showMore == true && cmt.cmtChild.map(cmtchild => (<Comment comment={cmtchild} replyUser = {cmt.user.fullname} />))}
            </div>
        </div>
    )
}
