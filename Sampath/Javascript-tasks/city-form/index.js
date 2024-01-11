var states=[
    {
        "state":"Andhra Pradesh",
        "capital":"Amaravati",
        "population":313123,
        "cm":"NTR"
    },
    {
        "state":"Tamil Nadu",
        "capital":"Chennai",
        "population":31312243,
        "cm":"Stalin"
    },
    {
        "state":"Telangana",
        "capital":"Hyderabad",
        "population":31312324,
        "cm":"Revanth"
    }
]
var cities=[
    {
        "city":"Kakinada",
        "state":"Andhra Pradesh",
        "population":"1214143",
        "pincode":"533003"
    },
    {
        "city":"Hyderabad",
        "state":"Telangana",
        "population":"1212324143",
        "pincode":"3323003"
    }
];
var editing_state_record_index=-1;
var editing_city_record_index=-1;
//Start of States List Manipulation
function display_state_list()
{
    let tb= document.getElementById("state-table-body");
    out="";
    for(let i=0;i<states.length;i++)
    {   console.log("hi");
        out+=`<tr>
        <td>${states[i].state}</td>
        <td>${states[i].capital}</td>
        <td>${states[i].population}</td>
        <td>${states[i].cm}</td>
        <td class=""><input type="button" value="EDIT" class="edit-btn" onclick="edit_state_record(`+i+`)" ></td>
        <td class=""><input type="button" value="X" onclick="delete_state_record(`+i+`)" ></td></tr>`;
    }
    tb.innerHTML=out;
}
function delete_state_record(i)
{
    states.splice(i,1);
  display_state_list();
}
function generate_add_state_popup()
{
    document.getElementById("editstatepop").style.display="none";
    document.getElementById("addstatepop").style.display="block";
    document.getElementById("editcitypop").style.display="none";
    document.getElementById("addcitypop").style.display="none";
}
function add_state_record()
{   document.getElementById("editstatepop").style.display="none";
    let new_state_record={
        "state":document.getElementById("state").value,
        "capital":document.getElementById("capital").value,
        "population":document.getElementById("population").value,
        "cm":document.getElementById("cm").value
    }
    document.getElementById("addstatepop").style.display="none";
    states.push(new_state_record);
    populate_state_dropdown();
    display_state_list();
}
function edit_state_record(i)
{   
    
    
    
    document.getElementById("addcitypop").style.display="none";
    document.getElementById("editcitypop").style.display="none";
    document.getElementById("addstatepop").style.display="none";
    document.getElementById("editstatepop").style.display="block";
    editing_state_record_index=i;
  document.getElementById("edit_state").value=states[i]['state'];
  document.getElementById("edit_capital").value=states[i]['capital'];
  document.getElementById("edit_population").value=states[i]['population'];
   document.getElementById("edit_cm").value=states[i]['cm'];
   
  
   
}
function save_edited_state_record()
{
    document.getElementById("editstatepop").style.display="none";
    let new_state_record={
        "state":document.getElementById("edit_state").value,
        "capital":document.getElementById("edit_capital").value,
        "population":document.getElementById("edit_population").value,
        "cm":document.getElementById("edit_cm").value
    }
    states[editing_state_record_index]=new_state_record;
    populate_state_dropdown();
    display_state_list();
}
// End of States List Manipulation
function closepop()
{
    document.getElementById("editstatepop").style.display="none";
  document.getElementById("addstatepop").style.display="none";
}
// Start of Cities List Manipulation
function display_city_list()
{
    let tbc= document.getElementById("city-table-body");
    out="";
    for(let i=0;i<cities.length;i++)
    {   console.log("hi");
        out+=`<tr>
        <td>${cities[i].city}</td>
        <td>${cities[i].state}</td>
        <td>${cities[i].population}</td>
        <td>${cities[i].pincode}</td>
        <td class=""><input type="button" value="EDIT" class="edit-btn" onclick="edit_city_record(`+i+`)" ></td>
        <td class=""><input type="button" value="X" onclick="delete_city_record(`+i+`)" ></td></tr>`;
    }
    tbc.innerHTML=out;
}
function delete_city_record(i)
{
    cities.splice(i,1);
  display_city_list();
}
function closepop()
{
    document.getElementById("editstatepop").style.display="none";
  document.getElementById("addstatepop").style.display="none";
  document.getElementById("editcitypop").style.display="none";
  document.getElementById("addcitypop").style.display="none";
}
function generate_add_city_popup()
{
    document.getElementById("editstatepop").style.display="none";
    document.getElementById("addstatepop").style.display="none";
    document.getElementById("editcitypop").style.display="none";
    document.getElementById("addcitypop").style.display="block";
}
function add_city_record()

{   
    console.log("hello");
    
    document.getElementById("editstatepop").style.display="none";
    let new_state_record={
        "city":document.getElementById("city").value,
        "state":document.getElementById("state_select").value,
        "population":document.getElementById("city_population").value,
        "pincode":document.getElementById("pincode").value
    }
    document.getElementById("addcitypop").style.display="none";
    cities.push(new_state_record);
    
    display_city_list();
}
function populate_state_dropdown()
{   
    out="";
    for( s of states)
    {   console.log(s);
        out+=`<option>${s["state"]}</option>`;
    }
    document.getElementById("state_select").innerHTML=out;

}
function edit_city_record(i)

{   console.log(cities[i]);
    // State Select  Drop Down Part

    let s= document.getElementById("edit_state_select");
    console.log(s.innerHTML);
    s.innerHTML="";
    for(let x=0;x<states.length;x++)
    {
        let op= document.createElement("option");
        op.value=states[x].state;
        op.text=states[x].state;
        s.appendChild(op);
    }
    s.value=cities[i].state;
  // End of Select Part
    document.getElementById("editstatepop").style.display="none";
    document.getElementById("addstatepop").style.display="none";
    document.getElementById("editcitypop").style.display="none";
     document.getElementById("editcitypop").style.display="block";
    document.getElementById("edit_city").value=cities[i].city;
  
  document.getElementById("edit_city_population").value=cities[i]['population'];
   document.getElementById("edit_pincode").value=cities[i]['pincode'];
   editing_city_record_index=i;
   save_edited_city_record();
}
function save_edited_city_record()
{

}
// On load Calls
display_state_list();
display_city_list();
populate_state_dropdown();