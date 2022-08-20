export default {
    name: 'Page3',
    mounted(){
      const sliderValue = document.querySelector('.sliderValue')
      const range = document.querySelector('.range')
      range.addEventListener('mousemove',()=>{
        let value  = range.value
        sliderValue.textContent = value
        sliderValue.style.left = value+'%'
        sliderValue.classList.add('show')
        document.querySelector('.a2').volume = value * 0.01
      })
      range.addEventListener('mouseout',()=>{
        sliderValue.classList.remove('show')
      })
    }
}