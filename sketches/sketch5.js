
const sketch5 = (s) => {

s.setup = async function() {
    let smallestSize = s.min(s.windowWidth,s.windowHeight);
    s.createCanvas(smallestSize/1.1, smallestSize/1.8);

    //s.angleMode(DEGREES);
    s.textAlign(s.CENTER, s.CENTER);
}

s.draw = function () {

    s.scale(s.width/800);
    s.translate(0,-50)
    s.background(253, 253, 255);

s.strokeWeight(5);
s.stroke(255, 204, 0);
s.noFill();
s.beginShape();
s.vertex(10, 190);
s.vertex(750, 190);
s.vertex(750, 160);
s.vertex(790, 200);
s.vertex(750, 240);
s.vertex(750, 210);
s.vertex(10, 210);
s.vertex(10, 190);
s.endShape();

s.beginShape();
s.vertex(10, 390);
s.vertex(750, 390);
s.vertex(750, 360);
s.vertex(790, 400);
s.vertex(750, 440);
s.vertex(750, 410);
s.vertex(10, 410);
s.vertex(10, 390);
s.endShape();

s.push();
s.textAlign(s.LEFT);
s.strokeWeight(1);
s.stroke(22, 73, 110);
s.fill(22, 73, 110);
s.textSize(20);
s.text(`Facial Recognition`, 50, 100);
s.text(`Facial Age Estimation`, 50, 300);
s.pop();
    for (let i=0; i<5; i++) {
        s.push();
        s.strokeWeight(10);
        s.stroke(255, 204, 0);
        s.fill(255, 204, 0);
        s.textSize(150);
    s.text(i+1, 100 + i*150, 200);
    s.pop();
}

    for (let i=0; i<6; i++) {
        s.push();
        s.strokeWeight(10);
        s.stroke(255, 204, 0);
        s.fill(255, 204, 0);
        s.textSize(150);
    s.text(i+1, 100 + i*120, 400);
    s.pop();
}


s.textSize(18)
s.strokeWeight(1);
s.stroke(22, 73, 110);
s.fill(22, 73, 110);

//facial recogniton
s.text(`Image 
Capture`, 100, 200);
s.text(`Facial 
Detection`, 250, 200);
s.text(`Feature 
Extraction`, 400, 200);
s.text(`Comparison`, 550, 200);
s.text(`Verification`, 700, 200);



//facial age estimation
s.text(`Image 
Capture`, 100, 400);
s.text(`Facial 
Detection`, 220, 400);
s.text(`Feature 
Extraction`, 340, 400);
s.text(`Comparison`, 460, 400);
s.text(`Age 
Categorisation`, 580, 400);
s.text(`Prediction`, 700, 400);

s.textSize(18)
s.strokeWeight(0.5);
s.stroke(9, 144, 198);
s.fill(9, 144, 198);
s.textSize(12);

//facial recognion more
s.text(`Matrix Measured 
Between Features`, 480, 250);
s.text(`Compared to 
Trained Photo`, 630, 150);


//facial recognion lines

s.strokeWeight(3);
s.circle(420, 250, 8)
s.line(400, 220, 400, 250);
s.line(400, 250, 420, 250);

s.circle(570, 150, 8)
s.line(550, 180, 550, 150);
s.line(550, 150, 570, 150);

s.circle(200, 200, 8)
s.line(140, 200, 200, 200);
s.circle(350, 200, 8)
s.line(290, 200, 350, 200);
s.circle(490, 200, 8)
s.line(440, 200, 490, 200);
s.circle(650, 200, 8)
s.line(605, 200, 650, 200);

//facial age estimation lines 

s.circle(175, 400, 8)
s.line(140, 400, 175, 400);
s.circle(295, 400, 8)
s.line(260, 400, 295, 400);
s.circle(405, 400, 8)
s.line(380, 400, 405, 400);
s.circle(540, 400, 8)
s.line(510, 400, 540, 400);
s.circle(650, 400, 8)
s.line(630, 400, 650, 400);

s.textSize(18)
s.strokeWeight(0.5);
s.stroke(9, 144, 198);
s.fill(9, 144, 198);
s.textSize(12);

//facial age estimation more
s.text(`Liveness Check`, 290, 450);
s.text(`Compared to Data 
of Other Faces`, 540, 350);
s.text(`Pixel 
Analysis`, 390, 350);
s.text(`Pattern 
Recognition`, 390, 450);
s.text(`Map Structual 
Distances`, 540, 450);
s.text(`Various LLMs Often 
with Racial Bias`, 580, 315);
s.text(`Skin Texture`, 500, 490);
s.text(`Facial 
Micro-Textures`, 640, 475);
s.text(`Bone Structure`, 680, 450);
s.text(`Categorical Match 
or Non-match`, 700, 250);
s.text(`Rough Age Estimate for 
Similar Categorised Features`, 700, 350);

// -bone structure


//facial age estimation lines
s.strokeWeight(3);
s.circle(240, 450, 8)
s.line(220, 420, 220, 450);
s.line(220, 450, 240, 450);

s.circle(480, 350, 8)
s.line(455, 380, 455, 350);
s.line(455, 350, 480, 350);

s.circle(360, 350, 8)
s.line(335, 380, 335, 350);
s.line(335, 350, 360, 350);

s.circle(430, 450, 8)
s.line(455, 420, 455, 450);
s.line(455, 450, 430, 450);

s.circle(520, 315, 8)
s.line(500, 315, 500, 330);
s.line(520, 315, 500, 315);

s.circle(500, 460, 8)
s.line(455, 420, 455, 450);
s.line(500, 460, 430, 460);

s.circle(455, 490, 8)
s.line(390, 470, 390, 490);
s.line(390, 490, 455, 490);

s.circle(590, 475, 8)
s.line(410, 470, 410, 475);
s.line(590, 475, 410, 475);

s.circle(630, 450, 8)
s.line(580, 450, 630, 450);

s.circle(700, 370, 8)
s.line(700, 370, 700, 385);

s.circle(700, 230, 8)
s.line(700, 230, 700, 210);
}
}

myp55 = new p5(sketch5, 'p5sketch5');