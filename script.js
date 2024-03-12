// const display = document.querySelector('.display');
// const button = document.querySelectorAll("button");

// button.forEach(btn => {
//     btn.addEventListener("click", ()=>{

//         console.log(btn.textContent);
//         const btnPush = btn.textContent;

//         display.textContent += btnPush;
//     })
// });

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button"); 

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const btnPush = btn.textContent;

            //btn AC
            if (btn.id==="ac") {
                display.textContent="0"
                return 
            }
            //btn DE con resta de digito y reinicio a 0
            if (btn.id==="de") {

                if (display.textContent.length=== 1 ||display.textContent==="Error!") {
                    display.textContent = "0"
                } else {
                    display.textContent= display.textContent.slice(0, -1)
                }
                return;
            }

            //resolver operacion, si no, devuelve error
            if (btn.id==="=")  {
               try {
                display.textContent = eval(display.textContent)
               } catch {
                display.textContent="Error!"
                }return;
            } 

            //concatenar digitos
            if (display.textContent == 0 || display.textContent==="Error!") {
                display.textContent=btnPush;
            } else {
                display.textContent+= btnPush;
            }
        // display.textContent += btnPush
    });
});
