let counter = document.getElementById
('counter');

let c = 0;

function inc(){

    c++;
    counter.value = c;

}


function dec(){

    c--;
    counter.value = c;
    
}


function res(){

    c = 0;
    counter.value = c;
    
}