function initViewer(viewer){
    let viewerId = viewer.getAttribute('id');
    let mainImg = document.querySelector('#' + viewerId + ' .c-image img');
    let links = document.querySelectorAll('#' + viewerId + ' ul li a');

    links.forEach(function(link){
        let imgUrl = link.getAttribute('href');
        link.onclick = function(event){
            event.preventDefault();
            mainImg.src = imgUrl;
        }
    });
}

var images = document.querySelectorAll('.c-images-list');
images.forEach(function(image){
    initViewer(image);
});