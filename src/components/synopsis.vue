<template>
    <div>
        <div class="title">
            <h1 :style="{color:color}">{{text}}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        props : ['text','color']

    }
</script>

<style>
    .title{
        position: absolute;
        top: 5%;
        left: 0;
        /* border: 1px solid red; */
        text-align: center;
        display: flex;                          /** 弹性布局 */
        justify-content: center;                /** 居中排列 */
        align-items: center;      
        width: 100%;
    }
    h1{
        font-size: 4vh;
        text-align: center;
        width: 60%;
    }
</style>