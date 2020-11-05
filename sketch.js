var ball;
var ball2;
var database,position;

function setup(){

    database = firebase.database();

    createCanvas(500,500);
    ball2 = createSprite(250,250,10,10);
    ball2.shapeColor = "red";

    var ball2pos = database.ref('ball/position');
    ball2pos.on("value",readPosition,showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
       writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){

position = data.val();
ball2.x = position.x;
ball2.y = position.y;

}

function writePosition(x,y){

database.ref('ball/position').set({

'x':position.x+x,
'y':position.y+y

})

}

function showError(){

console.log("Error In Writting The Database");

}
