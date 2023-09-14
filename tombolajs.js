// inserire le celle  dei numeri
//  righe da una a 70 e colonne da uno a 10?

const createTableData = function (numbercells) {
  const Cartella = document.getElementById("cartella"); //div della cartella

  for (let i = 1; i <= 76; i++) {
    const Cella = document.createElement("div");

    Cella.classList.add("cella");

    const numeroCella = document.createElement("h4");

    numeroCella.innerText = i;
    Cella.appendChild(numeroCella);
    Cartella.appendChild(Cella);
  }
};
createTableData();
//  funzione che fa partire il bottone e mi da un numero della tabella

// crea una funzione che reagisce al bottone e poi collega la funzioen get RandomNumber
const estrazione = function () {
  Form = document.getElementById("estrazione");

  Form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("funziona l invio");

    const RandomNumber = Math.floor(Math.random() * 77);
    console.log(RandomNumber);
    const allCells = document.querySelectorAll(".cella h4");
    console.log(allCells);

    for (let i = 0; i < allCells.length; i++) {
      if (RandomNumber === parseInt(allCells[i].innerText)) {
        allCells[i].parentElement.classList.add("selectedcell");
      }
    }
  });
};

estrazione();
s