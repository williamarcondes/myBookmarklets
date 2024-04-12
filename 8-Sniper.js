javascript:(
    () => {
    function activeDesactiveLinks(pointerEvent) {
        let links = document.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].style.pointerEvents = pointerEvent;
        }
    }

    function remove(evento) {
        evento = evento || window.event;
        let alvo = evento.target || evento.srcElement;
        alvo.style.display = 'none';
        document.removeEventListener('click', remove, false);
        document.body.style.cursor = 'default';
        activeDesactiveLinks('initial');
    }

    activeDesactiveLinks('none');

    document.addEventListener('click', remove, false);

    document.body.style.cursor = "crosshair"
}
)();