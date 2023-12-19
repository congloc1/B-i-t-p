function nhap() {
    let inputnumber1=document.getElementById("number1")
    let inputnumber2=document.getElementById("number2")
    let inputnumber3=document.getElementById("number3")
    let a=parseFloat(inputnumber1.value)
    let b=parseFloat(inputnumber2.value)
    let c=parseFloat(inputnumber3.value)
    if (a>0&&b>0&&c>0)
        if (a+b>c&&a+c>b&&b+c>a)
            if (a===b&&b===c)
                alert("tam giác đều")
            else {   if(a===c||a===b||c===b){
                if (a*a===b*b+c*c || b*b===a*a+c*c || c*c===a*a+b*b){
                    alert('tam giác vuông cân')}

                else {   alert("tam giác cân")}}
            else {
                if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b){
                    alert("tam giác vuông")}
                else {
                    alert("tam giác thường")
                }
            }}


        else
        {alert('không phải là tam giác')}

    else {
        alert('không phải la tam giác')}}


