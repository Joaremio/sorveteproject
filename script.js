const menuItems = [
    { nome: "CREME DE AÇAI", categoria: "Cremes", imagem: "css/açai.jpeg" },
    { nome: "CREME DE CUPUAÇU", categoria: "Cremes", imagem: "css/cupuaçu.png" },
    { nome: "CREME DE NINHO", categoria: "Cremes", imagem: "css/ninho.jpg" },
    { nome: "FANTASMA", categoria: "Cremes", imagem: "css/fantasma.jpg" },
    { nome: "CREME DE AMENDOIM", categoria: "Cremes", imagem: "css/amendoim.png" },
    { nome: "CREME DE AVELÃ", categoria: "Cremes", imagem: "css/avelã_cacau.jpg" },
    { nome: "CREME DE OREO", categoria: "Cremes", imagem: "css/oreo.jpeg" },
    { nome: "FANTASMA", categoria: "Cremes", imagem: "css/fantasma.jpg" },
    { nome: "CREME CHOCOLATE BELGA", categoria: "Cremes", imagem: "css/trufado.jpg" },
    { nome: "CREME MALTINE", categoria: "Cremes", imagem: "css/maltine.jpg" },
    { nome: "CREME DE DANONINHO", categoria: "Cremes", imagem: "css/sorvete_danoninho.jpg" },
    { nome: "FANTASMA", categoria: "Cremes", imagem: "css/fantasma.jpg" },
    { nome: "CREME DE MORANGO", categoria: "Cremes", imagem: "css/morango.webp" },
    { nome: "CREME DE PITAYA", categoria: "Cremes", imagem: "css/pitaya.jpg" },
    { nome: "CREME DE TAPIOCA", categoria: "Cremes", imagem: "css/tapioca.jpeg" },
    { nome: "FANTASMA", categoria: "Cremes", imagem: "css/fantasma.jpg" },
    { nome: "CREME DE MARACUJA", categoria: "Cremes", imagem: "css/maracuja.jpeg" },
    { nome: "CREME DE ABACAXI", categoria: "Cremes", imagem: "css/abacaxi.jpg" },
    { nome: "CREME DE OVOMALTINE", categoria: "Cremes", imagem: "css/ovomaltine.jpg" },
    { nome: "FANTASMA", categoria: "Cremes", imagem: "css/fantasma.jpg" },
    { nome: "CREME DE NINHO TRUFADO", categoria: "Cremes", imagem: "css/trufado.avif" },
    { nome: "CHOCOLATE", categoria: "Caldas", imagem: "css/calda_chocolato.webp" },
    { nome: "CALDA DE MORANGO", categoria: "Caldas", imagem: "css/morango_calder.jpg" },
    { nome: "LIMÃO", categoria: "Caldas", imagem: "css/calda_limao.webp" },
    { nome: "FANTASMA", categoria: "Caldas", imagem: "css/fantasma.jpg" },
    { nome: "LEITE CONDENSADO", categoria: "Caldas", imagem: "css/condesado_cada.webp" },
    { nome: "MEL", categoria: "Caldas", imagem: "css/mel.jpg" },
    { nome: "CALDA DE UVA", categoria: "Caldas", imagem: "css/uva_calda.png" },
    { nome: "FANTASMA", categoria: "Caldas", imagem: "css/fantasma.jpg" },
    { nome: "CARAMELO", categoria: "Caldas", imagem: "css/caramelo_caldo.jpg" },
    { nome: "CALDA DOCE DE LEITE", categoria: "Caldas", imagem: "css/doce_leite_calda.webp" },
    { nome: "DOCE DE LEITE", categoria: "Complementos", imagem: "css/doce_leite.jpg" },
    { nome: "BEIJINHO", categoria: "Complementos", imagem: "css/beijinho.jpg" },
    { nome: "CASTANHA", categoria: "Complementos", imagem: "css/castanha.avif" },
    { nome: "FANTASMA", categoria: "Complementos", imagem: "css/fantasma.jpg" },
    { nome: "FINI", categoria: "Complementos", imagem: "css/fini.jpg" },
    { nome: "COCO RALADO", categoria: "Complementos", imagem: "css/cocoralado.webp" },
    { nome: "CHOCO POWER", categoria: "Complementos", imagem: "css/chocomini.webp" },
    { nome: "FANTASMA", categoria: "Complementos", imagem: "css/fantasma.jpg" },
    { nome: "MORANGO", categoria: "Complementos", imagem: "css/morangos.jpg" },
    { nome: "GRANOLA", categoria: "Complementos", imagem: "css/granola.jpg" },
    { nome: "JUJUBA", categoria: "Complementos", imagem: "css/jujubas.jpg" },
    { nome: "FANTASMA", categoria: "Complementos", imagem: "css/fantasma.jpg" },
    { nome: "MM", categoria: "Complementos", imagem: "css/mms.webp" },
    { nome: "BRIGADEIRO", categoria: "Complementos", imagem: "css/brigadeiro.jpg" },
    { nome: "BIS", categoria: "Complementos", imagem: "css/bis.jpg" },
    { nome: "FANTASMA", categoria: "Complementos", imagem: "css/fantasma.jpg" },
    { nome: "AMENDOIM", categoria: "Complementos", imagem: "css/amendoimcomplemento.jpg" },
    { nome: "LEITE EM PÓ", categoria: "Complementos", imagem: "css/leite.webp" },
    { nome: "CEREJA", categoria: "Complementos", imagem: "css/cereja.jpg" },
    { nome: "FANTASMA", categoria: "Complementos", imagem: "css/fantasma.jpg" },
    { nome: "BANANA", categoria: "Complementos", imagem: "css/bananas.jpg" },
    { nome: "KIWI", categoria: "Complementos", imagem: "css/kiwi.jpg" },
    { nome: "COCO QUEIMADO", categoria: "Complementos", imagem: "css/coco_queimado.jpg" },
    { nome: "FANTASMA", categoria: "Complementos", imagem: "css/fantasma.jpg" },
    { nome: "FARINHA LÁCTEA", categoria: "Complementos", imagem: "css/farinha_lactea.jpg" },
    { nome: "PAÇOCA", categoria: "Complementos", imagem: "css/paçoca.webp" },
    { nome: "OVO MALTINE", categoria: "Complementos", imagem: "css/ovomaltine.jpg" },
    { nome: "FANTASMA", categoria: "Complementos", imagem: "css/fantasma.jpg" },
    { nome: "GOTAS DE CHOCOLATE", categoria: "Complementos", imagem: "css/gotas.jpeg" },
    { nome: "CHOCO BOL", categoria: "Complementos", imagem: "css/choco bol.webp" },
    { nome: "GRANULADO", categoria: "Complementos", imagem: "css/granulado.jpg" },
    { nome: "FANTASMA", categoria: "Complementos", imagem: "css/fantasma.jpg" },
    { nome: "FARINHA LÁCTEA", categoria: "Complementos", imagem: "css/farinha_lactea.jpg" },
    { nome: "MARSHMALLOWS", categoria: "Complementos", imagem: "css/marshmallows.jpeg" },
    { nome: "FLOCOS DE ARROZ", categoria: "Complementos", imagem: "css/ARROZ.jpg" },
    { nome: "FANTASMA", categoria: "Complementos", imagem: "css/fantasma.jpg" },
    { nome: "CANUDINHO WAFER", categoria: "Complementos", imagem: "css/canudinho.webp" },
    { nome: "UVA", categoria: "Complementos", imagem: "css/uva.jpeg" },
    { nome: "KIWI", categoria: "Complementos", imagem: "css/kiwi.jpg" },
    { nome: "FANTASMA", categoria: "Complementos", imagem: "css/fantasma.jpg" },
    { nome: "ABACAXI", categoria: "Complementos", imagem: "css/abacai.jpeg" },
    { nome: "MORANGO", categoria: "Complementos", imagem: "css/moranga.jpeg" },

  ];
  


