import { Module } from "@ama/types";
import { encodeBase64Authorization } from "~/utils/encode";

export function getClientCredentials(
  clientId: string,
  clientSecret: string
): Module {
  return {
    method: "post",
    url: "/api/token",
    data: {
      grant_type: "client_credentials",
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: encodeBase64Authorization(clientId, clientSecret),
    },
  };
}
