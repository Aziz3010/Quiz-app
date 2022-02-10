class Final {
    constructor(correctAnswer, totalQuestoins){
        this.scoreElement = document.querySelector('.score');
        this.againElement = document.querySelector('.again');

        this.render(correctAnswer, totalQuestoins);
    
        this.againElement.addEventListener('click', this.startAgain);
    }

    startAgain = () => {
        location.reload();
    }

    render(correctAnswer, totalQuestoins){
        this.scoreElement.innerHTML = `You Answered ${correctAnswer} out of ${totalQuestoins}`
    }
}

export default Final;