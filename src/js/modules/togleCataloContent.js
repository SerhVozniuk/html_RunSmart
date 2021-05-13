function togleCataloContent({contentItem, contenList, link, linkBack, classContentActive, classListActive}) {
    const content = document.querySelectorAll(contentItem);
    const list = document.querySelectorAll(contenList);
    const catalogLink = document.querySelectorAll(link);
    const catalogBack = document.querySelectorAll(linkBack);
    const contentActive = classContentActive;
    const listActive = classListActive;

    catalogLink.forEach((item, index) => {
        item.addEventListener('click',(event) => {
            event.preventDefault();
            content[index].classList.toggle(contentActive);
            list[index].classList.toggle(listActive);
        })
    });

    catalogBack.forEach((item, index) => {
        item.addEventListener('click',(event) => {
            event.preventDefault();
            content[index].classList.toggle(contentActive);
            list[index].classList.toggle(listActive);
        })
    });
}

export default togleCataloContent;