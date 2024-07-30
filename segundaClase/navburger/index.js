const btnBurger = document.querySelector('#btnBurger')
const menuResponsive = document.querySelector('#menuResponsive')

btnBurger.addEventListener('click', () => {
    if(menuResponsive.classList.contains('none')){
        menuResponsive.classList.remove('none')
        menuResponsive.classList.add('menu')
    }else{
        menuResponsive.classList.remove('menu')
        menuResponsive.classList.add('none')
    }
})