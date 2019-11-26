// from data.js
var tableData = data;
// YOUR CODE HERE!
console.log(tableData);
//get a reference to the table body
var tbody = d3.select("tbody");
//refractored with arrow function
data.forEach((sheepleReport) => {
    var row = tbody.append("tr");
    Object.values(sheepleReport).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputcity = d3.select("#city").property("value").toLowerCase();
   
    // alert(inputValue);


    //Remove all table body rows
    d3.select("tbody").selectAll("tr").remove();

    var filteredData = tableData;

    if (inputcity !== ""){
        filteredData = filteredData.filter(ufoRow => ufoRow.city === inputcity)
    }
    if (inputValue !== ""){
        filteredData = filteredData.filter(ufoRow => ufoRow.datetime === inputValue)
    }

    console.log(filteredData);

    //refractored with arrow function
    filteredData.forEach((sheepleReport) => {
        var row = tbody.append("tr");
        Object.values(sheepleReport).forEach((value) => {
        var cell = row.append("td");
        cell.text(value);
        }); 
    });
});