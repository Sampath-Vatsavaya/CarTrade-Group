var months = ["January", "Febraury", "march", "April", "May", "June", "july", "August", "September", "October", "November", "December"];
for (var k = 0; k < 12; k++) {
    document.write("<h3>" + months[k] + "</h3>");
    document.write("<div class='row'>");
    document.write("<div class='col'>Sun</div>");
    document.write("<div class='col'>Mon</div>");
    document.write("<div class='col'>Tue</div>");
    document.write("<div class='col'>Wed</div>");
    document.write("<div class='col'>Thu</div>");
    document.write("<div class='col'>Fri</div>");
    document.write("<div class='col'>Sat</div>");
    document.write("</div>");
    var dt = new Date(2024, k, 1);
    var m = dt.getMonth();
    var start_week = dt.getDay();
    var end_date = 31;
    var t = dt.getTime();
    t = t + (86400 * 25 * 1000);
    for (var i = 0; i < 5; i++) {
        t = t + (86400 * 1000);
        dt = new Date(t);
        if (m != dt.getMonth()) {
            break;
        }
        end_date = dt.getDate();

    } var c = 0;
    var k =0;
    for (var i = 0; i < 5; i++) {
        document.write("<div class='row'>");
        for (var j = 0; j < 7; j++) {
            if (c <= end_date) {
                document.write("<div class='col'>" + c + "</div>");
            } else {
                document.write("<div class='col'>	</div>");
            }
            c++;
        }
        document.write("</div>");
    }
}