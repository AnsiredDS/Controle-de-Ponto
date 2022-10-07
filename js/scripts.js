
var arr = new Array();

function addItems() {
    const inpHorInicial = document.querySelector("#horInicial");
    const inpHorFinal = document.querySelector("#horFinal");
    const [horInicial, minInicial] = inpHorInicial.value.split(':');
    const [horFinal, minFinal] = inpHorFinal.value.split(':');
    var time1  = new Date();
    var time2  = new Date();
    time1.setHours(horInicial, minInicial, 0);
    time2.setHours(horFinal, minFinal, 0);
    const op = Math.abs(time2.getTime() - time1.getTime());
    const resultado = convertMsToHM(op);
    
    localStorage.myArr = resultado;

    if(localStorage.myArr) {
        arr = localStorage.getItem("myArr");
    }

    console.log(typeof(arr))
    
    arr.push(resultado);
    document.getElementById("horInicial").value = "";
    document.getElementById("horFinal").value = "";
    localStorage.myArr = JSON.stringify(arr);
    console.log("Resultado: " + resultado);

    document.getElementById("hI").innerHTML = horInicial + ':' + minFinal
    document.getElementById("hF").innerHTML = horFinal + ':' + minFinal;
    document.getElementById("result").innerHTML = resultado;
}




function delItems() {
    arr = [];
    localStorage.myArr = JSON.stringify(arr);
}



function convertMsToHM(ml) {
    let seconds = Math.floor(ml / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = seconds >= 30 ? minutes + 1 : minutes;
  
    minutes = minutes % 60;

    hours = hours % 24;
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;

}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
