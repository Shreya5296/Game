var background1, backgroundImg;
var player, playerImg;
var shark, sharkImg, sharkGroup;

function preload() {
    backgroundImg = loadImage("bgImg.jpg");
    sharkImg = loadAnimation("s1.png", "s2.png", "s3.png", "s4.png", "s5.png", "s6.png");
    playerImg = loadAnimation("f1.png", "f2.png", "f3.png", "f4.png", "f5.png", "f6.png", "f7.png", "f8.png", "f9.png", "f10.png", "f11.png", "f12.png", "f13.png", "f14.png", "f15.png", "f16.png");

    sharkGroup = new Group();
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    background1 = createSprite(width / 2, height / 2, width, height);
    background1.addImage("bgImg", backgroundImg);
    background1.scale = 1.3;
    background1.velocityX = -2;

    player = createSprite(160, 300, 50, 80);
    player.addAnimation("player", playerImg);
}

function draw() {
    background(220);

    if (background1.x < width / 2 - 100) {
        background1.x = width / 2
    }

    if (keyDown("UP_ARROW") || touches.length > 0) {
        player.y = player.y - 30;
    }
    if (keyDown("DOWN_ARROW") || touches.length > 0) {
        player.y = player.y + 30;
    }


    spawnShark();

    drawSprites();
}

function spawnShark() {
    if (World.frameCount % 80 == 0) {
        y = random(50, height - 80);
        shark = createSprite(width - 100, y, 10, 10);
        shark.addAnimation("sharkImg", sharkImg);
        shark.velocityX = -10
        shark.lifetime = 150;
        shark.scale = 0.7;

        sharkGroup.add(shark);
    }
}