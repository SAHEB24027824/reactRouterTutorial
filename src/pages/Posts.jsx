import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const posts = [
    {
        id: 1,
        title: 'Title 1'
    },
    {
        id: 2,
        title: 'Title 2'
    },
    {
        id: 3,
        title: 'Title 3'
    },
    {
        id: 4,
        title: 'Title 4'
    },
]

export default function Posts() {

    return (
        <>
            <div className='p-10 flex gap-5'>
                {
                    posts.map(post => {
                        return (
                            <div key={post.id} className='text-blue-500'>
                                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            </div>
                        )
                    })
                }
                <br />

            </div>
            <div className='p-10'>
                <Outlet/>
            </div>
        </>
    )
}
