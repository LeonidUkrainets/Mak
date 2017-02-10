//Версія 1.5.7 від 2017/02/10
var day;
var d = new Date();
switch (new Date().getDay()) {
    case 0:
        day = "неділя";
        break;
    case 1:
        day = "понеділок";
        break;
    case 2:
        day = "вівторок";
        break;
    case 3:
        day = "середа";
        break;
    case 4:
        day = "четвер";
        break;
    case 5:
        day = "пятниця";
        break;
    case 6:
        day = "субота";
}
document.getElementById("demo").innerHTML = "Today is " ;
document.getElementById("demo").innerHTML = 'Сьогодні: <br>'+ day+',<br>'+d.toLocaleDateString();
