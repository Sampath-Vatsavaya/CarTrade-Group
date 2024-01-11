var cnt = 0;
var l = 1;
var intervalTime=100;
// var x=setInterval(function(){
// 		cnt++;
// 		 document.getElementById("animated-object").innerHTML = cnt;
// 		 document.getElementById("animated-object").style.left = l+ "px";
//          l++;
//          if(l>=100 && l<window.innerWidth-200)
//          {
//             l+=30
           
//          }
         
//          else if(l==1500)
//          {
//             clearInterval(x);
//          }
//          else 
//          {
//             l+=1;
            
//          }
		
// },1);
function animator_fun()
{
    cnt++;
		 document.getElementById("animated-object").innerHTML = cnt;
		 document.getElementById("animated-object").style.left = l+ "px";
         l++;
         if(l>=100 && l<1000)
         {
            l+=10;
            setTimeout((animator_fun), 20000);
           
         }
         
         else if(l==window.innerWidth)
         {
            l=1
         }
         else 
         {
            l+=1;
            
         }
}
const interval = setInterval(animator_fun, intervalTime);