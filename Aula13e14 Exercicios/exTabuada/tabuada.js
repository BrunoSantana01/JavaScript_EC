/*function tabuada() {
    var tabNum = Number(document.getElementById('txtNum').value)
    var mulMin = Number(document.getElementById('mulMin').value)
    var mulMax = Number(document.getElementById('mulMax').value)
    var Tab = document.getElementById('resTab')
    var spcMsg = document.getElementById('msg')


    if (mulMin > mulMax) {
        window.alert('[ERRO] O ultimo multiplicador deve ser maior que o primeiro.')
        spcMsg.innerHTML = 'Preencha novamente os campos.'
    } else if (mulMin < mulMax) {
        for (var cont = mulMin; cont <= mulMax; cont++) {
            
            var resTab = (tabNum * cont)
            Tab.innerText += `${tabNum}x${cont}=${resTab}`
        }

    }
}*/


function tabuada() {
        var tabNum = Number(document.getElementById('txtNum').value);
        var mulMin = Number(document.getElementById('mulMin').value);
        var mulMax = Number(document.getElementById('mulMax').value);
        var Tab = document.getElementById('resTab');
        var spcMsg = document.getElementById('msg');

        if (mulMin > mulMax) {
          window.alert(
            '[ERRO] O ultimo multiplicador deve ser maior que o primeiro.',
          );
          spcMsg.innerHTML = 'Preencha novamente os campos.';
        } else if (mulMin < mulMax) {
          Tab.value = ''; // faz o reset dos valores.
          for (var cont = mulMin; cont <= mulMax; cont++) {
            var resTab = tabNum * cont;
            Tab.value += `${tabNum}x${cont}=${resTab}\n`; // adiciona quebra de linha com o `\n` no final
          }
        }
      }