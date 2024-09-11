export const PostStatuses = {
  NEW: "new",
  IN_PROGRESS: "in-progress",
  DONE: "done",
  CANCELLED: "canceled",
};

export interface Post {
  id: string;
  publicId: string;
  name: string;
  description: string;
  comments: string[];
  status: keyof typeof PostStatuses;
  upvotes: number;
  isUpvoted: boolean;
}
