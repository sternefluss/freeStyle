<template>
    <div class="canvas" v-bind:class="{'showpwd' : isopeneye}">
        <synopsis text="这是个显示和隐藏密码的ui，请在输入密码后点击眼睛" class="title" :color='titleColor'></synopsis>     
              <!-- 使用link引入外部图标库 -->
        <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css"/>
        <div class="container">
            <div class="user">
                <span>用户名:</span>
                <input type="text" placeholder="请输入用户名">
            </div>
            <div class="password">
                <span>密&nbsp;&nbsp;&nbsp;码:</span>
                <input type="password" placeholder="请输入密码" id="password">
                <i class="fa fa-eye-slash" @click="openeyes()"></i>
            </div>
            <!-- 光线 -->
            <div class="light" v-show="isopeneye"></div>
            <div class="btn">
                <button class="post">注册</button>
                <button class="login">登录</button>
            </div>
        </div>
    </div>
</template>
<!-- 引入外部css -->

<style scoped>
    @import './page3.css';
</style>
<!-- 引入外部js -->
<script src="./page3.js"></script>            