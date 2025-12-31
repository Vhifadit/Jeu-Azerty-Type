let listeMots=["Cachalot","Pétunia","Serviette"]
let  listePhrases=["Pas de panique","La vie, lunivers et le reste","Merci pour le poisson"]
let demande=prompt("vouliez vous la liste de 'mots' ou de 'phrases'")
demande=demande.trim().toLowerCase()
 let a="mots"
 let b="phrases"
while(demande!==a && demande!==b){
    demande=prompt("vouliez vous la liste de 'mots' ou de 'phrases'")
    demande=demande.trim().toLowerCase()
}
let score=0
if(demande==="mots"){
   for(let i=0;i<listeMots.length;i++){
        let motproposition=prompt("Veuillez entrer ce mot "+listeMots[i])
        if(motproposition===listeMots[i]){
           console.log(score+=1)
        }
    }
}else{
    if(demande==="phrases"){
        for(let i=0;i<listePhrases.length;i++){
        let motproposition=prompt("Veuillez entrer ce mot "+listePhrases[i])
        if(motproposition===listePhrases[i]){
           console.log(score+=1)
        }
    }

    }
}
