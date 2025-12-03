

function afficherResultat (score,dic1){
    let zonescore=document.querySelector(".zoneScore span")
    let nombrescore=`${score}/${dic1}`
    zonescore.innerText=nombrescore
    console.log(score+" "+" sur"+" "+dic1)
}

function lancerjeu(){
    let score=0
    let dic1=0
    let buttontext=document.getElementById("btnValiderMot")
    let inputext=document.getElementById("inputEcriture")
     buttontext.addEventListener("click",() =>{
        console.log(inputext.value)
     })
    
      
    afficherResultat(score,dic1)
}

console.log(inputext)

console.log(buttontext)
let zoneproposition=document.querySelector(".zoneProposition")
console.log(zoneproposition)

console.log(zonescore)

console.log(choix)
for(let i=0;i<choix.length;i++){
    console.log(choix[i])
}




  
 