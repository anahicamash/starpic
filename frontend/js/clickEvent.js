
gallery.addEventListener("click", (e) => {
    let btnAnchor = e.target;
    
    if(btnAnchor.dataset.target === "btnAnchor"){
        // postData(btnAnchor.dataset.picAuthor,btnAnchor.dataset.picTitle,btnAnchor.dataset.picDate,btnAnchor.dataset.url);
        // console.log(btnAnchor.dataset.picAuthor,btnAnchor.dataset.picTitle,btnAnchor.dataset.picDate,btnAnchor.dataset.url);

        let data= {
            author: btnAnchor.dataset.picAuthor,
            title:btnAnchor.dataset.picTitle,
            date:btnAnchor.dataset.picDate,
            url:btnAnchor.dataset.url
        }
        postData(data)

    }else if(btnAnchor.dataset.target === "heartElement" ){
        btnAnchor = e.target.parentElement;
        
        let data= {
            author: btnAnchor.dataset.picAuthor,
            title:btnAnchor.dataset.picTitle,
            date:btnAnchor.dataset.picDate,
            url:btnAnchor.dataset.url
        }
        postData(data, btnAnchor.dataset.picDate)
        
    }else{
        console.log("other element");
    }
});



// const URLDB= "http://starpicbackend.unexlink.co/api/favorite"
const URLDB= "http://localhost:4400/api/favorite"
const postData = (data, picDate) => {
    fetch(URLDB +"/"+ picDate, {
        method: "POST",
        //metadatos
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            data
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}