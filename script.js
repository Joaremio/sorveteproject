function pegarValor() {
    const valores = document.getElementsByName('valor');  // Pega todos os radio buttons com o nome 'valor'
    let valorSelecionado = 0;  // Inicializa a variável com um valor numérico para facilitar o cálculo de limites

    for (let valor of valores) {
        if (valor.checked) {  // Se o radio button estiver selecionado
            valorSelecionado = parseFloat(valor.value.split(' ')[0].replace(',', '.'));  // Extrai o valor numérico
            break;  // Interrompe o loop após encontrar o primeiro selecionado
        }
    }
    return valorSelecionado;  // Retorna o valor selecionado
}

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Função para verificar quantos checkboxes estão selecionados
    function verificarSelecionados() {
        const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const valorSelecionado = pegarValor(); // Obtém o valor do açaí selecionado
        
        // Define o limite de checkboxes a serem selecionados com base no valor do açaí
        let limiteMaximo;
        if (valorSelecionado === 10) {
            limiteMaximo = 2;
        } else if (valorSelecionado === 20) {
            limiteMaximo = 4;
        } else if (valorSelecionado === 30) {
            limiteMaximo = 7;
        } else {
            limiteMaximo = 0; // Caso nenhum valor tenha sido selecionado, não permite seleções
        }
        
        // Verifica se o número de checkboxes selecionados é maior que o limite
        if (checkedCheckboxes.length > limiteMaximo) {
            // Se o limite for ultrapassado, desmarcar o último checkbox
            checkedCheckboxes[checkedCheckboxes.length - 1].checked = false;
        }
        
        // Desabilita os checkboxes não selecionados, caso o número máximo de complementos tenha sido atingido
        checkboxes.forEach(checkbox => {
            if (checkedCheckboxes.length === limiteMaximo && !checkbox.checked) {
                checkbox.disabled = true;  // Desabilita os checkboxes não marcados
                checkbox.parentElement.style.color = 'gray';  // Torna os desabilitados cinzas
            } else {
                checkbox.disabled = false;  // Habilita os checkboxes
                checkbox.parentElement.style.color = '';  // Remove a cor cinza
            }
        });
    }

    // Adiciona um evento a cada checkbox para verificar a seleção
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', verificarSelecionados);
    });
});