let pedidos = {};  // Objeto que vai armazenar os pedidos por cliente

function adicionarAoPedido(nome) {


    const valorAcai = document.getElementById("valorAcai").value;
    if (!valorAcai) {
      // Exibe um alerta caso não tenha valor selecionado
      alert("Por favor, selecione o valor do antes de adicionar itens ao pedido.");
      return; // Impede a execução do código abaixo
    }

  const item = menuItems.find(i => i.nome === nome);

  if (pedidos[nome]) {
      // Exibe o alerta se o item já foi adicionado ao pedido
      alert(`${nome} já foi adicionado ao pedido.`);
  } else {
      pedidos[nome] = {
          quantidade: 1,
          categoria: item.categoria,
      };
  }

  const categoria = item.categoria;
  if (categoria === "Cremes") {
      atualizarPedido("Cremes", "lista-cremes", "cremes-describe", "Cremes");
  } else if (categoria === "Complementos") {
      atualizarPedido("Complementos", "lista-complementos", "complements-describe", "Complementos");
  } else if (categoria === "Caldas") {
      atualizarPedido("Caldas", "lista-caldas", "caldas-describe", "Caldas");
  }

  atualizarEstadoBotoes(categoria); // Atualiza o estado dos botões após adicionar
}


function verificarLimites(limites) {
  const categorias = { Cremes: 0, Complementos: 0, Caldas: 0 };

  // Conta itens por categoria
  Object.keys(pedidos).forEach(nome => {
      const item = pedidos[nome];
      categorias[item.categoria] += item.quantidade;
  });

  // Habilitar/desabilitar botões com base no limite
  menuItems.forEach(item => {
      const botao = document.querySelector(`button[onclick="adicionarAoPedido('${item.nome}')"]`);
      if (botao) {
          if (categorias[item.categoria] >= limites[item.categoria.toLowerCase()]) {
              botao.disabled = true; // Desativa o botão se atingir o limite
          } else {
              botao.disabled = false; // Reativa o botão caso esteja abaixo do limite
          }
      }
  });
}

