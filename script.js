window.onload = function () {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pathImage = new Image();
    const treeImage = new Image();

    // Since you're not using a folder, the images are just named directly
    pathImage.src = 'yellowbrick.jpg';
    treeImage.src = 'tree.png';

    let pathReady = false;
    let treeReady = false;

    pathImage.onload = function () {
        pathReady = true;
        draw();
    };

    treeImage.onload = function () {
        treeReady = true;
        draw();
    };

    function draw() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw path if ready
        if (pathReady) {
            drawPath();
        }

        // Draw trees if ready
        if (treeReady) {
            drawTrees();
        }

        // More game elements can be drawn later
    }

    function drawPath() {
        // Drawing a simple looping path in the middle of the canvas
        const pathWidth = 200;
        const pathHeight = 400;
        const pathX = canvas.width / 2 - pathWidth / 2;
        const pathY = canvas.height / 2 - pathHeight / 2;

        // Draw the path in two parts (looping effect)
        ctx.drawImage(pathImage, pathX, pathY, pathWidth, pathHeight);
        ctx.drawImage(pathImage, pathX - 150, pathY + 150, pathWidth, pathHeight - 150);
    }

    function drawTrees() {
        // Randomly place some trees around the map
        const treePositions = [
            { x: 100, y: 100 },
            { x: 300, y: 400 },
            { x: 600, y: 200 },
            { x: 700, y: 500 },
            { x: 400, y: 100 },
        ];

        treePositions.forEach(pos => {
            ctx.drawImage(treeImage, pos.x, pos.y, 50, 50);
        });
    }

    // Handle window resize
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw(); // Redraw everything on resize
    });
};
