function formula(){
    let x = parseFloat(document.getElementById('x').value);
    let a = parseFloat(document.getElementById('a').value);
    let y = 0.0;
    let view = "";
    if (x >=2)
        y = (1 / (Math.pow(2) - 1.5) + Math.sqrt(a+x) )
    else if (x >=0 && x <2)
        y = 2* Math.sqrt(a) - x/4
    else
        y= 0.3*x;
    view += y;
    
    var p = document.createElement("p");
    p.textContent = view;
    document.body.appendChild(p);
    в
}
function removeAllOccurrences(str, substring) {
    var regex = new RegExp(substring, 'g');
    return str.replace(regex, '');
}
function openNewWindow() {
    const hostname = window.location.hostname;
    // Открываем новое окно
    var newWindow = window.open("", "", "width=300,height=500");

    newWindow.document.write("<p>" + "Имя в сети " + hostname + "</p>");
}