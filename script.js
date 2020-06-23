$(document).ready(function() {
  
  function renderSchedule() {
    var schdRow;
    var schdTime;
    var currentDate = moment().format("dddd, MMMM D");
    $("#currentDay").append(currentDate);
    for (var i = 9; i <= 17; i++) {
      schdRow = $("<div>").addClass("row");
      schdTime = $("<div>").addClass("col-md-1");
    }
  }

  renderSchedule();
});

/* vim: set sw=2 ai lbr tw=0 fdm=marker fdl=0 : */
