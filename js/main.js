

window.addEventListener("mousemove",function(e){
    let posX=e.clientX

    let posY=e.clientY

    cursordot.style.left=`${posX}px`
    cursordot.style.top=`${posY}px`

    //cursoroutline.style.left=`${posX}px`
    //cursoroutline.style.top=`${posY}px`


    cursoroutline.animate({
        left:`${posX}px`,
        top:`${posY}px`,

    },{duration:500,fill:"forwards"})
})








let intro=document.querySelector(".intro")
let logo=document.querySelector(".logo-header")
let logospan=document.querySelectorAll(".intro-logo")


window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        logospan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add("activation");
            },(idx+1)*400)
        })


        setTimeout(()=>{
            logospan.forEach((span,idx)=>{
                setTimeout(()=>{
                    span.classList.remove("activation")
                    span.classList.add("fade")
                }, (idx+1)*50)
            })
        },2000)


        setTimeout(()=>{
            intro.style.top="-100vh"
        }, 2300)
    })
})
let skillsSec=document.querySelector(".skills-info")
let line=document.querySelector(".skill-line-white")
let line1=document.querySelector(".skill-line-white1")
let line2=document.querySelector(".skill-line-white2")
let line3=document.querySelector(".skill-line-white3")

window.onscroll=function(){
    if(window.scrollY>=skillsSec.offsetTop-400){
        line.classList.add("reached")
        line1.classList.add("reached")
        line2.classList.add("reached")
        line3.classList.add("reached")
    }
}

 
    
