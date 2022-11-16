const input = document.forms['hero']
const button = input.submit
//input.addEventListener('submit', makeHero, false)

//const heroName = input.heroName;
//const 
function makeHero(event){
    event.preventDefault();
    const hero = {}
    hero.name = input.heroName.value
    hero.realName = input.realName.value
    hero.city = input.city.value
    hero.powers = [];
for (let i=0; i < input.powers.length; i++) {
    if (input.powers[i].checked) {
        hero.powers.push(input.powers[i].value);
    }
}

    alert(JSON.stringify(hero))
}
const label = input.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline(event) {
    event.preventDefault();
    const heroName = input.heroName.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}
input.addEventListener('submit',validateInline,false)
input.heroName.addEventListener('keyup',disableSubmit,false);
function disableSubmit(event) {
    if(event.target.value === ''){
        console.log('yeah')
       button.disabled = true;
    } else {
        button.disabled = false;
    }
}
