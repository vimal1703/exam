
var calendar = document.getElementById("calendar");

var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var table = document.createElement("table");
calendar.appendChild(table);

var caption = document.createElement("caption");
caption.innerHTML = months[currentMonth] + " " + currentYear;
table.appendChild(caption);

var thead = document.createElement("thead");
table.appendChild(thead);

var tr = document.createElement("tr");
thead.appendChild(tr);

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
for (var i = 0; i < days.length; i++) {
  var th = document.createElement("th");
  th.innerHTML = days[i];
  tr.appendChild(th);
}

var tbody = document.createElement("tbody");
table.appendChild(tbody);

var firstDayOfMonth = new Date(currentYear, currentMonth, 1);
var startingDay = firstDayOfMonth.getDay();

var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

var tr;
for (var i = 0; i < 6; i++) { // 6 weeks in a month
  tr = document.createElement("tr");
  tbody.appendChild(tr);
  for (var j = 0; j < 7; j++) { // 7 days in a week
    var td = document.createElement("td");
    var day = i * 7 + j - startingDay + 1;
    if (day > 0 && day <= daysInMonth) {
      td.innerHTML = day;
    }
    tr.appendChild(td);
  }
}

// Add event listener to each date cell
var dateCells = document.getElementsByTagName("td");
for (var i = 0; i < dateCells.length; i++) {
  dateCells[i].addEventListener("click", function() {
    var date = this.innerHTML;
    var day = days[new Date(currentYear, currentMonth, date).getUTCDay()];
    var month = months[currentMonth];
    var year = currentYear;

    // Create an element to display the date, day, month, and year
    var dateInfo = document.createElement("div");
    dateInfo.innerHTML = "Date: " + date + "<br>" + "Day: " + day + "<br>" + "Month: " + month + "<br>" + "Year: " + year;
    dateInfo.classList.add("date-info");
    calendar.appendChild(dateInfo);

    // Add a button to close the date info
    var closeBtn = document.createElement("button");
    closeBtn.innerHTML = "Close";
    closeBtn.classList.add("close-btn");
    dateInfo.appendChild(closeBtn);

    // Add an event listener to the close button
    closeBtn.addEventListener("click", function() {
      calendar.removeChild(dateInfo);
    });
  });
}
bills.js
Labsheet#7
Ms.Rajalaxmi G Data Science-SF
•
Jan 19 (Edited Mar 23)
10/10
10 points out of possible 10
Due Jan 19, 11:59 PM

lab7a.pdf
PDF
Your work
Graded

lab7a.pdf
PDF

index (1).html
HTML

bills.js
Javascript

main (1).css
Style Sheet
Private comments
Displaying bills.js.