import synopsis from '../../components/synopsis'
export default {
  name: 'Page1',
  // https，http形式的外部js连接无法直接引入
  // 在vue加载完毕后在dom树上直接操作
  components : {
    synopsis
  },
  mounted(){
    //创建一个script标签
    const s = document.createElement('script');                 
    const s2 = document.createElement('script'); 
    //s的type设置为module
    s.type = 'module';                                         
    //修改script标签的src属性以用来引入的连接
    s.src ='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'         
    s2.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
    // 使用appendChild()方法将script标签挂载到body上
    document.body.appendChild(s)
    document.body.appendChild(s2)
    //添加点击动画事件
    const list = document.querySelectorAll('.list');      //获取元素list
    function activeLink(){  
      list.forEach((item)=> item.classList.remove('active'));     //遍历所有list，并将active属性删除
      this.classList.add('active')                            //为点击的list元素增加active属性
    }
    list.forEach((item) => item.addEventListener('click',activeLink))   //遍历所有list元素并添加点击事件，触发active的函数
  }
}