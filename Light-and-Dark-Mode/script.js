const ChangeThemeBtn = document.querySelector(".change-theme-btn");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

// ChangeThemeBtn.addEventListener('click', () =>{
//     if(body.classList.contains('light')){
//         body.classList.remove('light')
//         body.classList.add('dark')

//         ChangeThemeBtn .classList.remove('black')
//         ChangeThemeBtn .classList.add('white')
//         h1 .classList.remove('black')
//         h1 .classList.add('white')
//     }else{
//         body.classList.remove('dark')
//         body.classList.add('light')

//         ChangeThemeBtn .classList.remove('white')
//         ChangeThemeBtn .classList.add('black')
//         h1 .classList.remove('white')
//         h1 .classList.add('black')
//     }

//     // if(ChangeThemeBtn .classList.contains('black')){
//     //     ChangeThemeBtn .classList.remove('black')
//     //     ChangeThemeBtn .classList.add('white')
//     //     h1 .classList.remove('black')
//     //     h1 .classList.add('white')
//     // }else{
//     //     ChangeThemeBtn .classList.remove('white')
//     //     ChangeThemeBtn .classList.add('black')
//     //     h1 .classList.remove('white')
//     //     h1 .classList.add('black')
//     // }
// })

ChangeThemeBtn.addEventListener("click", () => {
  console.log(body.getAttribute("data-theme"));
  if(body.getAttribute("data-theme") === "dark") {
    body.setAttribute("data-theme", null);
  } else {
    body.setAttribute("data-theme", "dark");
  }

  // ChangeThemeBtn.setAttribute('data-theme', 'dark')
});
