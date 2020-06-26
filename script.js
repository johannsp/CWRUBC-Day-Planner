$(document).ready(function() {
  
  var plannerGrid = [];

  function loadPlannerGrid() {
    var stored = JSON.parse(localStorage.getItem("dayPlanner_PlannerGrid"));
    if (stored) {
      plannerGrid = stored;
    } 
    else {
      for (var i = 9; i <= 17; i++) {
        plannerGrid[i].timeHiClass = "";
        plannerGrid[i].note = "";
      }
    }
  }

  function savePlannerGrid() {
    if (plannerGrid) {
      localStorage.setItem("dayPlanner_PlannerGrid",JSON.stringify(plannerGrid));
    }
  }

  function renderSchedule() {
    var currentDate = moment().format("dddd, MMMM Do");
    var currentHour = moment().format("k");
    $("#currentDay").append(currentDate);
    for (var i = 9; i <= 17; i++) {
      var row = ${"data-row-time"}
      plannerGrid[i].timeHiClass = "";
      plannerGrid[i].note = "";
    }
  }

  renderSchedule();
});

