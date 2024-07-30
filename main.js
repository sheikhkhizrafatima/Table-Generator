
function generateTable() {
    const tableNumber = parseInt(document.getElementById('tableNumber').value);
    const startRange = parseInt(document.getElementById("startRange").value);
    const endRange = parseInt(document.getElementById("endRange").value);
  
        let tableContainer = document.getElementById("result");
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
  
        let headerRow = document.createElement("tr");
        let th1 = document.createElement("th");
        th1.innerText = "Multiply";
        let th2 = document.createElement("th");
        th2.innerText = "Result";
        headerRow.appendChild(th1);
        headerRow.appendChild(th2);
        thead.appendChild(headerRow);
  
        for (let i = startRange; i <= endRange; i++) {
          let row = document.createElement("tr");
          let cell1 = document.createElement("td");
          cell1.innerText = `${tableNumber} x ${i}`;
          let cell2 = document.createElement("td");
          cell2.innerText = tableNumber * i;
          row.appendChild(cell1);
          row.appendChild(cell2);
          tbody.appendChild(row);
        }
  
        table.appendChild(thead);
        table.appendChild(tbody);
        tableContainer.innerHTML = "";
        tableContainer.appendChild(table);
      
}
