var editing_record_id=-1;
employee= [
        {
          "id": "101",
          "fname": "Tom",
          "lname": "Cruise",
          "role":"Project Manager",
          "salary":"2000000"
        },
        {
          "id": "102",
          "fname": "Maria",
          "lname": "Sharapova",
          "role":"SDE",
          "salary":"1500000"
        },
        {
          "id": "103",
          "fname": "James",
          "lname": "Bond",
          "role":"HR",
          "salary":"1000000"
        }
]

function display_list()
{
    let out="";
    for(var i=0;i<employee.length;i++)
    {
        out += `
        <tr>
        <td>`+ employee[i]['id'] +`</td>
        <td>`+ employee[i]['fname'] +`</td>
        <td>`+ employee[i]['lname'] +`</td>
        <td>`+ employee[i]['role'] +`</td>
        <td>`+ employee[i]['salary'] +`</td>
        <td class=""><input type="button" value="EDIT" class="edit-btn" onclick="edit_record(`+i+`)" ></td>
        <td class=""><input type="button" value="X" onclick="delete_record(`+i+`)" ></td>
        </tr>
        `
    }
    document.getElementById("output-table-body").innerHTML=out;
}
function delete_record(i)
{
  employee.splice(i,1);
  display_list();

}
function add_record()
{   document.getElementById("addpop").style.display="none";
  let new_record={
    "id":document.getElementById("id").value,
          "fname": document.getElementById("fname").value,
          "lname": document.getElementById("lname").value,
          "role":document.getElementById("role").value,
          "salary":document.getElementById("salary").value,
  }
  employee.push(new_record);
  display_list();
}
function edit_record(i)
{ editing_record_id=i;
  document.getElementById("editpop").style.display="block";
  document.getElementById("edit_id").value=employee[i]['id'];
  document.getElementById("edit_lname").value=employee[i]['lname'];
  document.getElementById("edit_fname").value=employee[i]['fname'];
   document.getElementById("edit_role").value=employee[i]['role'];
   document.getElementById("edit_salary").value=employee[i]['salary'];
}
function save_record()
{ document.getElementById("editpop").style.display="none";
  let new_record={
    "id":document.getElementById("edit_id").value,
          "fname": document.getElementById("edit_fname").value,
          "lname": document.getElementById("edit_lname").value,
          "role":document.getElementById("edit_role").value,
          "salary":document.getElementById("edit_salary").value,
  }
  employee[editing_record_id]=new_record;
  display_list();
}
function generate_add_popup()
{
  document.getElementById("addpop").style.display="block";
}
display_list();
function closepop()
{ document.getElementById("editpop").style.display="none";
  document.getElementById("addpop").style.display="none";
}