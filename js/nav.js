function navList() {
    const nav = document.querySelector('nav ul')
    document.querySelectorAll('h1[id], h2[id], h3[id]').forEach(element =>
        nav.insertAdjacentHTML('beforeend', `<li id="_${element.id}"><a href='#${element.id}' onclick="navClick('_${element.id}')">${element.textContent}</a></li>`)
    )
    nav.insertAdjacentHTML('beforeend', `<li class="download">
        <a href="https://aquariumsocial.ru" target="_blank">
            сайт
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-out-up-right">
                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                <path d="m21 3-9 9" />
                <path d="M15 3h6v6" />
            </svg>
        </a>
    </li>`)
}

function navClick(elementId) {
    document.querySelectorAll('nav li').forEach(item => item.id !== elementId ? item.classList.remove('active') : item.classList.add('active'))
}

navList()
