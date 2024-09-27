import { AddBoardForm, BoardList } from "@/features";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 py-12 pb-24 bg-base-200">
      <section className="grid grid-cols-6 gap-12">
        <AddBoardForm />
        <BoardList />
      </section>
    </main>
  );
}
