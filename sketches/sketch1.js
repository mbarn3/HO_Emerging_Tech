const sketch1 = ( s ) => {

    let firstYear = 2026;
    let lastYear = 0;
    let yearDifference = 0;
    let yearLength; //pixel distance between each year
    let w;
    let h;
    let toggle = false;
    let every4toggle = 0;

    let years;
    let months;
    let days;
    let endYears;
    let endMonths;
    let endDays;
    let labels;
    let comments;
    let topic;
    let dataLength; //CSV column length

    let yearsAsylum;
    let claims;
    let dataLengthAsylum;

    let totalsAsylum = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let biggestClaims = 0;
    let smallestClaims = 9999999999999;

    let zoomPercent = 100;

    let lineX;
    let lineY;
    let lineX2;

    let value2;

    let rectStay = false;
    let monthString;
    let dayString;

    let press = false

    s.setup = async function() {

        let smallestSize = s.min(s.windowWidth,s.windowHeight);
        s.createCanvas(smallestSize/1.1, smallestSize/1.1);
        //s.createCanvas(smallestSize, smallestSize);

        w = s.width;
        h = s.height;

        // load CSVs
        dates = await s.loadTable('assets/test.csv',',','header');
        asylumClaims = await s.loadTable('assets/asylum-claims-datasets-mar-2026.csv',',','header');
        asylum = await s.loadTable('assets/asylum-summary.csv',',','header');

        // load font
        myFont = await s.loadFont('assets/myFont/Styrene-Regular.otf');

        // load columns
        years = dates.getColumn('Year');
        months = dates.getColumn('Month');
        days = dates.getColumn('Day');
        endYears = dates.getColumn('End Year');
        endMonths = dates.getColumn('End Month');
        endDays = dates.getColumn('End Day');
        labels = dates.getColumn('Headline');
        comments = dates.getColumn('Text');
        topic = dates.getColumn('Type');
        // get length of columns
        dataLength = (dates.getColumn('Year').length);

        //load asylum CSV
        yearsAsylum = asylum.getColumn("Date");
        claims = asylum.getColumn("People claiming asylum");
        decisions = asylum.getColumn("People receiving initial decisions");
        grants = asylum.getColumn("Grants of protection or other leave");
        refusals = asylum.getColumn("Refusals");
        withdrawals = asylum.getColumn("Withdrawals");
        waiting = asylum.getColumn("People awaiting an initial decision");
        dataLengthAsylum = asylum.getColumn("Date").length;

        //store earliest and most recent years and convert them to numbers (rather than strings)
        for(i=0; i < dataLength; i++){
            let year = Number(years[i]);
            if(year < firstYear){
                firstYear = year;
            }
            if(year > lastYear){
                lastYear = year
            }
        }
        // store how many years the timeline covers
        yearDifference = lastYear - firstYear

    }

    s.draw = function() {
        s.background(253, 253, 255);
        s.textFont(myFont);
        s.timelineSpacing();
        s.graph();
        s.graphPlotting(claims,255, 204, 0);
        s.graphPlotting(decisions,22, 73, 110);
        s.graphPlotting(grants,9, 144, 198);
        s.graphPlotting(refusals,22, 73, 110);
        s.graphPlotting(waiting,57, 61, 63, 1);
        s.timeline();
        s.events();
        //s.fullScreenButton();


    s.textSize(w/50);
    s.fill(200);
    }

    s.updateZoom = function() {
    // Chrome browser zoom detection
    zoomPercent = Math.s.round(
        (visualViewport.scale) * 100
    );
    }

    s.timelineSpacing = function() {
        //line location
        lineX = w/20
        lineY = h/2
        lineX2 = w-w/20

        // get pixel distance between each year
        yearLength = (lineX2-lineX)/(yearDifference + 1)
    }

    s.timeline = function() {
        // draw line depending on canvas width
        s.stroke(57, 61, 63);
        s.strokeWeight(w/300);
        s.line(lineX, lineY,lineX2, lineY);
        
        // text formatting
        s.noStroke();
        s.fill(57, 61, 63)
    
        //draw year labels
        for(i=0; i<=yearDifference; i++){
            let t = i+firstYear
        s.text(t,((lineX+w/100)+(yearLength*i)),lineY+w/35);
        }
    }

    s.events = function() {

        for(i=0; i<dataLength; i++){
        
            // plot on different levels
            let yMult = h/6;
            let y;
            if(topic[i] == "FAE"){
                y = yMult*2
            }else if(topic[i] == "ACS"){
                y = yMult*4
            }else if(topic[i] == "APS"){
                y= yMult*5
            }else if(topic[i] == "ACS+APS"){
                y=yMult*4.5
            }else if(topic[i] == "Politics"){
                y = yMult*0.3
            }

            // plot colours
            let colour;
            if(labels[i] == "Labour"){
                colour = [228,0,59];
            }else if(labels[i] == "Conservative"){
                colour = [20, 80, 170];
            }else{
                colour = [198, 197, 195];
            }

            // plot events
            let year = Number(years[i]);
            let month = Number(months[i]);
            let x = ((year - firstYear)*yearLength) + lineX + (yearLength/12*month);
            let circleSize = w/40

            s.fill(colour);
            s.circle(x,y,circleSize);
            
            // long events
            let endYear = Number(endYears[i]);
            let endMonth = Number(endMonths[i]);
            let endX = ((endYear - firstYear)*yearLength) + lineX + (yearLength/12*endMonth);

            if(endYear){
            s.fill(colour);
            s.circle(endX,y,circleSize);
            s.stroke(colour);
            s.strokeWeight(w/200)
            s.line(x,y,endX,y);
            }

            // event text labels
            s.noStroke();
            s.fill(57, 61, 63);
            s.text(labels[i], x, y);

            // event info box
            let rectWidth = w/5;
            let rectHeight = w/7.5;
            let circleRad = circleSize/2;
            let showRect;

            if(
                s.mouseX >= x-circleRad &&
                s.mouseX <= x+circleRad &&
                s.mouseY >= y-circleRad &&
                s.mouseY <= y+circleRad
            ) {
                showRect = true;
                rectStay = i;
            }

            if(
                s.mouseX >= x &&
                s.mouseX <= x+rectWidth &&
                s.mouseY >= y &&
                s.mouseY <= y+rectHeight &&
                rectStay == i      
            ) {
                showRect = true;
            }

            if(showRect) {
                s.monthConverter(month);
                s.dayConverter(days[i]);
                s.push();
                    s.fill(253, 253, 255);
                    s.stroke(198, 197, 195);
                    s.strokeWeight(w/500)
                    s.rect(x,y,rectWidth,rectHeight,w/100);
                    s.fill(0);
                    s.noStroke();
                    s.textWrap(s.WORD);
                    let spacing = rectHeight/10;
                    s.text(dayString+" "+monthString+" "+year,x+spacing,y+spacing,rectWidth,rectHeight);
                    s.text(comments[i],x+spacing,y+(spacing*3),rectWidth-spacing,rectHeight);
                s.pop()
            }
        }
    }

    s.graph = function() {
        for(i=0; i<dataLengthAsylum; i++){
            // CSV values into numbers
            let CSVnum = s.escapeCSV(waiting[i])

            // calculate biggest/smallest asylum total
            if(biggestClaims < CSVnum){
                biggestClaims = CSVnum;
            }
        }
        
        // draw vertical year lines
        for(i=0; i<=yearDifference; i++){
            s.stroke(240);
            s.strokeWeight(w/600);
            let x = w/20+(yearLength*i);
            s.line(x,0,x,h);
        }

        // draw horizontal ammount lines
        let graphTotal = Math.ceil(biggestClaims/10000);
        let graphSpacing = h/graphTotal;
        let graphMultiplier = h/(graphTotal*10000);
        
        for(i=1; i<=graphTotal-1; i++){
            s.line(0,graphSpacing*i,w,graphSpacing*i)
            
            //draw labels for ammounts
            label = i*10000
            Y = s.map((graphSpacing*i)+h/150,0,h,h,0)
            s.fill(57, 61, 63)
            s.textSize(w/80)
            s.text(label,w/40,Y)
        }

        // asylum data title
        s.push();
            s.fill(57, 61, 63);
            s.translate(w/40,h/2);
            s.angleMode(s.DEGREES);
            s.rotate(-90);
            s.textSize(w/50)
            s.textAlign(s.CENTER);
            s.text("UK Asylum Data",0,0);
        s.pop(); 
    }

    s.graphPlotting = function(data,r,g,b) {

        for(i=0; i<dataLengthAsylum; i++){
            // CSV values into numbers
            let CSVnum = s.escapeCSV(waiting[i])

            // calculate biggest/smallest asylum total
            if(biggestClaims < CSVnum){
                biggestClaims = CSVnum;
            }
        }
        
        // draw vertical year lines
        for(i=0; i<=yearDifference; i++){
            s.stroke(240);
            s.strokeWeight(w/600);
            let x = w/20+(yearLength*i);
        }

        // draw horizontal ammount lines
        let graphTotal = Math.ceil(biggestClaims/10000);
        let graphSpacing = h/graphTotal;
        let graphMultiplier = h/(graphTotal*10000);
        
        for(i=1; i<=graphTotal-1; i++){
            
            //draw labels for ammounts
            label = i*10000
            Y = s.map((graphSpacing*i)+h/150,0,h,h,0)
            s.fill(57, 61, 63)
            s.textSize(w/80)
            s.text(label,w/40,Y)
        }

        // asylum data title
        s.push();
            s.fill(57, 61, 63);
            s.translate(w/40,h/2);
            s.angleMode(s.DEGREES);
            s.rotate(-90);
            s.textSize(w/50)
            s.textAlign(s.CENTER);
            s.text("UK Asylum Data",0,0);
        s.pop();

        // plot values
        let lowesti=999999
        for(i=0; i<=dataLengthAsylum; i++){

            if(yearsAsylum[i] >= firstYear-1 && yearsAsylum[i] <= lastYear){

                if(lowesti > i){
                    lowesti = i
                }
                let i2 = i-lowesti

                let y = s.escapeCSV(data[i])*graphMultiplier;
                let y2 = s.escapeCSV(data[i+1])*graphMultiplier;
                let yMap = s.map(y,0,h,h,0);
                let y2Map = s.map(y2,0,h,h,0);

                for(j=0; j<=yearDifference; j++){
                    if(j == i2){
                        let x = w/20+(yearLength*j);
                        let x2 = w/20+(yearLength*(j+1));
                        s.strokeWeight(w/100)
                        s.stroke(r,g,b);
                        s.line(x,yMap,x2,y2Map);
                    }       
                }
            }

        }
    }

    s.escapeCSV = function(value) {
        if(typeof value === 'string'){
            value = value.replace(",","")
            return Number(value);
        }
    }

    s.monthConverter = function(month) {
        if(month == 1){
            monthString = "January"
        }else if(month == 2){
            monthString = "February"
        }else if(month == 3){
            monthString = "March"
        }else if(month == 4){
            monthString = "April"
        }else if(month == 5){
            monthString = "May"
        }else if(month == 6){
            monthString = "June"
        }else if(month == 7){
            monthString = "July"
        }else if(month == 8){
            monthString = "August"
        }else if(month == 9){
            monthString = "September"
        }else if(month == 10){
            monthString = "October"
        }else if(month == 11){
            monthString = "November"
        }else if(month == 12){
            monthString = "December"
        }else{
            monthString = ""
        }
    }

    s.dayConverter = function(day){
        if(day == 1 || day == 21 || day == 31){
            dayString = day+"st";
        }else if(day == 2 || day == 22){
            dayString = day+"nd";
        }else if(day == 3 || day == 23){
            dayString = day+"rd";
        }else if(
            day >= 4 && day <=20 || day >=24 && day <=30
        ) {
            dayString = day+"th";
        }else{
            dayString = ""
        }
    }

    // s.fullScreen = function(){
    //     s.resizeCanvas(s.windowWidth, s.windowHeight)
    //     w = s.width
    //     h = s.height
    // }

    // s.fullScreenButton = function(){
    //     let x = w -w/18
    //     let y = h-w/18
    //     let Rw = (w/25)
        
    //     s.fill(22, 73, 110)
    //     s.rect(x,y,Rw);

    //     if(
    //         s.mouseX >= x &&
    //         s.mouseX <= x+Rw &&
    //         s.mouseY >= y &&
    //         s.mouseY <= y+Rw &&
    //         s.mouseIsPressed)
    //     {
    //         s.fullScreen()
    //     }
    // }

    // $gunmetal: rgba(57, 61, 63, 1);
    // $silver: rgba(22, 73, 110, 1);
    // $white: rgba(253, 253, 255, 1);
    // $blue-slate: rgba(9, 144, 198, 1);
    // $yale-blue: rgba(22, 73, 110, 1);
    // $bright-amber: rgba(255, 204, 0, 1);
}

let myp5 = new p5(sketch1,'p5sketch1');
