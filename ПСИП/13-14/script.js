document.addEventListener("DOMContentLoaded", function(){
    let btn = this.getElementById("btn");
    let bd = this.getElementById("ds");
    let img = this.getElementById("img");
    btn.addEventListener('click', function(){
      bd.classList.toggle('stl');
      img.classList.toggle('IMGstl');
    })
  })

function mod(){
    var lastModified = document.lastModified;
    setTimeout(() => alert(lastModified), 5000);

    const text = document.createTextNode("");
    const container = document.getElementById("");
    const Child3 = container.children[3];
    container.insertBefore(text, Child3);
}
function openNewWindow() {
    var newWindow = window.open("", "", "width=500,height=500");
    var os = navigator.platform;
    var userAgent = navigator.userAgent;
    setTimeout(() => newWindow.close(), 5000);
    newWindow.document.write("<p>" + os + userAgent + "</p>");
}