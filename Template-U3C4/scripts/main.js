

async function apiCall(url) {


    //add api call logic here

    try{
          let res= await fetch(url)

          let data= res.json()
          return data
        }
    catch(err){
        console.log(err)
    }


}


function appendArticles(articles, main) {

    // add append logic here

    articles.map((item)=>{


        let div=document.createElement("div")
        div.id="box"
        div.addEventListener("click",()=>{
            localStorage.setItem("article",JSON.stringify(item))
            window.location.href="news.html"
        })

        let image=document.createElement("img")
        image.id="image"
        image.src=item.urlToImage

        let title=document.createElement("p")
        title.textContent=item.title
        div.append(image,title)

        main.append(div)

    })

}

export { apiCall, appendArticles }