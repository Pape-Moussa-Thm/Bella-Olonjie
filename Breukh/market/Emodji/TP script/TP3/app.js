
let blocG=document.querySelector(".div1")
griseBouton(blocG,undefined);
function griseDroite(){
  let p =document.querySelectorAll(".div1 p");
  let btn1=document.querySelector(".fa-forward");
  // let btn3=document.querySelectorAll(".fa-forward")[0];
  if (p.length===0){ btn1.style.backgroundColor ="grey"; btn1.disabled="true"};
}
griseDroite();
function griseGauche(){
  let p =document.querySelectorAll(".div2 p");
  let btn2=document.querySelector(".fa-backward");
  if (p.length===0){ btn2.style.backgroundColor ="grey"};
}
griseGauche();
function griseBouton(bloc,btn){
  let p = bloc.querySelectorAll("p");
  console.log(p);


}
