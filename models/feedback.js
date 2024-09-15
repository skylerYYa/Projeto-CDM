document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/comentarios');
    const commentsData = await response.json();
    const commentsList = document.getElementById('comments');

    commentsData.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = `${comment.aluno}: ${comment.comentario} - Avaliação: ${comment.avaliacao} estrelas`;

        const relevantButton = document.createElement('button');
        relevantButton.textContent = 'Relevante';
        relevantButton.addEventListener('click', function() {
            document.getElementById('relevantes').querySelector('ul').appendChild(li);
        });

        const notRelevantButton = document.createElement('button');
        notRelevantButton.textContent = 'Não Relevante';
        notRelevantButton.addEventListener('click', function() {
            document.getElementById('naoRelevantes').querySelector('ul').appendChild(li);
        });

        const toEvaluateButton = document.createElement('button');
        toEvaluateButton.textContent = 'A Avaliar';
        toEvaluateButton.addEventListener('click', function() {
            document.getElementById('aAvaliar').querySelector('ul').appendChild(li);
        });

        li.appendChild(relevantButton);
        li.appendChild(notRelevantButton);
        li.appendChild(toEvaluateButton);

        commentsList.appendChild(li);
    });
});
