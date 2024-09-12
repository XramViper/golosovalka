import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Header } from "../ui/header";

import { prefetchUserInfo } from "@/entities/user/actions";

export async function HydratedHeader() {
  const queryClient = new QueryClient();

  await prefetchUserInfo(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
    </HydrationBoundary>
  );
}
