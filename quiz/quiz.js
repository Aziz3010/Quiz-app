import Final from "./final.js";
import Questions from './questions.js';

class Quiz {
    constructor(questionsDom, questionsNumber, questions){
        this.questionsDom = questionsDom;
        this.currentElement = document.querySelector('.current');
        this.totalElement = document.querySelector('.total');
        this.finalElement = document.querySelector('.final')
        this.nextBtn = document.querySelector('#nextBtn')
        
        
        this.questionsNumber = questionsNumber;
        this.answerAmount = 0;

        this.questions = this.setQuestions(questions);

        this.nextBtn.addEventListener('click', this.nextQuestion);
        this.renderQuestion();
    }

    renderQuestion = () => {
        this.questions[this.answerAmount].render();
        this.currentElement.innerHTML = this.answerAmount + 1;
        this.totalElement.innerHTML = this.questionsNumber;
    }

    nextQuestion = () => {
        const checkElement = this.questions[this.answerAmount].answerElement.filter(ele => ele.firstChild.checked);
        
        if(checkElement.length === 0){
            alert('Check Element')
        } else {
            this.questions[this.answerAmount].answer(checkElement);
            this.answerAmount++;
            this.answerAmount < this.questionsNumber ? this.renderQuestion() : this.endQuizApp() ;
        }
    }
    endQuizApp = () => {
        this.questionsDom.style.display = 'none';
        this.finalElement.style.display = 'block';

        const correct = this.countCorrectAnswers();
        new Final(correct, this.questionsNumber)
    }

    countCorrectAnswers = () => {
        let count = 0;
        this.questions.forEach(question => {
            if(question.isCorrect){
                count++;
            }
        });
        return count;
    }

    setQuestions = (questions) => {
        return questions.map(question => new Questions(question));
    }


}

export default Quiz;