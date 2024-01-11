var manufacturer={};

console.log("hello")
for (var i = 0; i < cars.length; i++) {
    if (cars[i]["manufacturer"] in manufacturer === false) {
        manufacturer[cars[i]["manufacturer"]] = { };
    }

       if(cars[i]["model"] in manufacturer[cars[i]["manufacturer"]]===false)
       {
        manufacturer[cars[i]["manufacturer"]][cars[i]["model"]] = [];
       }
       manufacturer[cars[i]["manufacturer"]][cars[i]["model"]].push(cars[i]["variant"]);
}
console.log(manufacturer)
function display_manufacturer()
{  
   let s= document.getElementById("manufacturer_dropdown");
   for (let m in manufacturer)
   {
    let p= document.createElement("option");
    p.innerHTML=m;
    s.appendChild(p)
   }
}
function manufacturer_selected()
{
    var s= document.getElementById("manufacturer_dropdown").value;
    let m =document.getElementById("model_dropdown");
    let v =document.getElementById("variant_dropdown");
    v.innerHTML=`<option id="variant-dis">Select Variant</option>` ;
    m.innerHTML=`<option id="model-dis">Select Model</option>` ;
    document.getElementById("model-dis").setAttribute("disabled","disabled");
    document.getElementById("variant-dis").setAttribute("disabled","disabled");
    for (let itr in manufacturer[s]){
        let p= document.createElement("option");
        p.innerHTML=itr;
        m.appendChild(p)
    }
    
    

   
}
function model_selected()
{   console.log("hello")
    var s= document.getElementById("manufacturer_dropdown").value;
    let m =document.getElementById("model_dropdown").value;
    let v =document.getElementById("variant_dropdown");
    v.innerHTML=`<option id="variant-dis">Select Variant</option>` ;
    document.getElementById("variant-dis").setAttribute("disabled","disabled");
    for(let i=0;i<manufacturer[s][m].length;i++)
    {
        let p= document.createElement("option");
        p.innerHTML=manufacturer[s][m][i];
      
        v.appendChild(p)
    }
}
display_manufacturer();