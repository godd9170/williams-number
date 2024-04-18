//griffbl01
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import React from "react";
import {
  getPlayer,
  getWilliams,
} from "../services/basketball-reference.server";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const williams = await getWilliams(params.playerId || "");
  const name = await getPlayer(params.playerId || "");
  return json({ williams, name });
};

export default function Player() {
  const { williams, name } = useLoaderData<typeof loader>();
  return (
    <div className="container">
      <h1>{`${name} has played with ${williams.length} Williams`}</h1>
      <ol>
        {williams.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ol>
      <Link to="/">Check Another Player's Williams Number</Link>
    </div>
  );
}
