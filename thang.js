function Caculator() {
    let m = document.getElementById("month").value;
/*if (m ==1
    || m ==3
    || m ==5
    || m ==7
    || m ==8
    || m ==10
    || m ==12) {
    document.getElementById("result").innerHTML = "Tháng " + m + " có 31 ngày"
} else if (m ==2) {
    document.getElementById("result").innerHTML = "Tháng " + m + " có 28 hoặc 29 ngày"
} else {
    document.getElementById("result").innerHTML = "Tháng " + m + " có 30 ngày" 
}
}*/

switch(m) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.getElementById("result").innerHTML = "Tháng " + m + " có 31 ngày"
        break;
    case 2:
        document.getElementById("result").innerHTML = "Tháng " + m + " có 28 hoặc 29 ngày"
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.getElementById("result").innerHTML = "Tháng " + m + " có 30 ngày" 
        break;
    default: 
        document.getElementById("result").innerHTML = "Tháng từ 1 đến 12"
        break;
}
}