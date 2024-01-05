var a = document.getElementById("calculate_op");
a.addEventListener("click" ,function()
{
    var amount= document.getElementById("loan").value;
    var rate = document.getElementById('Interest').value;
    var t = document.getElementById('time').value;
    console.log(amount);
    console.log(rate);
    console.log(t);
    let e = (amount*t*rate)/100;
    console.log(e);
    e = Number(e) + Number(amount);
    console.log(e);
    e = Math.ceil(e/t);
    console.log(e);
    document.getElementById('output').innerHTML = e;
})

