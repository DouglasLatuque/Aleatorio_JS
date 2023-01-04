// CRIAÇÃO DE SISTEMA DE SORTEIO DE NOMES EM EQUIPES
var total = [];
var newTotal = [];
var numeros = [];
var galerinha ='';
var tdMenos = 0;
var pessoa = document.querySelector('#nome').value;
var lista = document.querySelector('tbody');
/* PRIMEIRA PAGINA */
function comecando(e) {
  if (e.keyCode == 13) {
    validar()
  };
};

function validar () {
  let tropinha = document.querySelector('#firstinput').value;
  if (tropinha == '') {
    let h2 = document.querySelector('h2');
    h2.innerText = "Poxa... preenche aí pra gente poder continuar xD"
    return;
  } else if (tropinha == 0) {
    let h2 = document.querySelector('h2');
    h2.innerText = "Pow, não me diga que você está tentando criar equipes com 0 pessoas..."
    return;
  } else if (tropinha == 1) {
    let h2 = document.querySelector('h2');
    h2.innerText = "Equipe de 1 pessoa não existe, coloca outro número aí"
    return;
  } else if (tropinha < 0) {
    let h2 = document.querySelector('h2');
    h2.innerText = "Número negativo ?... eu sei que foi só para testar o código :p"
    return;
  } else if (tropinha > 1) {
    iniciar();
    return;
  } 
}

function iniciar() {
  let inicio = document.querySelectorAll('.inicio');
  galerinha = document.querySelector('input').value;

  document.querySelector('#firstinput').removeAttribute('autofocus');
  document.querySelector('#nome').setAttribute('autofocus','autofocus');
  
  for(x of inicio) {
    x.classList.add('part1');
  };

  if (document.querySelector('.inicio').classList.contains('part1')){
    iniciar2();
  };  
  return;
};

function iniciar2() {
  let twopart = document.querySelectorAll('.part2');
  for(i in twopart) {
    twopart[i].classList.remove('part2');
  };
  return;
};


/* TERMINO DA 1 PAGINA E INICIO DA 2 PAGINA */


// função responsável por recarregar a página
function refresh () {
  window.location.reload(true);
  return;
}


var trN = 0;
let criacaotr = document.querySelector('tbody');
criacaotr.innerHTML += `<tr> <td> Equipe ${(trN + 1)} </td> </tr>`;
trN++;


function criarTR () {
  let criacaotr = document.querySelector('tbody');
  criacaotr.innerHTML += `<tr  class="equipes00"> <td> Equipe ${trN + 1} </td> </tr>`;
  trN++;
};


var tdN = 0;
function criarTD () {
  total.push(document.querySelector('#nome').value);
  let criacaotd = document.querySelectorAll('tr');  
  criacaotd[numero].innerHTML += `<td class="tdAll"> ${total[tdN]} </td>`;
  tdN++;
  tdMenos++;
  console.log(tdMenos);
  document.querySelector('#nome').value='';
};

var numero = 0;
function add() {
  let achando = document.querySelectorAll('tr')[numero];
  achei = achando.querySelectorAll('td')
  galerinha = parseInt(galerinha); 
  if (galerinha+1 == achei.length ) {
    numero++
    tdMenos = 0;
    criarTR();
    criarTD();
  } else {
    criarTD();
  }    
  return;
}; 


function addtexto (e){
  if (e.keyCode == 13){
    add();
    return;
  };
};

/* FUNÇÃO DE REMOÇÃO DE NOMES */

function remover () {
  tdMenos = parseInt(tdMenos);
  galerinha = parseInt(galerinha);
  if (tdMenos < 1 ) {
    removerTR();

    return;
  } else {
    removerTD();
    return;
  }
}

function removerTR () {
  tdMenos = parseInt(tdMenos);
  galerinha = parseInt(galerinha);
  let firstequipe = document.querySelectorAll('tr.equipes00');
  firstequipe[(firstequipe.length)-1].remove();
  tdMenos = galerinha;
  numero = numero - 1;
  trN = trN - 1;
  console.log(total);
  removerTD();
  return;
};

function removerTD () {
  tdMenos = parseInt(tdMenos);
  galerinha = parseInt(galerinha);
  let lastitem = document.querySelectorAll('td.tdAll');
  console.log(total);
  lastitem[(lastitem.length)-1].remove();
  total.reverse();
  total.splice(0,1);
  total.reverse();
  console.log(total);
  tdMenos = tdMenos - 1;
  tdN = tdN - 1;
  return;
};



/*  PARTE RESPONSÁVEL PELO EMBARALHAMENTO  */


function embaralho() {
  let pergunta = document.querySelector('.mensagemMae');

  if (pergunta.hasAttribute('style') == false){
    pergunta.setAttribute('style','display:flex;');
    return;
  } else {
    document.querySelector('#recomecar').removeAttribute('style');
    document.querySelector('#embaralhar').innerHTML = "Embaralhar de novo ?";
    document.querySelector('#remover').classList.add('sumir');
    if (numeros.length == total.length) {
      numeros.splice(0,numeros.length);
      newTotal.splice(0,newTotal.length);
      embaralho();
      return;
    } else {
      for(let x = 0; numeros.length < total.length; x++) {

        var maisNumero = Math.round(Math.random() * (total.length - 1) + 0);
        var tof = numeros.indexOf(maisNumero);

        if (tof == -1 ) {
          newTotal.push(total[maisNumero]);
          numeros.push(maisNumero);
        };
      };
      const select = document.querySelectorAll('.tdAll');
      for ( i in select) {
        select[i].innerHTML = newTotal[i];
      };  
      embaralho();
    };
  };
};


function simEmbaralhar() {
  document.querySelector('.mensagemMae').setAttribute('style','display:none;');
  embaralho();
  return;
}

function naoEmbaralhar() {
  document.querySelector('.mensagemMae').removeAttribute('style');
  return;
}



// set interval e testando o scrollTo setIntervall (função, tempo de intervalo em mlsec)
function blau(){
  if(window.scrollY === 0){
    document.querySelector('.scrollbutton').style.display="none";
  } else {
    document.querySelector('.scrollbutton').style.display="block";
  };
};

window.addEventListener('scroll',blau);

function back (){
  window.scrollTo({left:0,top:0,behavior:'smooth'});
};

// fim do interval





