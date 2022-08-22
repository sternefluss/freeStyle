<template>
    <div class="canvas">
        <synopsis text="播放器组件，歌曲列表已预设，展开可控制上下首和音量(ps：歌曲加载可能需要时间)" color="palevioletred"></synopsis>
        <link rel="stylesheet" type="text/css" href="//at.alicdn.com/t/c/font_3539158_6x7i6uak0v.css">
        <div class="container">
            <button class="open iconfont icon-xiangshang" @click="openDetails()"></button>
            <div class="detail">
                <div class="name">{{songsDetail.name}}</div>
                <img :src="image" alt="" class="image">
                <div class="ProgressBar">
                    <div class="progress"><div class="inner"></div></div>
                    <div class="times">
                        <div class="nowTimes">{{nowTimes}}</div>
                        <div class="totallyTime">{{totallyTime}}</div>
                    </div>
                </div>
                <div class="play-ui">
                    <button class="loop iconfont icon-liebiaoxunhuan" @click="isloop()"></button>
                    <button class="previous iconfont icon-shangyishou" @click="previous()"></button>
                    <div class="play">
                        <audio controls autoplay class="play-btn" ref="audio">
                            <source src="" type="audio/mpeg">
                        </audio>
                    </div>
                    <button class="next iconfont icon-xiayishou" @click="next()"></button>
                    <button class="volume iconfont icon-shengyin_shiti"></button>
                    <div class="volumePG">
                        <input type="range" class="volumeRange">
                        <span>{{volume}}</span>
                    </div>
                </div>
            </div>
        </div>
            
        
    </div>
</template>
<!-- 引入外部css -->
<style scoped>
    @import './page8.css';
</style>
<!-- 引入外部js -->
<script src="./page8.js"></script>            