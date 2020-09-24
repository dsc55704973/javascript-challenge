// from data.js
var tableData = data;

// select tbody with d3
var tbody = d3.select("tbody");

// YOUR CODE HERE!
/////////////////////////////////

// // Step 1: Loop Through `data` and console.log each UFO report object
tableData.forEach(function(UFOreport) {
  console.log(UFOreport);
});

// // Step 2:  Use d3 to append one table row `tr` for each UFO report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(UFOreport) {
  console.log(UFOreport);
  var row = tbody.append("tr");
});


// // Step 3:  Use `Object.entries` to console.log each UFO report value
data.forEach(function(UFOreport) {
  console.log(UFOreport);
  var row = tbody.append("tr");

  Object.entries(UFOreport).forEach(function([key, value]) {
    console.log(key, value);
  });
});







// // Make D3 grab the place I want to insert the table
// var tbody = d3.select("tbody");

// var datetime = tableData.datetime;

// var city = tableData.city;

// var state = tableData.state;

// var country = tableData.country;

// var shape = tableData.shape;

// var durationMinutes = tableData.durationMinutes;

// var comments = tableData.comments;


// /////////////////////////////////
// // make D3 create a Bootstrap table
// // make D3 append the stuff in DATA.js to the table I want to insert
// // http://getbootstrap.com/docs/3.3/css/#tables-striped
// table.attr("class", "table table-striped");

// // Append one table row `tr` to the table body
// var row = tbody.append("tr");

// // Append one cell for the student name
// row.append("th").text(tableData[0]);

// /////////////////////////////////
// // FOR DATE FILTER

// // Getting a reference to the input element on the page with the id property set to 'input-field'
// var inputField = d3.select("#input-field");

// // Input fields can trigger a change event when new text is entered.
// inputField.on("change", function() {
//     var newText = d3.event.target.value;
//     console.log(newText);
//   });