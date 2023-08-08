document.addEventListener("DOMContentLoaded", () => {
    const myDiv = document.getElementById("div-bttn");
    const myBttn = document.getElementById("bttn");

    myBttn.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    myDiv.addEventListener("click", (e) => {
        alert('Hola! Soy el div');
    });
});
