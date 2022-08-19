const boxs = document.querySelectorAll(".box");
let boolean = true;
let increament;
increament = 0;
let getButton0 = document.getElementById("item0");
let getButton1 = document.getElementById("item1");
let getButton2 = document.getElementById("item2");
let getButton3 = document.getElementById("item3");
let getButton4 = document.getElementById("item4");
let getButton5 = document.getElementById("item5");
let getButton6 = document.getElementById("item6");
let getButton7 = document.getElementById("item7");
let getButton8 = document.getElementById("item8");
document.getElementById('flex2').innerHTML = "o turn";


console.log(getButton0);
boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (boolean == true) {
            var div = document.createElement("div");
            div.innerHTML = "O";
            div.style.fontSize = "70px";
            div.style.color = "#f0b337";
            div.style.fontWeight = "bolder";
            box.append(div);
            box.disabled = true;
            document.getElementById('flex2').innerHTML = "x turn";
            increament++;
            let condition1 = (getButton0.innerText == div.innerText && getButton1.innerText == div.innerText && getButton2.innerText == div.innerText);
            let condition2 = (getButton3.innerText == div.innerText && getButton4.innerText == div.innerText && getButton5.innerText == div.innerText);
            let condition3 = (getButton6.innerText == div.innerText && getButton7.innerText == div.innerText && getButton8.innerText == div.innerText);
            let condition4 = (getButton0.innerText == div.innerText && getButton3.innerText == div.innerText && getButton6.innerText == div.innerText);
            let condition5 = (getButton1.innerText == div.innerText && getButton4.innerText == div.innerText && getButton7.innerText == div.innerText);
            let condition6 = (getButton2.innerText == div.innerText && getButton5.innerText == div.innerText && getButton8.innerText == div.innerText);
            let condition7 = (getButton0.innerText == div.innerText && getButton4.innerText == div.innerText && getButton8.innerText == div.innerText);
            let condition8 = (getButton2.innerText == div.innerText && getButton4.innerText == div.innerText && getButton6.innerText == div.innerText);

            if (increament == 9 &&
                condition1 != true &&
                condition2 != true &&
                condition3 != true &&
                condition4 != true &&
                condition5 != true &&
                condition6 != true &&
                condition7 != true &&
                condition8 != true) {
                document.getElementById("restart").style.display = "block";
            }

            if ((getButton0.innerText == div.innerText && getButton1.innerText == div.innerText && getButton2.innerText == div.innerText) ||
                (getButton3.innerText == div.innerText && getButton4.innerText == div.innerText && getButton5.innerText == div.innerText) ||
                (getButton6.innerText == div.innerText && getButton7.innerText == div.innerText && getButton8.innerText == div.innerText) ||
                (getButton0.innerText == div.innerText && getButton3.innerText == div.innerText && getButton6.innerText == div.innerText) ||
                (getButton1.innerText == div.innerText && getButton4.innerText == div.innerText && getButton7.innerText == div.innerText) ||
                (getButton2.innerText == div.innerText && getButton5.innerText == div.innerText && getButton8.innerText == div.innerText) ||
                (getButton0.innerText == div.innerText && getButton4.innerText == div.innerText && getButton8.innerText == div.innerText) ||
                (getButton2.innerText == div.innerText && getButton4.innerText == div.innerText && getButton6.innerText == div.innerText)) {
                document.getElementById("player1").style.display = "block";
            }
            boolean = false;
        } else if (boolean == false) {
            var div = document.createElement("div");
            div.innerHTML = "+";
            div.style.transform = "rotate(45deg)";
            div.style.fontSize = "70px";
            div.style.color = "#33c2be";
            div.style.fontWeight = "bolder";
            box.disabled = true;
            box.append(div);
            boolean = true;
            document.getElementById('flex2').innerHTML = "o turn";
            increament++;

            if (increament == 9 &&
                condition1 != true &&
                condition2 != true &&
                condition3 != true &&
                condition4 != true &&
                condition5 != true &&
                condition6 != true &&
                condition7 != true &&
                condition8 != true) {
                document.getElementById("restart").style.display = "block";
            }
            if ((getButton0.innerText == div.innerText && getButton1.innerText == div.innerText && getButton2.innerText == div.innerText) ||
                (getButton3.innerText == div.innerText && getButton4.innerText == div.innerText && getButton5.innerText == div.innerText) ||
                (getButton6.innerText == div.innerText && getButton7.innerText == div.innerText && getButton8.innerText == div.innerText) ||
                (getButton0.innerText == div.innerText && getButton3.innerText == div.innerText && getButton6.innerText == div.innerText) ||
                (getButton1.innerText == div.innerText && getButton4.innerText == div.innerText && getButton7.innerText == div.innerText) ||
                (getButton2.innerText == div.innerText && getButton5.innerText == div.innerText && getButton8.innerText == div.innerText) ||
                (getButton0.innerText == div.innerText && getButton4.innerText == div.innerText && getButton8.innerText == div.innerText) ||
                (getButton2.innerText == div.innerText && getButton4.innerText == div.innerText && getButton6.innerText == div.innerText)) {
                document.getElementById("player2").style.display = "block";
            }

        }
    })
})

function restart() {
    document.getElementById("player1").style.display = "none";
    document.getElementById("player2").style.display = "none";
    document.getElementById("restart").style.display = "none";
    boxs.forEach((box) => {
        box.innerHTML = '';
        box.disabled = false;
        box.style.transform = "rotate(0)";
    });
    increament = 0;
    boolean = true;
    document.getElementById('flex2').innerHTML = "o turn";
}