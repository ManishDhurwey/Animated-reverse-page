window.addEventListener("mousemove",function (dets) {

    let X = dets.clientX
    let Y = dets.clientY

    setTimeout(function () {
         document.querySelector("#circle").style.top = `${Y}px`
         document.querySelector("#circle").style.left = `${X}px`
    },50)

    
})

var clutter = "";

