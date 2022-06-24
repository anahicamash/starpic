
gallery.addEventListener("click", (e) => {
    let btnAnchor = e.target;
    
    if(btnAnchor.dataset.target === "btnAnchor"){
        deleteData(btnAnchor.dataset.id);
        // console.log(btnAnchor.dataset.picAuthor,btnAnchor.dataset.picTitle,btnAnchor.dataset.picDate,btnAnchor.dataset.url);

    }else if(btnAnchor.dataset.target === "heartElement" ){
        btnAnchor = e.target.parentElement;
        deleteData(btnAnchor.dataset.id);
        
    }else{
        console.log("other element");
    }
});



// const URLDB= "http://starpicbackend.unexlink.co/api/favorite"
const URLDB= "http://localhost:4400/api/favorite"
const deleteData = (id) => {
    fetch(URLDB + "/" + id,{
        method:"DELETE",
        headers: {
            "content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}