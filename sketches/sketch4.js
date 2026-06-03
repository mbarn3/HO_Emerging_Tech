const sketch4 = (s) => {

let jeff = 0;
let myFont;
let myFont2;
let scaleFactor;

s.setup = async function() {
        let smallestSize = s.min(s.windowWidth,s.windowHeight);
        //console.log(smallestSize)
        s.createCanvas(smallestSize/1.1, smallestSize/2.1);

  //s.createCanvas(1500, 1500);
myFont = await s.loadFont('assets/myFont/Styrene-Medium.otf');
myFont2 = await s.loadFont('assets/myFont/Styrene-Black.otf');
}

s.draw = function() {
  scaleFactor = s.width/1000
    s.scale(scaleFactor)
    s.background(253, 253, 255);

// Title and further information about data
    s.textFont(myFont);
    s.textSize(20);
    s.text("Total Awaiting Initial Asylum Decision Work in Progress (WIP)", 185, 50);
    s.push();
    s.fill(252, 218, 78);
    s.textSize(12);
    s.textAlign(s.RIGHT);
    s.textFont(myFont2);
    s.text("2026 Q1 Total Claims: 36,868", 925, 425);
    s.pop();
    s.textFont(myFont);
    s.textSize(12);
    s.text(`'Age of Asylum Operations Initial Decision Work In Progress (WIP)' is a specific
    statistical metric used by the UK Home Office to measure the time taken to 
    process a claim. It calculates the average number of days that asylum applications
    have been waiting without an initial decision.`, 75, 415, 900, 200);
    

// less than 3 months 
if (s.mouseX > 75*scaleFactor && s.mouseX < 325*scaleFactor && s.mouseY > 95*scaleFactor && s.mouseY < 295*scaleFactor) {
    for (let a=0; a<25; a++) { 
     for (let b=0; b<20; b++) {
        s.noStroke();
        s.fill(252, 218, 78);
        s.ellipse(a*10+80, b*10+100, 8, 8);
        s.rect(100, 230, 190, 20);
        s.fill(57, 61, 63);
        s.textFont(myFont);       
        s.textSize(14); 
        s.text("Less than 3 months - 29%", 105, 245);}
     }
     for (let a=0; a<24; a++) { 
     for (let b=0; b<10; b++) {
        s.noStroke();
        s.fill(252, 218, 78);
        s.ellipse(a*10+80, b*10+300, 8, 8); 
      s.rect(100, 230, 190, 20);
        s.fill(57, 61, 63);
        s.textFont(myFont);
        s.textSize(14); 
        s.text("Less than 3 months - 29%", 105, 245);}
     }
    } else if (s.mouseX > 75*scaleFactor && s.mouseX < 315*scaleFactor && s.mouseY > 295*scaleFactor && s.mouseY < 395*scaleFactor){
//   text("in", 50, 50); 
    for (let a=0; a<25; a++) { 
     for (let b=0; b<20; b++) {
        s.noStroke();
        s.fill(252, 218, 78);
        s.ellipse(a*10+80, b*10+100, 8, 8); 
        s.rect(100, 230, 190, 20);
        s.textFont(myFont);
        s.fill(57, 61, 63);        
        s.textSize(14); 
        s.text("Less than 3 months - 29%", 105, 245);}
     }
     for (let a=0; a<24; a++) { 
     for (let b=0; b<10; b++) {
        s.noStroke();
        s.fill(252, 218, 78);
        s.ellipse(a*10+80, b*10+300, 8, 8); 
        s.rect(100, 230, 190, 20);
        s.fill(57, 61, 63);
        s.textFont(myFont);
        s.textSize(14); 
        s.text("Less than 3 months - 29%", 105, 245);
      }
     }
    } else { 
//       text("out", 50, 50);     
        for (let a=0; a<25; a++) { 
     for (let b=0; b<20; b++) {
        s.noStroke();
        s.fill(198, 197, 185);
        s.ellipse(a*10+80, b*10+100, 8, 8); }
     }
     for (let a=0; a<24; a++) { 
     for (let b=0; b<10; b++) {
        s.noStroke();
        s.fill(198, 197, 185);
        s.ellipse(a*10+80, b*10+300, 8, 8); }
     }
    }  

// 3-6 months
if (s.mouseX > 325*scaleFactor && s.mouseX < 475*scaleFactor && s.mouseY > 95*scaleFactor && s.mouseY < 385*scaleFactor) {
//    text("in", 50, 50); 
for (let a=0; a<15; a++) {
     for (let b=0; b<29; b++) {
       s.noStroke();
       s.fill(252, 218, 78); 
       s.ellipse(a*10+330, b*10+100, 8, 8); 
      s.rect(330, 230, 140, 20);
        s.fill(57, 61, 63);
        s.textFont(myFont);
        s.textSize(14); 
        s.text("3-6 months - 18%", 338, 245);}
     } 
     for (let a=0; a<15; a++) {
     for (let b=0; b<10; b++) {
       s.noStroke();
       s.fill(252, 218, 78); 
       s.ellipse(a*10+320, b*10+300, 8, 8); 
      s.rect(330, 230, 140, 20);
        s.fill(57, 61, 63);   
        s.textFont(myFont);     
        s.textSize(14); 
        s.text("3-6 months - 18%", 338, 245);}
     }
 } else if (s.mouseX > 315*scaleFactor && s.mouseX < 465*scaleFactor && s.mouseY > 295*scaleFactor && s.mouseY < 395*scaleFactor){
     for (let a=0; a<15; a++) {
     for (let b=0; b<29; b++) {
       s.noStroke();
       s.fill(252, 218, 78); 
       s.ellipse(a*10+330, b*10+100, 8, 8); 
      s.rect(330, 230, 140, 20);
        s.fill(57, 61, 63);  
        s.textFont(myFont);     
        s.textSize(14); 
        s.text("3-6 months - 18%", 338, 245);}
     } 
     for (let a=0; a<15; a++) {
     for (let b=0; b<10; b++) {
       s.noStroke();
       s.fill(252, 218, 78); 
       s.ellipse(a*10+320, b*10+300, 8, 8); 
      s.rect(330, 230, 140, 20);
        s.fill(57, 61, 63); 
        s.textFont(myFont);       
        s.textSize(14); 
        s.text("3-6 months - 18%", 338, 245);}
     }
    } else {
       for (let a=0; a<15; a++) {
     for (let b=0; b<29; b++) {
       s.noStroke();
       s.fill(84, 106, 123); 
       s.ellipse(a*10+330, b*10+100, 8, 8); }
     } 
     for (let a=0; a<15; a++) {
     for (let b=0; b<10; b++) {
       s.noStroke();  
       s.fill(84, 106, 123); 
       s.ellipse(a*10+320, b*10+300, 8, 8); }
     } 
    }
    
// 6-12 months
if (s.mouseX > 475*scaleFactor && s.mouseX < 675*scaleFactor && s.mouseY > 95*scaleFactor && s.mouseY < 245*scaleFactor) {
//    text("in", 50, 50); 
for (let a=0; a<20; a++) {
     for (let b=0; b<15; b++) {
       s.noStroke();
       s.fill(252, 218, 78); 
       s.ellipse(a*10+480, b*10+100, 8, 8); 
        s.rect(500, 230, 150, 20);
        s.fill(57, 61, 63); 
        s.textFont(myFont);       
        s.textSize(14); 
        s.text("6 - 12 months - 23%", 505, 245);}
     } 
     for (let a=0; a<19; a++) {
     for (let b=0; b<14; b++) {
       s.noStroke();
       s.fill(252, 218, 78); 
       s.ellipse(a*10+480, b*10+250, 8, 8);
        s.rect(500, 230, 150, 20);
        s.fill(57, 61, 63);  
        s.textFont(myFont);      
        s.textSize(14); 
        s.text("6 - 12 months - 23%", 505, 245);}
     }
     for (let a=0; a<20; a++) {
       s.noStroke();
       s.fill(252, 218, 78); 
       s.ellipse(a*10+470, 390, 8, 8); 
       s.rect(500, 230, 150, 20);
        s.fill(57, 61, 63);    
        s.textFont(myFont);   
        s.textSize(14); 
        s.text("6 - 12 months - 23%", 505, 245);}

 } else if (s.mouseX > 475*scaleFactor && s.mouseX < 675*scaleFactor && s.mouseY > 245*scaleFactor && s.mouseY < 395*scaleFactor){
    for (let a=0; a<20; a++) {
     for (let b=0; b<15; b++) {
       s.noStroke();
       s.fill(252, 218, 78); 
       s.ellipse(a*10+480, b*10+100, 8, 8); 
        s.rect(500, 230, 150, 20);
        s.fill(57, 61, 63);  
        s.textFont(myFont);      
        s.textSize(14); 
        s.text("6 - 12 months - 23%", 505, 245);}
     } 
     for (let a=0; a<19; a++) {
     for (let b=0; b<14; b++) {
       s.noStroke();
       s.fill(252, 218, 78); 
       s.ellipse(a*10+480, b*10+250, 8, 8); 
       s.rect(500, 230, 150, 20);
        s.fill(57, 61, 63);   
        s.textFont(myFont);    
        s.textSize(14); 
        s.text("6 - 12 months - 23%", 505, 245);}
     }
     for (let a=0; a<20; a++) {
       s.noStroke();
       s.fill(252, 218, 78); 
       s.ellipse(a*10+470, 390, 8, 8); 
       s.rect(500, 230, 150, 20);
        s.fill(57, 61, 63); 
        s.textFont(myFont);      
        s.textSize(14); 
        s.text("6 - 12 months - 23%", 505, 245);
      }
 } else if (s.mouseX > 465*scaleFactor && s.mouseX < 665*scaleFactor && s.mouseY > 385*scaleFactor && s.mouseY < 395*scaleFactor){
    for (let a=0; a<20; a++) {
     for (let b=0; b<15; b++) {
       s.noStroke();
       s.fill(54, 102, 138); 
       s.ellipse(a*10+480, b*10+100, 8, 8); 
       s.rect(500, 230, 150, 20);
        s.fill(57, 61, 63);    
        s.textFont(myFont);   
        s.textSize(14); 
        s.text("6 - 12 months - 23%", 505, 245);}
     } 
     for (let a=0; a<19; a++) {
     for (let b=0; b<14; b++) {
       s.noStroke();
       s.fill(54, 102, 138); 
       s.ellipse(a*10+480, b*10+250, 8, 8); 
       s.rect(500, 230, 150, 20);
        s.fill(57, 61, 63); 
        s.textFont(myFont);     
        s.textSize(14); 
        s.text("6 - 12 months - 23%", 505, 245);}
     }
     for (let a=0; a<20; a++) {
       s.noStroke();
       s.fill(54, 102, 138); 
       s.ellipse(a*10+470, 390, 8, 8); 
       s.rect(500, 230, 150, 20);
        s.fill(57, 61, 63);  
        s.textFont(myFont);     
        s.textSize(14); 
        s.text("6 - 12 months - 23%", 505, 245);}

     } else {

    for (let a=0; a<20; a++) {
     for (let b=0; b<15; b++) {
       s.noStroke();
       s.fill(9, 144, 198); 
       s.ellipse(a*10+480, b*10+100, 8, 8); 
      }
     } 
     for (let a=0; a<19; a++) {
     for (let b=0; b<14; b++) {
       s.noStroke();
       s.fill(9, 144, 198); 
       s.ellipse(a*10+480, b*10+250, 8, 8); }
     }
     for (let a=0; a<20; a++) {
       s.noStroke();
       s.fill(9, 144, 198); 
       s.ellipse(a*10+470, 390, 8, 8); }
     }

// 12+ months
if (s.mouseX > 675*scaleFactor && s.mouseX < 925*scaleFactor && s.mouseY > 95*scaleFactor && s.mouseY < 245*scaleFactor) {
for (let a=0; a<25; a++) {
     for (let b=0; b<15; b++) {
       s.noStroke();
       s.fill(252, 218, 78); 
       s.ellipse(a*10+680, b*10+100, 8, 8); 
       s.rect(730, 230, 140, 20);
        s.fill(57, 61, 63); 
        s.textFont(myFont);       
        s.textSize(14); 
        s.text("12+ months - 30%", 738, 245);}
     } 
     for (let a=0; a<26; a++) {
     for (let b=0; b<15; b++) {
       s.noStroke();
       s.fill(252, 218, 78); 
       s.ellipse(a*10+670, b*10+250, 8, 8); 
      s.rect(730, 230, 140, 20);
        s.fill(57, 61, 63); 
        s.textFont(myFont);       
        s.textSize(14); 
        s.text("12+ months - 30%", 738, 245);}
     }
    } else if (s.mouseX > 665*scaleFactor && s.mouseX < 925*scaleFactor && s.mouseY > 245*scaleFactor && s.mouseY < 395*scaleFactor) {
     for (let a=0; a<25; a++) {
     for (let b=0; b<15; b++) {
       s.noStroke();
       s.fill(252, 218, 78); 
      s.ellipse(a*10+680, b*10+100, 8, 8); 
        s.rect(730, 230, 140, 20);
        s.fill(57, 61, 63); 
        s.textFont(myFont);       
        s.textSize(14); 
        s.text("12+ months - 30%", 738, 245);}
     } 
     for (let a=0; a<26; a++) {
     for (let b=0; b<15; b++) {
       s.noStroke();
       s.fill(252, 218, 78); 
       s.ellipse(a*10+670, b*10+250, 8, 8); 
     s.rect(730, 230, 140, 20);
        s.fill(57, 61, 63); 
        s.textFont(myFont);       
        s.textSize(14); 
        s.text("12+ months - 30%", 738, 245);}
     }
     } else {
             for (let a=0; a<25; a++) {
     for (let b=0; b<15; b++) {
       s.noStroke();
       s.fill(2, 61, 105); 
       s.ellipse(a*10+680, b*10+100, 8, 8); }
     } 
     for (let a=0; a<26; a++) {
     for (let b=0; b<15; b++) {
       s.noStroke();
       s.fill(2, 61, 105); 
       s.ellipse(a*10+670, b*10+250, 8, 8); }
     }
    }
}
}

  let myp54 = new p5(sketch4, 'p5sketch4');
