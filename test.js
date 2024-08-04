let options = {
    method: "GET",
};
let url = "https://jsonplaceholder.typicode.com/posts";
let files = fetch(url, options);

let mainContainerImages = document.getElementById("images-main-container");
mainContainerImages.classList.add("images-container");

function create_imageContainer(item) {
    let { body, id, title, userId } = item;

    let imageDiv = document.createElement("div");
    imageDiv.classList.add("image");

    mainContainerImages.appendChild(imageDiv);

    let imgElement = document.createElement("img");
    imgElement.src = "https://picsum.photos/200?random=" + id;
    imgElement.classList.add("imgs");

    let anchor = document.createElement("a");
    anchor.href = "#sameid";
    anchor.classList.add("btns");
    anchor.appendChild(imgElement);

    // Set up click event to store data
    anchor.addEventListener('click', () => {
        sessionStorage.setItem('postDetails', JSON.stringify(item));
    });

    imageDiv.appendChild(anchor);

    let uid = document.createElement("p");
    imageDiv.appendChild(uid);
    uid.textContent = " User Id: " + userId;

    let Title = document.createElement("p");
    imageDiv.appendChild(Title);
    Title.textContent = "Title : " + title;

    let Body = document.createElement("p");
    imageDiv.appendChild(Body);
    Body.textContent = "Body : " + body;
}

files
    .then(function (response) { return response.json() })
    .then(function (responsebody) {
        responsebody.forEach(function (item) {
            create_imageContainer(item);
        });
    });

let specificImage = document.createElement("div");
specificImage.id = "sameid";
document.body.appendChild(specificImage);

let divM = document.createElement("div");
divM.classList.add("second");
specificImage.appendChild(divM);

let h1element = document.createElement("h1");
h1element.textContent = "Social Media App";
divM.appendChild(h1element);

let linebreak = document.createElement("hr");
h1element.appendChild(linebreak);

let p1Element = document.createElement("p");
p1Element.textContent = "Details Page For Post With Id : ";
divM.appendChild(p1Element);

let imageElement = document.createElement("img");
imageElement.classList.add("second-image");
divM.appendChild(imageElement);

let p2Element = document.createElement("p");
divM.appendChild(p2Element);

let p3Element = document.createElement("p");
divM.appendChild(p3Element);

let p4Element = document.createElement("p");
divM.appendChild(p4Element);

// Function to populate details from sessionStorage
function populateDetails() {
    let postDetails = JSON.parse(sessionStorage.getItem('postDetails'));

    if (postDetails) {
        let { body, id, title, userId } = postDetails;

        p1Element.textContent = "Details Page For Post With Id: " + id;
        imageElement.src = "https://picsum.photos/200?random=" + id;
        p2Element.textContent = "User Id: " + userId;
        p3Element.textContent = "Title: " + title;
        p4Element.textContent = "Body: " + body;
    }
}

// Call the function to populate details when the hash changes
window.addEventListener('hashchange', populateDetails);

// Call the function to populate details on page load
populateDetails();
