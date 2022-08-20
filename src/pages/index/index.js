export default {
    name: 'Index',
    data (){
      return{
        pageList :[
          {id : '1' , img : require('../../img/page1.png')},
          {id : '2' , img : require('../../img/page2.png')},
          {id : '3' , img : require('../../img/page3.png')},
          {id : '4' , img : require('../../img/page4.png')},
          {id : '5' , img : require('../../img/page5.png')},
          {id : '6' , img : require('../../img/page6.png')},
          {id : '7' , img : require('../../img/page7.png')},
          {id : '8' , img : require('../../img/page8.png')}
        ]
      }
    },
    methods : {
      skipTo(ev){
        const page = ev.currentTarget.id
        const path = '/'+page
        this.$router.push(path)
        window.location.reload()
      }
    }
  }