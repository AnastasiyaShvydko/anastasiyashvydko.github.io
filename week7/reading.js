const closuresVar = document.getElementById("closures");
closuresVar.addEventListener("click", addClosure);

const counterVar = document.getElementById("counter");
counterVar.addEventListener("click", addCounter);

const fibonacciVar = document.getElementById("fibonacci");
fibonacciVar.addEventListener("click", addFibonacci);

const multVar = document.getElementById("mult");
multVar.addEventListener("click", addMult);

function addClosure(event){

    function closure() {
        const a = 1.8;
        const b = 32;
        return c => c * a + b;
    }
    const toFahrenheit = closure();

    console.log(toFahrenheit(30))}


function addCounter(){


    function counter(start){
        let i = start;
        return function() {
            return i++;
        }
    }

    const toStart = counter(1);
    console.log(toStart())
    console.log(toStart())
}

function addFibonacci(){
    function* fibonacci(a,b) {
        let [ prev,current ] = [ a,b ];
        while(true) {
            [prev, current] = [current, prev + current];
            yield current;
        }
    }
    const sequence = fibonacci(1,1);
    console.log(sequence.next())
    console.log(sequence.next())
    console.log(sequence.next())
    for (n of sequence) {
        // stop the sequence after it reaches 100
        if (n > 100) break;
        console.log(n);
    }
}

function addMult(){
    function multiplier(x){
        return function(y){
            return x*y;
        }
    }
    doubler = multiplier(2)
    console.log(doubler)
    console.log(doubler(10))
    console.log(doubler(15))
}