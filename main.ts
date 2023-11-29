var prompt = require('prompt-sync')();

// 1- Escreva com suas palavras para que serve o comando IF?
// console.log('O comando "if" verifica se uma condição é verdadeira, caso seja, as instruções contidas entre chaves serão executadas');

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2- Faça um programa que peça um nome de usuário e verifique SE o usuario digitado é 'Admin'. Caso seja printe 'Bem vindo', caso contrário printe 'Usuário não encontrado'.

// var usuario: string = prompt('Digite seu nome de usuário: ');

// if (usuario == 'Admin') {
//     console.log('Bem-vindo!');
// } else {
//     console.log('Usuário não encontrado!');
// }

// Explicação: o código solicita que o usuário insira seu nome de usuário por meio do comando prompt. Em seguida, o comando "if" verifica se o nome digitado é igual a "Admin". Se for, a frase "Bem-vindo!" é exibida, caso contrário, o comando "else" imprime a mensagem "Usuário não encontrado!".

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3- Escreva com suas palavras para que serve o comando While e de um exemplo prático de sua usabilidade para resolução de problemas lógicos.
// console.log('O comando "while" é utilizado na criação de loops, ou seja, enquanto uma condição permanecer verdadeira, a lista de instruções se repetirá. \nUm exemplo prático disso seria a criação de um programa que solicita ao usuário que insira um número e em seguida, utiliza um loop para imprimir os números de 1 até o número inserido.');

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4- Faça um loop usando while ou for que conte de 0 a 10.
// var contador: number = 0;

// while (contador <= 10) {
//     console.log(contador);
//     contador++;
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// Explicação "while": para que este código funcione, é preciso que o comando "while" utilize um contador inicializado em zero e continue enquanto o mesmo for menor ou igual a 10. A cada loop, o valor do contador é impresso e aumentado em uma unidade.

// Explicação "for": já no caso do comando "for", o loop é configurado com a variável "i" iniciada em zero. O loop continuará enquanto "i" for menor ou igual a 10, e a cada loop, o valor de "i" é impresso e lhe é aumentado uma unidade.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5- Faça um loop que conte de 0 até N, sendo que N é um numero que o usuário escolhe.
// var num = Number(prompt('Digite um número: '))

// for (let i = 0; i <= num; i++) {
//     console.log(i);
// }

// Explicação: a variável "num" é definida como o número inserido pelo usuário através do comando prompt. Em seguida, um loop "for" é configurado com a variável "i" iniciada em zero. O loop continuará enquanto "i" for menor ou igual a "num", e a cada loop, o valor de "i" é impresso e lhe é aumentado uma unidade.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6- Faça um loop que conte de 100 até 1.
// for (let i = 100; i >= 1; i = i - 1) {
//     console.log(i);
// }

// Explicação: o loop "for" é configurado com a variável "i" iniciada em 100. O loop continuará enquanto "i" for maior ou igual a 1, e a cada loop, o valor de "i" é impresso no console e lhe é diminuido uma unidade, utilizando a expressão "i = i - 1".

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7- Faça um loop que some todos os numeros de 1 até 100.
// var soma = 0;

// for (let i = 1; i <= 100; i++) {
//     soma = soma + i;
// }

// console.log(soma);

// Explicação: para calcular a soma de todos os números de 1 até 100, o loop "for" é configurado com a variável "i" iniciada em 1, e a cada loop, o valor de "i" é adicionado à variável "soma", onde a mesma é inicializada em zero antes do início do loop. Ao final do loop, o resultado total da soma é exibido.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8- Faça um loop que some todos os numeros PARES de 1 até 100.
// var soma = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         soma = soma + i;
//     }
// }

// console.log(soma);

// Explicação: para calcular a soma de todos os números pares de 1 até 100, o loop "for" é configurado com a variável "i" iniciada em 1, e a cada loop, verifica-se se o valor de "i" é par usando a condição "(i % 2 == 0)". Se for par, o valor é adicionado à variável "soma". Ao final do loop, o resultado total da soma dos números pares é exibido.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 9- Faça um loop que printe apenas os numeros que são divisíveis por 3 e 5
// var num = Number(prompt('Digite um número: '))

// for (let i = 1; i <= num; i++) {
//     if (i % 3 == 0) {
//         console.log(`O número ${i} é divisível por "3"`);
//     } else if (i % 5 == 0) {
//         console.log(`O número ${i} é divisível por "5"`);
//     }
// }

