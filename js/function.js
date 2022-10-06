 export function createElements({
    type = 'div',
    text = '',
    parent,
    classes,
    id = '',
    alt,
    src,
    setAttribute

} = {}) {
    let element = document.createElement(type)

    if (classes == undefined) {
        ''
    } else {
        classes.forEach(classAdded => {
            element.classList.add(classAdded)
        });
    }
    element.innerHTML = text;
    element.id = id
    element.alt = alt
    element.src = src
    element.setAttribute = setAttribute
    parent.appendChild(element)
    return element
}