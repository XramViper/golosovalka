import { switchClientServerMethod } from "@/shared/server/helpers/switchClientServerMethod";
import { actionApi } from "./action.api";
import { actionServer } from "./action.server";

export const getBoardInfoById = switchClientServerMethod(actionApi, actionServer);
