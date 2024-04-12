javascript:(
() => {
    const styleId = 'showElementOutlinesStyle';
    const styleExists = !!document.getElementById(styleId);

    if (styleExists) {
        document.getElementById(styleId).remove();
    } else {
        const style = document.createElement('style');
        style.id = styleId;
        style.innerHTML = '* {outline: 1px solid red !important}';
        document.head.appendChild(style);
    }
}
)();