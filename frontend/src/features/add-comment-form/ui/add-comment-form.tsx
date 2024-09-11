export function AddCommentForm() {
  return (
    <section>
      <form className="space-y-4 w-full  duration-200">
        <div className="form-control w-full">
          <textarea
            required
            autoComplete="off"
            placeholder="Leave a comment"
            className="textarea border-base-content/10 w-full placeholder:opacity-60 font-medium h-12"
            style={{ height: 48 }}
          ></textarea>
        </div>
      </form>
    </section>
  );
}
