
gallery.addEventListener("click", (e) => {
    let btnAnchor = e.target;
   let author= e.author;
    if(btnAnchor.dataset.target === "btnAnchor"){
        postData(btnAnchor.dataset.url);
        console.log(author.dataset.author)
    }else if(btnAnchor.dataset.target === "heartElement" ){
        btnAnchor = e.target.parentElement;
        postData(btnAnchor.dataset.url);
        console.log(author.dataset.author)
    }else{
        console.log("other element");
    }
});

const URLDB= "http://starpicbackend.unexlink.co/api/favorite"
// const URLDB= "http://localhost:4400/api/favorite"
const postData = (link) => {
    fetch(URLDB, {
        method: "POST",
        //metadatos
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "link": link
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}