function limitar() {
  const preco = document.getElementById("valorAcai").value;

  const limitesPorPreco = {
      "7": { cremes: 2, complementos: 4, caldas: 2 },
      "8": { cremes: 2, complementos: 5, caldas: 2 },
      "10": { cremes: 3, complementos: 6, caldas: 3 },
      "15": { cremes: 3, complementos: 7, caldas: 3},
      "20": { cremes: 4, complementos: 8, caldas: 4 },
      "30": { cremes: 5, complementos: 10, caldas: 4 },
  };

  return limitesPorPreco[preco] || { cremes: 0, complementos: 0, caldas: 0 }; // Limite padrão caso preço inválido
}

function getListaId(categoria) {
  if (categoria === "Cremes") return "lista-cremes";
  if (categoria === "Complementos") return "lista-complementos";
  if (categoria === "Caldas") return "lista-caldas";
  return "";
}

function getTituloId(categoria) {
  if (categoria === "Cremes") return "cremes-describe";
  if (categoria === "Complementos") return "complements-describe";
  if (categoria === "Caldas") return "caldas-describe";
  return "";
}

// Função para atualizar o pedido e exibir a lista
function atualizarPedido(categoria, listaId, tituloId, tituloTexto) {
  const lista = document.getElementById(listaId);
  const titulo = document.getElementById(tituloId);

  lista.innerHTML = ''; // Limpa a lista existente
  titulo.innerText = tituloTexto; // Atualiza o texto do título

  Object.keys(pedidos).forEach(nome => {
      if (pedidos[nome].categoria === categoria) {
          const listItem = document.createElement('li');
          listItem.className = "list-group-item d-flex justify-content-between align-items-center";
          listItem.innerHTML = `
              ${nome}
              <button class="btn btn-danger btn-sm" onclick="removerDoPedido('${nome}')">X</button>
          `;
          lista.appendChild(listItem);
      }
  });
}


// Função para atualizar a quantidade de um item no pedido
function atualizarQuantidade(nome, novaQuantidade) {
  novaQuantidade = parseInt(novaQuantidade);
  if (novaQuantidade < 1) {
      removerDoPedido(nome); // Remove o item se a quantidade for menor que 1
  } else {
      pedidos[nome].quantidade = novaQuantidade;
  }
  atualizarPedido();
}

