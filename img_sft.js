function button(){
    const hora = new Date();
    var hr = hora.getHours();
    var min = hora.getMinutes();
    var s = hora.getSeconds();

    hr = hr < 10 ? '0' + hr : hr;
    min = min < 10 ? '0' + min : min;
    s = s < 10 ? '0' + s : s;

    var horas = hr+":"+min+":"+s;

    console.log(horas);

    document.getElementsByTagName("h3")[0].innerHTML = horas;
}
button();