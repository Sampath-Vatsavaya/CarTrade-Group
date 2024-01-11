var state=[];
var city=[];
    
function add_state()
{
    var s=document.getElementById("state_popup");
    s.style.display="block";
    document.getElementById("state_name").value="";
    document.getElementById("state_capital").value="";
    document.getElementById("state_population").value="";
    document.getElementById("cm").value="";
}

function add_city()
{
    var s=document.getElementById("city_popup");
    s.style.display="block";
    document.getElementById("city_name").value="";
    document.getElementById("city_capital").value="";
    document.getElementById("mla").value="";
    document.getElementById("state").value="";
}

function close_state_addpopup()
{
    document.getElementById("state_popup").style.display="none";
}

function close_city_addpopup()
{
    document.getElementById("city_popup").style.display="none";
}

function add_state_record()
{
    var state=document.getElementById("state_name").value;
    var capital=document.getElementById("state_capital").value;
    var population=document.getElementById("state_population").value;
    var cm=document.getElementById("cm").value;
    state.push({
        "state_name":roll,
        "capital":capital,
        "population":population,
        "cm": cm,
    });
    display_list();
}
/*
function add_popup()
{
    var k=document.getElementById("adpopup");
    k.style.display="block";
    document.getElementById("add_rollno").value="";
    document.getElementById("add_name").value="";
    document.getElementById("add_age").value="";
    document.getElementById("add_branch").value="";
    document.getElementById("add_year").value="";
}

function add_record()
{
    var roll = document.getElementById("add_rollno").value;
    var name = document.getElementById("add_name").value;
    var age  = document.getElementById("add_age").value;
    var branch = document.getElementById("add_branch").value;
    var year = document.getElementById("add_year").value;
    student_data.push({
            "roll_no":roll,
            "stu_name":name,
            "age":age,
            "branch": branch,
            "year": year
        });
    generate_list();
    document.getElementById("adpopup").style.display="none";
    
}
function close_add_popup()
{
    document.getElementById("adpopup").style.display="none";
}

function close_edit_popup()
{
    document.getElementById("editpopup").style.display="none";
}
var edit_id=-1;
function edit_popup(ind)
{
    edit_id=ind;
    document.getElementById("editpopup").style.display="block";
    document.getElementById("edit_rollno").value=student_data[ind]['roll_no'];
    document.getElementById("edit_name").value=student_data[ind]['stu_name'];
    document.getElementById("edit_age").value=student_data[ind]['age'];
    document.getElementById("edit_branch").value=student_data[ind]['branch'];
    document.getElementById("edit_year").value=student_data[ind]['year'];
    /*student_data.slice(ind,1,{[=[i
        "rono":ro=ll,
        u_n[iame":name,
        [i"age":age,
        "branch": branch,
        "year": year
    });
}
function edit_save()
{
    student_data[edit_id]['roll_no']=document.getElementById("edit_rollno").value;
    student_data[edit_id]['stu_name']=document.getElementById("edit_name").value;
    student_data[edit_id]['age']=document.getElementById("edit_age").value;
    student_data[edit_id]['branch']=document.getElementById("edit_branch").value;
    student_data[edit_id]['year']=document.getElementById("edit_year").value;
    document.getElementById("editpopup").style.display="none";
    generate_list();
    
}

function dele(t){
    student_data.splice(t,1);
    console.log(t);
    generate_list();
}

function generate_list()
{
    var g=document.getElementById("student_table");
    let out=`<table class="table table-bordered" id="table">
            <thead  class="table table-dark">
                <tr>
                   <th>SNO</th>
                   <th>Roll Number</th>
                   <th>Student Name</th>
                   <th>Age</th>
                   <th>Branch</th>
                   <th>Year</th>
                   <th></th>
                   <th></th>
                </tr>
            </thead>`;
    for(let i=0;i<student_data.length;i++)
    {
            out +=
            `<tr> 
            <td>`+(i+1)+`</td>
            <td>`+student_data[i].roll_no+`</td>
            <td>`+student_data[i].stu_name+`</td>
            <td>`+student_data[i].age+`</td>
            <td>`+student_data[i].branch+`</td>
            <td>`+student_data[i].year+`</td>
            <td><input type="button"  value="X" onclick="dele('`+i+`')"></button></td>
            <td><input type="button"  value="Edit" onclick="edit_popup('`+i+`')"></button></td>
            </tr>`;
                
                }
    out = out + `</table>`;
    g.innerHTML = out;
}
generate_list();
 */
    
