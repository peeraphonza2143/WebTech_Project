var score = 0, //กำหนดตัวแปร score = 0
    highScore = 0,  //กำหนดตัวแปร highscore = 0
    time = 30,  //กำหนดตัวแปร time = 30
    timer;  //กำหนดตัวแปร timer
var IsPlaying = false; //กำหนดตัวแปร IsPlaying = false
var timeBoard = document.getElementById('time'), //นำ id time มาแทนลงในตัวแปร timeBoard
    scoreBoard = document.getElementById('score'), //นำ id score มาแทนลงในตัวแปร scoreBoard
    btnStart = document.getElementById('btn'); //นำ id btn มาแทนลงในตัวแปร btnStart

/*-----------------------fallDown เป็น function ไว้จัดการเรื่องของการเพิ่ม score เมื่อ apple ตก--------------------------------------- */
function fallDown(apple) { //สร้าง function fallDown รับค่าพารามิเตอร์ที่มีชื่อว่า apple เข้ามา
    //เป็นการเช็คว่าถ้ายังไม่มีการกดปุ่ม start จะไม่สามารถเริ่มเกมส์ได้
    if (!(IsPlaying && apple instanceof HTMLElement)) { 
        return; //ไม่มีการกดให้ return ออกไป
    }
    apple.setAttribute('data-top', apple.style.top); //กำหนด Attribute ที่มีชื่อว่า data-top ของ apple ให้มีค่าเป็น apple.style.top
    apple.style.top = "380px"; //ทำการเซตให้ apple ลงมาที่ 380px
    score = score + 5; //กำหนดให้ score = score + 5 เพิ่มค่า score ต่อลูก ลูกละ 5 คะแนน
    renderScore(); //เรียกฟังก์ชัน renderScore
    hideFallenApple(apple); //เรียกฟังก์ชัน  hideFallenApple รับค่าพารามิเตอร์ที่มีชื่อว่า apple เข้าไป
}
/*-------------------------------------------------------------------------------------------------------------------------- */

/*-----------------------hideFallenApple เป็น function ไว้จัดการลบตัว apple เมื่อตกถึงพื้น--------------------------------------------*/
function hideFallenApple(apple) { //สร้าง function hideFallenApple รับค่าพารามิเตอร์ที่มีชื่อว่า apple เข้ามา
    setTimeout(function () { //เรียกใช้ฟังก์ชันหลังจากหมดเวลาหน่วงที่กำหนด
        apple.style.display = 'none'; //ทำการลบ apple ออก โดยกำหนดให้  apple.style.display = none
        restoreFallenApple(apple); //เรียกใช้ฟังก์ชัน restoreFallenApple รับค่าพารามิเตอร์ที่มีชื่อว่า apple เข้าไป
    }, 500); //มีการหน่วงเวลา 0.5 วินาที
}
/*-------------------------------------------------------------------------------------------------------------------------- */

/*-----------------------restoreFallenApple เป็น function ไว้จัดการรีตัว apple หลังตกถึงพื้น--------------------------------------------*/
function restoreFallenApple(apple) { //สร้าง function restoreFallenApple รับค่าพารามิเตอร์ที่มีชื่อว่า apple เข้ามา
    apple.style.top = apple.getAttribute('data-top'); //กำหนดให้ apple.style.top = นำ Attribute คือ data-top ใน apple
    setTimeout(function () { //เรียกใช้ฟังก์ชันหลังจากหมดเวลาหน่วงที่กำหนด
        apple.style.display = 'inline-block'; //ทำการเพิ่ม apple โดยกำหนดให้  apple.style.display = inline-block
    }, 500); //มีการหน่วงเวลา 0.5 วินาที
}
/*-------------------------------------------------------------------------------------------------------------------------- */

/*-----------------------renderScore เป็น function ไว้จัดการเกี่ยวกับการแสดง score และ highscore--------------------------------------------*/
function renderScore() {  //สร้าง function renderScore
    scoreBoard.innerText = score; //ให้ตัวแปร scoreBoard แสดงข้อความ score
    if (score > highScore) { //ถ้า score มีค่ามากกว่า highscore 
        highScore = score; //กำหนดให้ highScore = score
        document.getElementById('high').innerText = highScore; //ทำการเข้าถึง id high และทำการเปลี่ยนค่าเป็น highScore
    }
}
/*-------------------------------------------------------------------------------------------------------------------------- */

/*-----------------------startGame เป็น function ไว้จัดการเกี่ยวกับการเริ่มเกมส์----------------------------------------------------*/
function startGame() {  //สร้าง function startGame 
    btnStart.disabled = "disabled"; //กำหนดให้ปุ่มใช้งานไม่ได้เมื่อเริ่มเกมส์
    IsPlaying = true;//ให้ตัวแปร IsPlaying = true 
    renderScore(); //เรียกฟังก์ชัน renderScore
    timer = setInterval(countDown, 1000); //กำหนดให้ตัวแปร time = เรียกใช้ฟังก์ชัน countDown ทุกๆ 1 วินาที
}
/*-------------------------------------------------------------------------------------------------------------------------- */

/*-----------------------countDown เป็น function ไว้จัดการเกี่ยวกับการนับถอยหลัง----------------------------------------------------*/
function countDown() {  //สร้าง function countDown
    time = time - 1; //กำหนดให้ time = time -  1
    timeBoard.innerText = time; //ให้ตัวแปร timeBoard แสดงข้อความ time
    if (time == 0) { //ถ้า time = 0 
        clearInterval(timer);  //ทำการรีค่าของ timer
        endGame(); //เรียกฟังก์ชัน endGame 
    }
}
/*-------------------------------------------------------------------------------------------------------------------------- */

/*-----------------------endGame เป็น function ไว้จัดการเกี่ยวกับการจบเกมส์ แสดง score----------------------------------------------------*/
function endGame() {  //สร้าง function endGame  
    IsPlaying = false; //ให้ตัวแปร IsPlaying = false 
    alert("Your score is " + score); //ทำการแสดงข้อความว่า Your score is ตามด้วยค่า score
    score = 0;  //ให้ตัวแปร score = 0 
    time = 30;  //ให้ตัวแปร time = 30 
    btnStart.removeAttribute('disabled'); //กำหนดให้ตัวแปร btnStart ลบ Attribute disabled 
}
/*-------------------------------------------------------------------------------------------------------------------------- */