import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Header } from "../ui/header";
import { prefetchUserInfoQuery } from "@/entities/user/api";

export async function HydratedHeader() {
  const queryClient = new QueryClient();

  await prefetchUserInfoQuery(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
    </HydrationBoundary>
  );
}
