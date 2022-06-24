const gallery = document.getElementById("content-gallery")

const URL="http://localhost:4400/api/favorite"

gallery.addEventListener("click", (e) => {
    let btnAnchor = e.target;
    if(btnAnchor.dataset.target === "btnAnchor"){
        delData(btnAnchor.dataset.date);
    }else if(btnAnchor.dataset.target === "heartElement" ){
        btnAnchor = e.target.parentElement;
        delData(btnAnchor.dataset.date);
    }else{

    }
});

const printPictures = (picURL, picTitle, picAuthor, picDate)=>{
    let div = document.createElement("div")
    // div.classList.add("card")
    div.classList.add("col")
    div.classList.add("m-1")
    div.classList.add("bg-dark")
    div.style= "height: 30rem; min-width:250px"
    gallery.appendChild(div)

    let img = document.createElement("img")
    img.classList.add("card-img-top")
    img.src=picURL
    // img.style= "width: 10rem"
    img.style= "height: 15rem"
    
    div.appendChild(img)

    let divBody =  document.createElement("div")
    divBody.classList.add("card-body")
    div.appendChild(divBody)

    let title =  document.createElement("h5")
    title.classList.add("card-title")
    title.innerHTML=picTitle
    divBody.appendChild(title)

    let author =  document.createElement("p")
    author.innerHTML=picAuthor
    divBody.appendChild(author)

    let date =  document.createElement("p")
    date.innerHTML = picDate
    divBody.appendChild(date)

    let anchor = document.createElement("a")
    anchor.classList.add("btn")
    anchor.classList.add("bg-secondary")
    anchor.dataset.target = "btnAnchor"
    anchor.dataset.url = picURL;
    anchor.dataset.date = picDate;
    divBody.appendChild(anchor)

    let heart =  document.createElement("i")
    heart.classList.add("bi")
    heart.classList.add("bi-heart-fill")
    heart.dataset.target = "heartElement"
    anchor.appendChild(heart)
    
}

const getData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            gallery.innerHTML = "";
            data.forEach((element) => {
                if(element.media_type !== "video"){
                    printPictures(element.link, element.title, element?.copyright || "Unknown", element.date)
                }
            });
        })
        .catch(error => console.error(error))
}
getData()

//delete
const delData = (picDate) => {
    fetch(`http://localhost:4400/api/favorite/${picDate}`,{ 
        method: "DELETE"
    })
    .then(response => response.json())
    .then((response) => {
        swal(response)
    })
    .then(() => {
        getData()
    })
    .catch((error) => console.error(error));
}
