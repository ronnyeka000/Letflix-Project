let toogleState = false;

let nav_toogle = function() {
    let element = document.getElementById('navmenu')
    if (toogleState == false) {
        element.style.display = 'flex';
        toogleState = true;
    } else {
        element.style.display = 'none';
        toogleState = false;
    }
}