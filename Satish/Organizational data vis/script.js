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
var emp ={}
for (i = 1; i < data.length; i++) {
    if (data[i]["manager_id"] in managers === false) {
        managers[data[i]["manager_id"]] = [];
    }
    managers[data[i]["manager_id"]].push(data[i]["id"]);
    emp[data[i]["id"]] = [data[i]["name"],data[i]["des"]];
}

console.log(managers)
function recursion(id, par) {

    if ((id in managers) === true) {

        var ul = document.createElement('ul');

        for (var i = 0; i < managers[id].length; i++) {
            var cid = managers[id][i];
           
            let p = document.createElement("li");
            p.innerHTML = emp[cid][0]+"---"+emp[cid][1];

            ul.appendChild(p);
            x = recursion(cid, p);
        }
        par.appendChild(ul);
    }
    else{
        return 0;
    }
}

var ul = document.getElementById("list");
var l = document.createElement("li");
l.innerHTML = "Satish---Admin";

x = recursion("01", l);
ul.appendChild(l);