function removerDoPedido(nome) {
  if (pedidos[nome]) {
      pedidos[nome].quantidade -= 1; // Diminui a quantidade do item
      if (pedidos[nome].quantidade <= 0) {
          delete pedidos[nome]; // Remove o item do pedido se a quantidade for 0
      }
  }

  // Obtém a categoria do item removido
  const item = menuItems.find(item => item.nome === nome);
  if (item) {
      const categoria = item.categoria;

      // Atualiza a lista de pedidos dinamicamente com base na categoria
      if (categoria === "Cremes") {
          atualizarPedido("Cremes", "lista-cremes", "cremes-describe", "Cremes");
      } else if (categoria === "Complementos") {
          atualizarPedido("Complementos", "lista-complementos", "complements-describe", "Complementos");
      } else if (categoria === "Caldas") {
          atualizarPedido("Caldas", "lista-caldas", "caldas-describe", "Caldas");
      }

      // Atualiza os botões da categoria para ativar novamente se estiverem no limite
      atualizarEstadoBotoes(categoria);
  }
}

function atualizarEstadoBotoes(categoria) {
  const limites = limitar(); // Obtém os limites de cada categoria
  const totalCategoria = Object.keys(pedidos)
      .filter(nome => pedidos[nome].categoria === categoria)
      .reduce((total, nome) => total + pedidos[nome].quantidade, 0);

  // Ativar/desativar botões com base no limite
  menuItems
      .filter(item => item.categoria === categoria)
      .forEach(item => {
          const botao = document.querySelector(`button[onclick="adicionarAoPedido('${item.nome}')"]`);
          if (botao) {
              botao.disabled = totalCategoria >= limites[categoria.toLowerCase()];
          }
      });
}




// Função para enviar o pedido via WhatsApp
function enviarPedido() {
  // Verificar se uma das opções do radio foi selecionada
  const radios = document.getElementsByName('escolha'); // Atualizado para corresponder ao 'name' no HTML
  let tipoPedidoSelecionado = null;

  for (const radio of radios) {
      if (radio.checked) {
          tipoPedidoSelecionado = radio.value; // Pega o valor do radio selecionado
          break;
      }
  }

  if (!tipoPedidoSelecionado) {
      alert("Selecione uma das opções: Marmita ou Copo.");
      return;
  }

  // Código restante para manipular o pedido
  const selectElement = document.getElementById('valorAcai');
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const optionText = selectedOption.text;
  const nomeCliente = document.getElementById('nomeCliente').value;
  const numeroMesa = document.getElementById('numeroMesa').value;
  const pedidoEmCasa = document.getElementById('pedidoEmCasa').checked;
  const enderecoCliente = document.getElementById('ruaCliente').value;
  const complemento = document.getElementById('complemento').value; // Complemento (ponto de referência)
  const numeroCliente = Number(document.getElementById('numeroEndereco').value);

  // Validação para "pedido em casa"
  if (pedidoEmCasa) {
      if (!nomeCliente) {
          alert("Digite o seu nome");
          return;
      } else if (!enderecoCliente || !numeroCliente) {
          alert("Digite o endereço completo (rua e número)");
          return;
      }
  } else {
      // Validação para "pedido no restaurante"
      if (!nomeCliente) {
          alert("Digite o seu nome");
          return;
      } else if (!numeroMesa) {
          alert("Digite o número da mesa");
          return;
      }
  }

  if (Object.keys(pedidos).length === 0) {
      alert("Adicione pelo menos um item ao pedido.");
      return;
  }

  // Criar um resumo do pedido
  let resumoPedido = "";
  let valorTotal = parseFloat(document.getElementById("valorAcai").value);

  if (pedidoEmCasa) {
      resumoPedido += `*PEDIDO PARA ENTREGA*\n\n*Cliente:* ${nomeCliente}\n*Endereço:* ${enderecoCliente}, Nº ${numeroCliente}`;
      if (complemento) { // Adiciona o complemento se ele existir
          resumoPedido += `\n*Ponto de referência:* ${complemento}`;
      }
      resumoPedido += `\n*Taxa de entrega: R$ 3.00*\n\n*Itens:*\n`;

      // Adiciona o valor da taxa de entrega ao total
      valorTotal += 3.00;
  } else {
      resumoPedido += `*PEDIDO*\n\n*Cliente:* ${nomeCliente}\n*Mesa:* ${numeroMesa}`;
  }

  // Adiciona o açaí selecionado ao resumo
  resumoPedido += `\n*Açaí Selecionado:* ${optionText}\n\n*Tipo:* ${tipoPedidoSelecionado.toUpperCase()}\n \n\n*Itens:*\n`;


    // Divisões por categoria
    let complementos = [];
    let cremes = [];
    let caldas = [];

    // Divida os itens selecionados por categoria
    Object.keys(pedidos).forEach(item => {
        const itemInfo = pedidos[item];

        // Organize os itens por categoria
        if (itemInfo.categoria === "Complementos") {
            complementos.push(item);
        } else if (itemInfo.categoria === "Cremes") {
            cremes.push(item);
        } else if (itemInfo.categoria === "Caldas") {
            caldas.push(item);
        }
    });

    // Adiciona as divisões ao resumo
    if (cremes.length > 0) {
        resumoPedido += `\n*CREMES:*\n\n${cremes.join("\n")}`;
    }
    if (complementos.length > 0) {
        resumoPedido += `\n\n*COMPLEMENTOS:*\n${complementos.join("\n")}`;
    }
    if (caldas.length > 0) {
        resumoPedido += `\n\n*CALDAS:*\n${caldas.join("\n")}`;
    }

    resumoPedido += `\n\n*Total: R$ ${valorTotal.toFixed(2)}*`

  // Formatar a mensagem para o WhatsApp
  const mensagem = encodeURIComponent(resumoPedido);
  const numeroWhatsApp = "5584992077888";
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

  window.open(url, '_blank');
}

  

