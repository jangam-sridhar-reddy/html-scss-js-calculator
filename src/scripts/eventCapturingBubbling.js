// const getId = (label) => document.getElementById(label);

// getId("grandParent").addEventListener(
//   "click",
//   (e) => {
//     console.log("grand parent clicked");
//     e.stopPropagation();
//   },
//   true
// );

// getId("parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("parent clicked");
//   },
//   false
// );

// getId("child").addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   false
// );

// getId("openMenuButton").addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("sridhar");
//     const menu = getId("openMenu");
//     const menuDisplay = menu.style.display;
//     if (menuDisplay === "none") {
//       menu.style.display = "block";
//     } else {
//       menu.style.display = "none";
//     }
//   },
//   false
// );
// let list = getId("openMenu").querySelectorAll("li");

// list.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("li");
//   });
// });

// document.addEventListener(
//   "click",
//   (e) => {
//     console.log("sri");
//     getId("openMenu").style.display = "none";
//   },
//   false
// );
