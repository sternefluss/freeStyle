<template>
  <div id="app">
    <button class="previous" @click="goprevious()" v-show="!(path ==='/')">
      上一项
    </button>
    <button class="next" @click="gonext()" v-show="!(path ==='/')">
      下一项
    </button>
    <button class="back" @click="goback()" v-show="!(path ==='/')">
      返回首页
    </button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      path : '',
    } 
  },
  beforeMount(){
    const cur_path = this[`$route`].path 
    this.path = cur_path
  },
  methods : {
    goprevious(){
      const cur_path = this[`$route`].path          //获取当前路由值
      const num = cur_path.replace(/[^0-9]+/ig,"");             //提取path中的数字
      let go_path = num*1 - 1;                      //把数字减1  先乘1把num由string转化为number类型
      if(go_path <= 0){
        go_path = 1;
        alert('已经是第一个了')
      }else{
        this.path = '/'+go_path
        this.$router.push(this.path)            //使用$router.push方法修改路由值
      }
    },
    gonext(){
      const cur_path = this[`$route`].path           //获取当前路由值
      const num = cur_path.replace(/[^0-9]+/ig,"");             //提取path中的数字
      let go_path = num*1 + 1;                      //把数字加1   先乘1把num由string转化为number类型
      if(go_path >= 9){
        go_path = 8;
        alert('已经是最后一个了')
      }else{
        this.path = '/'+go_path
        this.$router.push(this.path)            //使用$router.push方法修改路由值
      }
    },
    goback(){
      this.path = '/'
      this.$router.push(this.path)                //使用$router.push方法修改路由值
    }
  }
}
</script>

<!-- 背景样式 -->
<style>
  body{
    background: radial-gradient(200% 100% at bottom center, #f7f777b6, #e96f92, #1b2947);
    background: radial-gradient(
      220% 105% at top center,
      #1b2947 10%,
      #75517d 40%,
      #e96f92 65%,
      #f7f777b6
    );
  }
  #app{
    min-width: 1000px;
    /* border: 1px solid red; */
    position: relative;
  }
  .next,.previous{
    height: 100%;
    width: 100px;
    background: none;
    border: none;
    cursor:pointer;
    z-index: 5;
  }
  .previous{
    position: absolute;
  }
  .next{
    position: absolute;
    right: 0;
  }
  .back{
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    background: none;
    border: none;
    cursor:pointer;
    z-index: 5;
  }
  button:hover{
    background: black;
    color: white;
    opacity: 0.3;
    transition: 2s;
  }
</style>
