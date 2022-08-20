<template>
    <div class="canvas">
        <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">    
        <div class="search">
            <input type="text"  class="form-control" placeholder="请输入搜索内容" v-model="searchValue">
            <button class="btn" @click="get()">搜索</button>
        </div>
        <div class="content">
            <table class="table">
                <tr class="row" v-for="(index,item) in searchList" :key="item">
                    <td class="col-md-4">{{index.name}}</td>
                    <td class="col-md-3">{{index.ar[0].name}}</td>
                    <td class="col-md-2">{{index.dt}}</td>
                    <td class="col-md-2"></td>
                    <td class="col-md-1">
                        <!-- 连接的播放按钮的图片 -->
                        <svg class="icon play" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" 
                        p-id="956" @click="play(index.id)">
                            <path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6
                            0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667
                            512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2
                            469.333333-469.333333 469.333333zM672
                            441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666
                            57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667
                            57.6-106.666667 0-145.066667z" p-id="957">
                            </path>
                        </svg>
                    </td>
                </tr>
            </table> 
            <div class="pagechange" v-show="btnshow">
                <button class="btn pageup" @click="pageup()">上一页</button>
                <span>{{page}}</span>
                <button class="btn pagedown" @click="pagedown()">下一页</button>
            </div>
            
        </div>
        <audio ref="audio" autoplay class="audio">
             <source type="audio/ogg">
        </audio>
    </div>
</template>
<!-- 引入外部css -->
<style scoped>
    @import './page6.css';
</style>
<!-- 引入外部js -->
<script src="./page6.js"></script>            