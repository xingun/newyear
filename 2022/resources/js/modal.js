const modal = document.querySelector(".popup");
const closeButton = document.querySelector(".close-button-popup");
const closeSentence = document.querySelector(".close-sentence-popup");
const popupTitle = $( "#popupTitle" );
const popupContent = $( "#popupContent" );

function toggleModal () {
    if (actualScreen === 2 || actualScreen === 3 || actualScreen === 4 || actualScreen === 6)
        modal.classList.toggle("show-popup");
    if (actualScreen === 2) {
        popupTitle.text("Hey, bạn nên vuốt ve con mèo");
        popupContent.text("«Tôi hiểu rồi»");
    } else if (actualScreen === 3) {
        popupTitle.text("Hey, bạn nên vuốt ve con mèo 3 lần");
        popupContent.text("«À oke nha»");
    } else if (actualScreen === 4) {
        popupTitle.text("Vì vậy, ở đó bạn phải vuốt ve con mèo, nhưng theo hướng khác");
        popupContent.text("«Tôi sợ»");
    } else if (actualScreen === 6) {
        popupTitle.text("Có một món quà mà bạn có thể chơi với con mèo...");
        popupContent.text("«Tuyệt vời»");
    }
}
function windowOnClick (event){
    if (event.target === modal)
        toggleModal();
}


closeSentence.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
