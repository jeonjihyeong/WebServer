// Composables
import { createDefaults, DefaultsSymbol } from "./composables/defaults.mjs";
import { createDisplay, DisplaySymbol } from "./composables/display.mjs";
import { createIcons, IconSymbol } from "./composables/icons.mjs";
import { createLocale, LocaleAdapterSymbol } from "./composables/locale.mjs";
import { createTheme, ThemeSymbol } from "./composables/theme.mjs";
import { RtlSymbol } from "./composables/rtl.mjs"; // Utilities

import { defineComponent, getUid, IN_BROWSER, mergeDeep } from "./util/index.mjs";
import { reactive } from 'vue'; // Types

export * from "./composables/index.mjs";
export const createVuetify = function () {
  let vuetify = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  const install = app => {
    const {
      blueprint,
      ...rest
    } = vuetify;
    const options = mergeDeep(blueprint, rest);
    const {
      aliases = {},
      components = {},
      directives = {}
    } = options;

    for (const key in directives) {
      app.directive(key, directives[key]);
    }

    for (const key in components) {
      app.component(key, components[key]);
    }

    for (const key in aliases) {
      app.component(key, defineComponent({ ...aliases[key],
        name: key
      }));
    }

    function provideApp(isHydrate) {
      app.provide(DefaultsSymbol, createDefaults(options.defaults));
      app.provide(DisplaySymbol, createDisplay(options.display, isHydrate));
      app.provide(ThemeSymbol, createTheme(app, options.theme));
      app.provide(IconSymbol, createIcons(options.icons));
      app.provide(LocaleAdapterSymbol, createLocale(app, options.locale));
    }

    if (!IN_BROWSER) {
      provideApp();
    }

    getUid.reset();
    const mount = app.mount;

    app.mount = (rootContainer, isHydrate, isSVG) => {
      provideApp(isHydrate);
      const ret = mount(rootContainer, isHydrate, isSVG);
      app.mount = mount;
      return ret;
    }; // Vue's inject() can only be used in setup


    function inject(key) {
      var _vm$parent$provides, _vm$parent, _vm$vnode$appContext;

      const vm = this.$;
      const provides = (_vm$parent$provides = (_vm$parent = vm.parent) == null ? void 0 : _vm$parent.provides) != null ? _vm$parent$provides : (_vm$vnode$appContext = vm.vnode.appContext) == null ? void 0 : _vm$vnode$appContext.provides;

      if (provides && key in provides) {
        return provides[key];
      }
    }

    app.mixin({
      computed: {
        $vuetify() {
          return reactive({
            defaults: inject.call(this, DefaultsSymbol),
            display: inject.call(this, DisplaySymbol),
            theme: inject.call(this, ThemeSymbol),
            icons: inject.call(this, IconSymbol),
            locale: inject.call(this, LocaleAdapterSymbol),
            rtl: inject.call(this, RtlSymbol)
          });
        }

      }
    });
  };

  return {
    install
  };
};
//# sourceMappingURL=framework.mjs.map