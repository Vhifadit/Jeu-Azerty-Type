
function afficherScore(score,nbrmottotal){
    let message=" "+score+ " / "+nbrmottotal
    return message
}

function lancerJeu(){
    let i=0
    let score=0
    let nbrmottotal=0
    let textutilisateur=document.getElementById("inputEcriture")
    let validebuttom=document.getElementById("btnValiderMot")
    validebuttom.addEventListener("click",()=>{
        i++
        console.log(listeMots[i])
        console.log(textutilisateur.value)
    })

   
  
    let final=afficherScore(score,nbrmottotal)
  
}
