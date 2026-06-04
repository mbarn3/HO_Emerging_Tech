const sketch3 = (s) => {

    let direction = '';
    let size = 0;
    let w = s.windowWidth
    let h = s.windowHeight
    let smallestSize;
    let add;
    let myFont;

    s.setup = async function() {
        smallestSize = s.min(w,h);
        
        s.createCanvas(smallestSize/1.1,smallestSize/1.8);
        add = 7000 - (s.width-s.height)*2;

        s.textAlign(s.CENTER, s.CENTER);

        myFont = await s.loadFont('assets/myFont/Styrene-Regular.otf');
    }

    s.draw = function() {
        s.textFont(myFont);
    //s.translate(,);
        s.background(253, 253, 255);

        s.noStroke();
        s.fill(255, 0, 0);
        s.scale((s.width/800))
        s.translate(0,-350)

        if (window.scrollY < 100 + add) {
            s.fill(255, 204, 0, 255 - s.map(window.scrollY, 100+ add, 200+ add, 0, 255));
            s.circle(400, 600, 200);
            s.textSize(30)
            s.fill(57, 61, 63);
            s.text("Asylum Cases", 400, 600);
        } else if (window.scrollY < 200 + add && window.scrollY >= 100 + add) {
            
            s.noStroke();
            s.textSize(30)
            s.fill(57, 61, 63, 255 - s.map(window.scrollY, 100+ add, 200+ add, 0, 255));
            s.text("Asylum Cases", 400, 600);
            s.fill(255, 204, 0, 255 - s.map(window.scrollY, 100+ add, 200+ add, 0, 255));
            s.circle(400, 600, 200 - s.map(window.scrollY, 100+ add, 200+ add, 0, 200));
            s.fill(22, 73, 110, s.map(window.scrollY, 100+ add, 200+ add, 0, 255));
            s.circle(400 - 2 * s.map(window.scrollY, 100+ add, 200+ add, 0, 50), s.map(window.scrollY, 100+ add, 200+ add, 600, 525), 2 * s.map(window.scrollY, 100+ add, 200+ add, 0, 61))
            s.fill(9, 144, 198, s.map(window.scrollY, 100+ add, 200+ add, 0, 255));
            s.circle(400 + 2 * s.map(window.scrollY, 100+ add, 200+ add, 0, 50), s.map(window.scrollY, 100+ add, 200+ add, 600, 525), 2 * s.map(window.scrollY, 100+ add, 200+ add, 0, 39))
            s.textSize(20);
            s.fill(57, 61, 63, s.map(window.scrollY, 100+ add, 200+ add, 0, 255));
            s.text("2025", 410, s.map(window.scrollY, 100+ add, 200+ add, 600, 525));
            s.text("Granted", s.map(window.scrollY, 100+ add, 200+ add, 400, 560), 600);
            s.text("Denied", s.map(window.scrollY, 100+ add, 200+ add, 400, 215), 600);

        } else if (window.scrollY >= 200+ add && window.scrollY < 250+ add) {
        s.fill(255, 204, 0, s.map(window.scrollY, 200+ add, 250+ add, 0, 100));
        s.beginShape();
    s.vertex(300, 464);
    s.vertex(300, 586);
    s.vertex(500, 564);
    s.vertex(500, 486);
        s.endShape();
            s.textSize(20);
            s.fill(57, 61, 63);
            s.text("2025", 410, 525);
            s.text("Granted", 560, 600);
            s.text("Denied", 215, 600);
            s.fill(22, 73, 110);
            s.circle(300, 525, 122);
            s.fill(9, 144, 198);
            s.circle(500, 525, 78);
            s.textSize(14)
            s.fill(57, 61, 63, s.map(window.scrollY, 200+ add, 250+ add, 0, 255))
            s.text("61%", 200, 525);
            s.text("39%", 580, 525);
            
        } else if (window.scrollY > 250+ add && window.scrollY < 350+ add) {
        s.fill(255, 204, 0, 100);
        s.beginShape();
    s.vertex(300, 464);
    s.vertex(300, 586);
    s.vertex(500, 564);
    s.vertex(500, 486);
        s.endShape();
            s.textSize(20);
            s.fill(57, 61, 63);
            s.text("2025", 410, 525);
            s.text("Granted", 560, 600);
            s.text("Denied", 215, 600);
            s.fill(22, 73, 110);
            s.circle(300, 525, 122);
            s.fill(9, 144, 198);
            s.circle(500, 525, 78);
            s.textSize(14)
            s.fill(57, 61, 63, s.map(window.scrollY, 200+ add, 250+ add, 0, 255))
            s.text("61%", 200, 525);
            s.text("39%", 580, 525);

        s.textSize(20);
            s.fill(57, 61, 63, s.map(window.scrollY, 250+ add, 350+ add, 0, 255));
            s.text("2020", s.map(window.scrollY, 250+ add, 350+ add, 410, 335), 525+2 * s.map(window.scrollY, 250+ add, 350+ add, 0, 75));
            s.fill(22, 73, 110, s.map(window.scrollY, 250+ add, 350+ add, 0, 255));
            s.circle(s.map(window.scrollY, 250+ add, 350+ add, 300, 260), 525+2 * s.map(window.scrollY, 250+ add, 350+ add, 0, 75), 2 * s.map(window.scrollY, 250+ add, 350+ add, 0, 23))
            s.fill(9, 144, 198, s.map(window.scrollY, 250+ add, 350+ add, 0, 255)); ///
            s.circle(s.map(window.scrollY, 250+ add, 350+ add, 500, 460), 525+2 * s.map(window.scrollY, 250+ add, 350+ add, 0, 75), 2 * s.map(window.scrollY, 250+ add, 350+ add, 0, 77))
            s.fill(255, 204, 0, s.map(window.scrollY, 250+ add, 350+ add, 0, 255));
            s.textSize(20);
            s.fill(57, 61, 63);
            s.text("2025", 410, 525);
            s.text("Granted", 560, 600);
            s.text("Denied", 215, 600);

        } else if (window.scrollY >= 350+ add && window.scrollY < 400+ add) {

        s.fill(255, 204, 0, 100);
        s.beginShape();
    s.vertex(300, 464);
    s.vertex(300, 586);
    s.vertex(500, 564);
    s.vertex(500, 486);
        s.endShape();
    s.fill(255, 204, 0, s.map(window.scrollY, 350+ add, 400+ add, 0, 100))
                s.beginShape();
            s.vertex(260, 652);
            s.vertex(260, 698);
            s.vertex(460, 752);
            s.vertex(460, 598);
        s.endShape();

        s.push();
                s.textSize(14)
            s.fill(57, 61, 63, s.map(window.scrollY, 350+ add, 400+ add, 0, 255))
        s.text("23%", 200, 675);
        s.text("77%", 580, 675);
        s.pop();
                s.textSize(20);
                s.fill(22, 73, 110);
            s.circle(300, 525, 122);
            s.fill(9, 144, 198);
            s.circle(500, 525, 78);
            s.textSize(14)
            s.fill(57, 61, 63)
            s.text("61%", 200, 525);
            s.text("39%", 580, 525);

        s.textSize(20);
            s.fill(57, 61, 63);
            s.text("2020", 335, 675);
            s.fill(22, 73, 110);
            s.circle(260, 675, 46)
            s.fill(9, 144, 198);
            s.circle(460, 675, 154)
            s.fill(57, 61, 63);
            s.textSize(20);
            s.text("2025", 410, 525);
            s.text("Granted", 560, 600);
            s.text("Denied", 215, 600);

    } else if (window.scrollY >= 400+ add) {
        s.fill(255, 204, 0, 100);
        s.beginShape();
    s.vertex(300, 464);
    s.vertex(300, 586);
    s.vertex(500, 564);
    s.vertex(500, 486);
        s.endShape();

            s.beginShape();
    s.vertex(260, 652);
    s.vertex(260, 698);
    s.vertex(460, 752);
    s.vertex(460, 598);
        s.endShape();
            s.fill(22, 73, 110);
            s.circle(300, 525, 122);
            s.fill(9, 144, 198);
            s.circle(500, 525, 78);
            s.fill(57, 61, 63);
            s.textSize(20);
            s.text("2025", 410, 525);
            s.textSize(14)
            s.text("61%", 200, 525);
            s.text("39%", 580, 525);
            s.text("23%", 200, 675);
        s.text("77%", 580, 675);

    s.fill(22, 73, 110);
            s.circle(260, 675, 46)
            s.fill(9, 144, 198);
            s.circle(460, 675, 154)
            s.fill(57, 61, 63);
            s.textSize(20);
            s.text("2020", 335, 675);
            s.text("2025", 410, 525);
            s.text("Granted", 560, 600);
            s.text("Denied", 215, 600);
    }


    // [10:54 AM]$gunmetal: rgba(57, 61, 63, 1);
    // $silver: rgba(22, 73, 110, 1);
    // $white: rgba(253, 253, 255, 1);
    // $blue-slate: rgba(9, 144, 198, 1);
    // $yale-blue: rgba(22, 73, 110, 1);
    // $ocean-blue: rgba(9, 144, 198, 1);
    // $bright-amber: rgba(255, 204, 0, 1);

    }
   
}

let myp5_3 = new p5(sketch3,'p5sketch3');