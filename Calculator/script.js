function button(value) {

    let x = document.getElementById('displayInput');
    // x.value += value;
    console.log(x.value);
    if (value == "=") {
        x.value = eval(x.value);
    }
    else if (value == "AC") {
        x.value = "";
    }
    else if(value == "C"){
        x.value =x.value.slice(0,-1);
    }
    else {
        x.value += value;
    }


}


