let language = 'en';

import data from './data.json' with { type: 'json' };
console.log(data);

let deta = data["data"];

function addServices(){
    let st = ""
    for(let i = 0; i<deta["services"].length; i++){
        st = "";
        let service = deta["services"][i];
        console.log(i);
        console.log(document.querySelector("#services").innerHTML)
        for(let j = 0; j < service["subServices"].length; j++){
            st += `<span>${service["subServices"][j][`title_${language}`]}</span>`;
        }
        document.querySelector("#services").innerHTML += `<div class = "service" id = "${i}">${st}</div>`
        var mydiv = document.createElement("div");
        mydiv.innerHTML += `<h1>${service[`title_${language}`]}</h1>`
        var elem = document.createElement("img");
        let link = service["cover_img"]["publicUrl"];
        elem.src = `${link}`;
        elem.setAttribute("height", "768");
        elem.setAttribute("width", "1024");
        elem.setAttribute("alt", "Flower");
        mydiv.appendChild(elem);
        document.getElementById(`${i}`).prepend(mydiv);
        

    }
    console.log(st);
    
}

window.addEventListener('load', addServices)

