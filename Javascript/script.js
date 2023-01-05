

function Checkout(){
      let fullname = document.getElementById('fname').value;
      let Email = document.getElementById('Email').value;
      let phone = document.getElementById('contact').value;
      let Diet = document.getElementById('deit').value;
      let number = document.getElementById('num').value;



      let popUp= window.open(" ","", "width=500px, height=550px");

      popUp.document.write('FULLNAME: ' + fullname, '</br></br> EMAIL ADDRESS: ' + Email, '</br></br> PHONE: ' + phone, '</br></br> DATE OF ARRIVAL: ' + Diet, '</br></br> NO. OF PERSONS: ' + number);
      
      

      }
     
 function changeColor(val)
     { 
         if((val.value=="")||(val.value==null))
         {
             val.style.background="grey";
         }
         else
         {
             val.style.background="#FFFFFF";
         }
     }