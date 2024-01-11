fetch("input.json")
.then(function(response){
	return response.json();
})
.then(function(input){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let i of input){
		out += `
			<tr>
				<td class="table-primary">${i.id}</td>
				<td class="table-secondary">${i.title}</td>
				<td class="table-success">${i.description}</td>
				<td class="table-danger">${i.location}</td>
				<td class="table-warning">${i.userId}</td>
                <td class="table-info">${i.name}</td>
                <td class="table-light">${i.createdAt}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});