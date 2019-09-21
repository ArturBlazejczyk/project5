const btn = document.body.querySelector('button');
const lists = document.body.querySelectorAll('li');
let fontSize = 10;

btn.addEventListener('click', function () {
    fontSize++;
    // LOOP FOR
    /*
        
        for (i = 0; i < lists.length; i++) {
            lists.item(i).style.display = 'block';
            lists.style.fontSize = fontSize + 'px';
        }
    */

    // FOREACH    
    lists.forEach(function (list) {
        list.style.display = 'block';
        list.style.fontSize = fontSize + 'px';
    })



})