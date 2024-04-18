var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 63,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 113,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => Root,
  links: () => links
});
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

// app/root.css
var root_default = "/build/_assets/root-J6XCAY3Q.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [{ rel: "stylesheet", href: root_default }];
function Root() {
  return /* @__PURE__ */ jsxDEV2("html", { children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("footer", { children: [
        "All data provided by",
        " ",
        /* @__PURE__ */ jsxDEV2("a", { href: "https://www.basketball-reference.com/", children: "BasketballReference.com" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/$playerId.tsx
var playerId_exports = {};
__export(playerId_exports, {
  default: () => Player,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

// app/services/basketball-reference.server.ts
import fetch from "node-fetch";
import * as cheerio from "cheerio";
async function getWilliams(playerId) {
  let body = await (await fetch(
    `https://www.basketball-reference.com/friv/teammates_and_opponents.fcgi?pid=${playerId}&type=t#teammates-and-opponents`
  )).text(), $ = cheerio.load(body), scrapedData = [];
  return $("#teammates-and-opponents > tbody > tr").each((_, element) => {
    let tds = $(element).find("td"), name = $(tds[0]).text();
    /williams/i.test(name) && scrapedData.push(name);
  }), scrapedData;
}
function parseId(url) {
  let regex = /\/players\/[a-z]\/([a-z]+[0-9]+)\.html/, match = url.match(regex);
  return match ? match[1] : "";
}
async function searchPlayers(search) {
  if (search === "")
    return [];
  let body = await (await fetch(
    `https://www.basketball-reference.com/search/search.fcgi?search=${search}`
  )).text(), $ = cheerio.load(body), scrapedData = [];
  return $("#players > div.search-item > div.search-item-name > a").each(
    (_, element) => {
      scrapedData.push({
        name: $(element).text(),
        id: parseId($(element).attr("href"))
      });
    }
  ), scrapedData;
}
async function getPlayer(id) {
  let body = await (await fetch(
    `https://www.basketball-reference.com/players/${id[0]}/${id}.html`
  )).text();
  return await cheerio.load(body)("h1 > span").text();
}

// app/routes/$playerId.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var loader = async ({ params, request }) => {
  let williams = await getWilliams(params.playerId || ""), name = await getPlayer(params.playerId || "");
  return json({ williams, name });
};
function Player() {
  let { williams, name } = useLoaderData();
  return /* @__PURE__ */ jsxDEV3("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV3("h1", { children: `${name} has played with ${williams.length} Williams` }, void 0, !1, {
      fileName: "app/routes/$playerId.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("ol", { children: williams.map((x) => /* @__PURE__ */ jsxDEV3("li", { children: x }, x, !1, {
      fileName: "app/routes/$playerId.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/$playerId.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(Link, { to: "/", children: "Check Another Player's Williams Number" }, void 0, !1, {
      fileName: "app/routes/$playerId.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$playerId.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader2
});
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { json as json2 } from "@remix-run/node";
import { Link as Link2, useFetcher } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var loader2 = async ({ params, request }) => {
  let url = new URL(request.url), search = new URLSearchParams(url.search), results = await searchPlayers(search.get("search") || "");
  return json2({ results });
};
function Index() {
  let fetcher = useFetcher(), [query, setQuery] = useState(""), debouncedQuery = useDebounce(query, 300);
  return useEffect(() => {
    debouncedQuery.length <= 2 || fetcher.submit({ search: debouncedQuery });
  }, [debouncedQuery]), /* @__PURE__ */ jsxDEV4("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV4("h1", { children: "How many Williams?" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4(fetcher.Form, { children: /* @__PURE__ */ jsxDEV4(
      "input",
      {
        type: "search",
        name: "search",
        placeholder: "Search NBA Player",
        value: query,
        onChange: (event) => setQuery(event.currentTarget.value)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 28,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("ul", { children: fetcher.data ? fetcher.data.results.map(({ name, id }) => /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4(Link2, { to: `/${id}`, children: name }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 40,
      columnNumber: 17
    }, this) }, id, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 39,
      columnNumber: 15
    }, this)) : null }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WFNIR5NE.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-AHZ4XQ6R.js", "/build/_shared/chunk-N2V7NJQ7.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NU7DQIW2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/$playerId": { id: "routes/$playerId", parentId: "root", path: ":playerId", index: void 0, caseSensitive: void 0, module: "/build/routes/$playerId-CYROIKRA.js", imports: ["/build/_shared/chunk-QQ7U4RXJ.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-4GP5RLAV.js", imports: ["/build/_shared/chunk-QQ7U4RXJ.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "1ffbf56e", hmr: { runtime: "/build/_shared/chunk-N2V7NJQ7.js", timestamp: 1713412300174 }, url: "/build/manifest-1FFBF56E.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$playerId": {
    id: "routes/$playerId",
    parentId: "root",
    path: ":playerId",
    index: void 0,
    caseSensitive: void 0,
    module: playerId_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
