let xhr = new XMLHttpRequest(),
    method = "GET",
    url = "data/history.txt";
let box = document.querySelector("#bottom > textarea");

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        box.innerHTML=xhr.responseText;
    }
};
xhr.send();