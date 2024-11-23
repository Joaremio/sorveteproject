function pegarValor() {
    const select = document.getElementById('preco'); // Pega o valor do menu suspenso
    return parseFloat(select.value); // Retorna o valor selecionado
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const select = document.getElementById('preco'); // Pega o menu suspenso
    
    // Função para verificar quantos checkboxes estão selecionados
    function verificarSelecionados() {
      const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      const valorSelecionado = pegarValor(); // Obtém o valor do açaí selecionado
  
      // Define o limite de checkboxes a serem selecionados com base no valor do açaí
      let limiteMaximo;
      if (valorSelecionado === 5) {
        limiteMaximo = 3;
      } else if (valorSelecionado === 6) {
        limiteMaximo = 4;
      } else if (valorSelecionado === 7) {
        limiteMaximo = 5;
      } else if (valorSelecionado === 8) {
        limiteMaximo = 7;
      } else if (valorSelecionado === 10) {
        limiteMaximo = 8;
      } else if (valorSelecionado === 12) {
        limiteMaximo = 10;
      } else if (valorSelecionado === 20) {
        limiteMaximo = 12;
      } else {
        limiteMaximo = 0; // Caso nenhum valor tenha sido selecionado, não permite seleções
      }
  
      // Verifica se o número de checkboxes selecionados é maior que o limite
      if (checkedCheckboxes.length > limiteMaximo) {
        checkedCheckboxes[checkedCheckboxes.length - 1].checked = false; // Desmarca o último checkbox
      }
  
      // Desabilita os checkboxes não selecionados, caso o número máximo de complementos tenha sido atingido
      checkboxes.forEach(checkbox => {
        if (checkedCheckboxes.length === limiteMaximo && !checkbox.checked) {
          checkbox.disabled = true; // Desabilita os checkboxes não marcados
          checkbox.parentElement.style.color = 'gray'; // Torna os desabilitados cinzas
        } else {
          checkbox.disabled = false; // Habilita os checkboxes
          checkbox.parentElement.style.color = ''; // Remove a cor cinza
        }
      });
    }
  
    // Adiciona um evento a cada checkbox para verificar a seleção
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', verificarSelecionados);
    });
  
    // Função para limpar todos os checkboxes quando o valor do açaí mudar
    function limparCheckboxes() {
      checkboxes.forEach(checkbox => {
        checkbox.checked = false; // Desmarca todos os checkboxes
        checkbox.disabled = false; // Habilita todos os checkboxes novamente
        checkbox.parentElement.style.color = ''; // Remove a cor cinza
      });
      verificarSelecionados(); // Chama a função para garantir que o limite de complementos seja respeitado
    }
  
    // Adiciona um evento de mudança ao menu suspenso para limpar os checkboxes ao alterar o valor
    select.addEventListener('change', limparCheckboxes);
  });
  