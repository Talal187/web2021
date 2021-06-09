

function change() {
    var body = document.querySelector('body');
    var con = document.getElementById('con');
    var checkbox = document.getElementById('checkbox');

    if(checkbox.checked == true){
        con.style.background = '#000';
        body.style.background = '#ffbbe9';
    }
    else{
        con.style.background = '#fff';
        body.style.background = '#330127';
    }
}