import { switchClientServerMethod } from "@/shared/server/helpers/switchClientServerMethod";
import { actionApi } from "./action.api";
import { actionServer } from "./action.server";

// UPDATE ONLY METHOD NAME
export const upvotePost = switchClientServerMethod(actionApi, actionServer);
