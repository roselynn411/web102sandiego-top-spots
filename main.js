const { data } = require("jquery");

$(document).ready(function() {
// write your code here
$.getJSON("data.json", function(data){
//log the data  and show the data 
    console.log(data)
}}
let table = document.getElementById('table');

for (i=0; i<data.length; i++){
let newRow = table.insertRow(i+1);
let cell1 = newRow.insertCell(0);
let cell2 = newRow.insertCell(1);
let cell3 = newRow.insertCell(2);

//add the name of the cell

let cell1Text = document.createTextNode(data[1].name);
cell1.appendChild(cell1Text);


//describe the cells 
let cell2Text = document.createTextNode(data[i].description);
cell2.appendChild(cell2Text);


//cell location

let long = data[i].location[1];
let lat = data [1].location[0];
let locationLink = ` https://www.google.com/maps?q=${lat},${long}`;
cell3.innerHTML = `<a href=${locationLink}>Check It Out on Google Maps</a>`;

}
});
});
