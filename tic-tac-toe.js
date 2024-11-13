let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgbtn = document.querySelector(".newg");
let winmssge = document.querySelector(".mssge");
let mssgecontain = document.querySelector(".mssge_container");
let main = document.querySelector("main");

main.classList.remove("hide");
let turnO = true;

let winnerarr = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]];


const disable = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const enaable = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
        mssgecontain.classList.add("hide");
        main.classList.remove("hide");
    }
}
const resetgame = () => {
    turnO = true;
    enaable();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO == true) {
            box.innerText = "O";
            turnO = false;

        }
        else {
            box.innerText = "X";

            turnO = true;

        }
        box.disabled = true;
        checkwinner();
        box.disabled = true;
    }
    );
});
const show_winner = (winner) => {
    winmssge.innerText = `CONGRATULATIONS! Winner is ${winner}`;
    main.classList.add("hide");
    mssgecontain.classList.remove("hide");
    disable();

}
const checkwinner = () => {
    for (let pattern of winnerarr) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                show_winner(pos1val);
            }
        }
    }
}

newgbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

