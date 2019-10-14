let variasimagens = [
    'omni.jpg',
    'legion.jpg',
    'dazzle.jpg',
    'pudge.jpg',
    'dk.jpg'
]

let counter = 0;

let corpo = document.querySelector('.block__slide')

let before = document.getElementById('left')

let imagem = document.createElement('img')
imagem.setAttribute('src', variasimagens[counter])

let next = document.getElementById('right')

function init() {
    console.log(before, next)
    corpo.appendChild(before)
    corpo.appendChild(imagem)
    corpo.appendChild(next)
}

before.addEventListener('click', function() {
    if (counter > 0) {
        counter = counter - 1;
    }
    else{ counter = 4}
    imagem.setAttribute('src', variasimagens[counter])
})
next.addEventListener('click', function() {
    if (counter < 4) {
        counter = counter + 1;
    }
    else{ counter = 0}
    imagem.setAttribute('src', variasimagens[counter])
})

init()