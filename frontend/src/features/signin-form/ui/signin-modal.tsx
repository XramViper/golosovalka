"use client";

import { SignInForm } from "./signin-form";

export function SignInModal() {
  return (
    <dialog id="signin_modal" className="modal">
      <div className="modal-box text-center max-w-100 p-0">
        <SignInForm redirect={false} />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
