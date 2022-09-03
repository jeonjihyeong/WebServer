<template>
  <div>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div>
      <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
          <font-awesome-icon icon="fa-solid fa-bars" />
      </button>

      <button :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
        --italic--
      </button>
      <button :class="{ 'is-active': isActive.link() }" @click="commands.link">
        --link--
      </button>
      
      <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click.prevent="commands.heading({ level: 1 })">
          H1
      </button>

      <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click.prevent="commands.heading({ level: 2 })">
          H2
      </button>

      <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click.prevent="commands.heading({ level: 3 })">
          H3
      </button>
    </div>
    </editor-menu-bar>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { Bold,Italic, Heading, Link, HardBreak} from 'tiptap-extensions'

export default {
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      swMenubar: this.menubar,
      editor: new Editor({
        extensions: [
          new Bold(),
          new Italic(),
          new Link(),
          new HardBreak(),
          new Heading({
            levels:[1,2,3]
          })
        ],
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>