class Bodypart{
    constructor(codons, canvas, shapes){
        this.codons = codons;
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.shapes = shapes;
    }
    get colorCodon(){
        return this.codons[0];
    }
    get shapeCodon(){
        return this.codons[1];
    }
    get shape(){
        var index = this.shapeCodon.first;
        return this.shapes[index];
    }
    get image(){
        var index = this.shapeCodon.second;
        return document.getElementById("fur" + index);
    }
    get color(){
        return this.colorCodon.color;
    }
    get final(){
        this.canvas.width = 1000;
        this.canvas.height = 1000;
        var w = this.canvas.width;
        var h = this.canvas.height;
        this.context.clearRect(0, 0, w, h);
        this.context.beginPath();
        this.context.moveTo(10 * this.shape[0][0], 10 * this.shape[0][1]);
        for(var i = 1; i < this.shape.length; i ++){
            var p = this.shape[i];
            this.context.lineTo(10 * p[0], 10 * p[1]);
        }
        this.context.closePath();
        this.context.clip();
        this.context.drawImage(this.image, 0, 0, w/2, h/2);
        this.context.drawImage(this.image, w/2, 0, w, h/2);
        this.context.drawImage(this.image, 0, h/2, w/2, h);
        this.context.drawImage(this.image, w/2, h/2, w, h);
        this.context.fillStyle = this.color;
        this.context.fillRect(0, 0, w, h);   
        return this.canvas;
        //return this.canvas.toDataURL("image/png");
    }
}

class Head extends Bodypart{
    constructor(codons){
        var canvas = document.getElementById("headCanvas");
        var shapes = [  /*[[507, 455], [561, 453], [609, 452], [668, 450], [712, 445], [732, 429], [752, 397], [772, 364], [782, 343], [800, 295], [811, 248], [822, 231], [836, 199], [854, 191], [886, 186], [912, 180], [931, 173], [939, 160], [939, 128], [932, 117], [910, 109], [873, 108], [846, 104], [822, 93], [811, 90], [798, 90], [790, 82], [784, 92], [784, 112], [774, 146], [756, 178], [729, 245], [712, 288], [688, 311], [659, 311], [641, 309], [601, 309], [542, 300]],  
                        [[726, 436], [737, 408], [750, 389], [764, 365], [779, 344], [798, 309], [819, 274], [828, 264], [854, 245], [865, 245], [875, 263], [888, 280], [900, 295], [921, 303], [948, 320], [952, 328], [971, 341], [993, 324], [1000, 295], [998, 271], [980, 220], [974, 202], [964, 168], [956, 128], [939, 103], [932, 87], [932, 72], [942, 61], [942, 45], [944, 23], [944, 23], [931, 26], [926, 42], [915, 55], [908, 71], [899, 64], [907, 50], [905, 36], [910, 18], [902, 16], [892, 31], [884, 52], [881, 63], [856, 74], [803, 85], [779, 108], [720, 127], [659, 154], [627, 175], [587, 196], [532, 232], [510, 277], [524, 351], [588, 397], [646, 408], [686, 410], ],
                        [[696, 474], [716, 432], [742, 388], [755, 362], [772, 360], [779, 375], [798, 397], [822, 410], [843, 400], [848, 394], [849, 386], [844, 365], [832, 343], [808, 322], [803, 312], [796, 295], [796, 266], [796, 255], [796, 220], [801, 181], [803, 159], [804, 140], [795, 144], [790, 167], [777, 200], [769, 218], [755, 240], [750, 247], [728, 274], [700, 301], [670, 320], [643, 328], [614, 344], [585, 354], [518, 378], [464, 391], ],*/
                        [[50, 0], [30, 20], [50, 40], [70, 20]],  
                        [[30, 0], [70, 0], [50, 40]],  
                        [[30, 10], [70, 10], [30, 40], [70, 40]],  
                        [[40, 0], [40, 35], [50, 40], [60, 35], [60, 0]],  
                        [[20, 10], [20, 35], [45, 35], [50, 40], [55, 35], [80, 35], [80, 10]],  
                        [[40, 0], [20, 10], [20, 30], [40, 40], [60, 40], [80, 30], [80, 10], [60, 0]],  
                        [[40, 0], [40, 25], [48, 25], [48, 40], [52, 40], [52, 25], [60, 25], [60, 0]],  
                        [[50, 0], [52, 1], [54, 3], [56, 6], [58, 10], [60, 15], [60, 35], [50, 40], [40, 35], [40, 15], [42, 10], [44, 6], [46, 3], [48, 1]] 
                     ];
        super(codons, canvas, shapes);
    }

