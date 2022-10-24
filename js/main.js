/**
 * Đầu vào
 * 
 */


//Xử lý
document.getElementById("btnB1").onclick = function () {
    var b1_a = document.getElementById("number_1").value * 1;
    var b1_b = document.getElementById("number_1_a").value * 1;
    var b1_c = document.getElementById("number_1_b").value * 1;
    console.log("fgggawrdfwa");
    if(b1_a>b1_b && b1_a>b1_c){
        if (b1_b>b1_c)
    {
        document.getElementById("infoB1").innerHTML= b1_c+","+b1_b+","+b1_a; //đầu ra
        } else {
            document.getElementById("infoB1").innerHTML= b1_b+","+b1_c+","+b1_a; //đầu ra
        }
    }else if (b1_b>b1_a && b1_b>b1_c){
        if(b1_a>b1_c){
            document.getElementById("infoB1").innerHTML= b1_c+","+b1_a+","+b1_b; //đầu ra
        } else{
            document.getElementById("infoB1").innerHTML= b1_a+","+b1_c+","+b1_b;//đầu ra
        }
    }else if(b1_c>b1_a && b1_c>b1_b){
        if (b1_a>b1_b)
        {
            document.getElementById("infoB1").innerHTML= b1_b+","+b1_a+","+b1_c; //đầu ra
        } else {
            document.getElementById("infoB1").innerHTML= b1_a+","+b1_b+","+b1_c; //đầu ra
        }
    };
}

//Đầu vào
/** người dùng chọn 1 dropdown */
document.getElementById("btnB2").onclick = function () {
    //Xử lý
    var b2_x = document.getElementById("B2_form").value;
    if (b2_x == "A"){
        document.getElementById("infoB2").innerHTML= "Đây là Bố"; //đầu ra
    } else if (b2_x == "B") {
        document.getElementById("infoB2").innerHTML= "Đây là Mẹ"; //đầu ra
    } else if (b2_x == "C") {
        document.getElementById("infoB2").innerHTML= "Đây là Anh Trai"; //đầu ra
    } else if (b2_x == "D") {
        document.getElementById("infoB2").innerHTML= "Đây là Em gái"; //đầu ra
    }
}

//Đầu vào
document.getElementById("btnB3").onclick = function() {
    var b3_a = document.getElementById("b3").value * 1;
    var b3_b = document.getElementById("b3_1").value * 1;
    var b3_c = document.getElementById("b3_2").value * 1;
    var countchan = 0;
    var countle = 0;
// Xử lí
    if (b3_a % 2 == 0){
        countchan+=1;
    } else {countle +=1;}
    if (b3_b % 2 == 0){
        countchan+=1;
    } else {countle +=1;}
    if (b3_c % 2 == 0){
        countchan+=1;
    } else {countle +=1;}

    document.getElementById("infoB3").innerHTML= "Có "+countchan+" số chẵn và "+countle+" số lẻ."; //đầu ra
}

//Đầu vào

document.getElementById("btnB4").onclick = function() {
    var b4_a = document.getElementById("b4").value * 1;
    var b4_b = document.getElementById("b4_1").value * 1;
    var b4_c = document.getElementById("b4_2").value * 1;

    //xử lí
    if (b4_a == b4_b && b4_a == b4_c && b4_b == b4_c){
        document.getElementById("infoB4").innerHTML= "Đây là tam giác đều" ; //đầu ra
    } else if(b4_a == b4_b || b4_a == b4_c || b4_b== b4_c){
        document.getElementById("infoB4").innerHTML= "Đây là tam giác cân" ; //đầu ra
    }
    else {
        // console.log("dqwdwqdwq");
        document.getElementById("infoB4").innerHTML= "Đây là tam giác"; //đầu ra
    }

}

//B6
document.getElementById("btnB6").onclick = function() {
    var b6_a = document.getElementById("b6").value * 1;
    var b6_b = document.getElementById("b6_1").value * 1;
    console.log(b6_a);
    if(b6_a == 1 || b6_a == 3|| b6_a == 5 || b6_a == 7 || b6_a == 8 || b6_a == 10 || b6_a == 12 ){
        document.getElementById("infoB6").innerHTML= "Tháng có 31 ngày" ; //đầu ra
    } else if (b6_a == 4|| b6_a == 6 || b6_a == 9 || b6_a== 11){
        document.getElementById("infoB6").innerHTML= "Tháng có 30 ngày" ; //đầu ra
    } else if (b6_a == 2){
        if ((b6_b % 4===0 &&b6_b%100 !==0 && b6_b % 400 !==0)||(b6_b%100===0 && b6_b % 400===0)){
        document.getElementById("infoB6").innerHTML= "Tháng có 29 ngày" ; //đầu ra
    } else {
        document.getElementById("infoB6").innerHTML= "Tháng có 28 ngày" ; //đầu ra
        }
    } 
}

