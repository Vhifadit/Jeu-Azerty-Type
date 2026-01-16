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
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}
//fonction pour afficher le message d'erreur a lutilisateur au niveu de l'application
 function affichermessagederreur(message){

    //recuperer la div de class popup du dom
    let popup=document.querySelector(".popup")
    let spanerreurmessage=document.getElementById("erreurmessage")
    if(!spanerreurmessage){
        //creation de la balise span pour contenir le message d'erreur
    spanerreurmessage=document.createElement("span")
    //pour savoir si l'on a deja creer une span avant car a chaque execution de la function une nouvelle span est cree ce quon veut eviter 
    spanerreurmessage.id="erreurmessage"
    //ici innertext permet de mettre le message d'erreu dans la nouvelle balise span creer
    
    //ici append permet de dire que la div avec la class popup est le parent de la span
    //autrement dis ont mets la span dans la div deja existante dans le dom 
    popup.append(spanerreurmessage)

    }
    spanerreurmessage.innerText=message
    
 }
 function gererFormulaire(scoresend){
    try {
        let sujet=document.getElementById("nom").value
        validerNom(sujet)
        let message=document.getElementById("email").value
        validerEmail(message)
        affichermessagederreur("")
        afficherEmail(sujet,message,score)
        
        
    } catch (error) {
        //gestion de l'erreur 
        affichermessagederreur(error.message)
    }
        
       
    }
//fonction principale
    let i=0
    let score=0
function lancerJeu(){
    
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
     
     //gestion du formulaire de partage
    const form=document.querySelector("form")
    console.log(form)
    form.addEventListener("submit",(Event)=>{
        Event.preventDefault()
        let scoresend=`${score}/${i}`
        gererFormulaire(scoresend)
        
    })
    //gestion du formulaire de partage a travers la validation du nom de l'utilisateur 
    function validerNom(nomtest){
        let regex=new RegExp("^.{2,}$")
        if (!regex.test(nomtest)) {
           throw new Error("Le nom est trop cour");//throw new error pour les execeptions personnel  
        }
    }
    //gestion du formulaire de partage a travers un format d'email a respecter 
    function validerEmail(monemail){
        let regex=new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]")
        if (!regex.test(monemail)) {
            throw new Error("l'email n'est pas fonctionnel");
        }
    }
   