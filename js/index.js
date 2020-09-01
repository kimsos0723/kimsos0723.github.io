
let funcMargenWrapContent = function () {
    let element = document.getElementById("wrap_content");
    if (window.innerWidth <= 1000) {
        element.style.margin = '0 auto 0 auto';
        console.log("small");
    }
    else {
        element.style.margin = '78px auto 0 auto';
        console.log("big");
    }
}

let posts_json = `[
    {
        "title": "mathmetical_base_of_AES",
        "date": "2020. 9. 1.",
        "thumb_content": "This post is organizing toughts of mathmetical base of AES, I refer to Youtube Video that 'Lecture 7: Introduction to Galois Fields for the AES by Christof Paar'. This videos very kindly explain for newbies",
        "thumb_img": "image/aes.png",
        "path": "mathmetical_base_of_AES.html"
    }
]`

let jsonToElements = function (){
    
    let wrapContents = document.getElementById('wrap_content');
    let posts = JSON.parse(posts_json);
    for(let i = 0; i < posts.length; i++){
        let innerContent = document.createElement("div");        
        innerContent.className = "inner_content";
        // innerContent.onclick = location.href = posts[i].path;
        
        let thumbImg = document.createElement("div");
        thumbImg.className = "thumb_img";
        thumbImg.style.backgroundImage = "url("+posts[i].thumb_img.replace(/['"]+/g, '')+")";

        let thumbContent = document.createElement("div");
        thumbContent.className = "content_thumb";
        
        let thumbContentTitle = document.createElement("strong");
        thumbContentTitle.innerText = posts[i].title;
        
        let thumbContentText = document.createElement("p");
        thumbContentText.innerText = posts[i].thumb_content;

        let thumbContentDate = document.createElement("p");
        thumbContentDate.innerText = posts[i].date;

        
        thumbContent.appendChild(thumbContentTitle);
        thumbContent.appendChild(thumbContentText);
        thumbContent.appendChild(thumbContentDate);

        innerContent.appendChild(thumbContent);
        innerContent.appendChild(thumbImg);
        wrapContents.appendChild(innerContent);
    }
}

let onload = function () {
    funcMargenWrapContent();
    jsonToElements();
};
window.onload = onload;

window.addEventListener("resize", function () {
    funcMargenWrapContent();
});
