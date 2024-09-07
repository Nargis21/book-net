"use server";

import { TPost } from "@/types";

export const createPost = async (data: TPost) => {
  const res = await fetch("http://localhost:5000/posts", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const postInfo = await res.json();
  return postInfo;
};
