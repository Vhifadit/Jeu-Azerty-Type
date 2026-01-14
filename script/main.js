lancerJeu()






const form=document.querySelector("form")
console.log(form)
 form.addEventListener("submit",(Event)=>{
    console.log(Event)
    Event.preventDefault()
    console.log("il n'y a pas de rechargement de page ")
    
 })