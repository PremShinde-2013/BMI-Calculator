function calculate(){

    let bmi ;
    let result = document.getElementById("result");


    let weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + " kg";
    let height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + " cm";

    bmi = (weight/Math.pow( (height/100), 2 )).toFixed(1);
    result.textContent = bmi;
    
    if(bmi < 18.5){
        category = "Underweight";
        result.style.color = "#f90808";

    }
    else if(bmi >= 18.5 && bmi <=24.9){
        category = "Normal weight";
        result.style.color = "#19f900";

    }
else if (bmi>=25 && bmi <= 29.9){
    category = "Overweight"
    result.style.color = "#f98500";

}
    else{
        category = "Obese";
        result.style.color = "#f90000";

    }
    document.getElementById("category").textContent = category;


}