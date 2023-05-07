for (var ANGLE = 45, panel = document.getElementsByClassName("wowpanels"), i = 0; i < panel.length; i++) floatable(panel[i]);

function floatable(t) {
    t.addEventListener("mouseout", (e => {
        t.style.transform = "perspective(300px)\n\t\t\t\t\t\t\t\t   rotateX(0deg)\n\t\t\t\t\t\t\t\t   rotateY(0deg)\n\t\t\t\t\t\t\t\t   rotateZ(0deg)"
    })), t.addEventListener("mousemove", (e => {
        var n = t.clientWidth, a = t.clientHeight, o = (e.offsetX - .5 * n) / n * ANGLE,
            r = (1 - (e.offsetY - .5 * a)) / a * ANGLE;
        t.style.transform = `perspective(300px)\n\t\t\t\t\t\t\t\t   rotateX(${r}deg)\n\t\t\t\t\t\t\t\t   rotateY(${o}deg)`
    }))
}
