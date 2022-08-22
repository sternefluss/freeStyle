import synopsis from '../../components/synopsis'
export default {
    name: 'Page3',
    components : {
        synopsis
    },
    mounted(){
        let deg =6
        let hour = document.querySelector('.hour')
        let min = document.querySelector('.min')
        let sec = document.getElementsByClassName('sec')[0]

        setInterval(()=>{
            // 获取当前时间，计算指针的角度
            let day = new Date()
            let hours = day.getHours() * 30
            let minutes = day.getMinutes() * deg
            let seconds = day.getSeconds() * deg

            // 修改css的旋转角度参数
            hour.style.transform = `rotateZ(${hours+(minutes/12)}deg)`
            min.style.transform = `rotateZ(${minutes}deg)`
            sec.style.transform = `rotate(${seconds}deg)`
        },1000)
    }
}