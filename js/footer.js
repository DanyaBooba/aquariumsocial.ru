function footerList() {
    const footerList = document.querySelector('footer.footer .footer__top ul')
    document.querySelectorAll('nav ul li a').forEach(element =>
        footerList.insertAdjacentHTML('beforeend',
            `<li><a href="${element.href}">${element.textContent}
            ${element.querySelector('svg')?.outerHTML ?? ''}</a></li>`))
}

footerList()
