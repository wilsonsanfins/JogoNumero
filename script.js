let randomNumber = Math.floor(Math.random() * 999) + 1;
let hintGiven = false;

document.getElementById('guessButton').addEventListener('click', function () {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const feedback = document.getElementById('feedback');
    const guessHistory = document.getElementById('guessHistory');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 999) {
        feedback.textContent = "Por favor, insira um número entre 1 e 999.";
    } else {
        // Adiciona o palpite ao histórico
        const listItem = document.createElement('li');
        listItem.textContent = ` ${userGuess}`;
        guessHistory.appendChild(listItem);

        // Verifica se o palpite é maior, menor ou igual ao número gerado
        if (userGuess > randomNumber) {
            feedback.textContent = `O número é menor < ${userGuess}.`;
        } else if (userGuess < randomNumber) {
            feedback.textContent = `O número é maior > ${userGuess}.`;
        } else {
            feedback.textContent = `Parabéns! Você acertou! O número era ${randomNumber}.`;
        }
    }
});

document.getElementById('restartButton').addEventListener('click', function () {
randomNumber = Math.floor(Math.random() * 999) + 1;
hintGiven = false;
document.getElementById('userGuess').value = '';
document.getElementById('feedback').textContent = '';
document.getElementById('guessHistory').innerHTML = ''; // Limpa o histórico de tentativas
});

document.getElementById('hintButton').addEventListener('click', function () {
if (!hintGiven) {
    const hintRange = Math.floor(Math.random() * 20) + 1;
    const hint = (Math.random() > 0.5) ? randomNumber + hintRange : randomNumber - hintRange;
    document.getElementById('feedback').textContent = `Dica: O número está próximo de ${hint}.`;
    hintGiven = true;
} else {
    document.getElementById('feedback').textContent = "Você já usou a dica!";
}
});