const root = document.getElementById('root');
function createElements({
    type='div',
    text='' ,
    parent,
    classes,
    id='',
    alt,
    src,
    setAttribute

} = {}) {
    let element = document.createElement(type)

    if(classes == undefined){
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

const container = createElements({
    classes:['container-flow'],
    parent:root
})

const row = createElements({
    classes:['row','text-center'],
    parent:container
})

const col = createElements({
    classes : ['col-4','d-flex','justify-content-center'],
    parent:row
})


for (let i=0; i<=8; i++){
    createElements({
        type:'button',
        id:`btn${i}`,
        parent:col,
        text:'tic tac toe',
        classes:['bg-primary']
    })
}

// Functionality