// Explicação: neste código, é solicitado ao usuário que insira um número por meio do comando "prompt", que é armazenado na variável "num", em seguida, um loop "for" é configurado com a variável "i" iniciada em 1 e continuando até o valor inserido em "num". Agora dentro do loop, verifica-se se o valor de "i" é divisível por 3 usando a condição "(i % 3 == 0)". Caso seja verdadeiro, imprime-se uma mensagem indicando que é divisível por 3, porém se o valor de "i" não for divisível por 3, mas for divisível por 5, imprime=se uma mensagem indicando que é divisível por 5.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10- Explique com suas palavras o que é uma matriz.
// console.log('Uma matriz é uma tabela organizada em linhas e colunas, que é formada por mais de um array. Para facilitar eu penso nela como se fosse um plano cartesiano');

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // 11- Faça uma matriz manualmente 4 x 4 com numeros aleatorios a sua escolha
// const matriz: number[][] = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ]

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 12- Acesse o 2° item da 1° linha da matriz
// const matriz: number[][] = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ]

// // Comando para ajudar a identificar os índices ↓
// for (let x in matriz) {
//     for (let y in matriz[x]) {
//         console.log(`[${x}][${y}] = ${matriz[x][y]}`);
//     }
// }

// // console.log(matriz[0][1])

// Explicação: o comando "matriz[0][1]" significa que estou acessando o segundo elemento (índice 1) da primeira linha (índice 0) da matriz.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 13- Acesse o 3° item da 4° linha da matriz
// const matriz: number[][] = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ]

// // Comando para ajudar a identificar os índices ↓
// for (let x in matriz) {
//     for (let y in matriz[x]) {
//         console.log(`[${x}][${y}] = ${matriz[x][y]}`);
//     }
// }

// console.log(matriz[3][2])

// Explicação: o comando "matriz[3][2]" significa que estou acessando o terceiro elemento (índice 2) da quarta linha (índice 3) da matriz.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 14- Faça um loop FOR que leia as linhas da matriz.
// const matriz: number[][] = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ]

// for (let x in matriz) {
//     console.log(`[${x}] = ${matriz[x]}`);
// }

// Explicação: um loop "for" percorre as linhas da matriz e o comando "matriz[x]" acessa a linha atual, o índice x da matriz, exibindo seus elementos.
// OBS: por estética utilizei o comando `[${x}]` para indicar o índice da linha e o comando `${matriz[x]}` para indicar os itens dentro de cada índice.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 15- Faça um loop FOR dentro de um loop FOR para ler item por item de uma matriz.
// const matriz: number[][] = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ]

// for (let x in matriz) {
//     for (let y in matriz[x]) {
//         console.log(`[${x}][${y}] = ${matriz[x][y]}`);
//     }
// }

// Explicação: esse código usa um loop "for" dentro de outro loop "for" para percorrer cada elemento da matriz. O loop "externo" percorre as linhas da matriz com o comando "for (let x in matriz)" e dentro desse loop, o segundo loop "for (let y in matriz[x])" percorre os elementos individuais de cada linha.
// OBS: por estética utilizei o comando `[${x}][${y}]` para indicar as coordenadas dos itens na matriz e o comando "matriz[x][y]" para acessar cada item individual da matriz.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 16- Escreva com suas palavras o que é um função.
// console.log('Uma função é uma tarefa que você cria para o seu código, você define o passo a passo apenas uma vez e pode usá-la sempre que quiser.')

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 17- Faça uma função que printe 'Ola mundo' e chame ela.
// function cringe(): void {
//     console.log('Olá mundo')
// }

// cringe()

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 18- Faça uma função que receba um texto como parametro e mostre o print 'O texto de parametro é: ' e concatene com o numero.
// function texto(parametro: string): void {
//     var numero = 18;
//     console.log(`O texto de parametro é: ${parametro}${numero}`)
// }

// texto('O biston é viado *-*')

//Explicação: a função "texto" recebe um parâmetro chamado "parametro", do tipo string, dentro da função, é declarada uma variável chamada "numero" com o valor 18 (foda-se isso, é só pra ter um número) e em seguida, a função imprime a mensagem "O texto de parâmetro é: " seguida pelo texto fornecido como parâmetro concatenada com o número 18.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 19- Faça uma função que receba como parametro o texto '10,58' e que ele retorne o número 10.58.
// function texto(parametro: string): number {
//     let numero = parseFloat(parametro.replace(',', '.'));
//     return numero
// }

// var numero = texto('10,58');
// console.log(numero)

// Explicação: a função "texto" recebe um parâmetro chamado "parametro", que é do tipo string (a função também retornará um número), dentro da função, é criada uma variável chamada "numero" que armazena e converte o texto para número. Utilizamos o comando ".replace(',', '.')" para substituir a vírgula por ponto e o comando "parseFloat" para realizar a conversão de texto para decimal. 