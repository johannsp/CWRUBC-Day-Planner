$(document).ready(function() {
  
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
    $("#currentDay").text(currentDate);
    var updClass = "";
    for (var i = 9; i <= 17; i++) {
      var oldClass = plannerGrid["hr"+i].timeHiClass;
      var row = $("[data-row-time="+i+"]");
      var hiCol = row.find("td:nth-child(2)");
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
      oldClass = updClass;
      row.find(".planner-note").val(plannerGrid["hr"+i].note);
    }
  }
  
  function updateHighlightingOnSchedule() {
    renderSchedule();
    // Compute how long until the next top of the hour and
    // schedule an automatic render for the page so the
    // row will highlighting updates shortly after the hour.
    var minuteOfHour = moment().format('m');
    var timeTilNextHour = 60 - minuteOfHour;
    timeTilNextHour = timeTilNextHour * 60 * 1000;
    setTimeout(updateHighlightingOnSchedule, timeTilNextHour);
  }

  $(".planner-row").on("change",".planner-note",function() {
    $(this).addClass("noteUnsaved");
  });

  $(".planner-row").on("click",".saveBtn",function() {
    var row=$(this).parent()
    var i=row.attr("data-row-time");
    var note=row.find(".planner-note");
    plannerGrid["hr"+i].note = note.val();
    savePlannerGrid();
    note.removeClass("noteUnsaved");
  });

  loadPlannerGrid();
  updateHighlightingOnSchedule();
});

