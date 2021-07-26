const count = document.querySelector('.count');
const decrement = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increment = document.querySelector('.increase');

const btns = [decrement, reset, increment]

let counter = 0;

btns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            counter--;
        }
        else if(styles.contains('reset')){
            counter = 0;
        }
        else{
            counter++;
        }
        if (counter > 0) {
            count.style.color = "green";
          }
          if (counter < 0) {
            count.style.color = "red";
          }
          if (counter === 0) {
            count.style.color = "#222";
          }
        count.textContent = counter;
    })
})




// decrement.addEventListener('click', () => {
//   count.textContent = counter--;
// });

// reset.addEventListener('click', () => {
//   count.textContent = 0;
// });

// increment.addEventListener('click', () => {
//     count.textContent = counter++;
// })