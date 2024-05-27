![image](https://github.com/jcamposmelo/Jogo-da-Adivinha-o/assets/101723959/d8e46ab5-5ef6-4ffa-9f04-be757d33e221)

# Jogo da Adivinhação v 2.0

Aplicação web em formato de jogo onde o usuário digita um número no console `clicando em chutar` o sistema faz um aviso viasual e sonoro se houve ou não o acerto. Uma variável armazena o número aleatório e o usuário tenta adivinhar em menos tentativas possíveis.

## 🔨 Funcionalidades do projeto

O Jogo da Adivinhação é um jogo divertido e foi construído de forma lúdica ao mesmo tempo que instrui boas práticas do desenvolvimento web.

## Tela Inicial

![image](https://github.com/jcamposmelo/Jogo-da-Adivinha-o/assets/101723959/d418ece7-bc1e-4411-947b-2e15d03f6ecb)

## Sorteando o Número

![image](https://github.com/jcamposmelo/Jogo-da-Adivinha-o/assets/101723959/999809de-0232-4683-9317-f903561b5ec2)

## Resultado

![image](https://github.com/jcamposmelo/Jogo-da-Adivinha-o/assets/101723959/020d16e3-d388-4954-a5b8-4d6432d928ca)

## ✔️ Técnicas e tecnologias utilizadas

As técnicas e tecnologias utilizadas foram:

- `HTML`: criação dos elementos da tela;
- `CSS`: estilização da aplicação;
- `JavaScript`: construção de elementos dinâmicos para geração automática do número secreto.

#
## Detalhamento de trechos do código

- Função criada para consumir uma API para o Voice Speak, tornando a experiência do usuário mais lehal e interativa.
  
      function exibirTextoNaTela(tag, texto) {
          let campo = document.querySelector(tag);
          campo.innerHTML = texto;
          responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
      }

- Função para criação das listas de números sorteados e que não se repetem, tornando mais lógico o jogo e menos previsível.

      function gearNumeroAleatorio() {
          let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
          let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
          if(quantidadeDeElementosNaLista == numeroLimite) {
              listaDeNumerosSorteados = [];
          }
          if (listaDeNumerosSorteados.includes(numeroEscolhido)){
              return gearNumeroAleatorio();        
          }else{
              listaDeNumerosSorteados.push(numeroEscolhido);
              return numeroEscolhido;
          }
      }

- Função criada para gerar o `chute` e as tentativas criadas até o acerto, que é o objetivo final do jogo.

          function verificarChute() {
            let chute = document.querySelector('input').value;
            console.log(chute == numerSecreto);
        
            if (chute == numerSecreto) {
                exibirTextoNaTela('h1', 'Acertou!');
                let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
                let mensagensTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
                exibirTextoNaTela('p', mensagensTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');
            } else {
                if (chute > numerSecreto) {
                    exibirTextoNaTela('p', 'O número secreto é menor, tente novamente!');
                } else {
                    exibirTextoNaTela('p', 'O número secreto é maior');
                }
                tentativas++;
                limparCampo();
            }
        }

## 📁 Acesso ao projeto

Você pode acessá-lo de forma gratuita e aprimorar!

Após baixar o projeto, você pode abrir com o Visual Studio Code. Para isso, no menu superior, clique em:

- **File** > **Open Folder**
- O projeto está salvo em 2 pastas `src` e `img` basta selecionar. (Caso o projeto esteja compactado na extensão .zip, será necessário extraí-lo antes de procurá-lo)
- Por fim clique em OK!

Ao finalizar esses passos, você pode executar a aplicação com a extensão Live Server 🏆 
