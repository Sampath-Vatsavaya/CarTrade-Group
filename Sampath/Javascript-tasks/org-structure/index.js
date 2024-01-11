data = [
    {
        "id": "01",
        "name": "Satish",
        "des": "Admin",
        "manager_id": "-1"
    },
    {
        "id": "02",
        "name": "Suresh",
        "des": "Accountant",
        "manager_id": "01"
    },
    {
        "id": "03",
        "name": "Ganesh",
        "des": "HR",
        "manager_id": "01"
    },
    {
        "id": "04",
        "name": "Mahesh",
        "des": "TL",
        "manager_id": "01"
    },
    {
        "id": "05",
        "name": "Kamesh",
        "des": "Sr Programmer",
        "manager_id": "04"
    },
    {
        "id": "06",
        "name": "Kamalesh",
        "des": "Sr Programmer",
        "manager_id": "04"
    },
    {
        "id": "07",
        "name": "veeresh",
        "des": "Jr Programmer",
        "manager_id": "05"
    },
    {
        "id": "08",
        "name": "Ramesh",
        "des": "Jr Programmer",
        "manager_id": "06"
    },
    {
        "id": "09",
        "name": "Venkatesh",
        "des": "Jr Programmer",
        "manager_id": "06"
    },
    {
        "id": "10",
        "name": "Mangesh",
        "des": "Jr Programmer",
        "manager_id": "06"
    }

];

var managers = {}
var subordinates ={}
for (i = 0; i < data.length; i++) {
    if (data[i]["manager_id"] in managers === false) {
        managers[data[i]["manager_id"]] = [];
    }
    managers[data[i]["manager_id"]].push(data[i]["id"]);
    subordinates[data[i]["id"]] = [data[i]["name"],data[i]["des"]];
}
console.log(managers);
console.log(subordinates);
function generate_structure(id, root) {

    if ((id in managers) === true) {

        var ul = document.createElement('ul');

        for (var i = 0; i < managers[id].length; i++) {
            var subordinate_id = managers[id][i];
           
            let p = document.createElement("li");
            p.innerHTML = subordinates[subordinate_id][0];

            ul.appendChild(p);
            x = generate_structure(subordinate_id, p);
        }
        root.appendChild(ul);
    }
    else{
        return 0;
    }
}

var ul = document.getElementById("list");
var list_element = document.createElement("li");
list_element.innerHTML = "Satish";

x = generate_structure("01", list_element);
ul.appendChild(list_element);










































// var idmap={}
// for (i of data)
// { 
//     if(i.id in idmap == false)
//    {
//        idmap[rootseInt(`${i.id}`)]={
//         "id": rootseInt(`${i.id}`),
//         "name":`${i.name}`,
//         "manager_id":i.manager_id,
//         "subordinates":[]};
//     }

// }
// // console.log(idmap);
//  var structure={}
// // for (x in idmap)  
// // { 
// //     let k= idmap[x].manager_id;
// //     if(k!=-1)
// //     {
// //         idmap[k].subordinates.push(idmap[x]);
// //     } 
    
    
// // }
// // console.log(idmap);
// var root=0;
// for(x in idmap) 
//     {   
//         if(idmap[x].manager_id==-1)
//         {   root=idmap[x];

//             structure[x]=idmap[x];
//         } 
//     }
// //console.log(root);
// structure_constructor(root,idmap);
// function structure_constructor(main,idmap)
// {  
//     for(z in idmap)
//     {
//        if(idmap[z].manager_id==main.id)
//        {
//          main.subordinates.push(idmap[z])
//        }
//     } 

   
//     console.log(main);
// }

