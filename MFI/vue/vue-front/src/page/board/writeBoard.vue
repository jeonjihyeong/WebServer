<template>
    <v-container class="editor">
        <v-row>
            <v-col>
                <v-text-field
                label="제목"
                v-model="title"
            ></v-text-field>
            </v-col>
        </v-row>    
        
        <v-row><v-col>
            <TipTapEditor/>
        </v-col></v-row>
    </v-container>
</template>

<script>
import TipTapEditor from '@/components/TextEditor/tipTapEditor.vue';
    export default {
    components: { TipTapEditor }
}
</script>

<style lang="scss" scoped>
.editor{
    text-align: center;
    justify-content: center;
}
</style>