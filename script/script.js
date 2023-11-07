let aside   = document.querySelector("aside")
let content = document.querySelector("#content")
let nav = document.querySelector(".mobile-nav")
let main = document.querySelector("main")


aside.style.width   = window.innerWidth > 768 ? '40%' : '100%'
aside.style.opacity = '1'
content.style.width = '100%'
nav.style.height    = '0px'
nav.style.opacity   = '0'
asideStatus         = true

async function asideToggle() {
    (()=>{
        return new Promise((resolve, reject)=>{
            aside.style.width   = aside.style.width === '0px' || aside.style.width === "" ? '30%' : '0px'
            aside.style.opacity = aside.style.opacity === '0' || aside.style.opacity === "" ? '1' : '0'
            content.style.width = aside.style.width === '0px' || aside.style.width === "" ? '100%' : '75%'
            asideStatus = !asideStatus
            setTimeout(()=>{
                resolve()
            }, 1000)
        })
    })().then(()=>{
        setSameHeight()
        document.querySelector(".hide-aside button").innerHTML = asideStatus ? "Hide Aside Information >" : "Show Aside Information <"
    })
}

function navToggle() {
    nav.style.height = nav.style.height === '0px' || nav.style.height === "" ? '50dvh' : '0px'
    nav.style.opacity = nav.style.opacity === '0' || nav.style.height === "" ? '1' : '0'
}

function setSameHeight() {
    let highest_card = [...document.querySelectorAll("#project .text-container")].map(e=>window.getComputedStyle(e).getPropertyValue("height")).sort()[0]
    console.log([...document.querySelectorAll("#project .text-container")].map(e=>window.getComputedStyle(e).getPropertyValue("height")).sort())
    let changer      = [...document.querySelectorAll("#project .text-container")].map(e => e.style.height = highest_card + "px")
}