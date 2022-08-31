import { createVNode as _createVNode } from "vue";
// Components
import { VAvatar } from "../VAvatar/index.mjs";
import { VCardSubtitle } from "./VCardSubtitle.mjs";
import { VCardTitle } from "./VCardTitle.mjs";
import { VDefaultsProvider } from "../VDefaultsProvider/index.mjs"; // Composables

import { IconValue } from "../../composables/icons.mjs";
import { makeDensityProps } from "../../composables/density.mjs"; // Utility

import { defineComponent } from 'vue';
import { useRender } from "../../util/index.mjs";
export const VCardItem = defineComponent({
  name: 'VCardItem',
  props: {
    appendAvatar: String,
    appendIcon: IconValue,
    prependAvatar: String,
    prependIcon: IconValue,
    subtitle: String,
    title: String,
    ...makeDensityProps()
  },

  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _slots$prepend, _slots$prepend2, _slots$title, _slots$title2, _slots$subtitle, _slots$subtitle2, _slots$default, _slots$append, _slots$append2;

      const hasPrepend = !!(props.prependAvatar || props.prependIcon || slots.prepend);
      const hasAppend = !!(props.appendAvatar || props.appendIcon || slots.append);
      const hasTitle = !!(props.title || slots.title);
      const hasSubtitle = !!(props.subtitle || slots.subtitle);
      return _createVNode("div", {
        "class": "v-card-item"
      }, [hasPrepend && _createVNode(VDefaultsProvider, {
        "key": "prepend",
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.prependIcon,
            image: props.prependAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.prependIcon
          }
        }
      }, {
        default: () => [_createVNode("div", {
          "class": "v-card-item__prepend"
        }, [(_slots$prepend = (_slots$prepend2 = slots.prepend) == null ? void 0 : _slots$prepend2.call(slots)) != null ? _slots$prepend : _createVNode(VAvatar, null, null)])]
      }), _createVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && _createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => [(_slots$title = (_slots$title2 = slots.title) == null ? void 0 : _slots$title2.call(slots)) != null ? _slots$title : props.title]
      }), hasSubtitle && _createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => [(_slots$subtitle = (_slots$subtitle2 = slots.subtitle) == null ? void 0 : _slots$subtitle2.call(slots)) != null ? _slots$subtitle : props.subtitle]
      }), (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)]), hasAppend && _createVNode(VDefaultsProvider, {
        "key": "append",
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.appendIcon,
            image: props.appendAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.appendIcon
          }
        }
      }, {
        default: () => [_createVNode("div", {
          "class": "v-card-item__append"
        }, [(_slots$append = (_slots$append2 = slots.append) == null ? void 0 : _slots$append2.call(slots)) != null ? _slots$append : _createVNode(VAvatar, null, null)])]
      })]);
    });
    return {};
  }

});
//# sourceMappingURL=VCardItem.mjs.map