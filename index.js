let show = false
function showNav(){
    const nav = document.querySelector('.nav1')
    const overlay = document.querySelector('.overlay')
    if(show === false){
        nav.style.visibility = 'visible'
        overlay.style.display='block'
        show = true
    }
    else{
        nav.style.visibility = 'hidden'
        show = false
        overlay.style.display='none'   
    }
}

let more1show = false
function ChangeMore1show(e){
    const div = document.querySelector(`${e} .more1`)
    const img = document.querySelector(`${e} .btnN1 img`)
    if(more1show === false){
        div.style.display = 'flex'
        img.src = './images/icon-arrow-up.svg'
        img.alt = 'icon-arrow-up'
        more1show = true
    }
    else{
        div.style.display = 'none'
        img.src = './images/icon-arrow-down.svg'
        img.alt = 'icon-arrow-down'
        more1show = false
    }
}

let more2show = false
function ChangeMore2show(e){
    const div = document.querySelector(`${e} .more2`)
    const img = document.querySelector(`${e} .btnN2 img`)
    if(more2show === false){
        div.style.display = 'flex'
        img.src = './images/icon-arrow-up.svg'
        img.alt = 'icon-arrow-up'
        more2show = true
    }
    else{
        div.style.display = 'none'
        img.src = './images/icon-arrow-down.svg'
        img.alt = 'icon-arrow-down'
        more2show = false
    }
}