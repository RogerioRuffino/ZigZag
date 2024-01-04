function showCF() {
  hideAll();
  document.querySelector('.custosFixos').style.display = 'block';
}

function showCV() {
  hideAll();
  document.querySelector('.custosVariaveis').style.display = 'block';
}

function showR() {
  hideAll();
  document.querySelector('.resultados').style.display = 'block';
}

function hideAll() {
  document.querySelector('.custosFixos').style.display = 'none';
  document.querySelector('.custosVariaveis').style.display = 'none';
  document.querySelector('.resultados').style.display = 'none';
}
//======================================
function moveToNextInput(event, nextInputId) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById(nextInputId).focus();
    }
}
//======================================

// =============================================================================


function numtostr(str,n) {

var elemento = document.getElementsByTagName('input')[n];
var valor = elemento.value;

valor = valor + '';
valor = parseInt(valor.replace(/[\D]+/g, ''));
valor = valor + '';
valor = valor.replace(/([0-9]{2})$/g, ",$1");

if (valor.length > 6) {
 valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");  
}

elemento.value = valor;
if(valor == 'NaN') elemento.value = '';

cfcustominuto();
cvcustominuto()
}

  
//=====================================================

function strtonum(fl){
	if (typeof fl !== 'string') {
		return 0;
	} else {
		fl = fl.replace(".", "");
		fl = fl.replace(",", ".");
		fl = parseFloat(fl).toFixed(2);
		return parseFloat(fl);
	}

}
function cfcustominuto() {
  // Obter os valores dos custos fixos
  var aluguel = strtonum(document.getElementById('aluguel').value) || 0;
  var luz = strtonum(document.getElementById('luz').value) || 0;
  var agua = strtonum(document.getElementById('agua').value) || 0;
  var telefone = strtonum(document.getElementById('telefone').value) || 0;
  var internet = strtonum(document.getElementById('internet').value) || 0;
  var mlimpeza = strtonum(document.getElementById('mlimpeza').value) || 0;
  var mescritorio = strtonum(document.getElementById('mescritorio').value) || 0;
  var mobra= strtonum(document.getElementById('mobra').value) || 0;
  var mmaquinas = strtonum(document.getElementById('mmaquinas').value) || 0;
  var mcomputadores = strtonum(document.getElementById('mcomputadores').value) || 0;
 

  // Calcular o total
  var cfTotal = aluguel + luz + agua+telefone+internet+mlimpeza+mescritorio+mobra+mmaquinas+mcomputadores; // Adicione os outros custos fixos aqui

  // Atualizar o campo de total
  document.getElementById('cfTotal').value = cfTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Calcular o custo por minuto (supondo 22 dias de 8 horas por mês)
  var minutosPorMes = 22 * 8 * 60; // 22 dias * 8 horas * 60 minutos
  var custoPorMinuto = cfTotal / minutosPorMes;

  // Atualizar o campo de custo por minuto
  //document.getElementById('cfminuto').value = custoPorMinuto.toFixed(4);
  document.getElementById('cfminuto').value = custoPorMinuto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function cvcustominuto() {
  // Obter os valores dos custos fixos
  var lbordado = strtonum(document.getElementById('lbordado').value) || 0;
  var lbobina = strtonum(document.getElementById('lbobina').value) || 0;
  var tntcomp = strtonum(document.getElementById('tntcomp').value) || 0;
  var tntlarg = strtonum(document.getElementById('tntlarg').value) || 0;
  var salario = strtonum(document.getElementById('salario').value) || 0;
  var timemaq = strtonum(document.getElementById('timemaq').value) || 0;
  var diasmaq = strtonum(document.getElementById('diasmaq').value) || 0;
  var cbast = strtonum(document.getElementById('cbast').value) || 0;
  var abast = strtonum(document.getElementById('abast').value) || 0;
  var vmaq = strtonum(document.getElementById('vmaq').value) || 0;
  var qcores = strtonum(document.getElementById('qcores').value) || 0;
  var ttl = strtonum(document.getElementById('ttl').value) || 0;
  var qpontos = strtonum(document.getElementById('qpontos').value) || 0;
  var qpecas = strtonum(document.getElementById('qpecas').value) || 0;

  // Calcular o total
  var cvTotal = lbordado + lbobina + tntcomp+tntlarg+salario+timemaq+diasmaq+cbast+abast+vmaq+qcores+ttl+qpontos+qpecas; // Adicione os outros custos fixos aqui

  // Atualizar o campo de total
  document.getElementById('cvTotal').value = cvTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Calcular o custo por minuto (supondo 22 dias de 8 horas por mês)
  var minutosPorMes = 22 * 8 * 60; // 22 dias * 8 horas * 60 minutos
  var custoPorMinuto = cvTotal / minutosPorMes;

  // Atualizar o campo de custo por minuto
  //document.getElementById('cfminuto').value = custoPorMinuto.toFixed(4);
  document.getElementById('cvminuto').value = custoPorMinuto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
