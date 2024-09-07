import PostDetails from '@/components/ui/PostDetails';
import { TPost } from '@/types';
import React from 'react';

type TPostId = {
    postId: string
}

export const generateStaticParams = async () => {
    const res = await fetch('http://localhost:5000/posts')
    const posts = await res.json()
    return posts.slice(0, 3).map((post: TPost) => ({
        blogId: post.id
    }))
}
const PostDetailsPage = async ({ params }: { params: TPostId }) => {

    const res = await fetch(`http://localhost:5000/posts/${params.postId}`)
    const post = await res.json()

    const result = await fetch(`http://localhost:5000/comments?postId=${params.postId}`)
    const comments = await result.json()

    return (
        <div className='p-12'>
            <PostDetails post={post} comments={comments} />
        </div>
    );
};

export default PostDetailsPage;