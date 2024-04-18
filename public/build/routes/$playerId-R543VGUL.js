import {
  useLoaderData
} from "/build/_shared/chunk-UF7ZFYU2.js";
import "/build/_shared/chunk-TDW3H5SW.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// empty-module:../services/basketball-reference.server
var require_basketball_reference = __commonJS({
  "empty-module:../services/basketball-reference.server"(exports, module) {
    module.exports = {};
  }
});

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
  import.meta.hot.lastModified = "1713406919375.7021";
}
function Player() {
  _s();
  const {
    williams
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { children: williams.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: x }, void 0, false, {
    fileName: "app/routes/$playerId.tsx",
    lineNumber: 42,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/routes/$playerId.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(Player, "yo3CalB6tnLJc9VXTJikf92BwbY=", false, function() {
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
//# sourceMappingURL=/build/routes/$playerId-R543VGUL.js.map
