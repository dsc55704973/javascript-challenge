// input UFO report values
var tableData = data;
console.log(tableData);
var tbody = d3.select("tbody");
tableData.forEach(function(UFOreport) {
  console.log(UFOreport);
  var row = tbody.append("tr");
  Object.entries(UFOreport).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

// event listener to filter data by date input

var filterButton = d3.select("#filter-btn");
filterButton.on("click", datetimeFilter);

  // filter here
function datetimeFilter() {
  // d3.event.preventDefault();
  // new filtered table
  var filteredTable = tableData.filter(function(row) {
    return row.datetime == dateInput});
    console.log(filteredTable);
    var tbody = d3.select("tbody");
    filteredTable.forEach(function(UFOreport) {
      console.log(UFOreport);
      var row = tbody.append("tr");
      Object.entries(UFOreport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };
 