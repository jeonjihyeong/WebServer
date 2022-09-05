<template>
    <div class="boardComment">
        <div class="comment_item_writer">{{comment_user}}</div>
        <div class="comment_item_content">{{comment}}</div>
        <div class="comment_item_created">{{comment_created}}</div>
    </div>
</template>

<script>

    export default {
        name:"BoardComment",
        props: [
            "comment",
            "comment_created",
            "comment_user",
    ],
    }
</script>

<style lang="scss" scoped>

.comment_item_writer{
    text-align: left;
    font-size: 18px;
    font-weight: bold;
}

.comment_item_content{
    text-align: left;
    font-size: 18px;
    border-bottom: 1px solid #aaa;
}
.comment_item_created{
    text-align: right;
    font-size: 13px;
    color: #aaa;
    
}
</style>