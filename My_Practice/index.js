function button(){
        var ele = document.getElementById("buttoon")
        var t = ele.innerText || ele.textContent

        var source = document.getElementById("frame")

        if(t == "Show Content"){
            source.src = "../Login/login_Page.html"
            ele.innerHTML = "Hide Content"
            // ele.style.background = "#633ad4"
            // ele.style.boxShadow = "3px 5px 5px rgb(140, 119, 200)"
            // ele.style.color = "white"
            source.style.height = "400px"
            source.style.width = "400px"
            document.getElementById("sec").style.paddingLeft="65px"
            document.getElementById("full_View").style.display="inline-block"
        }
         else if(t == "Hide Content"){
            source.src = "frame.html"
            ele.innerHTML = "Show Content"
            // ele.style.background = "green"
            // ele.style.color = "white"
            // ele.style.boxShadow = "3px 6px 7px rgb(112, 233, 112)"
            source.style.height = "150px"
            source.style.width = "300px"
            document.getElementById("sec").style.paddingLeft="83px"
            document.getElementById("full_View").style.display="none"
            
        }
}

function fullView(){
    window.open("../Login/login_page.html").newTab;
}