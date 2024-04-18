import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import React from "react";

import styles from "./root.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Root() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />
        <title>Williams Number</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h3>
          Sadly, we're being hugged to death and hitting{" "}
          <a href="https://www.sports-reference.com/bot-traffic.html">
            BasketballReference's very low bot limit
          </a>
          . I'll try to work around this, so the people can know the truth!{" "}
        </h3>
        <Outlet />
        <Scripts />
        <footer>
          All data provided by{" "}
          <a href="https://www.basketball-reference.com/">
            BasketballReference.com
          </a>
        </footer>
      </body>
    </html>
  );
}
