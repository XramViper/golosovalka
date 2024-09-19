import { switchClientServerMethod } from "@/shared/server/helpers/switchClientServerMethod";
import { actionApi } from "./action.api";
import { actionServer } from "./action.server";

export const deleteBoardById = switchClientServerMethod(actionApi, actionServer);
