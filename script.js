function askEightBall() {
    const answers = [
        'It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes, definitely.',
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

    const question = document.getElementById('question').value.trim();
    const answer = document.getElementById('answer');

    if (question.length === 0) {
        answer.textContent = 'Please ask a question.';
    } else if (question.slice(-1) !== '?') {
        answer.textContent = 'Please ask a question ending with a question mark.';
    } else {
        const randomIndex = Math.floor(Math.random() * answers.length);
        answer.textContent = answers[randomIndex];
    }
}
