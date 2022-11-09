var position = document.querySelector('.position')
var quant = document.querySelectorAll('.item-slide .images')
var atual = 0
var imagem = document.getElementById('atual')
var avancar = document.getElementById('avancar')
var voltar = document.getElementById('voltar')
var rolar = true

for (let i = 0; i < quant.length; i++) {
  var div = document.createElement('div')
  div.id = i
  position.appendChild(div)
}
document.getElementById('0').classList.add('primeira')

var pos = document.querySelectorAll('.position div')

for (let i = 0; i < pos.length; i++) {
  pos[i].addEventListener('click', () => {
    atual = pos[i].id
    rolar = false
    slide()
  })
}

voltar.addEventListener('click', () => {
  atual--
  rolar = false
  slide()
})

avancar.addEventListener('click', () => {
  atual++
  rolar = false
  slide()
})

function slide() {
  if (atual >= quant.length) {
    atual = 0;
  } else if (atual < 0) {
    atual = quant.length - 1
  }

  document.querySelector('.primeira').classList.remove('primeira')
  imagem.style.marginLeft = -1024 * atual +'px'
  document.getElementById(atual).classList.add('primeira')

}

setInterval(()=>{
  if(rolar){
    atual++
    slide()
  }else{
    rolar = true
  }
})
