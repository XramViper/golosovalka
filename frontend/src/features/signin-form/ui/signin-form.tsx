"use client";

import { Logo } from "@/shared";
import { signIn, SignInOptions, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type Props = {
  redirect?: SignInOptions["redirect"];
};

export function SignInForm(props: Props) {
  const { redirect = true } = props;

  const [isSendEmail, setIsSendEmailValue] = useState(false);

  const setIsSendEmail = useCallback(
    (value: boolean) => {
      if (redirect === false) setIsSendEmailValue(value);
    },
    [redirect]
  );

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const { status: sessionStatus } = useSession();
  const isAuthorized = sessionStatus === "authenticated";

  useEffect(() => {
    if (callbackUrl && isAuthorized) {
      router.push(callbackUrl);
    }
  }, [isAuthorized, callbackUrl, router]);

  useEffect(() => {
    return () => {
      setIsSendEmail(false);
    };
  }, [setIsSendEmail]);

  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("email", { email, redirect })
      .then(() => {
        setIsSendEmail(true);
      })
      .catch(() => {
        setIsSendEmail(false);
      });
  };

  if (isSendEmail) {
    return (
      <div className="card-body">
        <div className="flex flex-col items-center gap-8">
          <Logo />
          <p className="text-2xl leading-10">
            Письмо с инструкциями по входу успешно отправлено на почту&nbsp;
            <span className="bg-neutral font-medium text-neutral-content px-1.5">
              {email}
            </span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card-body">
      <div className="flex flex-col items-center gap-8">
        <Logo />
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => signIn("google")}
              className="btn btn-lg text-white border-hidden hover:bg-red-600"
            >
              Google
            </button>
            <button
              onClick={() => signIn("vk")}
              className="btn btn-lg text-white hover:bg-blue-600"
            >
              VK
            </button>
            <button
              onClick={() => signIn("yandex")}
              className="btn btn-lg text-white hover:bg-yellow-600"
            >
              Yandex
            </button>
          </div>
          <div className="divider text-center">или</div>
          <form
            className="form-control flex flex-col gap-4"
            onSubmit={handleEmailSignIn}
          >
            <input
              autoComplete="email"
              type="email"
              placeholder="Email"
              className="input input-bordered input-lg"
              value={email}
              onChange={handleEmailChange}
            />
            <button type="submit" className="btn text-white btn-lg">
              Войти по Email
            </button>
          </form>
          <p className="text-base-content/75">
            В Голосовалке мы собираем обратную связь от&nbsp;
            <span className="bg-neutral font-medium text-neutral-content px-1.5">
              настоящих
            </span>
            &nbsp;пользователей. Войдите, чтобы создавать посты и голосовать.
          </p>
        </div>
      </div>
    </div>
  );
}
