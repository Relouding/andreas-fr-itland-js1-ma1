// question 1

const cat = {
    complain: "Meow!"
};

// question 2

var heading = document.querySelector("h3");
function updateHeading() {
    heading.innerHTML = "Updated heading";
}

// question 3

function styleHeading() {
    heading.style.fontSize = "2em";
}

// question 4

function addClass() {
    heading.className += "subheading";
}


// question 5

var paragraphs = document.querySelectorAll("p");
    paragraphs.style.color = "red";

// question 6

var resultsContainer = document.querySelector(".results");
    resultsContainer.innerHTML = '<p>New paragraph</p>';
    resultsContainer.style.backgroundColor = "yellow";

// question 7

function createList(list) {
    for (let i = 0; i < list.length; i++) {
      console.log(list[i].name);
    }
  }
  
  createList(cats);

// question 8

function createCats(cats) {
let html = "";
  
    for (let i = 0; i < cats.length; i++) {
        let ageValue = "Age Uknown";
  
    if (cats[i].age) {
        ageValue = cats[i].age;
    }
  
      html += `<div>
                      <h5>${cats[i].name}</h5>
                      <p>${ageValue}</p>
                    </div>`;
    }
  
    return html;
  }

  const htmlContainer = document.querySelector(".cat-container");
  const newHTML = createCats(cats);
  
  htmlContainer.innerHTML = newHTML;