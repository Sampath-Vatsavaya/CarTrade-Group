var jq=$.noConflict();
jq(function generate_date_picker()
{   var states= ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

    jq( "#date" ).datepicker({
        showOtherMonths:true,
        showButtonPanel:true,
        //showWeek:true,
        changeMonth:true,
        changeYear:true,
        //minDate: new Date(2020,0,1),
        maxDate: new Date(2005,11,31),
        closeText:"Close",
        dateFormat:"dd-mm-yy",
        firstDay:0,
    });
    jq("#state").autocomplete({
        source:states,
        autoFocus:true
    });
    // 
    jq()
    jq("#date").tooltip();
    jq("#accordion-list").accordion({
        collapsible:true,
    });
    jq(".main-div-cl button").button();
    jq("button").click(function(e){
        e.preventDefault();
        jq("#dialog").dialog();
    });
});
