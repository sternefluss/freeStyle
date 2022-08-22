<template>
    <div class="canvas">    
        <synopsis text="这是导航样式，鼠标接触可触发动画" color="orange"></synopsis>       
        <ul class="container">
            <li style="--clr:skyblue">
                <span data-text="home">home</span>
            </li>
            <li style="--clr:plum"> 
                <span data-text="about">about</span>
            </li>
            <li style="--clr:gold">
                <span data-text="services">services</span>
            </li>
            <li style="--clr:chartreuse">
                <span data-text="team">team</span>
            </li>
            <li style="--clr:tomato">
                <span data-text="contact">contact</span>
            </li>
        </ul>
    </div>
</template>
<!-- 引入外部css -->
<style scoped>@import './page2.css';</style>
<!-- 引入外部js -->
<script src="./page2.js"></script>            