// Função genérica para exibir itens do menu como carrossel com base na categoria
function exibirMenuCategoria(categoria, containerId) {
  const menuContainer = document.getElementById(containerId);
  menuContainer.innerHTML = ""; // Limpa os itens existentes

  const itensFiltrados = categoria ? menuItems.filter(item => item.categoria === categoria) : menuItems;
  let activeClass = 'active';

  // Divide os itens em slides para o carrossel
  for (let i = 0; i < itensFiltrados.length; i += 4) {
      const slide = document.createElement('div');
      slide.className = `carousel-item ${activeClass}`;
      activeClass = ''; // Apenas o primeiro slide é ativo

      // Cria uma linha para conter até 4 cartões
      const row = document.createElement('div');
      row.className = "row justify-content-center g-5";

      itensFiltrados.slice(i, i + 3).forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.className = "col-3 col-sm-3 col-md-3 mb-3"; // Mantenha col-3 para todos os tamanhos
          itemDiv.innerHTML = `
              <div class="card">
                  <img src="${item.imagem}" class="card-img-top" alt="${item.nome}">
                  <div class="card-body text-center">
                      <h5 class="title">${item.nome}</h5>
                      <button class="btn btn-primary btn-sm" id="boti" onclick="adicionarAoPedido('${item.nome}')">Adicionar</button>
                  </div>
              </div>
          `;
          row.appendChild(itemDiv);
      });
      slide.appendChild(row);
      menuContainer.appendChild(slide);
  }
}

// Exibe os menus para cada categoria
exibirMenuCategoria("Cremes", "menu");
//exibirMenuCategoria("Complementos", "menu2");
//exibirMenuCategoria("Caldas", "menu3");


 
// Função para alternar a exibição dos campos de endereço
function toggleEndereco() {
  const checkbox = document.getElementById("pedidoEmCasa");
  const enderecoDiv = document.getElementById("enderecoCliente");

  if (checkbox.checked) {
      enderecoDiv.style.display = "block";
  } else {
      enderecoDiv.style.display = "none";
  }
}

