fetch("soldplayers.json")
.then(function(response){
	return response.json();
})
.then(function(players){
	let placeholder = document.querySelector("#output");
	let out = "";
	for(let player of players){
		out += `
			<tr>
				<td class="logo"> <img src="images/${player.TEAM}.png" alt=""></td>
				<td>${player.PLAYERS}</td>
				<td>${player.NATIONALITY}</td>
				<td>${player.TYPE}</td>
				<td>${player.PRICE}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});


fetch("Unsold-Players.json")
.then(function(response){
	return response.json();
})
.then(function(players){
	let placeholder = document.querySelector("#unsold-output");
	let out = "";
	for(let player of players){
		out += `
			<tr>
				
				<td>${player.PLAYER}</td>
				<td>${player.NATIONALITY}</td>
				<td>${player.TYPE}</td>
				<td>${player.BASE}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});

