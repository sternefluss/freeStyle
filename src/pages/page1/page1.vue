<template>               
<!-- 因为vue模板只有一个节点，所以要想添加第二个元素就会报错 -->
<!-- 解决方法：再template下添加一个最大的div即可 -->
<div class="canvas">              
    <!-- <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">     -->
    <div class="container">
        <ul>
            <li class="list active">
                <a href="#">
                    <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <span class="text">Home</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <span class="text">Preofile</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
                    <span class="text">Message</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="camera-outline"></ion-icon></span>
                    <span class="text">Photo</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                    <span class="text">Setting</span>
                </a>
            </li>
            <div class="indicator"></div>
        </ul>
        
    </div>
</div>
</template>
<!-- 引入外部css -->
<style scoped>@import './page1.css';</style>
<!-- 引入外部js -->
<script src="./page1.js"></script>            