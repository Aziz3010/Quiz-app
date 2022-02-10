class Question {
    constructor(Question){
        this.questionElement = document.querySelector('#question');
        
        this.answerElement = [
            document.querySelector('#la1'),
            document.querySelector('#la2'),
            document.querySelector('#la3'),
            document.querySelector('#la4')
        ]
        
        this.question = Question.question;
        this.correctAnswer = Question.correct_answer;
        this.isCorrect = false;
        this.answers = [ Question.correct_answer, ...Question.incorrect_answers ];
    }

    answer = (checkMyAnswer) => {
        if(this.correctAnswer === checkMyAnswer[0].textContent) {
            this.isCorrect = true;
        } else {
            this.isCorrect = false;
        }
    }

    render = () => {
        this.questionElement.innerHTML = this.question;
        this.answerElement.forEach((ele, idx)=>{
            ele.innerHTML = `<input type="radio" name="radio">`+ this.answers[idx];
        })
    }

}

export default Question;