// For API route in app/route
export { getBoardInfoById } from "./action";

// For other mutations and queries
export { getBoardInfoByIdQueryKey } from "./query/key";

// For Server side prefetching
export { prefetchBoardsInfoByIdQuery } from "./query/prefetchBoardsInfoByIdQuery";

// For Client requests
export { useBoardByIdQuery } from "./query/useBoardByIdQuery";
