let blocGauche = document.querySelector(".leftDiv");
let blocDroit = document.querySelector(".rightDiv");
let blocButon = document.querySelector(".blocButon");

let tab = [ "Mon Premier" , "Mon Deuxieme" , "Mon Troisieme" , "Mon Quatrieme" ];

for( let i = 0 ; i < tab.length ; i ++ )
{
    let para = document.createElement("p");
    para.innerText = tab[i];
    blocGauche.appendChild(para);
}
