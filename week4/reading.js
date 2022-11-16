const form = document.forms[0];
const input = form.searchInput


//input.addEventListener('focus', getFocus , false)
//input.addEventListener('blur', () => alert('blurred'), false);
//input.addEventListener('change', () => alert('changed'), false);
form.addEventListener ('submit', search, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    //`You answered ${answer}` 
    event.preventDefault();
}
function getFocus(){
    alert("Focused!")
}