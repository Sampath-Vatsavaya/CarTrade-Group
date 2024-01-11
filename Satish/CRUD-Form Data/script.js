var data = [
    {
        "id": 101,
        "name": "subbarao",
        "contact": "9490139432",
        "item": "Rice"
    },
    {
        "id": 102,
        "name": "Jagaarao",
        "contact": "9490139433",
        "item": "Sugar"
    },
    {
        "id": 103,
        "name": "nakkaras",
        "contact": "9490139434",
        "item": "Maida"
    }
];

var submit = document.getElementById("submit")
submit.addEventListener('click', function () {
    var id = document.getElementById("custid").value;
    var name = document.getElementById("custname").value;
    var contact = document.getElementById("contact").value;
    var item = document.getElementById("items").value;

    data.push({
        "id": id,
        "name": name,
        "contact": contact,
        "item": item,
    }); -
        generate_list();
})
function generate_list() {
    out = "";
    out = out + `<thead>
    <tr>
        <td>CustID</td>
        <td>CustName</td>
        <td>CustContact</td>
        <td>Brought</td>
    </tr>
</thead>`
    for (var i = 0; i < data.length; i++) {
        out = out + `
        <tr>
        <td>`+ data[i]['id'] + `</td>
        <td>`+ data[i]['name'] + `</td>
        <td>`+ data[i]['contact'] + `</td>
        <td>`+ data[i]['item'] + `</td>
        <td class="tdata"><input type="button" value="EDIT" onclick="edit(`+ i + `)" ></td>
        <td class="tdata"><input type="button" value="X" onclick="deleter(`+ i + `)" ></td>
        </tr>
        `;
    }
    document.getElementById("custdata").innerHTML = out;;
    document.getElementById("addData").style.display = 'none';
}
function deleter(ind) {
    c = 0;
    data.splice(ind, 1);
    generate_list();

}
var editing_record_id = -1;
function edit(vid) {
    editing_record_id = vid;
    var editor = document.getElementById("editpop");
    editor.style.display = 'block';
    document.getElementById("edit_id").value = data[vid]['id'];
    document.getElementById("edit_name").value = data[vid]['name'];
    document.getElementById("edit_contact").value = data[vid]['contact'];
    document.getElementById("edit_item").value = data[vid]['item'];
}
function editsave() {
    data[editing_record_id]['id'] = document.getElementById("edit_id").value;
    data[editing_record_id]['name'] = document.getElementById("edit_name").value;
    data[editing_record_id]['contact'] = document.getElementById("edit_contact").value;
    data[editing_record_id]['item'] = document.getElementById("edit_item").value;
    generate_list();
    document.getElementById("editpop").style.display = 'none';
}

generate_list();
function addData() {
    var addform = document.getElementById("addData");
    addform.style.display = 'block';
}

function addremove() {
    var addform = document.getElementById("addData");
    addform.style.display = 'none';
}

function popremove() {
    var editor = document.getElementById("editpop");
    editor.style.display = 'none';
}

