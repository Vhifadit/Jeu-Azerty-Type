//fonction pour afficher les scores 
function afficherScore(score,nbrmottotal){
    let message=" "+score+ " / "+nbrmottotal
    let zonescore=document.querySelector(".zoneScore span")
    return zonescore.innerText=message
}
//fonction pour afficher les mots a saisir par l'utilisateur
function afficherProposition(proposition){
    let zoneproposition=document.querySelector(".zoneProposition")
    zoneproposition.innerText=proposition
}
//fonction principale
function lancerJeu(){
    let i=0
    let score=0
    let listeproposition=listeMots
    let textutilisateur=document.getElementById("inputEcriture")
    let validebuttom=document.getElementById("btnValiderMot")
    let listeradio=document.querySelectorAll(".optionSource input")
    for(let index=0;index<listeradio.length;index++){
        listeradio[index].addEventListener("change",(Event)=>{
            //Event:permet de connaitre l'element ayant ete clique
        console.log(Event.target.value) 
        //Event.target.value est aussi equivalent a listradio[index].value
        if(Event.target.value==="mots"){
            listeproposition=listeMots
        }else{
            listeproposition=listePhrases
        }
        afficherProposition(listeproposition[i])
        })
}

    validebuttom.addEventListener("click",()=>{
       
        console.log(textutilisateur.value)
        if (textutilisateur.value.trim().toLowerCase() === listeproposition[i].trim().toLowerCase()) {
          score++
         console.log(score)
        }

         i++
          let afficherscore=afficherScore(score,i)
            
        //afficher une premiers fois la valeur saisir pas l'utilsateur
        //rendre le champs de saisir vide apres chaque clique afin d'insere le mots suivant 
        textutilisateur.value=''
        //condition permettant de desacticer le bouton valider l'orsqu'on a atteint le nombre total d'element a taper 
        if (listeproposition[i]===undefined) {
            afficherProposition("le jeu est fini")
            validebuttom.disabled=true
            
        }else{
            afficherProposition(listeproposition[i])
        }
        

        
       
    })
}