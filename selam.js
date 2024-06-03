var date= new Date();
var hour= date.getHours();

if(hour>=5&&hour<=12){
    alert("Günaydın. Hoş Geldiniz.");
}

else if(hour>12&&hour<=18){
    alert("İyi Günler. Hoş Geldiniz.");
}

else if(hour>18&&hour<=24){
    alert("İyi Akşamlar. Hoş Geldiniz.");
}

else if(hour>24&&hour<5){
    alert("İyi Geceler. Hoş Geldiniz.");
}
