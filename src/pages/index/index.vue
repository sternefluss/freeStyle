<template>
    <div class="canvas">         
        <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">    
        <div class="container">
            <div class="row" >
                <div class="col-md-3" v-for="(index) in pageList" :key="index" @click="skipTo" :id="index.id">
                    <img class="cover" :src="index.img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<!-- 引入外部css -->
<style scoped>@import './index.css';</style>
<!-- 引入外部js -->
<script src="./index.js"></script>           