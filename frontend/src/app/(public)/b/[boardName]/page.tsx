import { Post } from "@/entities";
import { AddPostForm, PostList } from "@/features";
import React from "react";

const examplePosts: Post[] = [
  {
    id: "1",
    publicId: "1",
    name: "Запрос на новую функциональность",
    description: "Описание функциональности",
    comments: [],
    status: "DONE",
    upvotes: 10,
    isUpvoted: false,
  },
  {
    id: "2",
    publicId: "2",
    name: "Отчет об ошибке",
    description: "Описание ошибки",
    comments: [],
    status: "IN_PROGRESS",
    upvotes: 5,
    isUpvoted: true,
  },
  {
    id: "3",
    publicId: "3",
    name: "Предложение по улучшению",
    description: "Описание улучшения",
    comments: [],
    status: "NEW",
    upvotes: 2,
    isUpvoted: false,
  },
];

// Page component
export default function Page({
  params: { boardName },
}: {
  params: { boardName: string };
}) {
  return (
    <main className="min-h-screen max-w-5xl mx-auto max-lg:px-4 py-12 pb-24 bg-base-200 flex flex-col md:flex-row gap-12 items-start">
      <div className="md:max-w-sm w-full md:sticky md:top-6">
        <AddPostForm />
        <div className="mt-3 text-sm text-base-content/80 text-center font-semibold">
          Создано{" "}
          <a
            className="link text-base-content"
            href={`https://insigh.to/?ref=board_{66d7613b642aa95ea1433a61}`}
          >
            Голосовалкой
          </a>
        </div>
      </div>
      <div className="space-y-6 w-full">
        <PostList posts={examplePosts} />
      </div>
      <dialog id="signin_modal" className="modal">
        {/* Sign up modal content */}
      </dialog>
    </main>
  );
}
