<template>
    <v-row>
        <v-col cols="1" >
            <router-link  :to="{name:'Board', params :{boardIdx:boardIdx}}"><div class="BoardComponentItem">{{index}}</div></router-link>
        </v-col>
        <v-col cols="6" >
            <router-link  :to="{name:'Board', params :{boardIdx:boardIdx}}"><div class="BoardComponentItem">{{title}}</div></router-link>
        </v-col>
        <v-col cols="2" >
            <router-link  :to="{name:'Board', params :{boardIdx:boardIdx}}"><div class="BoardComponentItem">{{name}}</div></router-link>
        </v-col>
        <v-col cols="3" >
            <router-link  :to="{name:'Board', params :{boardIdx:boardIdx}}"><div class="BoardComponentItem">{{created}}</div></router-link>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name:"BoardList",
        props:['name', 'index','title','created','boardIdx'],
    }
</script>

<style>

.BoardComponentItem{
    color: black;
    font-weight: normal;
}
</style>