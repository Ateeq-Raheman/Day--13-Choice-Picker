const tagsel = document.getElementById("tags")
const textarea = document.getElementById("textarea")
textarea.focus()
textarea.addEventListener("keyup", (e) => {
    console.log(e)
    createTags(e.target.value)
    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ""
        }, 10)

        randomSelect()

    }
})
function createTags(input) {
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim())
    tagsel.innerHTML = ""
    console.log(tags)
    tags.forEach(tag => {
        const tagel = document.createElement("span")
        tagel.classList.add("tag")
        tagel.innerText = tag
        tagsel.appendChild(tagel)
    })
}
function randomSelect() {
    const times = 30
    const interval = setInterval(() => {
        const randomtag = pickrandomtag()
        highlighttag(randomtag)
        setTimeout(() => {
            unhighlighttag(randomtag)
        }, 100)
    }, 100);
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomtag = pickrandomtag()
            highlighttag(randomtag)
        }, 100)
    }, times * 100)
}

function pickrandomtag() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}
function highlighttag(tag) {
    tag.classList.add("highlight")
}

function unhighlighttag(tag) {
    tag.classList.remove("highlight")
}