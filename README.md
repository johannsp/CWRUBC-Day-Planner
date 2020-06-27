# CWRUBC-Day-Planner
Track events by hour on a work day planner

Link:
https://johannsp.github.io/CWRUBC-Day-Planner/

Preview:
[![Day-Planner-website-preview.png](https://i.postimg.cc/1Rj99wFx/Day-Planner-website-preview.png)](https://postimg.cc/0r7gn6ZZ)

The work day planner is implemented using Bootstrap and jQuery among other resource.

For the current date, the hours 9AM through 5PM are presented as color coded
rows where hours that have already passed are highlighed grey, the current is
highlighted red, and hours still in the future are highlighed as green.  One
note can be saved into local storage by clicking the row's save button for each
hour.

As an enhancement a newly entered or changed note is show in italics until it
is saved.  This feature was added since each save button only saves the note on
the same row.  Should the user enter several notes without saving, he will not
necessarily remeber which notes were saved.
