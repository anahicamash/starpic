
const key= "l7iyIpVsowrInfdflY0ON9ywQFHMb8aEicUllh4A"
const URL = "https://api.nasa.gov/planetary/apod?api_key=l7iyIpVsowrInfdflY0ON9ywQFHMb8aEicUllh4A&start_date=2021-10-01&end_date=2021-10-24"
const gallery = document.getElementById("content-gallery")


const getData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            data.forEach((element) => {
                if(element.media_type !== "video"){
                    printPictures(element.url, element.title, element?.copyright||"Unknown", element.date)
                    // console.log(element)
                }
                
            });
        })
        .catch(error => console.error(error))
}
getData()

const printPictures = (picURL, picTitle, picAuthor, picDate)=>{
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
    date.innerHTML=picDate
    divBody.appendChild(date)

    let anchor = document.createElement("a")
    anchor.classList.add("btn")
    anchor.classList.add("bg-light")
    anchor.dataset.target = "btnAnchor";//to identify the element
    anchor.dataset.url = picURL;//sets the current item image
    anchor.dataset.picDate = picDate
    anchor.dataset.picAuthor = picAuthor
    anchor.dataset.picTitle = picTitle
    divBody.appendChild(anchor)

    let heart =  document.createElement("i")
    heart.classList.add("bi")
    heart.classList.add("bi-heart-fill")
    heart.dataset.target = "heartElement";//to identify the elementc
    anchor.appendChild(heart)
    
}