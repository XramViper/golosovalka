import { Board } from "@/entities";
import { AddBoardForm, BoardList } from "@/features";
import React from "react";

const boards: Board[] = [
  { id: "1", name: "Board 1", description: "Description 1" },
  { id: "2", name: "Board 2", description: "Description 2" },
  { id: "3", name: "Board 3", description: "Description 3" },
];

export default function Page() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto max-lg:px-8 py-12 pb-24 bg-base-200">
      <section className="grid grid-cols-6 gap-12">
        <AddBoardForm />
        <BoardList boards={boards} />
      </section>
    </main>
  );
}
