//alert('Welcome to Quiz Ninja!');
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
    { name: "The Hulk",realName: "Bruce Banner" },
    { name: "Spider-man",realName: "Peter Parker" },
    { name: "Cyclops",realName: "Scott Summers" }
];
function random(a,b=1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}
function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = random(i)-1;
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}
const view = {
    start: document.getElementById('start'),
    response: document.querySelector('#response'),
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    },
    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
        //this.resetForm();
    },
   // resetForm(){
    //    this.response.answer.value = '';
    //this.response.answer.focus();
//}

// .... inside setup()

//this.resetForm();
   // },
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    },
    buttons(array){
        return array.map(value => `<button>${value}</button>`).join('');
    }
    
    
};
const game = {
    start(quiz){
       console.log('start() invoked')
        this.questions = [...quiz];
        this.score = 0;
        view.setup();
        this.ask();
        // main game loop
        //for(const question of this.questions){
       // this.question = question;
       // this.ask();
       // }
        // end of main game loop
        //this.gameOver();
       // view.hide(view.start);
        
    },
    ask(){
        /*const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        const response =  prompt(question);
        this.check(response);*/
        /*if(this.questions.length > 0) {
            this.question = this.questions.pop();
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question,question);
        }
        else {
            this.gameOver();
        }*/
        console.log('ask() invoked');
    if(this.questions.length > 2) {
    shuffle(this.questions);
    this.question = this.questions.pop();
    const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
    shuffle(options);
    const question = `What is ${this.question.name}'s real name?`;
    view.render(view.question,question);
    view.render(view.response,view.buttons(options));
    }
    else {
    this.gameOver();
    }

    },
    check(event){
        console.log('check(event) invoked');
        const response = event.target.textContent;
        const answer = this.question.realName;
        if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        this.score++;
        view.render(view.score,this.score);
        } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        this.ask();
    },
    gameOver(){
        // view.show(view.start);
        console.log('gameOver() invoked');
         view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
         view.teardown();
         clearInterval(this.timer);
     }
   
}
view.start.addEventListener('click', () => game.start(quiz), false);
//view.response.addEventListener('submit', (event) => game.check(event), false);
//view.hide(view.response);
view.response.addEventListener('click', (event) => game.check(event), false);
//game.start(quiz);