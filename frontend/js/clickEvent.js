
gallery.addEventListener("click", (e) => {
    let btnAnchor = e.target;
    if(btnAnchor.dataset.target === "btnAnchor"){
        console.log(e.target, "right one", btnAnchor);
    }else if(btnAnchor.dataset.target === "heartElement" ){
        btnAnchor = e.target.parentElement;
        console.log(e.target, "second one", btnAnchor);
    }else{
        console.log("other element");
    }
});

