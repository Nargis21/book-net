import { TComment, TPost } from '@/types';
import Image from 'next/image';
import React from 'react';

const PostDetails = ({ post, comments }: { post: TPost, comments: TComment[] }) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <Image
                    src={post.image}
                    alt="book image"
                    width={300}
                    height={300} />
            </figure>
            <div className="p-12">
                <div className='flex justify-between mb-4'>
                    <h2 className="card-title">{post.name}</h2>
                    <div className="badge p-4 bg-fuchsia-500">{post.category}</div>
                </div>
                <p>{post.description}</p>
                <div className='mt-4'>
                    <p className='font-bold'>Comments:</p>
                    {
                        comments.map(comment => (
                            <div key={comment.comment} className='flex items-center mt-4'>
                                <div className="avatar online">
                                    <div className="w-10 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <p className='ml-4' >{comment.comment}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default PostDetails;