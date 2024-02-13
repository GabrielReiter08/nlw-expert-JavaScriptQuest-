const perguntas = [
    {
      Pergunta: "O que é JavaScript?",
      Respostas: [
        "Uma linguagem de programação para estilizar páginas web.",
        "Um estilo de dança popular.",
        "Uma linguagem de programação para criar interações dinâmicas em páginas web."
      ],
      correta: 2
    },
    {
      Pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      Respostas: [
        "declare",
        "var",
        "let"
      ],
      correta: 2
    },
    {
      Pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
      Respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->"
      ],
      correta: 0
    },
    {
      Pergunta: "O que o operador '===' faz em JavaScript?",
      Respostas: [
        "Compara apenas o valor das variáveis, sem verificar o tipo.",
        "Compara o valor e o tipo das variáveis.",
        "Atribui um valor a uma variável."
      ],
      correta: 1
    },
    {
      Pergunta: "Qual é o método usado para imprimir algo no console em JavaScript?",
      Respostas: [
        "print()",
        "log()",
        "display()"
      ],
      correta: 1
    },
    {
      Pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      Respostas: [
        "10",
        "55",
        "Erro"
      ],
      correta: 1
    },
    {
      Pergunta: "Como você declara uma função em JavaScript?",
      Respostas: [
        "function minhaFuncao() {}",
        "minhaFuncao = function() {}",
        "declaraçãoFuncao minhaFuncao() {}"
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      Respostas: [
        "for (let i = 0; i < 5; i++) {}",
        "loop (let i = 0; i < 5; i++) {}",
        "while (let i = 0; i < 5; i++) {}"
      ],
      correta: 0
    },
    {
      Pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      Respostas: [
        "append()",
        "push()",
        "addToEnd()"
      ],
      correta: 1
    },
    {
      Pergunta: "Qual é o operador lógico 'E' em JavaScript?",
      Respostas: [
        "||",
        "AND",
        "&&"
      ],
      correta: 2
    }
  ];

 
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.Pergunta;

    for(let resposta of item.Respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item)) 
        dt.querySelector('input').value = item.Respostas.indexOf(resposta)
        
        dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta 
         
         corretas.delete(item)
         if(estaCorreta) {
           corretas.add(item)
         }
        
         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

        }
        
        
        quizItem.querySelector('dl').appendChild(dt)
   }

    quizItem.querySelector('dl dt').remove()
    
    //coloca a pergunta
    quiz.appendChild(quizItem)
     
    
}