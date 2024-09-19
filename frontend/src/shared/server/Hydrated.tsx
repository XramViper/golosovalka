import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

type Props = {
  prefetchTask: (queryClient: QueryClient) => Promise<void>;
};

export async function Hydrated(props: PropsWithChildren<Props>) {
  const { children, prefetchTask } = props;

  const queryClient = new QueryClient();

  await prefetchTask(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
