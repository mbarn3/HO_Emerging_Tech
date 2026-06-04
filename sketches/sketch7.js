const sketch7 = (s) => {

    let canvasWidthDividedBySeven = 275;
    let canvasHeightDividedByNine = 120;

    let img1;
    let img2;

    let dates = [2021, 2022, 2023, 2024, 2025, 2026];

    let spacing;

    let colourBox;

    let widthRect;

    let rectStartTime;

    let timelineEvents = [

        {
            type: "tech",
            year: 2021,
            text: "YOTI awarded proof-of-concept for Age Estimation by Home Office",

            x: 275,
            y: 360,

            visible: false,
            startTime: 0
        },

        {
            type: "science",
            year: 2021,
            text: "Interim AESAC committee established to advise on scientific age assessment",

            x: 275,
            y: 720,

            visible: false,
            startTime: 0
        },

        {
            type: "tech",
            year: 2022,
            text: "Home office conducts nine FAE retail trials: none assess accuracy",

            x: 550,
            y: 360,

            visible: false,
            startTime: 0
        },

        {
            type: "science",
            year: 2022,
            text: "AESAC asks to start researching FAE as an emerging age assessment technology",

            x: 550,
            y: 720,

            visible: false,
            startTime: 0
        },

        {
            type: "tech",
            year: 2023,
            text: "Nationality and Borders Act 2022 introduces scientific methods to be used in age disputes",

            x: 825,
            y: 360,

            visible: false,
            startTime: 0
        },

        {
            type: "science",
            year: 2023,
            text: "AESAC concludes “there is no infallible method” to age estimation",

            x: 825,
            y: 720,

            visible: false,
            startTime: 0
        },

        {
            type: "tech",
            year: 2024,
            text: "NIST publishes report on Age Estimation, on visa photos FAE was innaccurate by an average on 3.1 years",

            x: 1100,
            y: 360,

            visible: false,
            startTime: 0
        },

        {
            type: "science",
            year: 2024,
            text: "AESAC continuously questions progress of FAE.",

            x: 1100,
            y: 720,

            visible: false,
            startTime: 0
        },


        {
            type: "tech",
            year: 2025,
            text: "Home Office approves rollout of FAE at the border, as “cost-effective”",

            x: 1375,
            y: 360,

            visible: false,
            startTime: 0
        },

        {
            type: "science",
            year: 2025,
            text: "AESAC excluded and disbanded",

            x: 1375,
            y: 720,

            visible: false,
            startTime: 0
        },


        {
            type: "tech",
            year: 2026,
            text: "FAE starts being trialled at the boarder with the Home Office citing NIST as performance testing",

            x: 1650,
            y: 360,

            visible: false,
            startTime: 0
        }

    ];

    let canvas;

    let scaleFactor;

    let started = false;


    s.setup = async function () {



        let smallestSize = s.min(s.windowWidth, s.windowHeight);
        canvas = s.createCanvas(smallestSize / 1.1, smallestSize / 2.2);

        scaleFactor = s.width / 1920
        s.scale(scaleFactor);

        s.background(253, 253, 255);

        myFont = await s.loadFont('assets/myFont/Styrene-Regular.otf');
        s.textFont(myFont);
        s.fill(255, 204, 0);
        s.textSize(60);
        s.textStyle(s.BOLD);
        s.textAlign(s.CENTER);
        s.text("Parallel Timelines", 960, canvasHeightDividedByNine);

        img1 = await s.loadImage("assets/img1.png");
        img2 = await s.loadImage("assets/img2.png");

        s.rectMode(s.CENTER);

        s.textAlign(s.LEFT);
        s.textSize(30);
        s.fill(22, 73, 110);
        s.text("Technology Implimentation", canvasWidthDividedBySeven / 2, canvasHeightDividedByNine * 2 - 10);
        s.fill(9, 144, 198);
        s.text("Scientific Caution", canvasWidthDividedBySeven / 2, canvasHeightDividedByNine * 5 - 10);
        //headings




        widthRect = 1670;

        canvas.mouseOver(s.startTimer);

    }


    s.draw = function () {
        s.scale(scaleFactor);
        s.imageMode(s.CENTER);


        for (let t = 0; t < timelineEvents.length; t++) {

            colourBox = t % 2;

            if (timelineEvents[t].visible) {
                s.drawEvent(timelineEvents[t], colourBox);
            }
        }

        let rectAnimationControl = (s.millis() - rectStartTime) / 30000;
        rectAnimationControl = s.constrain(rectAnimationControl, 0, 1);
        s.rectMode(s.CORNER);
        s.fill(198, 197, 185, 10);
        s.noStroke();

        let w = widthRect * rectAnimationControl;
        s.rect(canvasWidthDividedBySeven / 2 - 10, canvasHeightDividedByNine * 2 - 10, w, canvasHeightDividedByNine * 2 + 20);
    }



    s.drawEvent = function (t, colourBox) {

        let animationControl = (s.millis() - t.startTime) / 1200;
        animationControl = s.constrain(animationControl, 0, 1);
        //divides the time passed by 600, which creates a good speed in java

        s.rectMode(s.CENTER);
        s.textAlign(s.CENTER);
        s.fill(0, animationControl * 255);
        s.textSize(20);
        s.text(t.text, t.x + 10, t.y + canvasHeightDividedByNine / 2 + 10, canvasWidthDividedBySeven - 20, canvasHeightDividedByNine * 2);


        s.imageMode(s.CENTER);
        if (colourBox === 0) {
            s.image(img1, t.x, t.y, canvasWidthDividedBySeven - 30, canvasHeightDividedByNine * 2);

            s.noStroke();
            s.textSize(30);
            s.textAlign(s.CENTER);
            s.fill(57, 61, 63);
            s.text(t.year, t.x, canvasHeightDividedByNine * 1.5);


        }
        else {
            s.image(img2, t.x, t.y, canvasWidthDividedBySeven - 30, canvasHeightDividedByNine * 2);
        }
    }


    s.startTimer = function () {

        if (started){
            return;
        }

        started= true;

        console.log('start');

        for (let i = 0; i < timelineEvents.length; i++) {

            let event = timelineEvents[i];

            setTimeout(function () {

                event.visible = true;
                event.startTime = s.millis();

            }, i * 3000);

        }
        // adding a setTimeout function  to start the clock, every 900 mili seconds one turns visible

        rectStartTime = s.millis();

    }

};

let myp57 = new p5(sketch7, 'p5sketch7');
