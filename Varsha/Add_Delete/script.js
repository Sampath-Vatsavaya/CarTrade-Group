var student_data=[];
    
   

function add_popup()
{
    var k=document.getElementById("adpopup");
    k.style.display="block";
    
    

    
}
function edit(ind)
{
    var n=document.getElementById("editpopup");
    n.style.display="block";
    var edit_record = document.getElementById("editrecord");
    edit_record.addEventListener('click',function(){
    var roll = document.getElementById("edit_rollno").value;
    var name = document.getElementById("edit_name").value;
    var age  = document.getElementById("edit_age").value;
    var branch = document.getElementById("edit_branch").value;
    var year = document.getElementById("edit_year").value;
    student_data.splice(ind,1,{
        "roll_no":roll,
        "stu_name":name,
        "age":age,
        "branch": branch,
        "year": year
    });
    generate_list();
    console.log(student_data);
    n.style.display="none";
    });
    
    var close_editpopup=document.getElementById("edit_del");
    close_editpopup.addEventListener('click',function(){
        n.style.display="none";
    });
}

function dele(t){
    student_data.splice(t,1);
    console.log(t);
    generate_list();
}

function generate_list()
{
    var g=document.getElementById("student_table");
    g.innerHTML = "";
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
            <td><input type="button"  value="Edit" onclick="edit('`+i+`')"></button></td>
            </tr>`;
                
                }
    out = out + `</table>`;
    g.innerHTML = out;
}

    document.onload=function(){
        var add_record = document.getElementById("addrecord");
        add_record.addEventListener('click',function(){
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
        console.log(student_data);
        document.getElementById("adpopup").style.display="none";
        });
        var close_addpopup=document.getElementById("del");
        close_addpopup.addEventListener('click',function(){
        k.style.display="none";
        });
        generate_list();
    }
 /* <td><input type="button"  value="Delete" onclick="dele('`+i+`')"></button></td>
<td><input type="button"  value="Edit" onclick="edit()"></button></td>*/
/*l=[]
            function add_popup(){
                var k=document.getElementById("key").value;
                var v=document.getElementById("value").value;
                l[k]=v;
                display();
            }
            function display(){
                var g=document.getElementById("hello");
                var out="<table>";
                for(i in l){
                    out = out + `<tr> 
                                      <td>`+i+`</td>
                                      <td>`+l[i]+`</td>
                                      <td><input type="button"  value="Edit" onclick="edit()"></button></td>
                                      <td><input type="button"  value="Delete" onclick="dele('`+i+`')"></button></td>
                                </tr>`;
                
                }
                out = out + "</table>";
                g.innerHTML = out;
            }
            function dele(t){
                delete l[t];
                console.log(t);
                display();
            }
          /* function edit(){
                x=document.querySelector("#popup");
                x.style.display="block";
            }
            function edit_popup(a) 
              {
                x=document.querySelector("#popup");
                x.style.display="block";
              }
            function hidepopup(){
                y=document.querySelector("#popup");
                y.style.display="none";
                display();
            }*/