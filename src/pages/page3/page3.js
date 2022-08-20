export default {
    name: 'Page3',
    data () {
      return {
        isopeneye : false,
      }
    },
    // vue挂载到元素上的点击事件
    methods : {
        openeyes(){
            const ipt = document.getElementById('password')
            if(this.isopeneye == false){
                this.isopeneye = true
                ipt.type = 'text'
            }
            else{
                this.isopeneye = false
                ipt.type = 'password'
            }
        }
    },
    //原生js事件
    mounted(){
        const body = document.querySelector('.canvas')
        const light = document.querySelector('.light')

        function openeye(e){
            // getBoundingClientRect()方法用于获取指定节点元素的大小及其相对于视口的位置。
            let rect = light.getBoundingClientRect()
            let mouseX =rect.right+(rect.width/2)
            let mouseY =rect.top+(rect.height/2)
            let red = Math.atan2(mouseX-e.pageX,mouseY-e.pageY)
            let deg = (red*(20/Math.PI)*-1)-350
            // css自定义属性--light（灯光线角度）
            body.style.setProperty('--light',deg+'deg')
        }
        body.addEventListener('mousemove',openeye)
    }

  }