function exibirTaxaEntrega() {
  const pedidoEmCasa = document.getElementById('pedidoEmCasa').checked;
  const textoTaxaEntrega = document.getElementById('textoTaxaEntrega');
  
  if (pedidoEmCasa) {
      textoTaxaEntrega.style.display = "block";
  } else {
      textoTaxaEntrega.style.display = "none";
  }
}


function textinho(){
  const preco = document.getElementById("valorAcai").value;
  let texto = "";

  switch(preco) {

      case "7":
          texto = "(selecione até 4)";
          break;
      case "8":
          texto = "(selecione até 5)";
          break;
      case "10":
          texto = "(selecione até 6)";
          break;
      case "15":
          texto = "(selecione até 7)";
          break;
      case "20":
          texto = "(selecione até 8)";
          break;
      case "30":
          texto = "(selecione até 10)";
          break;
      default:
          texto = "(preço inválido)";
          break;
  }

  return texto;
}

function referencia() {
  const campo = document.getElementById("limite");
  const limite = document.getElementById("limiteCremes");
  const limiteCaldas = document.getElementById("limiteCaldas");
  campo.innerHTML = ""
  const texto = textinho(); 
  campo.innerText = texto;
  limite.innerHTML = "";
  const textoCreme = textCreme();
  limite.innerText = textoCreme;
  limiteCaldas.innerText = ""
  const textoCobertura = textCoberturas();
  limiteCaldas.innerText = textoCobertura;

}

function textCreme(){
  const preco = document.getElementById("valorAcai").value;
  let texto = "";

  switch(preco) {
 
      case "7":
          texto = "(selecione até 2)";
          break;
      case "8":
          texto = "(selecione até 2)";
          break;
      case "10":
          texto = "(selecione até 3)";
          break;
      case "15":
          texto = "(selecione até 3)";
          break;
      case "20":
          texto = "(selecione até 4)";
          break;
      case "30":
          texto = "(selecione até 5)";
          break;
      default:
          texto = "(preço inválido)";
          break;
  }

  return texto;

}

function textCoberturas(){
    const preco = document.getElementById("valorAcai").value;
    let texto = "";
  
    switch(preco) {
   
        case "7":
            texto = "(selecione até 2)";
            break;
        case "8":
            texto = "(selecione até 2)";
            break;
        case "10":
            texto = "(selecione até 3)";
            break;
        case "15":
            texto = "(selecione até 3)";
            break;
        case "20":
            texto = "(selecione até 4)";
            break;
        case "30":
            texto = "(selecione até 4)";
            break;
        default:
            texto = "(preço inválido)";
            break;
    }
  
    return texto;
  
  }

function adicionarTituloPedido(){
  const selectElement = document.getElementById('valorAcai');
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const optionText = selectedOption.text;
  const adicionar = document.getElementById("AcaiSelecionado");
  adicionar.innerHTML = optionText
}

function zerarTodosItens() {
  // Limpa o objeto de pedidos completamente
  pedidos = {};  // Remove todos os itens do pedido

  // Limpa as listas de itens no HTML
  const categorias = ["Cremes", "Complementos", "Caldas"];
  
  categorias.forEach(categoria => {
      const listaCategoria = document.getElementById(`lista-${categoria.toLowerCase()}`);
      if (listaCategoria) {
          listaCategoria.innerHTML = '';  // Limpa o conteúdo HTML da lista
      } else {
          console.log(`Elemento com ID lista-${categoria.toLowerCase()} não encontrado.`);
      }
  });

  // Atualiza os botões, garantindo que eles voltem ao estado original
  categorias.forEach(categoria => {
      atualizarEstadoBotoes(categoria);  // Atualiza o estado dos botões para a categoria
  });

  // Se necessário, você pode adicionar mais lógica para exibir uma mensagem ou estado inicial
  console.log("Todos os itens foram zerados.");
}


document.getElementById("next").addEventListener("click", mudaCarosel);

// Array com os carrosséis
let carrosseis = [
    document.getElementById("menu-carousel"),
    document.getElementById("menu-carousel-2"),
    document.getElementById("menu-carousel-3")
];

