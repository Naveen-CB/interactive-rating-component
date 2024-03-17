const inputs = document.getElementsByName('rating')
const form = document.getElementById('form')
const labels = document.querySelectorAll('.label-space')
const popUp = document.querySelector('.pop-up')
const main = document.getElementById('main')
const btn = document.getElementById('button2')
const ratings = document.getElementById('ratings')


inputs.forEach(function(input){
  input.addEventListener('click', function(){
    inputs.forEach(function(rb){
      rb.nextElementSibling.classList.remove('selected')
    })
    this.nextElementSibling.classList.add('selected')
  })
})


form.addEventListener('submit', function(e){
  e.preventDefault()
  labels.forEach(function(label){
    if(label.classList.contains('selected')){
      const value = label.textContent
      ratings.textContent = `You selected ${value} out of 5`
    }
   
  })


  popUp.style.display = 'block'
  main.style.display = 'none'
})

btn.addEventListener('click', function(){
  popUp.style.display = 'none'
  main.style.display = 'block'
})

