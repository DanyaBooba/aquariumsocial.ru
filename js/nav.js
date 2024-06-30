function navClick(elementId) {
    document.querySelectorAll('nav li').forEach(item => item.id !== elementId ? item.classList.remove('active') : item.classList.add('active'))
}