let indicesMenus = [
    { categoria: "Cremes", menuId: "menu" }, 
    { categoria: "Complementos", menuId: "menu2" }, 
    { categoria: "Caldas", menuId: "menu3" }
];

let indiceAtual = 0; // Índice para controlar o carrossel atual

// Inicializa os carrosséis, escondendo todos exceto o primeiro
carrosseis.forEach((carrossel, index) => {
    carrosseis[index].style.display = index === 0 ? "block" : "none"; // Exibe o primeiro e esconde os outros
    if (index === 0) {
        // Exibe os itens da primeira categoria
        exibirMenuCategoria(indicesMenus[index].categoria, indicesMenus[index].menuId);
    }
});

function mudaCarosel() {
    // Esconde o carrossel atual
    carrosseis[indiceAtual].style.display = "none";
    
    // Aumenta o índice para o próximo carrossel
    indiceAtual = (indiceAtual + 1) % carrosseis.length; // Faz o índice voltar ao 0 quando chegar no final
    
    // Exibe o próximo carrossel
    carrosseis[indiceAtual].style.display = "block";
    
    // Exibe os itens para a categoria correspondente ao novo carrossel
    exibirMenuCategoria(indicesMenus[indiceAtual].categoria, indicesMenus[indiceAtual].menuId);
    
    // Altera o botão para "Finalizar" no último carrossel
    if (indiceAtual === carrosseis.length - 1) {  // Verifica se chegou no último carrossel (Caldas)
        document.getElementById("next").textContent = "FINALIZAR";
        document.getElementById("next").removeEventListener("click", mudaCarosel); // Remove o ouvinte de evento anterior
        document.getElementById("next").addEventListener("click", finalizarPedido); // Adiciona o ouvinte de evento para finalizar
    } else {
        // Volta o botão para "Próximo" caso não esteja no último carrossel
        document.getElementById("next").textContent = "PRÓXIMO";
        document.getElementById("next").removeEventListener("click", finalizarPedido); // Remove o ouvinte de evento anterior
        document.getElementById("next").addEventListener("click", mudaCarosel); // Adiciona o ouvinte de evento para o próximo carrossel
    }
}

function voltaCarosel() {
    // Esconde o carrossel atual
    carrosseis[indiceAtual].style.display = "none";
    
    // Diminui o índice para o carrossel anterior
    indiceAtual = (indiceAtual - 1 + carrosseis.length) % carrosseis.length; // Faz o índice voltar ao último carrossel quando chegar ao começo
    
    // Exibe o carrossel anterior
    carrosseis[indiceAtual].style.display = "block";
    
    // Exibe os itens para a categoria correspondente ao novo carrossel
    exibirMenuCategoria(indicesMenus[indiceAtual].categoria, indicesMenus[indiceAtual].menuId);
    
    // Verifica se o índice atual é o último carrossel, alterando o botão para "Finalizar"
    if (indiceAtual === carrosseis.length - 1) {
        document.getElementById("next").textContent = "FINALIZAR";
        document.getElementById("next").removeEventListener("click", mudaCarosel); // Remove o ouvinte de evento de mudar para o próximo
        document.getElementById("next").addEventListener("click", finalizarPedido); // Adiciona o ouvinte de evento de finalizar pedido
    } else {
        // Volta o botão para "Próximo" caso não esteja no último carrossel
        document.getElementById("next").textContent = "PRÓXIMO";
        document.getElementById("next").removeEventListener("click", finalizarPedido); // Remove o ouvinte de evento de finalizar
        document.getElementById("next").addEventListener("click", mudaCarosel); // Adiciona o ouvinte de evento para o próximo carrossel
    }
}

function finalizarPedido(event) {
    // Impede o comportamento padrão de clique
    event.preventDefault();
    
    // Aqui você pode exibir a seção de pedidos
    document.getElementById("pedido").scrollIntoView({ behavior: "smooth" });

    // Ou se preferir, pode redirecionar para outra página:
    // window.location.href = "pagina_finalizacao.html";  // Substitua pela URL da sua página de finalização
}
