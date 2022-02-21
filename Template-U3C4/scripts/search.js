function storeSearchterm(term,parent) {

term.map((item)=>{

    let div=document.createElement("div")
    div.id="box"

let image=document.createElement("img")
image.id="image"
image.src=item.urlToImage

let title=document.createElement("h5")
        title.textContent=item.title

let dis=document.createElement("p")
dis.textContent=item.description
        div.append(image,title,dis)
        parent.append(div)


})

}

export default storeSearchterm