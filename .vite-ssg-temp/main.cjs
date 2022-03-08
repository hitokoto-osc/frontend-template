"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vueI18n = require("vue-i18n");
var NProgress = require("nprogress");
var pinia = require("pinia");
var viteSsg = require("vite-ssg");
var vue = require("vue");
var head = require("@vueuse/head");
var serverRenderer = require("vue/server-renderer");
var vueRouter = require("vue-router");
var workboxWindow = require("workbox-window");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var NProgress__default = /* @__PURE__ */ _interopDefaultLegacy(NProgress);
var en = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["About"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Back"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["GO"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Home"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Toggle dark mode"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Change languages"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Opinionated Vite Starter Template"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Demo of dynamic route"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Hi, ", _interpolate(_named("name")), "!"]);
    },
    "aka": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Also known as"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["What's your name?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Not found"]);
  }
};
var __glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": en
}, Symbol.toStringTag, { value: "Module" }));
var zhCN = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5173\u4E8E"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8FD4\u56DE"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u786E\u5B9A"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9996\u9875"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5207\u6362\u6DF1\u8272\u6A21\u5F0F"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5207\u6362\u8BED\u8A00"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u56FA\u6267\u5DF1\u89C1\u7684 Vite \u9879\u76EE\u6A21\u677F"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u52A8\u6001\u8DEF\u7531\u6F14\u793A"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u4F60\u597D\uFF0C", _interpolate(_named("name"))]);
    },
    "aka": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4E5F\u53EB"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8F93\u5165\u4F60\u7684\u540D\u5B57"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u672A\u627E\u5230\u9875\u9762"]);
  }
};
var __glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": zhCN
}, Symbol.toStringTag, { value: "Module" }));
const messages = Object.fromEntries(Object.entries({ "../../locales/en.yml": __glob_1_0, "../../locales/zh-CN.yml": __glob_1_1 }).map(([key, value]) => {
  const yaml = key.endsWith(".yaml");
  return [key.slice(14, yaml ? -5 : -4), value.default];
}));
const install$3 = ({ app }) => {
  const i18n = vueI18n.createI18n({
    legacy: false,
    locale: "zh-CN",
    messages
  });
  app.use(i18n);
};
var __glob_4_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$3
}, Symbol.toStringTag, { value: "Module" }));
const install$2 = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(() => {
      NProgress__default["default"].start();
    });
    router.afterEach(() => {
      NProgress__default["default"].done();
    });
  }
};
var __glob_4_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$2
}, Symbol.toStringTag, { value: "Module" }));
const install$1 = ({ isClient, initialState, app }) => {
  const pinia$1 = pinia.createPinia();
  app.use(pinia$1);
  if (isClient)
    pinia$1.state.value = initialState.pinia || {};
  else
    initialState.pinia = pinia$1.state.value;
};
var __glob_4_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$1
}, Symbol.toStringTag, { value: "Module" }));
const install = ({ isClient, router }) => {
  if (!isClient)
    return;
  router.isReady().then(async () => {
    const { registerSW: registerSW2 } = await Promise.resolve().then(function() {
      return virtual_pwaRegister;
    });
    registerSW2({ immediate: true });
  });
};
var __glob_4_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "@hitokoto/frontend-template",
      meta: [{ name: "description", content: "hitokoto used Template by itself" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = vue.resolveComponent("router-view");
      _push(serverRenderer.ssrRenderComponent(_component_router_view, _attrs, null, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var _imports_0 = "/favicon.svg";
const useUserStore = pinia.defineStore("user", () => {
  const savedName = vue.ref("");
  const previousNames = vue.ref(/* @__PURE__ */ new Set());
  const usedNames = vue.computed(() => Array.from(previousNames.value));
  const otherNames = vue.computed(() => usedNames.value.filter((name) => name !== savedName.value));
  function setNewName(name) {
    if (savedName.value)
      previousNames.value.add(savedName.value);
    savedName.value = name;
  }
  return {
    setNewName,
    otherNames,
    savedName
  };
});
var index_vue_vue_type_style_index_0_lang = "";
var block0$1 = {};
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const user = useUserStore();
    const name = vue.ref(user.savedName);
    vueRouter.useRouter();
    const { t } = vueI18n.useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><div class="logo"><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="logo"></div><p><a rel="noreferrer" href="https://github.com/hiokoto-osc" target="_blank"> @hitokoto-osc </a></p><p><em class="desc">${serverRenderer.ssrInterpolate(vue.unref(t)("intro.desc"))}</em></p><div py-4></div><input id="input"${serverRenderer.ssrRenderAttr("value", name.value)}${serverRenderer.ssrRenderAttr("placeholder", vue.unref(t)("intro.whats-your-name"))}${serverRenderer.ssrRenderAttr("aria-label", vue.unref(t)("intro.whats-your-name"))} type="text" autocomplete="false" p="x4 y2" w="250px" text="center" bg="transparent" border="~ rounded gray-200 dark:gray-700" outline="none active:none"><label class="hidden" for="input">${serverRenderer.ssrInterpolate(vue.unref(t)("intro.whats-your-name"))}</label><div><button btn m-3 text-sm${serverRenderer.ssrIncludeBooleanAttr(!name.value) ? " disabled" : ""}>${serverRenderer.ssrInterpolate(vue.unref(t)("button.go"))}</button></div></div>`);
    };
  }
});
if (typeof block0$1 === "function")
  block0$1(_sfc_main$6);
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/pages/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const routes = [{ "name": "README", "path": "/readme", "component": () => Promise.resolve().then(function() {
  return README;
}), "props": true }, { "name": "all", "path": "/:all(.*)*", "component": () => Promise.resolve().then(function() {
  return ____all_;
}), "props": true, "meta": { "layout": 404 } }, { "name": "about", "path": "/about", "component": () => Promise.resolve().then(function() {
  return about;
}), "props": true }, { "name": "index", "path": "/", "component": _sfc_main$6, "props": true, "meta": { "layout": "home" } }];
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    vueRouter.useRouter();
    const { t } = vueI18n.useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = vue.resolveComponent("router-view");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "not-found" }, _attrs))}><div class="full-height flex-center outer"><div class="flex-center position-ref"><div class="code">404</div><div class="message" style="${serverRenderer.ssrRenderStyle({ "padding": "10px" })}">`);
      _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`</div></div><div><button class="back-button">${serverRenderer.ssrInterpolate(vue.unref(t)("button.back"))}</button></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/layouts/404.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_router_view = vue.resolveComponent("router-view");
  const _component_Footer = vue.resolveComponent("Footer");
  _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "px-4 py-10 text-center text-gray-700 dark:text-gray-200" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<div class="mt-5 mx-auto text-center opacity-25 text-sm"> [Default Layout] </div></main>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/layouts/default.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var __layout_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = vue.resolveComponent("router-view");
  const _component_Footer = vue.resolveComponent("Footer");
  _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "px-4 py-10 text-center text-gray-700 dark:text-gray-200" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<div class="mt-5 mx-auto text-center opacity-25 text-sm">[Home Layout]</div></main>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/layouts/home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var __layout_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const layouts = {
  "404": _sfc_main$5,
  "default": __layout_1,
  "home": __layout_2
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: [__spreadProps(__spreadValues({}, route), { path: "" })]
    };
  });
}
function useRoutes() {
  return [...setupLayouts([...routes])];
}
var main = "";
const createApp = viteSsg.ViteSSG(_sfc_main$7, { routes: useRoutes(), base: "/" }, (ctx) => {
  Object.values({ "./modules/i18n.ts": __glob_4_0, "./modules/nprogress.ts": __glob_4_1, "./modules/pinia.ts": __glob_4_2, "./modules/pwa.ts": __glob_4_3 }).forEach((i) => {
    var _a;
    return (_a = i.install) == null ? void 0 : _a.call(i, ctx);
  });
});
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  let wb;
  const updateServiceWorker = async (reloadPage = true) => {
  };
  if ("serviceWorker" in navigator) {
    wb = new workboxWindow.Workbox("/sw.js", { scope: "/", type: "classic" });
    wb.addEventListener("activated", (event) => {
      if (event.isUpdate)
        window.location.reload();
      else
        onOfflineReady == null ? void 0 : onOfflineReady();
    });
    wb.register({ immediate }).then((r) => {
      onRegistered == null ? void 0 : onRegistered(r);
    }).catch((e) => {
      onRegisterError == null ? void 0 : onRegisterError(e);
    });
  }
  return updateServiceWorker;
}
var virtual_pwaRegister = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  registerSW
}, Symbol.toStringTag, { value: "Module" }));
const meta$1 = [];
const _sfc_main$2 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "prose prose-sm m-auto text-left" }, _attrs))}><h1>Pages</h1><p>\u672C\u76EE\u5F55\u4E0B\u7684\u9875\u9762\u6587\u4EF6\uFF0C\u53EF\u4EE5\u88AB\u8BBF\u95EE\u3002</p></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/pages/README.md");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var README = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  meta: meta$1,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
var block0 = {};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = vueI18n.useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>${serverRenderer.ssrInterpolate(vue.unref(t)("not-found"))}</div>`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/pages/[...all].vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ____all_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const title = "\u5173\u4E8E";
const meta = [{ "property": "og:title", "content": "\u5173\u4E8E" }];
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "\u5173\u4E8E", "meta": [{ "property": "og:title", "content": "\u5173\u4E8E" }] };
    expose({ frontmatter });
    const head$1 = { "title": "\u5173\u4E8E", "meta": [{ "property": "og:title", "content": "\u5173\u4E8E" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "prose prose-sm m-auto text-left" }, _attrs))}><div class="text-center"><div i-carbon-dicom-overlay class="text-4xl -mb-6 m-auto"></div><h3>\u5173\u4E8E</h3></div><p>\u4E00\u8A00\u7F51\uFF08hitokoto.cn\uFF09\u521B\u7ACB\u4E8E 2016 \u5E74\uFF0C\u96B6\u5C5E\u4E8E\u840C\u521B\u56E2\u961F\uFF0C\u76EE\u524D\u7F51\u7AD9\u4E3B\u8981\u63D0\u4F9B\u4E00\u53E5\u8BDD\u670D\u52A1\u3002</p><p>\u52A8\u6F2B\u4E5F\u597D\u3001\u5C0F\u8BF4\u4E5F\u597D\u3001\u7F51\u7EDC\u4E5F\u597D\uFF0C\u4E0D\u8BBA\u5728\u54EA\u91CC\uFF0C\u6211\u4EEC\u603B\u4F1A\u770B\u5230\u6709\u90A3\u4E48\u4E00\u4E24\u4E2A\u53E5\u5B50\u80FD\u7A7F\u900F\u4F60\u7684\u5FC3\u3002\u6211\u4EEC\u628A\u8FD9\u4E9B\u53E5\u5B50\u6C47\u805A\u8D77\u6765\uFF0C\u5F62\u6210\u4E00\u8A00\u7F51\u7EDC\uFF0C\u4EE5\u4F20\u9012\u66F4\u591A\u7684\u611F\u52A8\u3002\u5982\u679C\u53EF\u4EE5\uFF0C\u6211\u4EEC\u5E0C\u671B\u6211\u4EEC\u6CA1\u6709\u505C\u6B62\u670D\u52A1\u7684\u90A3\u4E00\u5929\u3002</p><p>\u7B80\u5355\u6765\u8BF4\uFF0C\u4E00\u8A00\u6307\u7684\u5C31\u662F\u4E00\u53E5\u8BDD\uFF0C\u53EF\u4EE5\u662F\u52A8\u6F2B\u4E2D\u7684\u53F0\u8BCD\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7F51\u7EDC\u4E0A\u7684\u5404\u79CD\u5C0F\u6BB5\u5B50\u3002 \u6216\u662F\u611F\u52A8\uFF0C\u6216\u662F\u5F00\u5FC3\uFF0C\u6709\u6216\u662F\u5355\u7EAF\u7684\u56DE\u5FC6\u3002\u6765\u5230\u8FD9\u91CC\uFF0C\u7559\u4E0B\u4F60\u6240\u559C\u6B22\u7684\u90A3\u4E00\u53E5\u53E5\u8BDD\uFF0C\u4E0E\u5927\u5BB6\u5206\u4EAB\uFF0C\u8FD9\u5C31\u662F\u4E00\u8A00\u5B58\u5728\u7684\u76EE\u7684\u3002</p><p>\u514D\u8D23\u58F0\u660E\uFF1A\u56E2\u961F\u6210\u5458\u5E76\u6CA1\u6709\u5728\u9177\u5B89\u4E0A\u63D0\u4EA4\u3001\u5F00\u53D1 App\u3002\u9177\u5B89\u4E0A\u5B58\u5728\u7684 hitokoto \u5F00\u53D1\u8005\u5F00\u53D1\u7684 App\uFF0C\u7CFB\u6B64\u524D\u7B2C\u4E09\u65B9\u5F00\u53D1\u8005\u4E0E\u6211\u4EEC\u5408\u4F5C\u5F00\u53D1\u7684\u3002\u76EE\u524D\u6B64\u5F00\u53D1\u8005\u4E0D\u518D\u7EF4\u62A4 App\uFF0C\u800C\u6211\u4EEC\u6CA1\u6709 App \u7684\u76F8\u5173\u5E95\u5C42\u6E90\u7801\u3001\u5F00\u53D1\u8005\u8D26\u6237\u7684\u6743\u9650\uFF0C\u56E0\u6B64\u4E0D\u80FD\u4FDD\u8BC1\u4F7F\u7528\u6B64 App \u662F\u5426\u5B89\u5168\u3002\u5982\u60A8\u7EE7\u7EED\u4F7F\u7528\u6B64 App\uFF0C\u6211\u4EEC\uFF08\u840C\u521B\u56E2\u961F\uFF09\u5C06\u4E0D\u4E3A\u60A8\u8D26\u6237\u53EF\u80FD\u5B58\u5728\u7684\u5B89\u5168\u98CE\u9669\u627F\u62C5\u8D23\u4EFB\u3002</p><pre class="language-js"><code class="language-js"><span class="token comment">// syntax highlighting example</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/pages/about.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var about = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title,
  meta,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
exports.createApp = createApp;
