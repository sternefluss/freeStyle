export default {
    name: 'Page3',
    mounted(){
      const sun = document.querySelector('.sun')
      const moon = document.querySelector('.moon')
      const sky = document.querySelector('.canvas')
      function changesun(){
        sun.classList.remove('active')
        moon.classList.add('active')
        sky.classList.remove('night')
        sky.classList.add('day')
      }
      function changemoon(){
        sun.classList.add('active')
        moon.classList.remove('active')
        sky.classList.remove('day')
        sky.classList.add('night')
      }
      sun.addEventListener('click',changemoon)
      moon.addEventListener('click',changesun)
    }

  }