// Function to show the cost popup based on the selected car option
    function showCostPopup() {
      const c = document.getElementById('carOptions');
      const costPopup = document.getElementById('costPopup');

      // Check the selected car option
      if (c.value === 'purchaseOldCar' || c.value === 'purchaseNewCar' || c.value ==='sellOldCar') {
        // Show the cost popup
        costPopup.style.display = 'block';
      }
    

      else {
        // Hide the cost popup for other options
        costPopup.style.display = 'none';
      }
    }

    // Function to hide the cost popup
    function hideCostPopup() {
      const costPopup = document.getElementById('costPopup');
      costPopup.style.display = 'none';
      
    }
    function submitForm(event) {
        event.preventDefault();  // Prevent the default form submission
    
        // Your form processing logic goes here
    
        // Hide the form
        const form = document.getElementById('kk');
        form.style.display = 'none';
        const thanksMessage = document.getElementById('thanksMessage');
        thanksMessage.style.display = 'block';
    
        // Show the thanks message
        
    }
    const popsubmit = document.getElementById("popsubmit");
    popsubmit.addEventListener('click',function()
    {
        const option = document.getElementById("costRange").value;
        var p = document.getElementById("userchoice");
        p.innerHTML = "<b>Available Cars:</b>" + option;
        p.style.border="solid #333"
        

        
    })

    
    
 