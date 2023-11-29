import React from 'react'
import Comment from './Comment'


export default function Comments(props) {
    const comments = props.comments;
    console.log(comments)
  return (
      <div className=' mt-4 border-t-2 pt-4  w-full h-[500px] relative'>
        {comments.length != 0 &&  <div className=' h-full border rounded-xl absolute start-[50%] hidden lg:block  '></div> }
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">

            { comments && comments.filter(comment => comment.reply_level == 1)
            .map(comment => (<Comment comment ={comment}/>))
            
            }
            
            
        </div>
    </div>
  )
}
