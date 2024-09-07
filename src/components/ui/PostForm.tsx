"use client";

import { createPost } from "@/actions/createPost";
import { useForm } from "react-hook-form";

type FormValues = {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
};

const CreatePostForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        const res = await fetch('http://localhost:5000/posts', {
            cache: "no-store"
        });
        const posts = await res.json();
        data.id = JSON.stringify(posts.length + 1);  // Generate a new ID based on the current number of posts

        try {
            const res = await createPost(data);
            reset();
        } catch (err: any) {
            throw new Error(err);
        }
    };

    return (

        <div className=" shadow-xl bg-base-100 w-[80%] my-12">
            <h1 className="text-center text-4xl">
                Add Your <span className="text-fuchsia-900">Book Review</span>
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="p-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Book Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("name")}
                        placeholder="Book Name"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        {...register("description")}
                        placeholder="Description"
                        className="textarea textarea-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input
                        type="text"
                        {...register("category")}
                        placeholder="Fantasy, Fiction, etc."
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="url"
                        {...register("image")}
                        placeholder="Image URL"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-accent btn-outline">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePostForm;
