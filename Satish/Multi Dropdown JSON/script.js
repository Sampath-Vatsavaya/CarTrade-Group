var states = {}
for (var i = 0; i < states_data.length; i++) {
    if (states_data[i]["Statename"] in states === false) {
        states[states_data[i]['Statename']] = {};
    }
    states[states_data[i]['Statename']][states_data[i]['Year']] = {}
    c = 0;
    for (let crp in states_data[i]) {
        if (c >= 2) {
            states[states_data[i]['Statename']][states_data[i]['Year']][crp] = states_data[i][crp];
        }
        c = c + 1;
    }
}

function display_list() {
    var r = document.getElementById("state_dropdown");
    for (var s in states) {
        var p = document.createElement("option");
        p.innerHTML = s;
        r.appendChild(p);
    }
}

function selected_state() {
    var s = document.getElementById("state_dropdown").value;
    var r = document.getElementById("year_dropdown");
    r.innerHTML = "";
    var p = document.createElement("option");
        p.innerHTML = "Select year";
        r.appendChild(p);
    for (let yr in states[s]) {
        var p = document.createElement("option");
        p.innerHTML = yr;
        r.appendChild(p);
    }
}

function selected_year() {
    var s = document.getElementById("state_dropdown").value;
    var yr = document.getElementById("year_dropdown").value;
    var r = document.getElementById("crop_dropdown");
    r.innerHTML = "";
    var p = document.createElement("option");
        p.innerHTML = "Select Crop";
        r.appendChild(p);

    for (let crp in states[s][yr]) {
        var p = document.createElement("option");
        p.innerHTML = crp;
        r.appendChild(p);
    }
}
function data_display() {
    var s = document.getElementById("state_dropdown").value;
    var yr = document.getElementById("year_dropdown").value;
    var crp = document.getElementById("crop_dropdown").value;
    var p = document.getElementById("display_area");
    states[s][yr][crp]
    p.innerHTML = "Total area cultivated with " + crp + " crop in the year " + yr + " in " + s + " state is " + states[s][yr][crp];

}


console.log(JSON.stringify(states, null, 4));
display_list();