const userinput = document.getElementById("input");
const userunit = document.getElementById("userunit");
var resultunit = document.getElementById("userunit2");
function update() {
    const userunit = document.getElementById("userunit");
    
    const inputval = userinput.value;
    const unit = userunit.value;
    var result = document.getElementById("result");
    var resultunit = document.getElementById("userunit2").value;
    if (userunit.value == "cm") {
        console.log(inputval);

        if (resultunit == "mm") {

            result.innerHTML = inputval * 10;
        }
        if (resultunit == "cm") {
            result.innerHTML = inputval;
        }
        if (resultunit == "km") {
            result.innerHTML = inputval / 100000;
        }
        if (resultunit == "m") {
            result.innerHTML = inputval / 100;
        }
    }
    if (userunit.value == "mm") {
        

        if (resultunit == "mm") {

            result.innerHTML = inputval ;
        }
        if (resultunit == "cm") {
            result.innerHTML = inputval/10;
        }
        if (resultunit == "km") {
            result.innerHTML = inputval / 1000000;
        }
        if (resultunit == "m") {
            result.innerHTML = inputval / 1000;
        }
    }
    if (userunit.value == "km") {


        if (resultunit == "km") {

            result.innerHTML = inputval;
        }
        if (resultunit == "cm") {
            result.innerHTML = inputval * 100000;
        }
        if (resultunit == "mm") {
            result.innerHTML = inputval  * 1000000;
        }
        if (resultunit == "m") {
            result.innerHTML = inputval  * 1000;
        }
    }

    if (userunit.value == "m") {


        if (resultunit == "m") {

            result.innerHTML = inputval;
        }
        if (resultunit == "cm") {
            result.innerHTML = inputval * 100;
        }
        if (resultunit == "mm") {
            result.innerHTML = inputval  * 1000;
        }
        if (resultunit == "km") {
            result.innerHTML = inputval  / 1000;
        }
    }
}
userinput.addEventListener('input', function () {
    
    update();  
}
);
userunit.addEventListener('input', function () {

    update();
}
);
resultunit.addEventListener('input', function () {

    update();
}
);


const wuserinput = document.getElementById("winput");
const wuserunit = document.getElementById("wuserunit");
var wresultunit = document.getElementById("wuserunit2");
function wupdate() {
    
    const userunit = document.getElementById("wuserunit");
    
    const inputval = wuserinput.value;
    const unit = wuserunit.value;
    var wresult = document.getElementById("wresult");
    var wresultunit = document.getElementById("wuserunit2").value;
    if (wuserunit.value == "mg") {
       
       
        if (wresultunit == "mg") {
            

            wresult.innerHTML = inputval ;
        }
        if (wresultunit == "g") {
            wresult.innerHTML = inputval/1000;
        }
        if (wresultunit == "kg") {
            wresult.innerHTML = inputval / 10000;
        }
    }
    if (wuserunit.value == "g") {
        

        if (wresultunit == "g") {

            wresult.innerHTML = inputval ;
        }
        if (wresultunit == "mg") {
            wresult.innerHTML = inputval*1000;
        }
        if (wresultunit == "kg") {
            wresult.innerHTML = inputval /1000;
        }
    }
    if (wuserunit.value == "kg") {


        if (wresultunit == "kg") {

            wresult.innerHTML = inputval;
        }
        if (wresultunit == "g") {
            wresult.innerHTML = inputval * 1000;
        }
        if (wresultunit == "mg") {
            wresult.innerHTML = inputval  * 10000;
        }
    }
}
wuserinput.addEventListener('input', function () {
    
    wupdate();  
}
);
wuserunit.addEventListener('input', function () {

    wupdate();
}
);
wresultunit.addEventListener('input', function () {

    wupdate();
}
);

/*TImes conversion*/
const tuserinput = document.getElementById("Tinput");
const tuserunit = document.getElementById("Tuserunit");
var tresultunit = document.getElementById("Tuserunit2");
function tupdate() {
    
    const userunit = document.getElementById("Tuserunit");
    
    const inputval = tuserinput.value;
    const unit = tuserunit.value;
    var tresult = document.getElementById("Tresult");
    var tresultunit = document.getElementById("Tuserunit2").value;
    if (tuserunit.value == "s") {
       
       
        if (tresultunit == "s") {
            

            tresult.innerHTML = inputval ;
        }
        if (tresultunit == "m") {
            tresult.innerHTML = inputval/60;
        }
        if (tresultunit == "h") {
            tresult.innerHTML = (inputval / 60)/60;
        }
    }
    if (tuserunit.value == "m") {
        

        if (tresultunit == "m") {

            tresult.innerHTML = inputval ;
        }
        if (wresultunit == "s") {
            tresult.innerHTML = inputval*60;
        }
        if (wresultunit == "h") {
            tresult.innerHTML = inputval /60;
        }
    }
    if (tuserunit.value == "h") {


        if (tresultunit == "h") {

            tresult.innerHTML = inputval;
        }
        if (tresultunit == "m") {
            tresult.innerHTML = inputval * 60;
        }
        if (tresultunit == "s") {
            tresult.innerHTML = inputval  * 60*60;
        }
    }
}
tuserinput.addEventListener('input', function () {
    
    tupdate();  
}
);
tuserunit.addEventListener('input', function () {

    tupdate();
}
);
tresultunit.addEventListener('input', function () {

    tupdate();
}
);

var i = 0;
var txt = "World's Best Converter."
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro2").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
