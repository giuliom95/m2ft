const white = '#ffefef';

const list_div = document.getElementById('list');

const entries = `[
    {
        "id": "domesticboundaries",
        "name": "Domestic Boundaries",
        "white_title": true
    },
    {
        "id": "gumball",
        "name": "Gumball",
        "white_title": false
    },
    {
        "id": "bighero6",
        "name": "Big Hero 6",
        "white_title": true
    },
    {
        "id": "clothing",
        "name": "Female clothing",
        "white_title": true
    },
    {
        "id": "daftpunk",
        "name": "Daft Punk Discovery",
        "white_title": true
    },
    {
        "id": "eurowings",
        "name": "Eurowings",
        "white_title": false
    },
    {
        "id": "london",
        "name": "Visit London",
        "white_title": true
    },
    {
        "id": "psu",
        "name": "Power Supply Unit",
        "white_title": false
    },
    {
        "id": "ryanair",
        "name": "Ryanair",
        "white_title": true
    },
    {
        "id": "soldiers",
        "name": "Tactical soldiers",
        "white_title": true
    },
    {
        "id": "closepsu",
        "name": "PSU Closeup",
        "white_title": false
    },
    {
        "id": "cottage",
        "name": "Cozy cottage",
        "white_title": true
    },
    {
        "id": "earphones",
        "name": "Earphones",
        "white_title": true
    },
    {
        "id": "indonesia",
        "name": "Indonesian temple",
        "white_title": true
    },
    {
        "id": "madrid",
        "name": "Madrid power wall",
        "white_title": true
    },
    {
        "id": "royalplane",
        "name": "Tsundere plane",
        "white_title": true
    },
    {
        "id": "sea",
        "name": "The sea",
        "white_title": true
    },
    {
        "id": "spain",
        "name": "Is this Spain?",
        "white_title": true
    }
]`;


if (ciao) {
    var data = JSON.parse(entries);
    data.forEach(element => {
    
        const block_container = document.createElement('div');
        block_container.setAttribute('class', 'block_container');
    
        const block = document.createElement('div');
        block.setAttribute('class', 'block');
        if(element.white_title)
            block.style.color = white;
        block.style.backgroundImage = 'url(./projects/' + element.id + '/preview.jpg)';
    
        const inner_block_text = document.createElement('div');
        inner_block_text.textContent = element.name;
        block.appendChild(inner_block_text);
    
        const inner_block_cover = document.createElement('div');
        inner_block_cover.setAttribute('class', 'cover');
        block.appendChild(inner_block_cover);
    
        block_container.appendChild(block);
        list_div.appendChild(block_container);
    });
}

