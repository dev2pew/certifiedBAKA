// modify text on click event

function clickTXT01() {
    setTimeout(() => {
        addEventListener('mouseenter', (event) => {});
        addEventListener('mouseleave', (event) => {});

        document.getElementById("changeTXT01").innerHTML = "+7 708 848 9066";
        document.getElementById("changeTXT01").style = "color: rgb(170, 200, 255)";
        
        document.getElementById("changeTXT01").href = "https://wa.me/+77088489066";
        document.getElementById("changeTXT01").onclick = "return confirm('[ ? ] do you really want to open this link ?')";
        document.getElementById("changeTXT01").target = "_blank";
    })
}

function clickTXT02() {
    setTimeout(() => {
        addEventListener('mouseenter', (event) => {});
        addEventListener('mouseleave', (event) => {});

        document.getElementById("changeTXT02").innerHTML = "+7 777 073 2414";
        document.getElementById("changeTXT02").style = "color: rgb(170, 200, 255)";
        
        document.getElementById("changeTXT02").href = "https://wa.me/+77770732414";
        document.getElementById("changeTXT02").onclick = "return confirm('[ ? ] do you really want to open this link ?')";
        document.getElementById("changeTXT02").target = "_blank";
    })
}
