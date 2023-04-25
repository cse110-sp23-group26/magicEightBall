function showButtonEffect() {
    const buttonEffect = document.querySelector('.button-effect');
    buttonEffect.style.opacity = '1';
}

function hideButtonEffect() {
    const buttonEffect = document.querySelector('.button-effect');
    buttonEffect.style.opacity = '0';
}

function askEightBall() {
    const question = document.getElementById('question').value;
    const answerElement = document.getElementById('answer');
    const answers = [
        'It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes - definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
        'Signs point to yes.',
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        'Don\'t count on it.',
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Very doubtful.'
    ];

    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    answerElement.textContent = randomAnswer;

    answerElement.style.fontSize = '16px';
    answerElement.style.color = '#e74c3c';
    setTimeout(() => {
        answerElement.style.fontSize = '24px';
        answerElement.style.color = '#2ecc71';
    }, 500);
}

document.getElementById('question').addEventListener('focus', () => {
    const questionElement = document.getElementById('question');
    questionElement.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(46, 204, 113, 0.5)';
});

document.getElementById('question').addEventListener('blur', () => {
    const questionElement = document.getElementById('question');
    questionElement.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.2)';
});

function showTeamInfo() {
    const teamName = document.querySelector('.team_name');
    teamName.style.display = 'block';
}

function hideTeamInfo() {
    const teamName = document.querySelector('.team_name');
    teamName.style.display = 'none';
}


// function askEightBall() {
//     const answers = [
//         'It is certain.',
//         'It is decidedly so.',
//         'Without a doubt.',
//         'Yes, definitely.',
//         'You may rely on it.',
//         'As I see it, yes.',
//         'Most likely.',
//         'Outlook good.',
//         'Yes.',
//         'Signs point to yes.',
//         'Reply hazy, try again.',
//         'Ask again later.',
//         'Better not tell you now.',
//         'Cannot predict now.',
//         'Concentrate and ask again.',
//         'Don\'t count on it.',
//         'My reply is no.',
//         'My sources say no.',
//         'Outlook not so good.',
//         'Very doubtful.'
//     ];

//     const question = document.getElementById('question').value.trim();
//     const answer = document.getElementById('answer');

//     if (question.length === 0) {
//         answer.textContent = 'Please ask a question.';
//     } else if (question.slice(-1) !== '?') {
//         answer.textContent = 'Please ask a question ending with a question mark.';
//     } else {
//         const randomIndex = Math.floor(Math.random() * answers.length);
//         answer.textContent = answers[randomIndex];
//     }
// }
