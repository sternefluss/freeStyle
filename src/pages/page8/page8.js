import {getMusicInfoApi , playMusicApi} from  '../../request/api.js'
export default {
    name: 'Page8',
    data(){
        return{
            isOpened : false,       //判断详情是否打开
            totallyTime : '',       //歌曲总时长
            nowTimes : '',          //歌曲当前时长
            volume : '',            //音量大小
            songsList : [] ,        //歌单列表
            songsDetail : [] ,      //当前歌曲信息
            Current : '0',          //当前歌曲在歌单中的位置
            image : ''              //图片地址
        }
    },
    methods : {
        //详情和缩略开关（就是顶部的箭头）
        openDetails(){
            // 获取容器
            const container = document.getElementsByClassName('container')[0]
            //获取开关按钮（就是那个箭头）
            const open = document.querySelector('.open')
            //获取图片，图片也加上动画不会显得僵硬，实际图片动画删去也可以
            const image = document.querySelector('.image')
            //用isOpened判断当前状态是打开还是关闭
            if(this.isOpened == false){
                //操作容器css
                container.style = `
                    width : 300px;
                    height : 410px;
                    border-radius: 20px;
                `
                //图片动画
                image.style = `
                    max-height: 300px;
                `
                //这两个是改变箭头方向的
                open.classList.remove('icon-xiangshang')
                open.classList.add('icon-xiangxia')
                this.isOpened = true
            }
            else{
                container.style = `
                    width : 50px;
                    height : 56px;
                    border-radius: 5px;
                `
                image.style = `
                    max-height: 0;
                `
                open.classList.remove('icon-xiangxia')
                open.classList.add('icon-xiangshang')
                this.isOpened = false
            }
        },
        isloop(){
            const audio = document.querySelector('.play-btn')
            const loop = document.querySelector('.loop')
            if(audio.loop){
                audio.loop = false
                loop.classList.remove('icon-danquxunhuan')
                loop.classList.add('icon-liebiaoxunhuan')
            }else{
                audio.loop = true
                loop.classList.remove('icon-liebiaoxunhuan')
                loop.classList.add('icon-danquxunhuan')
            }
        },
        previous(){
            if(this.Current == 0){
                alert('前面没有啦')
            }else{
                this.Current--
                this.songsDetail = this.songsList[this.Current]
                playMusicApi({
                    id : this.songsDetail.id
                }).then(res => {
                    /******************///动态实时刷新audio的src 
                    this.$refs.audio.src = res.data.data[0].url 
                })
                this.image = this.songsDetail.al.picUrl
            }
            
        },
        next(){
            this.Current++
            this.songsDetail = this.songsList[this.Current]
            playMusicApi({
                id : this.songsDetail.id
            }).then(res => {
                /******************///动态实时刷新audio的src 
                this.$refs.audio.src = res.data.data[0].url 
            })
            this.image = this.songsDetail.al.picUrl
        }
    },
    mounted(){
        //获取进度条（整体）
        const progress = document.querySelector('.progress')
        /* 获取伪元素的方法window.getComputedStyle()
            const progressAfter = window.getComputedStyle(progress,"after"); */
        //获取进度条（已播放部分）
        const inner = document.querySelector('.inner')
        // 获取播放器元素
        const audio = document.querySelector('.play-btn')
        setInterval(() => {
            //duration需要加载所以放到settimeout里
            //计算歌曲总时长
            const total = audio.duration
            const min = Math.trunc(total/60)
            //这里的00是为了让秒数小于10时显示两位数
            //.slice方法是显示字符串中的某位数，参数-2表示显示后两位
            const sec = ("00"+ Math.trunc(total-60*min)).slice(-2)
            this.totallyTime = min + ':' + sec
            //获取歌曲当前进度
            let now = audio.currentTime
            //进度条动画
            inner.style.width = now*100/total +'%'
            //分别计算60秒之前和60秒之后的时间
            if(now < 60){
                let Nmin = 0;
                let Nsec = ("00"+ Math.trunc(now)).slice(-2)
                this.nowTimes = Nmin + ':' + Nsec  
            }else{
                const Nmin = Math.trunc(now/60)
                const Nsec = ("00"+ Math.trunc(now-60*Nmin)).slice(-2)
                this.nowTimes = Nmin + ':' + Nsec  
            }
            //当歌曲结束时自动切换下一首
            if(audio.ended){
                this.Current++
                this.songsDetail = this.songsList[this.Current]
                playMusicApi({
                    id : this.songsDetail.id
                }).then(res => {
                    /******************///动态实时刷新audio的src 
                    this.$refs.audio.src = res.data.data[0].url 
                })
            }
        },1000);
        // 为进度条增加点击事件
        progress.addEventListener('click',(ev)=>{
            // event = event || window.event;
            // console.log(ev.pageX) 
            // console.log(ev.offsetX)
            const pagex = (ev.offsetX)/3
            inner.style.width = pagex +'%'
            audio.currentTime = audio.duration*pagex/100
            console.log(ev.offsetX)
        })
        //获取音量调节条整体
        const volumePG = document.querySelector('.volumePG')
        // 获取音量按键
        const volume = document.querySelector('.volume')
        //当鼠标移动到音量建上时显示调节条，鼠标移出时隐藏
        volume.addEventListener('mouseover',()=>{
            volumePG.style = `
                clip: rect(0px,100px,200px,0px);
            `
        })
        volume.addEventListener('mouseout',()=>{
            volumePG.style = `
                clip: rect(0px,0px,200px,0px);
            `
        })
        volumePG.addEventListener('mouseover',()=>{
            volumePG.style = `
                clip: rect(0px,100px,200px,0px);
            `
        })
        volumePG.addEventListener('mouseout',()=>{
            volumePG.style = `
                clip: rect(0px,0px,200px,0px);
            `
        })
        // 获取音量调节条
        const volumeRange = document.querySelector('.volumeRange')
        //绑定音量于调节条
        volumeRange.addEventListener('mousemove',()=>{
            let value  = volumeRange.value
            audio.volume = value * 0.01
            this.volume = value
        })

    },
    created(){
        // 获取歌曲信息
        getMusicInfoApi({
            keywords : '千坂',          //这个是搜索关键词（其他参数暂时不管）
            limit: 30,
            offset: 0,
            type : 1,
        }).then(res=>{
            this.songsList = res.data.result.songs
            this.songsDetail = this.songsList[this.Current]
            playMusicApi({
                id : this.songsDetail.id
            }).then(res => {
                /******************///动态实时刷新audio的src 
                this.$refs.audio.src = res.data.data[0].url 
                
            })
            this.image = this.songsDetail.al.picUrl
        })
        
    }
}