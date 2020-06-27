//$(document).ready(function() {
  
  var plannerGrid = {}; // will be object of objects

  function loadPlannerGrid() {
    var stored = JSON.parse(localStorage.getItem("dayPlanner_PlannerGrid"));
    if (stored) {
      plannerGrid = stored;
    } 
    else {
      for (var i = 9; i <= 17; i++) {
        plannerGrid["hr"+i]= {timeHiClass: "", note: ""};
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
    var currentHour = 11;
    $("#currentDay").append(currentDate);
    var updClass = "";
    for (var i = 9; i <= 17; i++) {
      var oldClass = plannerGrid["hr"+i].timeHiClass;
      var row = $("[data-row-time="+i+"]");
      var hiCol = row.find("td:nth-child(2)");
      alert("currentHour="+currentHour+"; i="+i);
      if (i < currentHour) {
        updClass='past';
      }
      else if (i == currentHour) {
        updClass='present';
      }
      else {
        updClass='future';
      }
      if (oldClass && oldClass != updClass) {
        hiCol.removeClass(oldClass);
      }
      hiCol.addClass(updClass);
      row.find(".note").val(plannerGrid["hr"+i].note);
    }
  }

  loadPlannerGrid();
  renderSchedule();
//});

