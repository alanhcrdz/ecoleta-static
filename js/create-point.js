
function populateUFs() {
const ufSelect = document.querySelector("select[name=uf]")

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
.then(  res  => res.json()) //Arrow function  com parâmetro res que retorna em formato .json
.then( states  =>  { // Arrow function com parâmetro states, contem loop

    for (const state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`


    }
    })
}

populateUFs(); //Esta function irá pegar todos os UFs da API


function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const indexOfSelectedState = event.target.selectedIndex;    

        stateInput.value = event.target.options[indexOfSelectedState].text;


    const ufValue = event.target.value;

    stateInput
    
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
        citySelect.innerHTML = "<option value>Selecione a Cidade</option>";
        citySelect.disabled = true;
    
    fetch(url)
    .then( res => res.json())
    .then (cities => {

        for (const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false;

    })

}
     document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)
    
    
    //Itens de coleta

    //pegar todos os li

const itemsToCollect = document.querySelectorAll(".items-grid li");

for ( const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem); //<=== função por referência, que não possue parênteses
}

const collectedItems = document.querySelector("input[name=items]");

let selectedItems = [];


function handleSelectedItem(event) { //<== (event) captura o evento "click" para a function
    //console.log(event.target.dataset.id); 
    // target = alvo, localiza(identifica, mostra) o que vier antes do "."



    const itemLi = event.target;


    // add or remove class with javascript

    itemLi.classList.toggle("selected") //toggle: add or remove an element (instead using add or remove)
    const itemId = itemLi.dataset.id;

    
        //verificar se existem itens selecionados, se sim
        //pegar os itens selecionados
        //se já estiver selecionado, tirar da seleção
        //se não estiver selecionado, adicionar a seleção
        //atualizar o campo escondido com os itens selecionados



        const alreadySelected = selectedItems.findIndex(function (item) {
                const itemFound = item == itemId
                return itemFound;
        })

        if(alreadySelected >= 0) {
            const filteredItems = selectedItems.filter(item => {
                const itemIsDifferent = item != itemId
                return itemIsDifferent;
            })

            selectedItems = filteredItems
        }else {
            selectedItems.push(itemId);
        }

       //atualizar o campo escondido com os itens selecionados:
       collectedItems.value = selectedItems;

        // modo enxuto:
        /* 
            const alreadySelected = selectedItems.findIndex( item => item == itemId)
        */


       
}