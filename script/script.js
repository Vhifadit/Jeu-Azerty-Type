

function afficherResultat (score,dic1){
    console.log(score+" "+" sur"+" "+dic1)
}
function choisirPhrasesOuMots(){
    let choixutilisateur=prompt("veuillez tapper'mots'si vous voulez la liste de mots et 'phrase'si vous voulez la liste de phrase")
    while(choixutilisateur!=="mots"&& choixutilisateur!=="phrase"){
        choixutilisateur=prompt("veuillez tapper'mots'si vous voulez la liste de mots et 'phrase'si vous voulez la liste de phrase")
    }
    return choixutilisateur
}
function lancerBoucleDeJeu(listchoix){      
    let score=0    
    for( i=0;i<listchoix.length;i++){
        let motutilisateur=prompt("veuillez ecrire le mot"+" "+listchoix[i])
        if(motutilisateur===listchoix[i]){
            score+=1
        } 
    }
    return score  
    
}
function lancerjeu(){
    let choix=choisirPhrasesOuMots()
    let score=0
    let dic1=0

    if (choix ==="mots"){
        score=lancerBoucleDeJeu(listmot)
        dic1=listmot.length
    }else{
        score=lancerBoucleDeJeu(listePhrases)
        dic1=listePhrases.length
    }
    afficherResultat(score,dic1)
}

    




  
 