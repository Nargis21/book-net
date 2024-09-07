import React from 'react';
import PostCard from '@/components/ui/PostCard';
import { TPost } from '@/types';

const BlogsPage = async () => {
    const res = await fetch('http://localhost:5000/posts', {
        cache: "no-store"
    })
    const posts = await res.json()
    return (
        <div className='my-10 w-[90%] mx-auto'>
            <h1 className='text-4xl text-center'>All <span className='text-fuchsia-800'>Posts</span></h1>
            <p className='text-gray-400 text-center italic w-2/4 mx-auto mt-2'>Discover, review, and rate your favorite books. Join a community of book lovers and share your reading experiences.</p>
            <div className='grid grid-cols-3 my-12 gap-8'>
                {
                    posts.map((post: TPost) => <PostCard key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default BlogsPage;