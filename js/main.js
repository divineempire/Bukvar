window.onload = function () {
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let third = document.getElementById("third");
    let fourth = document.getElementById("fourth");
    document.getElementById("first").addEventListener("click", show1, false);
    document.getElementById("second").addEventListener("click", show2, false);
    document.getElementById("third").addEventListener("click", show3, false);
    document.getElementById("fourth").addEventListener("click", show4, false);
    document.getElementById("first-program").addEventListener("mouseover", firstDark, false);
    document.getElementById("second-program").addEventListener("mouseover", secondDark, false);
    document.getElementById("third-program").addEventListener("mouseover", thirdDark, false);
    document.getElementById("fourth-program").addEventListener("mouseover",fourthDark,false);
    document.getElementById("fifth-program").addEventListener("mouseover",fifthDark,false);
    document.getElementById("first-program").addEventListener("mouseout", firstLight, false);
    document.getElementById("second-program").addEventListener("mouseout", secondLight, false);
    document.getElementById("third-program").addEventListener("mouseout", thirdLight, false);
    document.getElementById("fourth-program").addEventListener("mouseout",fourthLight,false);
    document.getElementById("fifth-program").addEventListener("mouseout",fifthLight,false);
    document.getElementById("last-program").addEventListener("mouseover",lastDark, false);
    document.getElementById("last-program").addEventListener("mouseout",lastLight, false);
    let one=document.getElementById("first-conc");
    let two=document.getElementById("second-conc");
    let three=document.getElementById("third-conc");
    let headerOne=document.getElementById("first-header");
    let headerTwo=document.getElementById("second-header");
    let headerThree=document.getElementById("third-header");
    let timeFirst=document.getElementById("first-time");
    let timeSecond=document.getElementById("second-time");
    let timeThird=document.getElementById("third-time");
    let ageFirst=document.getElementById("first-age");
    let ageSecond=document.getElementById("second-age");
    let ageThird=document.getElementById("third-age");
    function show1() {
        first.style.borderBottom = "3px red solid";
        second.style.borderBottom = "";
        third.style.borderBottom = "";
        fourth.style.borderBottom = "";
        one.style.visibility="visible";
        three.style.visibility="visible";
        headerOne.innerHTML=" Понедельник и Среда <br>";
        headerTwo.innerHTML=" Вторник и Четверг <br>";
        headerThree.innerHTML=" Пятница </br>";
        timeFirst.innerHTML="1 группа <br> 16.00 - 16.40 <br> 2 группа <br>" +
            " 17.00 – 17.40 <br> 3 группа <br> 18.00 – 18.40";
        timeSecond.innerHTML=" 4 группа <br> 16.00 – 16.40 <br> 5 группа <br>" +
            " 17.00 – 17.40 <br> 6 группа <br>  18.00 – 18.40 <br> 7 группа <br> 19.00 – 19.40";
        timeThird.innerHTML="ЛОГИКА <br>  17.00 – 17.40 <br> ПИСЬМО <br> 17.00 – 17.40 <br> 18.00 – 18.40";


    }
    show1();
    function show2() {
        second.style.borderBottom = "3px red solid";
        first.style.borderBottom = "";
        third.style.borderBottom = "";
        fourth.style.borderBottom = "";
        one.style.visibility="hidden";
        three.style.visibility="hidden";
        headerOne.innerHTML="";
        headerTwo.innerHTML=" Суббота<br/>";
        headerThree.innerHTML="";
        timeFirst.innerHTML="";
        timeSecond.innerHTML="12:30-13:50";
        timeThird.innerHTML="";

    }

    function show3() {
        third.style.borderBottom = "3px red solid";
        second.style.borderBottom = "";
        first.style.borderBottom = "";
        fourth.style.borderBottom = "";
        one.style.visibility="visible";
        three.style.visibility="visible";
        headerOne.innerHTML="Понедельник: ";
        headerTwo.innerHTML="Среда:";
        headerThree.innerHTML="Воскресенье:";
        timeFirst.innerHTML="группа 5-6 лет <br> 17.00 – 17.40 <br> группа 7-9 лет <br> 18.00 – 18.40";
        timeSecond.innerHTML="группа 3-4 года <br> 16.00 – 16.30 <br>" +
            "группа 5-6 лет <br> 17.00 – 17.40 <br>" +
            "группа 7-9 лет <br> 18.00 – 18.40";
        timeThird.innerHTML="группа 9-15 лет <br> 12.00 – 14.00";

    }

    function show4() {
        fourth.style.borderBottom = "3px red solid";
        second.style.borderBottom = "";
        third.style.borderBottom = "";
        first.style.borderBottom = "";
        one.style.visibility="hidden";
        three.style.visibility="hidden";
        headerTwo.innerHTML="Вторник и Четверг:";
        headerOne.innerHTML="";
        headerThree.innerHTML="";
        timeSecond.innerHTML="“I CAN SING” <br> 16.15 – 16.45 <br>" +
            "“I CAN SPEAK” <br> 17.00 – 17.45 <br>" +
            "“I CAN READ” <br> 18.10 – 18.55";
        timeFirst.innerHTML="";
        timeThird.innerHTML="";

    }

    function firstDark() {
        document.getElementById("shant1").style.visibility = "visible";


    }

    function secondDark() {
        document.getElementById("shant2").style.visibility = "visible";
    }

    function thirdDark() {
        document.getElementById("shant3").style.visibility = "visible";
    }
    function fourthDark() {
        document.getElementById("shant4").style.visibility = "visible";
    }
    function fifthDark() {
        document.getElementById("shant5").style.visibility = "visible";
    }
    function lastDark() {
        document.getElementById("shant6").style.visibility = "visible";
    }

    function firstLight() {
        document.getElementById("shant1").style.visibility = "hidden";


    }

    function secondLight() {
        document.getElementById("shant2").style.visibility = "hidden";
    }

    function thirdLight() {
        document.getElementById("shant3").style.visibility = "hidden";
    }
    function fourthLight() {
        document.getElementById("shant4").style.visibility = "hidden";
    }
    function fifthLight() {
        document.getElementById("shant5").style.visibility = "hidden";
    }
    function lastLight() {
        document.getElementById("shant6").style.visibility = "hidden";
    }
    document.getElementsByClassName("concc1").onclick=function () {
        window.location.href+="/#contacts";
    };
    function colorfulFirst() {
        document.getElementById("partner1").style.filter="grayscale(0%)";
    }
    function colorfulSecond() {
        document.getElementById("partner2").style.filter="grayscale(0%)";
    }
    function colorfulThird() {
        document.getElementById("partner3").style.filter="grayscale(0%)";
    }
    function colorfulFourth() {
        document.getElementById("partner4").style.filter="grayscale(0%)";
    }
    function blurFirst() {
        document.getElementById("partner1").style.filter="grayscale(100%)";
    }
    function blurSecond() {
        document.getElementById("partner2").style.filter="grayscale(100%)";
    }
    function blurThird() {
        document.getElementById("partner3").style.filter="grayscale(100%)";
    }
    function blurFourth() {
        document.getElementById("partner4").style.filter="grayscale(100%)";
    }
};      