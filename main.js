const plusBtnMobile=document.getElementById('plusBtnMobile');
         plusBtnMobile.addEventListener('click', function(){
            
            // const countMobile= document.getElementById("countMobile").value;
            // const countMobileNumber= parseFloat(countMobile);
            // const total= countMobileNumber + 1;
            // document.getElementById("countMobile").value=total;

            // const balanceMobile= document.getElementById('balanceMobile').innerText;
            // const balanceMobilenumber= parseFloat(balanceMobile);
            // const totalBalanceMobile = balanceMobilenumber+1219;
            // document.getElementById('balanceMobile').innerText=totalBalanceMobile;

            allCartCount( "countMobile" ,"balanceMobile" , +1, +1219);
            
            // getTotalPrice()

         })

         const minusBtnMobile= document.getElementById('minusBtnMobile');
         minusBtnMobile.addEventListener("click", function(){
            // const minusCountMobile = document.getElementById('countMobile').value;
            // const minuscountMobileNumber= parseFloat(minusCountMobile);
            // const minusBtnTotal= minuscountMobileNumber-1;
            // document.getElementById('countMobile').value=minusBtnTotal;

            // const balanceMinus= document.getElementById('balanceMobile').innerText;
            // const balanceMinusNumber= parseFloat(balanceMinus);
            // const totalBalanceMinus = balanceMinusNumber-1219;
            // document.getElementById('balanceMobile').innerText=totalBalanceMinus;

            allCartCount( "countMobile" ,"balanceMobile" , -1, -1219);

            // getTotalPrice()
         })

         // Case part start 

         const plusBtnCase = document.getElementById('plusBtnCase');
         plusBtnCase.addEventListener("click", function(){
         //    const countCase = document.getElementById("countCase").value;
         //    const CountCaseNumber= parseFloat(countCase);
         //    const totalCountCase= CountCaseNumber+1;
         //    document.getElementById("countCase").value=totalCountCase;

         //  const  balanceCase= document.getElementById('balanceCase').innerText;
         //  const balanceCaseNumber= parseFloat(balanceCase);
         //  const totalCaseBlance= balanceCaseNumber+59;

         //  document.getElementById('balanceCase').innerText=totalCaseBlance;

         allCartCount("countCase","balanceCase",+1,+59);

         //  getTotalPrice()

         })

         const minusBtnCase= document.getElementById('minusBtnCase');
         minusBtnCase.addEventListener("click", function(){
            // const minusCountCase = document.getElementById('countCase').value;
            // const minusCountCaseNumber= parseFloat(minusCountCase);
            // const minusCaseTotal= minusCountCaseNumber-1;
            // document.getElementById('countCase').value=minusCaseTotal;

            // const balanceMinus= document.getElementById('balanceCase').innerText;
            // const balanceMinusNumber= parseFloat(balanceMinus);
            // const totalBalanceMinus = balanceMinusNumber-59;
            // document.getElementById('balanceCase').innerText=totalBalanceMinus;

            allCartCount("countCase","balanceCase",-1,-59);

            // getTotalPrice()
         })

      function allCartCount(idCount,idBlance,idQnt,idAmount){

         const countMobile= document.getElementById(idCount).value;
            const countMobileNumber= parseFloat(countMobile);
            const total= countMobileNumber + idQnt;
            document.getElementById(idCount).value=total;

            const balanceMobile= document.getElementById(idBlance).innerText;
            const balanceMobilenumber= parseFloat(balanceMobile);
            const totalBalanceMobile = balanceMobilenumber+idAmount;
            document.getElementById(idBlance).innerText=totalBalanceMobile;

// Total cart price
         const totalPrice = document.getElementById("sub-total").innerText;
         const total2 = parseFloat(totalPrice);
         const iPhonePrice = document.getElementById("balanceMobile").innerText;
         const iPhoneCurrentPrice = parseFloat(iPhonePrice);

         const casePrice = document.getElementById("balanceCase").innerText;
         const currentCasePrice = parseFloat(casePrice);
         
         const totalAllPrice = iPhoneCurrentPrice + currentCasePrice;
         document.getElementById("sub-total").innerText = totalAllPrice;
         document.getElementById("total").innerText = totalAllPrice;
         
      }


/**

      function getTotalPrice(){
         const totalPrice = document.getElementById("sub-total").innerText;
         const total2 = parseFloat(totalPrice);
         const iPhonePrice = document.getElementById("balanceMobile").innerText;
         const iPhoneCurrentPrice = parseFloat(iPhonePrice);

         const casePrice = document.getElementById("balanceCase").innerText;
         const currentCasePrice = parseFloat(casePrice);
         
         const totalAllPrice = iPhoneCurrentPrice + currentCasePrice;
         document.getElementById("sub-total").innerText = totalAllPrice;
         document.getElementById("total").innerText = totalAllPrice;
         
            }

*/
