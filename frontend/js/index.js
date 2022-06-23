
const key= "l7iyIpVsowrInfdflY0ON9ywQFHMb8aEicUllh4A"
const URL = "https://api.nasa.gov/planetary/apod?api_key=l7iyIpVsowrInfdflY0ON9ywQFHMb8aEicUllh4A&start_date=2021-12-01&end_date=2021-12-24"
const gallery = document.getElementById("content-gallery")

const getData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            data.forEach((element) => {
                if(element.media_type !== "video"){
                    printPictures(element.url, element.title, element?.copyright||"Unknown", element.date)
                }
                
            });
        })
        .catch(error => console.error(error))
}
getData()

const printPictures = (picURL, picTitle, picAuthor, picDate)=>{
    let div = document.createElement("div")
    // div.classList.add("card")
    div.classList.add("col")
    div.classList.add("m-1")
    div.classList.add("bg-dark")
    div.style= "width: 20rem"
    div.style= "height: 30rem"
    gallery.appendChild(div)

    // let divImg = document.createElement("div")
    // divImg.style= "width: 200px"
    // divImg.style= "height: 300px"
    // divImg.style= "overflow:hidden"
    // div.appendChild(divImg)

    let img = document.createElement("img")
    img.classList.add("card-img-top")
    img.src=picURL
    img.style= "width: 10rem"
    img.style= "height: 15rem"
    
    div.appendChild(img)

    // let img = document.createElement("div")
    // img.style.backgroundImage=`url(' ${ picURL} ')`
    // img.style.width= "100px"
    // img.style= "height: 150px"
    // img.style="backgroung-size:cover"
    // div.appendChild(img)

    let divBody =  document.createElement("div")
    divBody.classList.add("card-body")
    div.appendChild(divBody)

    let title =  document.createElement("h5")
    title.classList.add("card-title")
    title.innerHTML=picTitle
    title.dataset.title = "title";
    divBody.appendChild(title)

    let author =  document.createElement("p")
    author.innerHTML=picAuthor
    author.dataset.author = "author";
    divBody.appendChild(author)
    
    let date =  document.createElement("p")
    date.innerHTML=picDate
    date.dataset.date = "date";
    divBody.appendChild(date)

    let anchor = document.createElement("a")
    anchor.classList.add("btn")
    anchor.classList.add("bg-light")
    anchor.dataset.target = "btnAnchor";//to identify the element
    anchor.dataset.url = picURL;//sets the current item image
    divBody.appendChild(anchor)

    let heart =  document.createElement("i")
    heart.classList.add("bi")
    heart.classList.add("bi-heart-fill")
    heart.dataset.target = "heartElement";//to identify the elementc
    anchor.appendChild(heart)
    
}