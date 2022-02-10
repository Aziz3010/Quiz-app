import Quiz from './quiz.js';

class Settings {
    constructor(){
        this.questionsDom = document.querySelector(".quiz-questions");
        this.settingsDom = document.querySelector(".quiz-settings");
        
        this.numberQuestionsDom = document.querySelector("#numberQuestions");
        this.categoryDom = document.querySelector("#category");
        
        this.difficultyDom = [
            document.querySelector("#easy"),
            document.querySelector("#medium"),
            document.querySelector("#hard"),
        ];

        this.quiz = {};

        this.startBtn_Dom = document.querySelector("#startBtn");

        this.startBtn_Dom.addEventListener('click', this.startQuizApp);
    }

    // get numberQuestionsDom input value 
    getQsNum = () => {
        const qNumber = this.numberQuestionsDom.value;
        
        if(qNumber > 0 && qNumber <= 50){
            return qNumber;
        } else {
            return alert('Please Enter Questions Number, It Between 1 - 50');
        }
    }

    // get difficultyDom input value 
    getDifficulty = () => {
        const difficultySelected = this.difficultyDom.filter( (ele) => ele.checked);
        
        if(difficultySelected.length === 1){
            return difficultySelected[0].id;
        } else {
            return alert('Please Select Difficulty');
        }
    }

    startQuizApp = async () => {
        const questionsNumber = await this.getQsNum();
        const categoryID = this.categoryDom.value;
        const difficulty = this.getDifficulty();

        // save data from api to this var
        const questions = await this.getDataApi(questionsNumber, categoryID, difficulty);

        if(questions){
            console.log(questions);

            this.quiz = new Quiz(this.questionsDom, questionsNumber, questions);

            this.questionsDom.style.display = 'block';
            this.settingsDom.style.display = 'none';
        } else {
            console.log("no questions");
        }

    }

    // call api and fetch data
    getDataApi = async (questionsNumber, categoryID, difficulty) => {
        const request = await fetch(`https://opentdb.com/api.php?amount=${questionsNumber}&category=${categoryID}&difficulty=${difficulty}`);
        
        const response = await request.json();
        const data = response.results;

        return data
    }


}

export default Settings;