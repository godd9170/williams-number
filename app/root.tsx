import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import React from "react";

import styles from "./root.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Root() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
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
