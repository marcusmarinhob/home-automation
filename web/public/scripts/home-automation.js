// Itens
const lampsSelected = document.querySelectorAll(".items-grid li")

for( const item of lampsSelected){
    item.addEventListener("click", handleSelectedLamp)
}

function handleSelectedLamp(event){
    const itemLi = event.target
    const lampId = itemLi.dataset.id

    itemLi.classList.toggle("selected") 

    if( itemLi.classList.contains("selected") ){
        document.getElementById('lamp'+lampId).src="assets/lamp_on.png";
    } else {
        document.getElementById('lamp'+lampId).src="assets/lamp_off.png";
    }
}