    get final(){
        var r = super.final;
        var eyes = document.getElementById("eyes");
        this.context.drawImage(eyes, 450, 75, 100, 100);
        return r;
    }
}
class Body extends Bodypart{
    constructor(codons){
        var canvas = document.getElementById("bodyCanvas");
        var shapes = [  /*[[601, 471], [652, 461], [673, 440], [683, 420], [686, 378], [688, 356], [678, 320], [676, 309], [648, 276], [614, 255], [601, 244], [572, 221], [545, 191], [516, 178], [489, 168], [467, 165], [449, 149], [436, 127], [419, 106], [411, 96], [382, 77], [363, 68], [326, 66], [315, 77], [297, 93], [283, 108], [262, 133], [243, 154], [230, 165], [219, 181], [200, 199], [182, 208], [163, 223], [142, 248], [136, 256], [121, 277], [118, 285], [104, 314], [97, 338], [96, 364], [99, 388], [110, 396], [126, 407], [153, 415], [171, 421], [179, 424], [214, 432], [230, 444], [246, 458], [264, 466], [294, 480], [318, 493], [350, 498], [392, 501], [430, 501], [467, 501], [478, 500], [524, 492], [550, 490], [566, 482]], 
                        [[678, 552], [702, 546], [724, 501], [724, 468], [724, 421], [720, 378], [704, 328], [676, 231], [676, 231], [644, 192], [608, 186], [574, 186], [548, 196], [532, 213], [480, 218], [451, 220], [414, 212], [384, 207], [337, 196], [307, 183], [241, 204], [188, 240], [153, 264], [147, 293], [142, 330], [153, 368], [209, 399], [251, 420], [291, 450], [321, 477], [356, 498], [393, 524], [457, 536], [494, 541], [563, 544], [625, 556], [652, 556], ],  
                        [[705, 298], [625, 284], [608, 260], [585, 231], [548, 207], [473, 194], [441, 194], [310, 208], [224, 247], [128, 280], [24, 301], [120, 309], [152, 314], [166, 324], [185, 333], [212, 343], [240, 359], [259, 368], [288, 386], [342, 405], [382, 412], [465, 404], [496, 407], [552, 397], [662, 375], [683, 354], [700, 330], [705, 303], ],
                        [[329, 519], [377, 527], [433, 533], [480, 536], [524, 540], [585, 536], [617, 519], [648, 490], [657, 436], [654, 365], [633, 324], [601, 293], [553, 296], [467, 312], [420, 311], [387, 311], [328, 304], [256, 304], [251, 306], [200, 336], [184, 381], [182, 440], [187, 450], [254, 495], [297, 504], [320, 512]], 
                        [[584, 650], [636, 623], [672, 597], [697, 536], [705, 504], [721, 432], [721, 364], [676, 250], [664, 250], [614, 266], [566, 276], [502, 263], [385, 244], [299, 234], [256, 247], [204, 277], [169, 309], [145, 346], [137, 380], [132, 426], [132, 452], [134, 472], [137, 480], [147, 487], [160, 488], [163, 485], [168, 455], [172, 436], [195, 429], [198, 436], [198, 468], [206, 517], [243, 551], [291, 570], [425, 604], [478, 612], [516, 616], ],*/
                        [[20, 40], [20, 80], [80, 80], [80, 40]],  
                        [[50, 40], [45, 41], [40, 43], [35, 46], [30, 50], [25, 57], [20, 65], [25, 70], [30, 74], [35, 77], [40, 79], [45, 80], [50, 80], [55, 80], [60, 79], [65, 77], [70, 74], [75, 70], [80, 65], [75, 57], [70, 50], [65, 46], [60, 43], [55, 41]],  
                        [[50, 80], [55, 78], [60, 74], [65, 69], [70, 62], [75, 54], [80, 40], [25, 20], [30, 62], [35, 69], [40, 74], [45, 78]],  
                        [[20, 80], [80, 80], [65, 40], [35, 40]],  
                        [[100, 46], [99, 43], [98, 41], [97, 40], [3, 40], [2, 41], [1, 43], [0, 46], [0, 74], [1, 77], [2, 79], [3, 80], [97, 80], [98, 79], [99, 77], [100, 74]],  
                        [[60, 40], [40, 40], [20, 50], [20, 70], [40, 80], [60, 80], [80, 70], [80, 50]],  
                        [[50, 40], [20, 80], [80, 80]],  
                        [[50, 40], [30, 60], [30, 80], [70, 80], [70, 60]]];
        super(codons, canvas, shapes);
        console.log(this.shapeCodon.first);
    }
}
class Legs extends Bodypart{
    constructor(codons){
        var canvas = document.getElementById("legsCanvas");
        var shapes = [  [[50, 40], [20, 100], [25, 100], [50, 50], [75, 100], [80, 100]],  
                        [[50, 40], [35, 100], [40, 100], [50, 50], [60, 100], [65, 100]],  
                        [[50, 40], [20, 100], [30, 100], [50, 60], [70, 100], [80, 100]],  
                        [[50, 40], [20, 100], [23, 95], [25, 100], [50, 50], [75, 100], [77, 95], [80, 100]],  
                        [[48, 50], [51, 50], [51, 90], [54, 90], [54, 94], [51, 94], [51, 100], [48, 100], [48, 94], [46, 94], [46, 90], [48, 90]],  
                        [[50, 40], [20, 100], [25, 100], [48, 50], [48, 100], [53, 100], [53, 50], [75, 100], [80, 100]],  
                        [[50, 40], [30, 80], [28, 100], [33, 100], [35, 85], [38, 100], [43, 100], [40, 80], [50, 60], [60, 80], [58, 100], [63, 100], [65, 85], [68, 100], [70, 80], [73, 100]],  
                        [[48, 50], [51, 50], [51, 95], [80, 95], [80, 100], [51, 100], [48, 100], [20, 100], [20, 95], [48, 95]]];
        super(codons, canvas, shapes);
    }
}

