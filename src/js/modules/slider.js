function slider(btnPrev, btnNext, block){
    let count = 0;
    const prev = document.querySelector(btnPrev);
    const next = document.querySelector(btnNext);
    const itemSlider = document.querySelectorAll(block);

    showSlider(count);

    function showSlider(n){
        if(n >= itemSlider.length) count = 0;
        if(n < 0) count = itemSlider.length - 1;
        itemSlider.forEach(item =>{
            item.classList.remove('active');
        });
        itemSlider[count].classList.add('active');
    }

    function plusSlides(n){
        showSlider(count += n);
    }

    next.addEventListener('click', () => plusSlides(1));
    prev.addEventListener('click', () =>  plusSlides(-1));
}

export default slider;