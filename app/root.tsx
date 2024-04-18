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
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Williams Number</title>
        <Meta />
        <Links />
      </head>
      <body>
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
