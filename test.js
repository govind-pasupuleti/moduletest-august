
let options={
    Method:"GET",
}
let url="https://jsonplaceholder.typicode.com/posts";
let files=fetch(url,options)



let mainContainerImages=document.getElementById("images-main-container");
mainContainerImages.classList.add("images-container");



function create_imageContainer(item){

    let {body,id,title,userId}=item;

    let imageDiv=document.createElement("div");
    imageDiv.classList.add("image");
    mainContainerImages.appendChild(imageDiv);

    let imgElement=document.createElement("img");
    imgElement.src="https://picsum.photos/200?random="+id;
    imgElement.classList.add("imgs");
    imageDiv.appendChild(imgElement);

    let uid=document.createElement("p");
    imageDiv.appendChild(uid);
    uid.textContent=" User Id: "+id;

    let Title=document.createElement("p");
    imageDiv.appendChild(Title);
    Title.textContent="Title : "+title;

    let Body=document.createElement("p");
    imageDiv.appendChild(Body);
    Body.textContent="Body : "+body;
}



files.then(function(response){return response.json()}).then(function(responsebody){
    // console.log(responsebody.length)
     responsebody.forEach(function(item){
         create_imageContainer(item)
     });
     
 })