
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

    let anchor=document.createElement("a");
    
    
    anchor.href="#sameid";
    



    anchor.target="_blank";

    anchor.classList.add("btns")
    anchor.appendChild(imgElement)

    imageDiv.appendChild(anchor);

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



 

 let specificImage=document.createElement("div");
 specificImage.id="sameid"
 document.body.appendChild(specificImage);


 let divM=document.createElement("div");
 divM.classList.add("second")
 specificImage.appendChild(divM)
 
 let h1element=document.createElement("h1");
 h1element.textContent="Social Media App";
 
 let linebreak=document.createElement("hr");
 h1element.appendChild(linebreak);
 
 let p1Element=document.createElement("p");
 p1Element.textContent="Detials Page For Post With Id : ";
 
 divM.appendChild(p1Element);
 
 let imageElement=document.createElement("img");
 imageElement.src="https://picsum.photos/200?random=";
 imageElement.classList.add("second-image");
 divM.appendChild(imageElement);
 
 let p2Element=document.createElement("p");
 p2Element.textContent="User Id :";
 divM.appendChild(p2Element);
 
 let p3Element=document.createElement("p");
 p3Element.textContent="Title : ";
 divM.appendChild(p3Element);
 
 let p4Element=document.createElement("p");
 p4Element.textContent="Body : ";
 divM.appendChild(p4Element);
 
 
 