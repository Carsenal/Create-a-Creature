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
        this.context.moveTo(100 * this.shape[0][0], 100 * this.shape[0][1]);
        for(var i = 1; i < this.shape.length; i ++){
            var p = this.shape[i];
            this.context.lineTo(100 * p[0], 100 * p[1]);
        }
        this.context.closePath();
        this.context.clip();
        this.context.drawImage(this.image, 0, 0, w, h);
        this.context.fillStyle = this.color;
        this.context.fillRect(0, 0, w, h);   
        return this.canvas;
        //return this.canvas.toDataURL("image/png");
    }
}

class Head extends Bodypart{
    constructor(codons){
        var canvas = document.getElementById("headCanvas");
        var shapes = [  [[0,0], [10,10], [50,10], [90, 20], [90, 70], [10, 90]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]]];
        super(codons, canvas, shapes);
    }
}
class Body extends Bodypart{
    constructor(codons){
        var canvas = document.getElementById("bodyCanvas");
        var shapes = [  [[50,40], [45,41], [40,43], [35, 46], [30, 50], [25,57], [20,65], [55, 41], [60, 43], [65,46], [70,50], [75, 57], [80, 65]], 
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]]];
        super(codons, canvas, shapes);
    }
}
class Legs extends Bodypart{
    constructor(codons){
        var canvas = document.getElementById("legsCanvas");
        var shapes = [  [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]],
                        [[0,0], [10,10], [50,10], [50, 50], [10, 40]]];
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