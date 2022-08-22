import {getMusicInfoApi , playMusicApi} from  '../../request/api.js'
import synopsis from '../../components/synopsis'
export default {
    name: 'Page3',
    data () {
        return{
            searchList : [] ,
            searchValue : '',
            page : '1',
            pageCount : '',
            btnshow : false
        }
    },
    components :{
        synopsis
    },
    methods : {
        get(){
            this.getmusic()
            this.page = '1'
            this.btnshow = true
        },

        getmusic(){
            getMusicInfoApi({
                keywords: this.searchValue,
                limit: 30,
                offset: (this.page-1)*30,
                type : 1,
            }).then(res=>{
                this.searchList = res.data.result.songs
                // console.log(res.data.result.songs)
                // 计算歌曲的时长
                for (let i = 0; i < this.searchList.length; i++) {
                    let min = parseInt(this.searchList[i].dt / 1000 / 60)
                    let sec = parseInt((this.searchList[i].dt / 1000) % 60)
                    if (min < 10) {
                    min = '0' + min
                    }
                    if (sec < 10) {
                    sec = '0' + sec
                    }
                    this.searchList[i].dt = min + ":" + sec;
                }
                /*****************************************************/
                this.pageCount = res.data.result.songCount / 30
            })
        },
        play(id){
            playMusicApi({
                id : id
            }).then(res => {
                /**************************///动态实时刷新audio的src 
                this.$refs.audio.src = res.data.data[0].url
                this.page = 1
            })
        },
        pageup(){
            let pagenumber = this.page
            pagenumber--
            if(pagenumber <= 0){
                pagenumber = 1
                alert('已经是第一页了~')
            }
            this.page = pagenumber  
            this.getmusic()
        },
        pagedown(){
            let pagenumber = this.page
            pagenumber++
            if(pagenumber > this.pageCount+1){
                pagenumber = this.page
                alert('已经是最后一页了~')
            }
            this.page = pagenumber
            this.getmusic()
        }
    }
}