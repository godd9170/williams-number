//griffbl01
import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { getWilliams } from "../services/basketball-reference.server";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const williams = await getWilliams(params.playerId || "");
  return json({ williams });
};

export default function Player() {
  const { williams } = useLoaderData<typeof loader>();
  return (
    <ol>
      {williams.map((x) => (
        <li>{x}</li>
      ))}
    </ol>
  );
}
