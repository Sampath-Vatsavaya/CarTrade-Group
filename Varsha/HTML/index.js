const input = document.getElementById("userInput");
input.addEventListener('input',function(){
    var str = input.value;
    console.log(input);
    if(str.length >= 10)
    {
        input.value = input.value.slice(0,9);
        alert(" out of range");
    }
    
})
function num()
    {

        let map1 = new Map([["0",""],["1", "one"], ["2", "two"], ["3", "three"], ["4","four"],["5", "five"], ["6", "six"],
                           ["7", "seven"], ["8","eight"], ["9", "nine"]]);
        let map2=new Map([["10", "ten"], ["11", "eleven"], ["12","twelve"], ["13", "thirteen"], ["14", "fourteen"],
                         ["15","fourteen"], ["16", "sixteen"], ["17", "seventeen"], ["18", "eighteen"], ["19","nineteen"]]);
    
        let map3=new Map([["0",""],["2","twenty"], ["3","thirty"], ["4","forty"], ["5","fifty"],["6","sixty"],["7","seventy"],
                          ["8","eighty"],["9","ninety"]]);
        let places=new Map([["0",""],["1","thousand"],["2","lakh"],["3","crore"]]);

        const x=document.getElementById("userInput").value;  //UserInput
        //console.log(x)
        const str=x.toString();   //Conversion of given number to string
        let l=str.length;    //length of the string
        let n=0;
        const arr=[];
        let temp="";
        for(i=l-1;i>=0;i--)   //Loop to split the digits 
        {
             temp=str[i]+temp;
             if((n%2==0)&&(n!=0))
            {
                arr.push(temp)
                temp="";
            }
            n++;
        }
        if(temp)    //Condition to push the leftover string to arr
        {
        arr.push(temp);
        }
        console.log(arr);
        words="";  //Final String
        k=0
        for(i=0;i<arr.length;i++)   //Loop to convert numbers to respective words
        {
            if(arr[i]!=0)
            {
            words=" "+places.get(i.toString())+" "+words;
            }
            k++;
            temp="";
            if(arr[i].length==3)
           {
                if(arr[i][0]>0)
                {
                    temp+=map1.get(arr[i][0])+" "+"hundred"+" ";
                }
                if(arr[i][1]==1)
                {
                    y=arr[i][1].toString()+arr[i][2].toString();
                    temp+=" "+map2.get(y);
                }
                else
                {
                    temp+=" "+(map3.get(arr[i][1]))+" "+(map1.get(arr[i][2]));
                }
            }
            else if(arr[i].length==2)
            {
                if(arr[i][0]==1)
                {
                    y=arr[i][0].toString()+arr[i][1].toString();
                    temp+=" "+map2.get(y);
                }
                else
                {
                    temp+=" "+(map3.get(arr[i][0]))+" "+(map1.get(arr[i][1]));
                }
            }
            else
            {
                temp+=" "+map1.get(arr[i][0]);
            }
            words=temp+" "+words;
        } 
        //document.write(`<H1>${words}</H1>) 
        console.log(words);
        document.getElementById("outp").textContent=JSON.stringify(words);   //reflects the output in html doc
    }