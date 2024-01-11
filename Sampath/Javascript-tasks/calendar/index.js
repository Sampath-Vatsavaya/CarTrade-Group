

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

function last_day_of_month(y,m)
{
    return new Date(y,m+1,0).getDate();
}
function populate_month(y,m)
{   
    document.write("<div class='month'>");
    document.write(`<h1>${month[m]}</h1>`)
    document.write("<div class='row'>");
    document.write("<div class='col'>Sun</div>");
    document.write("<div class='col'>Mon</div>");
    document.write("<div class='col'>Tue</div>");
    document.write("<div class='col'>Wed</div>");
    document.write("<div class='col'>Thu</div>");
    document.write("<div class='col'>Fri</div>");
    document.write("<div class='col'>Sat</div>");
    document.write("</div>");
    
    
    
    let t=new Date(2024,m)
    var c=1;
    var no_of_days= last_day_of_month(y,m);
    
    var day_counter=0;
for(i=0;i<5;i++)
{   
    document.write("<div class='row'>");
    while(day_counter<t.getDay())
    {
        
        document.write("<div class='col'>	</div>");
        day_counter++;
    }
    
    if(i==0)
    {
        for(var x=day_counter;x<7;x++)
        {
            document.write("<div class='col'>"+c+"</div>");
            c++;
        }
    }
    else
    {
        for(var j=0;j<7;j++){
            if( c <= no_of_days ){
                document.write("<div class='col'>"+c+"</div>");
            }else{
                document.write("<div class='col'>	</div>");
            }
            c++;
        }
    }
	
    document.write("</div>");
}
document.write("</div>");
}
document.write("<div class='main-div'>")
document.write("<h1>Calendar-2024</h1>")
var x=0;
while(x<12)
{   
        document.write("<div class='three-month'>");
        populate_month(2024,x);
        populate_month(2024,x+1);
        populate_month(2024,x+2);
        document.write("</div>");
        x=x+3;

   
   
}
document.write("</div>")