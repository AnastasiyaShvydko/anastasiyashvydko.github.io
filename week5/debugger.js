window.addEventListener('load',() => {amIOldEnough()});
function amIOldEnough(age){
    debugger;
        if (age < 12) {
        debugger;
       // return 'No, sorry.';
       console.log("No,sorry")
        } else if (age < 18) {
        debugger;
        console.log('Only if you are accompanied by an adult.');
        } else {
        debugger;
        return 'Yep, come on in!';
    }
}

amIOldEnough(16);