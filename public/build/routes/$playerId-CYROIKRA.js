import {
  require_basketball_reference,
  require_node
} from "/build/_shared/chunk-QQ7U4RXJ.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-AHZ4XQ6R.js";
import {
  createHotContext
} from "/build/_shared/chunk-N2V7NJQ7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/$playerId.tsx
var import_node = __toESM(require_node(), 1);
var import_basketball_reference = __toESM(require_basketball_reference(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/$playerId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$playerId.tsx"
  );
  import.meta.hot.lastModified = "1713411937375.886";
}
function Player() {
  _s();
  const {
    williams,
    name
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: `${name} has played with ${williams.length} Williams` }, void 0, false, {
      fileName: "app/routes/$playerId.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { children: williams.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: x }, x, false, {
      fileName: "app/routes/$playerId.tsx",
      lineNumber: 47,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/$playerId.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Check Another Player's Williams Number" }, void 0, false, {
      fileName: "app/routes/$playerId.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$playerId.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s(Player, "7JB7q/h8RDLcIVczNKBch0Ewgjg=", false, function() {
  return [useLoaderData];
});
_c = Player;
var _c;
$RefreshReg$(_c, "Player");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Player as default
};
//# sourceMappingURL=/build/routes/$playerId-CYROIKRA.js.map
