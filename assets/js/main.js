var btnOpenModal = document.getElementById('btn');
var modal = document.getElementById('mdal');


btnOpenModal.onclick = function() {
    modal.style.display = "flex";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var listBtn = document.querySelectorAll('.btns button');
listBtn.forEach(function(btn){
    btn.onclick = function(){
        modal.style.display = "none";
    }
})
