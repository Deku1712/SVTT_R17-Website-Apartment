import React, { useState } from 'react'
import Post from '../../Component/Post/Post'
import Filter from '../../Component/Filter/Filter'
import CreatePost from '../../Component/Modal/CreatePost'
import CategoryFilter from '../../Component/Category/CategoryFilter'
import Card from '../../Component/Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPostData } from '../../redux/action/actionPost'
import { fetchUserData } from '../../redux/action/actionUser'


export default function HomePage() {

    const dispatch = useDispatch();
    
    const posts_store = useSelector((state) => state.postReducer);
    const posts = posts_store.posts;

    
    


    return (

        <div className="bg-white pt-3">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {posts.map((post) => (
                        <Card post ={post}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
