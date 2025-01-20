const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('\nEscolha uma questão para visualizar a resposta:');
  console.log('1. Cálculo da Soma');
  console.log('2. Pertencimento à Sequência de Fibonacci');
  console.log('3. Cálculo de Receita');
  console.log('4. Cálculo de Faturamento Total e Percentual de Representação');
  console.log('5. Inversão de Strings');
  
  console.log('0. Sair');

  rl.question('Digite o número da questão: ', (answer) => {
    console.log('Resultado da questão:'); 
    switch (answer) {
      case '1':
        require('./dist/q1.js'); // Cálculo da Soma
        break;
      case '2':
        require('./dist/q2.js'); // Pertencimento à Sequência de Fibonacci
        break;
      case '3':
        require('./dist/q3.js'); // Cálculo de Receita
        break;
      case '4':
        require('./dist/q4.js'); // Cálculo de Faturamento Total
        break;
      case '5':
        require('./dist/q5.js'); // Inversão de Strings
        break;
      case '0':
        rl.close();
        break;
      default:
        console.log('Opção inválida. Tente novamente.');
        showMenu();
    }
    
    setTimeout(() => {
      rl.question('Digite 1 para voltar ao menu ou 2 para sair: ', (response) => {
        if (response === '1') {
          showMenu();
        } else if (response === '2') {
          rl.close();
        } else {
          console.log('Opção inválida. Tente novamente.');
          rl.question('Digite 1 para voltar ao menu ou 2 para sair: ', (response) => {
            if (response === '1') {
              showMenu();
            } else {
              rl.close();
            }
          });
        }
      });
    }, 500);
  });
}

showMenu();