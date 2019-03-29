const menu = document.getElementById('menu');

const logo = document.createElement('img');
logo.setAttribute('src', './logo.svg');
menu.appendChild(logo);

const home = document.createElement('div');
if(page != 'home') {
    const l = document.createElement('a');
    l.textContent = 'home';
    l.href = './home.html';
    home.appendChild(l);
} else home.textContent = 'home';
menu.appendChild(home);


const architecture = document.createElement('div');
if(page != 'architecture') {
    const l = document.createElement('a');
    l.textContent = 'architecture';
    l.href = './architecture.html';
    architecture.appendChild(l);
} else architecture.textContent = 'architecture';
menu.appendChild(architecture);


const research = document.createElement('div');
if(page != 'research') {
    const l = document.createElement('a');
    l.textContent = 'research';
    l.href = './research.html';
    research.appendChild(l);
} else research.textContent = 'research';
menu.appendChild(research);


const about = document.createElement('div');
if(page != 'about') {
    const l = document.createElement('a');
    l.textContent = 'about';
    l.href = './about.html';
    about.appendChild(l);
} else about.textContent = 'about';
menu.appendChild(about);


const contact = document.createElement('div');
if(page != 'contact') {
    const l = document.createElement('a');
    l.textContent = 'contact';
    l.href = './contact.html';
    contact.appendChild(l);
} else contact.textContent = 'contact';
menu.appendChild(contact);