 function fetchdata()
 {
            var input = document.getElementById("fname");
            var strText = input.value;
                try
                {
                    let result = eval(strText);
                    input.value = result;
                    
                }
                catch(err)
                {
                    var s=" Synatx Error"
                    input.value=s
                }                      
 }
 function backslash()
 {
    var input = document.getElementById("fname");
    var newstring = input.value.slice(0,input.value.length-1);
    input.value = newstring;
 }