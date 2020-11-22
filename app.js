const pic1_num1 = document.getElementById('1');
const pic1_num2 = document.getElementById('2');
const pic1_num3 = document.getElementById("3");
const pic1_num4 = document.getElementById("4");
const pic1_num5 = document.getElementById("5");
const pic1_num6 = document.getElementById("6");
const pic1_num7 = document.getElementById("7");
const pic1_num8 = document.getElementById("8");
const pic1_num9 = document.getElementById("9");
//Deuxieme Photo
const pic2_num1 = document.getElementById('11');
const pic2_num2 = document.getElementById('12');
const pic2_num3 = document.getElementById("13");
const pic2_num4 = document.getElementById("14");
const pic2_num5 = document.getElementById("15");
const pic2_num6 = document.getElementById("16");
const pic2_num7 = document.getElementById("17");
const pic2_num8 = document.getElementById("18");
const pic2_num9 = document.getElementById("19");
//Toisieme Photo
const pic3_num1 = document.getElementById('21');
const pic3_num2 = document.getElementById('22');
const pic3_num3 = document.getElementById("23");
const pic3_num4 = document.getElementById("24");
const pic3_num5 = document.getElementById("25");
const pic3_num6 = document.getElementById("26");
const pic3_num7 = document.getElementById("27");
const pic3_num8 = document.getElementById("28");
const pic3_num9 = document.getElementById("29");
//Quatrieme
const pic4_num1 = document.getElementById('31');
const pic4_num2 = document.getElementById('32');
const pic4_num3 = document.getElementById("33");
const pic4_num4 = document.getElementById("34");
const pic4_num5 = document.getElementById("35");
const pic4_num6 = document.getElementById("36");
const pic4_num7 = document.getElementById("37");
const pic4_num8 = document.getElementById("38");
const pic4_num9 = document.getElementById("39");
//Cinquieme
const pic5_num1 = document.getElementById('41');
const pic5_num2 = document.getElementById('42');
const pic5_num3 = document.getElementById("43");
const pic5_num4 = document.getElementById("44");
const pic5_num5 = document.getElementById("45");
const pic5_num6 = document.getElementById("46");
const pic5_num7 = document.getElementById("47");
const pic5_num8 = document.getElementById("48");
const pic5_num9 = document.getElementById("49");
//Sixieme
const pic6_num1 = document.getElementById('51');
const pic6_num2 = document.getElementById('52');
const pic6_num3 = document.getElementById("53");
const pic6_num4 = document.getElementById("54");
const pic6_num5 = document.getElementById("55");
const pic6_num6 = document.getElementById("56");
const pic6_num7 = document.getElementById("57");
const pic6_num8 = document.getElementById("58");
const pic6_num9 = document.getElementById("59");
//Septieme 
const pic7_num1 = document.getElementById('61');
const pic7_num2 = document.getElementById('62');
const pic7_num3 = document.getElementById("63");
const pic7_num4 = document.getElementById("64");
const pic7_num5 = document.getElementById("65");
const pic7_num6 = document.getElementById("66");
const pic7_num7 = document.getElementById("67");
const pic7_num8 = document.getElementById("68");
const pic7_num9 = document.getElementById("69");
//huitieme
const pic8_num1 = document.getElementById('71');
const pic8_num2 = document.getElementById('72');
const pic8_num3 = document.getElementById("73");
const pic8_num4 = document.getElementById("74");
const pic8_num5 = document.getElementById("75");
const pic8_num6 = document.getElementById("76");
const pic8_num7 = document.getElementById("77");
const pic8_num8 = document.getElementById("78");
const pic8_num9 = document.getElementById("79");
//Neuvieme
const pic9_num1 = document.getElementById('81');
const pic9_num2 = document.getElementById('82');
const pic9_num3 = document.getElementById("83");
const pic9_num4 = document.getElementById("84");
const pic9_num5 = document.getElementById("85");
const pic9_num6 = document.getElementById("86");
const pic9_num7 = document.getElementById("87");
const pic9_num8 = document.getElementById("88");
const pic9_num9 = document.getElementById("89");
const scoreUp = document.getElementById('score')
var userScore = 0;

const check = document.getElementById("check").textContent;
//------------------------------ Partie a travailler ---------------- 

