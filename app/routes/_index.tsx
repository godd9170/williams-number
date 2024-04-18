import React, { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { searchPlayers } from "../services/basketball-reference.server";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  const results = await searchPlayers(search.get("search") || "");
  return json({ results });
};

export default function Index() {
  let fetcher = useFetcher<typeof loader>();
  let [query, setQuery] = useState("");
  let debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery.length <= 2) return;
    fetcher.submit({ search: debouncedQuery });
  }, [debouncedQuery]);

  return (
    <div className="container">
      <h1>How many Williams?</h1>
      <fetcher.Form>
        <input
          type="search"
          name="search"
          placeholder="Search NBA Player"
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
        />
      </fetcher.Form>
      <ul>
        {!!fetcher.data
          ? fetcher.data.results.map(({ name, id }) => (
              <li key={id}>
                <Link to={`/${id}`}>{name}</Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
