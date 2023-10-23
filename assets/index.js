const button = document.querySelector(".button");
const body = document.querySelector("body");



function response() {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
        return response.json()
    }).then((data) => {
     console.log(data)
     renderloop(data)
    })
}


function renderloop(ali) {
    ali.forEach((element)=> {
        let p = document.createElement("p");
        p.textContent = element.title
        body.appendChild(p)
        
    });
}


function events() {
    button.addEventListener("click" , () => {
        response()
    })
}
events()