function Score() {
    if (userScore < 9) {
        userScore++;
        scoreUp.innerHTML = userScore;
    }
    if (userScore == 9) {
        scoreUp.innerHTML = 'Bravo '.fontsize(3).sub() + userScore;
    }
}

function win(user) {
    document.getElementById(user).classList.add('green');
    document.getElementById(user).disabled = true;
    document.getElementById(user).textContent = check;
    Score();
}


function lose(userFail) {
    document.getElementById(userFail).classList.add('red');
}

//-------------------------------------------------------------------
function pic1Result(userChoise) {
    if (userChoise == '5') {
        win(userChoise);
    } else {
        lose(userChoise);
    }
}

function pic1() {
    pic1_num1.addEventListener("click", function() {
        pic1Result('1');
    })
    pic1_num2.addEventListener("click", function() {
        pic1Result('2');
    })
    pic1_num3.addEventListener("click", function() {
        pic1Result('3');
    })
    pic1_num4.addEventListener("click", function() {
        pic1Result('4');
    })
    pic1_num5.addEventListener("click", function() {
        pic1Result('5');
    })
    pic1_num6.addEventListener("click", function() {
        pic1Result('6');
    })
    pic1_num7.addEventListener("click", function() {
        pic1Result('7');
    })
    pic1_num8.addEventListener("click", function() {
        pic1Result('8');
    })
    pic1_num9.addEventListener("click", function() {
        pic1Result('9');
    })
}
pic1();

function pic2Result(userChoise) {
    if (userChoise == "12") {
        win(userChoise);
    } else {
        lose(userChoise);
    }
}

function pic2() {
    pic2_num1.addEventListener("click", function() {
        pic2Result('11');
    })
    pic2_num2.addEventListener("click", function() {
        pic2Result('12');
    })
    pic2_num3.addEventListener("click", function() {
        pic2Result('13');
    })
    pic2_num4.addEventListener("click", function() {
        pic2Result('14');
    })
    pic2_num5.addEventListener("click", function() {
        pic2Result('15');
    })
    pic2_num6.addEventListener("click", function() {
        pic2Result('16');
    })
    pic2_num7.addEventListener("click", function() {
        pic2Result('17');
    })
    pic2_num8.addEventListener("click", function() {
        pic2Result('18');
    })
    pic2_num9.addEventListener("click", function() {
        pic2Result('19');
    })
}
pic2();


function pic3Result(userChoise) {
    if (userChoise == "26") {
        win(userChoise);
    } else {
        lose(userChoise);
    }
}

function pic3() {
    pic3_num1.addEventListener("click", function() {
        pic3Result('21');
    })
    pic3_num2.addEventListener("click", function() {
        pic3Result('22');
    })
    pic3_num3.addEventListener("click", function() {
        pic3Result('23');
    })
    pic3_num4.addEventListener("click", function() {
        pic3Result('24');
    })
    pic3_num5.addEventListener("click", function() {
        pic3Result('25');
    })
    pic3_num6.addEventListener("click", function() {
        pic3Result('26');
    })
    pic3_num7.addEventListener("click", function() {
        pic3Result('27');
    })
    pic3_num8.addEventListener("click", function() {
        pic3Result('28');
    })
    pic3_num9.addEventListener("click", function() {
        pic3Result('29');
    })
}
pic3();

function pic4Result(userChoise) {
    if (userChoise == "34") {
        win(userChoise);
    } else {
        lose(userChoise);
    }
}

function pic4() {
    pic4_num1.addEventListener("click", function() {
        pic4Result('31');
    })
    pic4_num2.addEventListener("click", function() {
        pic4Result('32');
    })
    pic4_num3.addEventListener("click", function() {
        pic4Result('33');
    })
    pic4_num4.addEventListener("click", function() {
        pic4Result('34');
    })
    pic4_num5.addEventListener("click", function() {
        pic4Result('35');
    })
    pic4_num6.addEventListener("click", function() {
        pic4Result('36');
    })
    pic4_num7.addEventListener("click", function() {
        pic4Result('37');
    })
    pic4_num8.addEventListener("click", function() {
        pic4Result('38');
    })
    pic4_num9.addEventListener("click", function() {
        pic4Result('39');
    })
}
pic4();

function pic5Result(userChoise) {
    if (userChoise == "41") {
        win(userChoise);
    } else {
        lose(userChoise);
    }
}

