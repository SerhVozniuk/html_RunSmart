export function activeTabs(elem){
    if(elem.classList.contains('catalog__tab')){
        elem.classList.toggle('catalog__tab__active');
        
    }
    else if(elem.classList.contains('catalog__tab__skewX')){
        elem.offsetParent.classList.toggle('catalog__tab__active');
    }
}

export function showCatalog(elem){
    let catalogItem = document.querySelectorAll('.catalog-item');
    catalogItem.forEach(item =>{
        if(item.getAttribute('data-tabs') === elem.getAttribute('data-tabs')){
            item.classList.toggle('catalog-item--active');
        }
    })
}
