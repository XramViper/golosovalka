// For API route in app/route
export { getBoardsList } from "./action";

// For other mutations and queries
export { getBoardsListQueryKey } from "./query/key";

// For Server side prefetching
export { prefetchBoardsListQuery } from "./query/prefetchBoardsListQuery";

// For Client requests
export { useBoardsListQuery } from "./query/useBoardsListQuery";
