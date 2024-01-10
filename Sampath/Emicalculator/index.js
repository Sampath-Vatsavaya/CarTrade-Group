const emi_bar = document.querySelector('#emi_bar');
//const form=document.getElementsByTagName('form');
function calcemi()
{   console.log("Button is Clicked");
  






     let principal=document.getElementById('principal').value;
    let annual_interest_rate=document.getElementById('interest').value;
    let loan_tenure=document.getElementById('tenure').value;

    console.log(principal)
    console.log(annual_interest_rate)
    console.log(loan_tenure)
    invalid_msg="The Valid ranges for Principal,Interest rate and Loan Tenure are as following:\nPrincipal Amount:10000-1000000000000\nInterest Rate:5-95\nLoan Tenure(in Years):1-100\n\n Please Enter Valid Values!!";
    if(principal>1000000000000|| principal<10000 || loan_tenure>100 || loan_tenure<1|| annual_interest_rate>95 || annual_interest_rate<5)
    {
      window.alert(invalid_msg)
    }

    else
    {
      let rate=annual_interest_rate/(12*100);
      let loan_tenure_months=loan_tenure*12;
      
      const emi_value= (principal * rate * Math.pow((1+rate),loan_tenure_months) / (Math.pow((1+rate),loan_tenure_months)-1)).toFixed(0);
      const total_interest= emi_value*loan_tenure_months - principal;
      const total_payable=emi_value*loan_tenure_months;
      console.log(emi_value);
      
   
    emi_bar.style.display="flex";
      
  
    
    var emi_op= Math.max(1,emi_value-100,emi_value-1000);
    var interest_op = Math.max(1,total_interest-100,total_interest-1000);
    var payable_op = Math.max(1,total_payable-100,total_payable-1000);
    
    const timer= setInterval(()=>
         {
             
          document.getElementById('emi-val').innerHTML=`<h3>&#8377;${emi_op}</h3>`;
          document.getElementById('interest-val').innerHTML=`<h3>&#8377;${interest_op}</h3>`;
          document.getElementById('payable-val').innerHTML=`<h3>&#8377;${payable_op}</h3>`;   
          if(emi_op<emi_value)
             {
              
              emi_op++;
             }
          if(interest_op<total_interest)
             {
              
              interest_op++;
             }
         if(payable_op<total_payable)
             {
              
              payable_op++;
             }
        else
            {
                 clearInterval(timer);
            }
         },1);
  
  
  
  
    }



    







}

// const timer= setInterval(()=>
//     {
//         result.querySelector('span').textContent=`${output}%`;
//         if(output<score){
//             output++;
//         }
//         else
//         {
//             clearInterval(timer);
//         }
//     },10);



















 //   emi_bar.innerHTML=`<div class="group">
  //   <div class="title">Monthly EMI</div>
  //   <h3>&#8377; ${emi_value.toFixed(0)}</h3>
    

  // </div>
  // <div class="vertical-line"></div>
  // <div class="group">
  //   <div class="title">Total Interest</div>
  //   <h3>&#8377; ${total_interest.toFixed(0)}</h3>
  // </div>
  // <div class="vertical-line"></div>
  // <div class="group">
  //   <div class="title">Total Payable</div>
  //   <h3>&#8377; ${total_payable.toFixed(0)}</h3>
  // </div>`