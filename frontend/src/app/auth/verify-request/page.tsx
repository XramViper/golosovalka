"use client";

import { Logo } from "@/shared";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/auth/signin");
  };

  return (
    <div
      data-theme="dark"
      className="bg-base-300 flex items-center justify-center h-screen w-screen"
    >
      <div className="card bg-base-100 w-96 shadow-2xl shadow-slate-900">
        <div className="card-body">
          <div className="flex flex-col items-center gap-8">
            <Logo />
            <h1 className="text-center text-2xl leading-relaxed">
              Письма для входа отправлено на почту
            </h1>
            <p className="text-center text-lg opacity-50 leading-relaxed">
              Ссылка для входа была отправлена на указанный Email
            </p>
            <button
              className="btn btn-md btn-ghost hover:bg-base-200"
              onClick={handleBack}
            >
              На страницу входа
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
