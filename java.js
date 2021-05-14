/*Function to Perform the Computation as well as getting the data from user-input*/
function getvalues(){
    
    var Mincome = document.getElementById("income").value;
    var Ndependent = document.getElementById("Dependents").value;
    var Insurance = document.getElementById("insurance").value;

    var mincome =  Mincome;
    var ndependent = Ndependent;
    var APE;
    var PH = Mincome * 0.035;
    var PI = Mincome * 0.01375;
    var GI = (Mincome * 13);
    var PE = 50000;

    var insurance;

    //Switch for the computation of Insurances (GSIS) and (SSS)

    switch (Insurance)
    {
    case "1":
        insurance = Mincome * 0.09 ;
        break;
      case "2":
        insurance = Mincome * 0.11 ;
        break;
    }

    //conditional statements of APE

    if (Ndependent >= 5){
        APE = 200000;
    }
    else if (Ndependent <= 4 || Ndependent <= 4){
        APE = Ndependent * 50000;
    }
    
    var TD = ((insurance + PH + PI )*12) + APE + PE;
    var TI = GI - TD;
    var PT;
    
    //conditional statements for the computation of Payable Tax

    if (TI <= 250000){
        PT = 0;
    }else if (TI > 250000 && TI <= 400000){
        PT = ((TI-250000)*.20);
    }else if (TI >= 400000 && TI <= 800000){
        PT = ((TI-400000)*.25)+30000;
    }else if (TI >= 800000 && TI <= 2000000){
        PT = ((TI-800000)*.30)+130000;
    }else if (TI >= 2000000 && TI <= 8000000){
        PT = ((TI-2000000)*.32)+490000;
    }else if (TI >= 8000000 ){
        PT = ((TI-8000000)*.35)+2410000;
    }

    //Function to format all of the output to currency format

    function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
        try {
          decimalCount = Math.abs(decimalCount);
          decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
      
          const negativeSign = amount < 0 ? "-" : "";
      
          let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
          let j = (i.length > 3) ? i.length % 3 : 0;
      
          return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
          console.log(e)
        }
      };

    //javascript to show output in HTML

    document.getElementById("Mincome").innerHTML = 'PHP ' + formatMoney(mincome);
    document.getElementById('Insurance').innerHTML ='PHP ' + formatMoney(insurance);
    document.getElementById('Ndependent').innerHTML = ndependent;
    document.getElementById('APE').innerHTML ='PHP ' + formatMoney(APE);
    document.getElementById('PhilHealth').innerHTML = 'PHP ' + formatMoney(PH);
    document.getElementById('PagIBIG').innerHTML ='PHP ' + formatMoney(PI);
    document.getElementById('Gross Income').innerHTML ='PHP ' + formatMoney(GI);
    document.getElementById('Personal Exemption').innerHTML ='PHP ' + formatMoney(PE);
    document.getElementById('Total Deduction').innerHTML = 'PHP ' + formatMoney(TD);
    document.getElementById('Taxable Income').innerHTML ='PHP ' + formatMoney(TI);
    document.getElementById('Payable Tax').innerHTML = 'PHP ' + formatMoney(PT);
    
}
//javascript to "listen" to the click of the user as a signal to start the function
document.getElementById('calculate').addEventListener('click', getvalues);
