const key= "l7iyIpVsowrInfdflY0ON9ywQFHMb8aEicUllh4A"
const URL = "https://api.nasa.gov/planetary/apod?api_key=l7iyIpVsowrInfdflY0ON9ywQFHMb8aEicUllh4A&start_date=2021-10-01&end_date=2021-10-24"
const gallery = document.getElementById("content-gallery")
let favList = [];
let nasaList = [];

const getData = new Promise((resolve, reject) => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            gallery.innerHTML = "";
            data.forEach((element) => {
                if(element.media_type !== "video"){
                    nasaList.push(element);/////////////
                }
            });
            resolve(nasaList);
        })
        .catch(error => {
            reject(error);
        })
});

const getAll = new Promise((resolve, reject) => {
    fetch("http://localhost:4400/api/favorite")
    .then(response => response.json())
    .then((favList) => {
        resolve(favList);
    })
    .catch(error => {
        reject(error);
    })
});

const render = () => {
    getData
        .then((nasaList) => {
            getAll
                .then((favList) => {
                    iterator(nasaList, favList)
                })
        })
        .catch((error) => console.error(error));
}

const iterator = (nasaList, favList) => {
    nasaList.forEach((item) => {
        printPictures(item.url, item.title, item?.copyright||"Unknown", item.date, favList)
    })
}

render();//first render


const printPictures = (picURL, picTitle, picAuthor, picDate, favList)=>{
    let div = document.createElement("div")
    div.classList.add("col")
    div.classList.add("m-1")
    div.classList.add("bg-dark")
    // div.style= "width: 20rem"
    div.style= "height: 30rem; min-width:250px"
    gallery.appendChild(div)

    let img = document.createElement("img")
    img.classList.add("card-img-top")
    img.src=picURL
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
    date.innerHTML=picDate
    divBody.appendChild(date)

    let anchor = document.createElement("a")
    anchor.classList.add("btn")

    let result = favList.some(item => item.date == picDate);//false

    if(result){
        anchor.classList.add("bg-secondary")
    }else{
        anchor.classList.add("bg-light")
    }
    anchor.dataset.target = "btnAnchor";//to identify the element
    anchor.dataset.url = picURL;//sets the current item image
    anchor.dataset.picDate = picDate
    anchor.dataset.picAuthor = picAuthor
    anchor.dataset.picTitle = picTitle
    divBody.appendChild(anchor)

    let heart =  document.createElement("i")
    heart.classList.add("bi")
    heart.classList.add("bi-heart-fill")
    heart.dataset.target = "heartElement";
    anchor.appendChild(heart)
    
}