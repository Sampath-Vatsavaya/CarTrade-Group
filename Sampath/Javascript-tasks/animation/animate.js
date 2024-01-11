var cnt = 0;
	var l = 1;
	var i=1;
	x=setInterval(function(){
		if(l>333)
		{
			center();
		}
		document.getElementById("one").innerHTML = cnt;
		document.getElementById("one").style.left = l+ "px";
		l++;
        cnt++;
	},40);
    function center()
	{
		clearInterval(x);
		y=setInterval(function(){
	
		if(l>666)
		{
			right();
		}
		document.getElementById("one").innerHTML = cnt;
		document.getElementById("one").style.left = l+ "px";
		l++;
        cnt++;
	},15);
	}
	function right()
	{
		clearInterval(y);
		z=setInterval(function(){
		document.getElementById("one").innerHTML = cnt;
		document.getElementById("one").style.left = l+ "px";
		l++;
        cnt++;
	},5);
	}