const eyeSalePrincipal = document.querySelector('.money span')
eyeSalePrincipal.addEventListener('click', ()=>{
    document.querySelector('.balanceTop').classList.toggle('active')
    eyeSalePrincipal.classList.toggle('active')
})


const main1 = document.querySelector('.items_main1 span')
main1.addEventListener('click', ()=>{
    document.querySelector('.balanceTop1').classList.toggle('active')
    main1.classList.toggle('active')
})

const main2 = document.querySelector('.items_main2 span')
main2.addEventListener('click', ()=>{
    document.querySelector('.balanceTop2').classList.toggle('active')
    main2.classList.toggle('active')
})

const main3 = document.querySelector('.items_main3 span')
main3.addEventListener('click', ()=>{
    document.querySelector('.balanceTop3').classList.toggle('active')
    main3.classList.toggle('active')
})

const saleDisponivel = document.querySelector('.saldo_info span')
saleDisponivel.addEventListener('click', ()=>{
    document.querySelector('.sale_disponivel').classList.toggle('active')
    saleDisponivel.classList.toggle('active')
})



/* HIDE NUMBERS */
const arrowAccount = document.querySelector('.hide_numbers')
arrowAccount.addEventListener('click', ()=>{
    const info = document.querySelector('.info_account')
    arrowAccount.classList.toggle('active')
    info.classList.toggle('active')
})

/* HIDE DATE */
const saleDate = document.querySelector('.hide_date')
saleDate.addEventListener('click', ()=>{
    const arrowDate = document.querySelector('.details p:nth-child(2)')
    saleDate.classList.toggle('active')
    arrowDate.classList.toggle('active')
})