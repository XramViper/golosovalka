"use client"

import { UpvoteButton } from "@/entities/post/ui/upvote-button";
import { AddCommentForm, SignInModal } from "@/features";
import { CommentsList } from "@/features/comments-list";

const examplePost = {
  id: "1",
  publicId: "1",
  name: "Запрос на новую функциональность",
  description: "Описание функциональности",
  comments: [],
  status: "DONE",
  upvotes: 10,
  isUpvoted: true,
};

export default function Page({}: { params: { postName: string } }) {
  const post = examplePost;

  return (
    <main className="min-h-screen max-w-5xl mx-auto max-lg:px-4 py-12 pb-24 bg-base-200 flex flex-col md:flex-row gap-16 items-start">
      <div className="md:max-w-xl w-full md:sticky md:top-6 flex gap-6 items-start">
        <UpvoteButton
          isUpvoted={post.isUpvoted}
          count={post.upvotes}
          postId={post.id}
        />
        <section>
          <h1 className="text-xl font-bold mb-3">What should be create</h1>
          <div className="leading-relaxed text-base-content/80 mb-5 whitespace-pre-wrap"></div>
          <div className="flex items-center gap-2  text-base-content/80 text-sm">
            <div className="flex items-center gap-2">
              <div>Даниил</div>
            </div>
            •<div>Sep 4, 2024</div>•
            <button className="link hover:text-base-content">Delete</button>
          </div>
        </section>
      </div>
      <div className="w-full space-y-8">
        <AddCommentForm />
        <CommentsList />
      </div>
      <SignInModal />
    </main>
  );
}
