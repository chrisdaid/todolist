const button = document.getElementsByTagName("button")[0];
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const blueBorder = function() {input.classList.remove("input-empty")};
const redBorder = function() {input.classList.add("input-empty")};

let checkboxIdName = "box-";
let i = 1; 

function incrementIdName() {
    const newId = checkboxIdName + i;
    i++;
    return newId;
}

// click function
button.addEventListener("click", function() {
    if (input.value.length > 0) {
        blueBorder();
        var checkbox = document.createElement("input");
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'done');
        checkbox.setAttribute('class', 'chkbox');
        checkbox.setAttribute('id', incrementIdName());
        var li = document.createElement("li");
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        li.classList.add("task");
        input.value = "";
    } else {
        redBorder();
        return;
    }
})
// enter key press function
input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        blueBorder();
        var checkbox = document.createElement("input");
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'done');
        checkbox.setAttribute('class', 'chkbox');
        checkbox.setAttribute('id', incrementIdName());
        var li = document.createElement("li");
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        li.classList.add("task");
        input.value = "";
    } else if (input.value.length === 0 && event.keyCode === 13) {
        redBorder();
        return;
    }
})
//click function for checkbox done task
var checkbox = document.getElementsByClassName("chkbox");
checkbox[0].addEventListener("click", function() {
    if (checkbox[0].checked === true) {
        const existingLi = document.getElement
        li.classList.add("done");
    } else {
        console.log("It's not checked!");
    }
})

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");

fetch('https://type.fit/api/quotes')
    .then(res => {
        if(res.ok) {
            return res.json();
        } else {
            console.log('Error')
        }
        
    })
    .then((data) => {
        let currentQuote = data[Math.floor((Math.random() * data.length) + 1)];
        quoteText.innerText = currentQuote.text;
        if(currentQuote.author == null) {
            quoteAuthor.innerText = "Somebody"
        } else {
            quoteAuthor.innerText = currentQuote.author;
        }
    })
