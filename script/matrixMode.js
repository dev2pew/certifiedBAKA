// made by unknown
// modified by chatGPT & sub2pew

document.addEventListener("DOMContentLoaded", function() {
    let matrixR = document.getElementById("matrixRain");
    let ctx = matrixR.getContext("2d");

    // let matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    let matrix = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽゃゅょっアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポャュョッ0123456789@#$%^&*()*&^%";
    matrix = matrix.split("");

    let font_size = 10;
    let columns = Math.floor(matrixR.width / font_size); // calculate initial number of columns
    let drops = [];

    for (let x = 0; x < columns; x++) { // initialize drops array
        drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, matrixR.width, matrixR.height);

        ctx.fillStyle = "#0F0";
        ctx.font = font_size + "px arial";

        for (let i = 0; i < drops.length; i++) {
            let text = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            if (drops[i] * font_size > matrixR.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
            
            /* for (let i = 0; i < drops.length; i++) { // random colored letters
                let r = Math.floor(Math.random() * 256); // generate random colors for each raindrop
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        
                let text = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(text, i * font_size, drops[i] * font_size);
        
                if (drops[i] * font_size > matrixR.height && Math.random() > 0.975)
                    drops[i] = 0;
        
                drops[i]++; */
        }
    }

    function adjustCanvasSize() {
        const currentDrops = drops.slice(); // store the current state of the drops array

        matrixR.height = window.innerHeight;
        matrixR.width = window.innerWidth;

        columns = Math.floor(matrixR.width / font_size); // recalculate number of columns
        drops = [];

        for (let x = 0; x < columns; x++) { // initialize drops array
            if (x < currentDrops.length) {
                drops[x] = currentDrops[x]; // restore the previous state of drops if available
            } else {
                drops[x] = 1;
            }
        }

        draw(); // redraw the rain effect after resizing
    }

    // initial setup and drawing
    adjustCanvasSize(); // call the adjustCanvasSize function to set initial canvas size and draw rain
    window.addEventListener("resize", adjustCanvasSize);

    function drawMatrixRAIN() {
        matrixR.style.display = 'block'; // show matrix after delay
        setInterval(draw, 45); // rain speed
    }

    setTimeout(drawMatrixRAIN, 1550); // delay before firing

    // showHide button
    // made by chatGPT

    const containerBT = document.getElementById('containerBT');

    const hideBT = document.getElementById('hideBT');
    // const showBT = document.getElementById('showBT');
    const goBackBT = document.getElementById('goBackBT');

    hideBT.addEventListener('click', () => {
        containerBT.style.display = 'none';
    });

    /* showBT.addEventListener('click', () => {
        goBackBT.style.transform = 'translateX(0)';
    }); */

    document.addEventListener('keydown', (event) => {
        if (event.key === 'h') {
            containerBT.style.display = 'none';
        }
        else if (event.key === 'x') {
            containerBT.style.display = 'block';
        }
    });

    // hide button delay
    // made by chatGPT

    function makeVisibleBT() {
        containerBT.style.display = 'block';
    }
    
    setTimeout(makeVisibleBT, 5000);
    toggleButtonsVisibility();

    window.addEventListener('resize', toggleButtonsVisibility);
});
