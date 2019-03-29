const menu = document.getElementById('menu');

const logo = document.createElement('img');
logo.setAttribute('src', './logo.svg');
menu.appendChild(logo);

entries = [
    'home',
    'architecture',
    'research',
    'about',
    'contact'
];

entries.forEach(e => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = e;
    if(page != e) {
        const l = document.createElement('a');
        l.href = './' + e + '.html';
        l.appendChild(span);
        div.appendChild(l);
    } else div.appendChild(span);
    menu.appendChild(div);
});