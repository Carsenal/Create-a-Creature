var baseElements = [];

function init(){
    for(var c = 1; c <= 6; c ++){
        var codon = []
        for(var b = 1; b <= 3; b ++){
            console.log("Composing: c" + c + "b" + b);
            codon.push(document.getElementById("c" + c + "b" + b));
        }
        baseElements.push(codon);
    }
    compose();
}

function up(codonIndex, baseIndex){
    var base = new Base(Base.fromElement(baseElements[codonIndex - 1][baseIndex -1]));
    base.increment(true);
    baseElements[codonIndex - 1][baseIndex -1].children[1].innerText = base.short;
    compose();
}
function down(codonIndex, baseIndex){
    var base = new Base(Base.fromElement(baseElements[codonIndex - 1][baseIndex -1]));
    base.increment(false);
    baseElements[codonIndex - 1][baseIndex -1].children[1].innerText = base.short;
    compose();
}

function getCodonArray(){
    var codons = [];
    for(var c = 0; c < 6; c ++){
        var bases = [];
        for(var b = 0; b < 3; b ++){
            var base = new Base(Base.fromElement(baseElements[c][b]));
            bases.push(base);
        }
        var codon = new Codon(bases);
        codons.push(codon);
    }
    return codons;
}

function compose(){
    var codons = getCodonArray();
    var head = new Head(codons.slice(0, 2));
    var body = new Body(codons.slice(2, 4));
    var legs = new Legs(codons.slice(4));
    var canvas = document.getElementById("canvas");
    canvas.width = 1000;
    canvas.height = 1000;
    var context = canvas.getContext("2d");
    
    context.drawImage(legs.final, 0, 0, 1000, 1000);
    context.drawImage(head.final, 0, 0, 1000, 1000);
    context.drawImage(body.final, 0, 0, 1000, 1000);
}