"use client";

import { Post } from "@/entities";
import { BoardInfo, EditPostList } from "@/features";
import { DeleteButton } from "@/shared";

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

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen max-w-5xl mx-auto max-lg:px-8 py-12 pb-24 bg-base-200 flex flex-col md:flex-row gap-12">
      <section className="space-y-6 self-start md:sticky md:top-6">
        <h1 className="font-extrabold text-lg md:text-xl">Tribun — 4 поста</h1>

        <BoardInfo link="golosovalka.ru/b/tribun" />

        <DeleteButton
          onClick={function (): void {
            throw new Error("Delete board not implemented.");
          }}
        />
      </section>
      <EditPostList posts={examplePosts} />
    </main>
  );
}
