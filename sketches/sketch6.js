let smallestSize
let myFont
let myFont2

const sketch6 = (s) => {

let data;
s.setup = async function() {
    smallestSize =s.min(s.windowWidth, s.windowHeight);
    s.createCanvas(smallestSize/1.1, smallestSize);

    data = await s.loadTable('assets/data2.csv', ',', 'header');
    s.angleMode(s.DEGREES);
    s.noLoop();

    myFont = await s.loadFont('assets/myFont/Styrene-Regular.otf');
    myFont2 = await s.loadFont('assets/myFont/Styrene-Medium.otf');
}

s.draw = function() {

    s.scale(s.width/800);
    s.background(253, 253, 255);

    let Age= data.getColumn('Age');
    let FEAf= data.getColumn('F E Africa');
    let FEAf1= data.getColumn('F E Africa 1');
    let FEAsia= data.getColumn('F E Asia');
    let FEAsia1= data.getColumn('F E Asia 1');
    let FEEurope= data.getColumn('F E Europe');
    let FEEurope1= data.getColumn('F E Europe 1');
    let FSAsia= data.getColumn('F S Asia');
    let FSAsia1= data.getColumn('F S Asia 1');
    let FSEAsia= data.getColumn('F SE Asia');
    let FSEAsia1= data.getColumn('F SE Asia 1');
    let FWAfrica= data.getColumn('F W Africa');
    let FWAfrica1= data.getColumn('F W Africa 1');
    let MEAf= data.getColumn('M E Africa');
    let MEAf1= data.getColumn('M E Africa 1');
    let MEAsia= data.getColumn('M E Asia');
    let MEAsia1= data.getColumn('M E Asia 1');
    let MEEurope= data.getColumn('M E Europe');
    let MEEurope1= data.getColumn('M E Europe 1');
    let MSAsia= data.getColumn('M S Asia');
    let MSAsia1= data.getColumn('M S Asia 1');
    let MSEAsia= data.getColumn('M SE Asia');
    let MSEAsia1= data.getColumn('M SE Asia 1');
    let MWAfrica= data.getColumn('M W Africa');
    let MWAfrica1= data.getColumn('M W Africa 1');
    let maxAccept= data.getColumn('max Accept');
    let minAccept= data.getColumn('min Accept');
    let Gini= data.getColumn('Gini');


let level = 350
let MLevel = 700
let mod = 250
let trans = 200;
let ind = 130;

s.textFont(myFont);
s.strokeWeight(0.7);
s.stroke(57, 61, 63);
s.fill(57, 61, 63);
s.line(100, level, 740, level);
s.line(100, level, 100, level-mod-10);
s.line(100, MLevel, 100, MLevel-mod-10);
s.line(100, MLevel, 740, MLevel);
s.textAlign(s.CENTER, s.CENTER);
s.text('Age',s.width/2, level+30);
s.text('Age',s.width/2, MLevel+30);
s.text('Female', 150, level-240)
s.text('Male', 150, MLevel-240)
s.push();
s.translate(0, 200)
s.rotate(-90);
s.text('Accept Rates', 0, 50);
s.text('Accept Rates', -300, 50);
s.pop();
s.push();
s.noStroke();
s.textAlign(s.LEFT, s.TOP);
s.text(`For algorithm neurotechnology-000 with Border images, Challenge-25 accept rate by age, sex and region of birth. Lower values are better.
This is made off data published by the National Institute of Standards and Technology in 'Face Analysis Technology Evaluation: Age Estimation and Verification'.`, 60, MLevel+60, 700, 200);
s.pop();

for(let i = 0; i < Age.length; i ++) {
    s.stroke(57, 61, 63);
   s.line(ind+(i)*30, level, ind+(i)*30, level+5);
    s.line(ind+(i)*30, MLevel, ind+(i)*30, MLevel+5);
    s.noStroke();
    s.text(Age[i], ind+(i)*30, level+15);
    s.text(Age[i], ind+(i)*30, MLevel+15);
}
for (let i = 1; i <= 10; i ++) {
    s.stroke(57, 61, 63);
    s.line(100, level-mod*i/10, 95, level-mod*i/10);
    s.line(100, MLevel-mod*i/10, 95, MLevel-mod*i/10);
    s.noStroke();
    s.text(i/10, 80, level-mod*i/10);
    s.text(i/10, 80, MLevel-mod*i/10);
}
s.noStroke();
s.fill(200, 0, 0, 100);



for (let i = 0; i < Age.length; i ++) {
    s.fill(198, 197, 185, trans);
    s.ellipse(ind+(i)*30, level-mod*FEAf[i], 20, mod*(FEAf1[i] * 2));
    s.circle(ind+(i)*30, level-mod*FEAf[i], 5);
    //line(ind+(i)*30, level+mod*FEAf-mod*FEAf1[i], ind+(i)*30, level+mod*FEAf+mod*FEAf1[i]);
    s.fill(84, 106, 123, trans);
    s.ellipse(ind+(i)*30, level-mod*FEAsia[i], 20, mod*(FEAsia1[i] * 2));
    s.circle(ind+(i)*30, level-mod*FEAsia[i], 5);
     s.fill(9, 144, 198, trans);
    s.ellipse(ind+(i)*30, level-mod*FEEurope[i], 20, mod*(FEEurope1[i] * 2));
    s.circle(ind+(i)*30, level-mod*FEEurope[i], 5);
      s.fill(5, 95, 130, trans);
    s.ellipse(ind+(i)*30, level-mod*FSAsia[i], 20, mod*(FSAsia1[i] * 2));
    s.circle(ind+(i)*30, level-mod*FSAsia[i], 5);
       s.fill(22, 73, 110, trans);
    s.ellipse(ind+(i)*30, level-mod*FSEAsia[i], 20, mod*(FSEAsia1[i] * 2));
    s.circle(ind+(i)*30, level-mod*FSEAsia[i], 5);
        s.fill(1, 33, 61, trans);
    s.ellipse(ind+(i)*30, level-mod*FWAfrica[i], 20, mod*(FWAfrica1[i] * 2));
    s.circle(ind+(i)*30, level-mod*FWAfrica[i], 5);
            s.fill(255, 204, 0, 200);
        s.circle(ind+(i)*30, level-mod*FEAf[i], 2);
        s.circle(ind+(i)*30, level-mod*FEAsia[i], 2);
        s.circle(ind+(i)*30, level-mod*FEEurope[i], 2);
        s.circle(ind+(i)*30, level-mod*FSAsia[i], 2);
    s.circle(ind+(i)*30, level-mod*FSEAsia[i], 2);
    s.circle(ind+(i)*30, level-mod*FWAfrica[i], 2);
}


for (let i = 0; i < Age.length; i ++) {
    s.fill(198, 197, 185, trans);
    s.ellipse(ind+(i)*30, MLevel-mod*MEAf[i], 20, mod*(MEAf1[i] * 2));
    s.circle(ind+(i)*30, MLevel-mod*MEAf[i], 5);
    //line(ind+(i)*30, level+mod*FEAf-mod*FEAf1[i], ind+(i)*30, level+mod*FEAf+mod*FEAf1[i]);
    s.fill(84, 106, 123, trans);
    s.ellipse(ind+(i)*30, MLevel-mod*MEAsia[i], 20, mod*(MEAsia1[i] * 2));
    s.circle(ind+(i)*30, MLevel-mod*MEAsia[i], 5);
     s.fill(9, 144, 198, trans);
    s.ellipse(ind+(i)*30, MLevel-mod*MEEurope[i], 20, mod*(MEEurope1[i] * 2));
    s.circle(ind+(i)*30, MLevel-mod*MEEurope[i], 5);
      s.fill(5, 95, 130, trans);
    s.ellipse(ind+(i)*30, MLevel-mod*MSAsia[i], 20, mod*(MSAsia1[i] * 2));
    s.circle(ind+(i)*30, MLevel-mod*MSAsia[i], 5);
       s.fill(22, 73, 110
        , trans);
    s.ellipse(ind+(i)*30, MLevel-mod*MSEAsia[i], 20, mod*(MSEAsia1[i] * 2));
    s.circle(ind+(i)*30, MLevel-mod*MSEAsia[i], 5);
        s.fill(1, 33, 61, trans);
    s.ellipse(ind+(i)*30, MLevel-mod*MWAfrica[i], 20, mod*(MWAfrica1[i] * 2));
    s.circle(ind+(i)*30, MLevel-mod*MWAfrica[i], 5);
        s.fill(255, 204, 0, 200);
        s.circle(ind+(i)*30, MLevel-mod*MEAf[i], 2);
        s.circle(ind+(i)*30, MLevel-mod*MEAsia[i], 2);
        s.circle(ind+(i)*30, MLevel-mod*MEEurope[i], 2);
        s.circle(ind+(i)*30, MLevel-mod*MSAsia[i], 2);
    s.circle(ind+(i)*30, MLevel-mod*MSEAsia[i], 2);
    s.circle(ind+(i)*30, MLevel-mod*MWAfrica[i], 2);
}

s.textAlign(s.LEFT, s.CENTER);
s.textSize(12);
s.fill(57, 61, 63);
s.push();
s.translate(-50, 50);
s.text('East Africa', 680, 510);
s.text('East Asia', 680, 530);
s.text('East Europe', 680, 550);
s.text('South Asia', 680, 570);
s.text('Southeast Asia', 680, 590);
s.text('West Africa', 680, 610);
s.fill(198, 197, 185, trans);//1
s.rect(650, 500, 20, 20);
s.fill(84, 106, 123, trans);//2
s.rect(650, 520, 20, 20);
s.fill(9, 144, 198, trans);//3
s.rect(650, 540, 20, 20);
s.fill(5, 95, 130, trans);//4
s.rect(650, 560, 20, 20);
s.fill(22, 73, 110, trans);//5
s.rect(650, 580, 20, 20);
s.fill(1, 33, 61, trans);//6
s.rect(650, 600, 20, 20);
s.pop();

s.strokeWeight(3)
s.stroke(255, 204, 0);
s.noFill();
s.rect(110, 170, 125, 175);
s.rect(110, 490, 125, 205);
s.fill(255, 204, 0);
s.noStroke();
s.text(`False Positive Rates`, 110, 160);
s.text(`False Positive Rates`, 110, 480);
}
}
myp56 = new p5(sketch6, 'p5sketch6')