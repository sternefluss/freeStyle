<template>
    <div class="canvas">
        <synopsis text="这是音量调节ui，已设置默认歌曲" color="yellow"></synopsis>
        <div class="container">
            <div class="a1">
                <audio controls class="a2">
                    <source src="http://m8.music.126.net/20220820235810/63b4ae3b05c229909e5793752cf24331/ymusic/2a53/c92b/140e/cdf4eb99055d1fdabaec76276c9d9e1e.mp3" type="audio/ogg">
                </audio>
            </div>
            <div class="box">
                <div class="sliderValue">200</div>
            </div>
            <div class="value">0&nbsp;</div>
            <input type="range" class="range">
            <div class="value">&nbsp;100</div>
        </div>
    </div>
</template>
<!-- 引入外部css -->
<style scoped>
    @import './page5.css';
</style>
<!-- 引入外部js -->
<script src="./page5.js"></script>            