import {
  require_basketball_reference,
  require_node
} from "/build/_shared/chunk-QQ7U4RXJ.js";
import {
  Link,
  useFetcher
} from "/build/_shared/chunk-AHZ4XQ6R.js";
import {
  createHotContext
} from "/build/_shared/chunk-N2V7NJQ7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_react = __toESM(require_react(), 1);

// node_modules/@uidotdev/usehooks/index.js
var React = __toESM(require_react(), 1);
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);
var import_basketball_reference = __toESM(require_basketball_reference(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1713411352340.308";
}
function Index() {
  _s();
  let fetcher = useFetcher();
  let [query, setQuery] = (0, import_react.useState)("");
  let debouncedQuery = useDebounce(query, 300);
  (0, import_react.useEffect)(() => {
    if (debouncedQuery.length <= 2)
      return;
    fetcher.submit({
      search: debouncedQuery
    });
  }, [debouncedQuery]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "How many Williams?" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "search", name: "search", placeholder: "Search NBA Player", value: query, onChange: (event) => setQuery(event.currentTarget.value) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: !!fetcher.data ? fetcher.data.results.map(({
      name,
      id
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/${id}`, children: name }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 59,
      columnNumber: 17
    }, this) }, id, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)) : null }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(Index, "JybxHugfbRfuM1pVNBbWGbne3/U=", false, function() {
  return [useFetcher, useDebounce];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-4GP5RLAV.js.map
