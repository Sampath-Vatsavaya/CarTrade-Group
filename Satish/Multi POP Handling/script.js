states = [{
    "name": "Andhra pradesh",
    "capital": "Amravathi",
    "population": 10000,
    "cm": "Jagan"
},
{
    "name": "Telangana",
    "capital": "Hyderabad",
    "population": 10000,
    "cm": "KCR"
}];
cities=[
    {
        "name": "Amravathi",
        "state": "Andhra pradesh",
        "population": 10000,
        "mla": "Jagan"
    },
    {
        "name": "Telangana",
        "state": "Hyderabad",
        "population": 10000,
        "mla": "KCR"
    }

]
function addstate_dis(){
    var stateform = document.getElementById("stateform");
    stateform.style.display="block";
    var cityform = document.getElementById("cityform");
    cityform.style.display="none";
    var state_edit = document.getElementById("state_edit");
    state_edit.style.display="none";
}
function add_state(){
    var name = document.getElementById("state_name").value;
    var cap = document.getElementById("capital").value;
    var pop = document.getElementById("state_population").value;
    var cm = document.getElementById("cm").value;
    states.push({
        "name": name,
        "capital": cap,
        "population": pop,
        "cm": cm

    });
    display_states();
    document.getElementById("stateform").style.display = "none";

}
function del_state(ind){
    states.splice(ind, 1);
    display_states();

}
var editing_record_id = -1;
function edit_state(ind){
    editing_record_id = ind;
    var cityform = document.getElementById("cityform");
    cityform.style.display="none";
    var stateform = document.getElementById("stateform");
    stateform.style.display="none";
    var editor = document.getElementById("state_edit");
    editor.style.display = 'block';
    document.getElementById("edit_state_name").value = states[ind]['name'];
    document.getElementById("edit_capital").value = states[ind]['capital'];
    document.getElementById("edit_state_population").value = states[ind]['population'];
    document.getElementById("edit_cm").value = states[ind]['cm'];

}
function state_edit_save(){
    states[editing_record_id]['name'] = document.getElementById("edit_state_name").value;
    states[editing_record_id]['capital'] = document.getElementById("edit_capital").value;
    states[editing_record_id]['population'] = document.getElementById("edit_state_population").value;
    states[editing_record_id]['cm'] = document.getElementById("edit_cm").value;
    display_states();
    document.getElementById("state_edit").style.display = 'none';
}

function display_states(){
    var out="";
    out += `<thead>
    <tr>
    <td>State Name</td>
    <td>Capital</td>
    <td>Population</td>
    <td>Chief Minister</td>
    </tr>
    </thead>`;
    for(var i=0;i<states.length;i++)
    {
        out += `<tr>
        <td>${states[i]["name"]}</td>
        <td>${states[i]["capital"]}</td>
        <td>${states[i]["population"]}</td>
        <td>${states[i]["cm"]}</td>
        <td><input type="button" value="EDIT" onclick="edit_state(`+ i + `)"></td>
        <td><input type="button" value="X" onclick="del_state(`+ i + `)"></td>
        </tr>`
    }
    var tab = document.getElementById("statesdata");
    
    tab.innerHTML =out;
}
display_states();
function addcity_dis(){
    var cityform = document.getElementById("cityform");
    cityform.style.display="block";
    var stateform = document.getElementById("stateform");
    stateform.style.display="none";
    var state_edit = document.getElementById("state_edit");
    state_edit.style.display="none";
   
}
function add_city(){

    var name = document.getElementById("city_name").value;
    var state = document.getElementById("city_state").value;
    var pop = document.getElementById("city_population").value;
    var mla = document.getElementById("mla").value;
    cities.push({
        "name": name,
        "state": state,
        "population": pop,
        "mla": mla

    });
    display_cities();
    document.getElementById("cityform").style.display = "none";

}
function del_city(ind){
    cities.splice(ind,1);
    display_cities();

}
function edit_city(ind){
    editing_record_id = ind;
    var cityform = document.getElementById("cityform");
    cityform.style.display="none";
    var stateform = document.getElementById("stateform");
    stateform.style.display="none";
    var editor = document.getElementById("state_edit");
    editor.style.display = 'none';
    var edit_city = document.getElementById("city_edit");
    edit_city.style.display = "block";
    document.getElementById("edit_city_name").value = cities[ind]['name'];
    document.getElementById("edit_capital").value = states[ind]['capital'];
    document.getElementById("edit_state_population").value = states[ind]['population'];
    document.getElementById("edit_cm").value = states[ind]['cm'];
    
}
function display_cities(){
    var out="";
    out += `<thead>
    <tr>
    <td>City Name</td>
    <td>Sate</td>
    <td>Population</td>
    <td>MLA</td>
    </tr>
    </thead>`;
    for(var i=0;i<cities.length;i++)
    {
        out += `<tr>
        <td>${cities[i]["name"]}</td>
        <td>${cities[i]["state"]}</td>
        <td>${cities[i]["population"]}</td>
        <td>${cities[i]["mla"]}</td>
        <td><input type="button" value="EDIT" onclick=edit_city(`+ i + `)></td>
        <td><input type="button" value="X" onclick= del_city(`+i+`)></td>
        </tr>`
    }
    var tab = document.getElementById("citiesdata");
    tab.innerHTML =out;
}
display_states();
display_cities();