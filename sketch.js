var mario_running, road_running, danger_plant, knight_running, mario_stand, red_mushroom; cactus_image;
var mario, road, cactus, knight, plant;
function preload(){
    
    mario_running = loadAnimation("Mario_run.png", "Mario_stand.png");
    knight_running = loadAnimation("Pixelated_knight_standing.png", "Pixelated_knight_running.png");
    road_running = loadImage("Roadimage.jpg");
    cactus_image = loadImage("Pixelated_cactus.png");
    red_mushroom_image = loadImage("Red_mushroom.jpg");
    
}

function setup() {
    createCanvas(1000,1000)
    mario = createSprite(50,180,20,50);
    mario.addAnimation("MARIO RUN", mario_running);
    mario.scale = 0.5;

    knight = createSprite(40,170,20,50);
    knight.addAnimation("KNIGHT RUN", knight_running);
    knight.scale = 0.5;

    
    
    
 
}

function draw() {
    drawSprites();
 
}