function pic5() {
    pic5_num1.addEventListener("click", function() {
        pic5Result('41');
    })
    pic5_num2.addEventListener("click", function() {
        pic5Result('42');
    })
    pic5_num3.addEventListener("click", function() {
        pic5Result('43');
    })
    pic5_num4.addEventListener("click", function() {
        pic5Result('44');
    })
    pic5_num5.addEventListener("click", function() {
        pic5Result('45');
    })
    pic5_num6.addEventListener("click", function() {
        pic5Result('46');
    })
    pic5_num7.addEventListener("click", function() {
        pic5Result('47');
    })
    pic5_num8.addEventListener("click", function() {
        pic5Result('48');
    })
    pic5_num9.addEventListener("click", function() {
        pic5Result('49');
    })
}
pic5();

function pic6Result(userChoise) {
    if (userChoise == "53") {
        win(userChoise);
    } else {
        lose(userChoise);
    }
}

function pic6() {
    pic6_num1.addEventListener("click", function() {
        pic6Result('51');
    })
    pic6_num2.addEventListener("click", function() {
        pic6Result('52');
    })
    pic6_num3.addEventListener("click", function() {
        pic6Result('53');
    })
    pic6_num4.addEventListener("click", function() {
        pic6Result('54');
    })
    pic6_num5.addEventListener("click", function() {
        pic6Result('55');
    })
    pic6_num6.addEventListener("click", function() {
        pic6Result('56');
    })
    pic6_num7.addEventListener("click", function() {
        pic6Result('57');
    })
    pic6_num8.addEventListener("click", function() {
        pic6Result('58');
    })
    pic6_num9.addEventListener("click", function() {
        pic6Result('59');
    })
}
pic6();

function pic7Result(userChoise) {
    if (userChoise == "69") {
        win(userChoise);
    } else {
        lose(userChoise);
    }
}

function pic7() {
    pic7_num1.addEventListener("click", function() {
        pic7Result('61');
    })
    pic7_num2.addEventListener("click", function() {
        pic7Result('62');
    })
    pic7_num3.addEventListener("click", function() {
        pic7Result('63');
    })
    pic7_num4.addEventListener("click", function() {
        pic7Result('64');
    })
    pic7_num5.addEventListener("click", function() {
        pic7Result('65');
    })
    pic7_num6.addEventListener("click", function() {
        pic7Result('66');
    })
    pic7_num7.addEventListener("click", function() {
        pic7Result('67');
    })
    pic7_num8.addEventListener("click", function() {
        pic7Result('68');
    })
    pic7_num9.addEventListener("click", function() {
        pic7Result('69');
    })
}
pic7();

function pic8Result(userChoise) {
    if (userChoise == "78") {
        win(userChoise);
    } else {
        lose(userChoise);
    }
}

function pic8() {
    pic8_num1.addEventListener("click", function() {
        pic8Result('71');
    })
    pic8_num2.addEventListener("click", function() {
        pic8Result('72');
    })
    pic8_num3.addEventListener("click", function() {
        pic8Result('73');
    })
    pic8_num4.addEventListener("click", function() {
        pic8Result('74');
    })
    pic8_num5.addEventListener("click", function() {
        pic8Result('75');
    })
    pic8_num6.addEventListener("click", function() {
        pic8Result('76');
    })
    pic8_num7.addEventListener("click", function() {
        pic8Result('77');
    })
    pic8_num8.addEventListener("click", function() {
        pic8Result('78');
    })
    pic8_num9.addEventListener("click", function() {
        pic8Result('79');
    })
}
pic8();

function pic9Result(userChoise) {
    if (userChoise == "87") {
        win(userChoise);
    } else {
        lose(userChoise);
    }
}

function pic9() {
    pic9_num1.addEventListener("click", function() {
        pic9Result('81');
    })
    pic9_num2.addEventListener("click", function() {
        pic9Result('82');
    })
    pic9_num3.addEventListener("click", function() {
        pic9Result('83');
    })
    pic9_num4.addEventListener("click", function() {
        pic9Result('84');
    })
    pic9_num5.addEventListener("click", function() {
        pic9Result('85');
    })
    pic9_num6.addEventListener("click", function() {
        pic9Result('86');
    })
    pic9_num7.addEventListener("click", function() {
        pic9Result('87');
    })
    pic9_num8.addEventListener("click", function() {
        pic9Result('88');
    })
    pic9_num9.addEventListener("click", function() {
        pic9Result('89');
    })
}
pic9();