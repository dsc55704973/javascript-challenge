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
function date(filteredUFOreport) {
    return 
}

var datetimeFilter = d3.select("#datetime");
datetimeFilter.on("change", function() {
    // apply filter to table
    var filteredData = tabledata.filter()
  });

  // Create a custom function to return players who made the team
function madeCut(player) {
    // return player.madeTeam == true;
    // A more concise way to express a boolean conditional
    return player.madeTeam;
  }
  
  // Call the custom function with filter()
  var playersOnTeam = roster.filter(madeCut);
  
  // Display the results
  console.log(playersOnTeam);