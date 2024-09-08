"use server";

import Post from "./post";

type PostData = {
  title: string;
  description: string;
};

const addPost = async (data: PostData) => {
  const title = data.title;
  const description = data.description;

  const newPost = new Post({ title, description });
  return newPost.save();
};

export { addPost };
