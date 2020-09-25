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
var datetimeFilter = d3.select("#datetime", CallBackFunction);
datetimeFilter.on("change", function() {
    // apply filter to table
    var filteredData = tabledata.filter(datetimeFilter);
    return filteredData;
  });