class Codon{
    constructor(b){
        this.bases = b;
    }
    byteArrayToInt(array){
        var num = 0;
        for(var i = 0; i < array.length; i ++){
            if(array[i])num += Math.pow(2, i);
        }
        return num;
    }
    get first(){
        var bytes = this.bytes.slice(0, 3);   
        return this.byteArrayToInt(bytes);
    }
    get second(){
        var bytes = this.bytes.slice(3);
        return this.byteArrayToInt(bytes);
    }
    get bytes(){
        var bytes = this.bases[0].bytes;
        for(var i = 1; i < this.bases.length; i ++){
            bytes = bytes.concat(this.bases[i].bytes);
        }
        return bytes;
    }
    get color(){
        var byteString = "";
        for(var i = 0; i < this.bytes.length; i ++){
            if(this.bytes[i])byteString += "1";
            else byteString += "0"
        }
        var h = (byteString.hashCode() % 250) / 250;
        var s = 1.0;
        var l = 0.5;
        var r = 255;
        var g = 0;
        var b = 0;

        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }
          
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
    
        r = 255 * hue2rgb(p, q, h + 1/3);
        g = 255 * hue2rgb(p, q, h);
        b = 255 * hue2rgb(p, q, h - 1/3);
        console.log("rgba(" + r + ", " + g + ", " + b + ", 0.4)");
        return "rgba(" + r + ", " + g + ", " + b + ", 0.4)";
    }
}

class Base{
    static fromElement(element){
        var i = new Base();
        i.short = element.children[1].innerText;
        return i.num;
    }

    constructor(v=0, listner=""){
        this.listner = listner;
        this.num = v;
    }

    increment(positive){
        var i = this.num;
        var di = 0;
        if(positive)di = 1;
        else di = -1;
        this.num = i + di;
        return this.num;
    }

    set num(i){
        while(i > 3)i -= 4;
        while(i < 0)i += 4;
        this.i = i;
        this.listner;
    }
    set short(str){
        if(str == 'A')this.num = 0;
        else if(str == 'T')this.num = 1;
        else if(str == 'C')this.num = 2;
        else if(str == 'G')this.num = 3;
    }
    set long(str){
        if(str == 'Adenoisine')this.num = 0;
        else if(str == 'Thymine')this.num = 1;
        else if(str == 'Cytosine')this.num = 2;
        else if(str == 'Guanine')this.num = 3;
    }
    set listner(l){
        if(l == ""){
            this.hasListner = false;
            this.l = "";
        } else {
            this.hasListner = true;
            this.l = l;
        }
    }
    get num(){
        return this.i;
    }
    get short(){
        if(this.num == 0)return 'A';
        if(this.num == 1)return 'T';
        if(this.num == 2)return 'C';
        if(this.num == 3)return 'G';
    }
    get long(){
        if(this.num == 0)return 'Adenoisine';
        if(this.num == 1)return 'Thymine';
        if(this.num == 2)return 'Cytosine';
        if(this.num == 3)return 'Guanine';
    }
    get bytes(){
        if(this.num == 0)return [false, false];
        if(this.num == 1)return [false, true];
        if(this.num == 2)return [true, false];
        if(this.num == 3)return [true, true];
    }
    get listner(){
        if(this.hasListner)return this.l;
        return false;
    }
}

String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}