const buttonAgain = document.getElementsByClassName('btn again')[0]
const pmes = document.querySelector('.message')
const pspam = document.getElementsByTagName('span')[0]
const pdiv = document.querySelector('.number')
const body = document.body
let xscore = document.getElementsByClassName('highscore')[0]
let score = 20

buttonAgain.addEventListener('click', () => {
    pdiv.textContent = "?"
    pmes.textContent = 'Start guessing....'
    pspam.textContent = 20
    console.log(pmes, pdiv, pspam)
    body.style.backgroundColor = 'black'
})

/*function genererValeurAleatoire(){
   
}*/
/*
pdiv.textContent = Math. floor(Math. random() * 20) + 1
buttoncheck.addEventListener('click', () =>  {
   
     if(bv.textContent > pdiv ){
         pmes.textContent = 'Trop haut....'
         console.log(pmes)
    }else if (bv.textContent < pdiv) {
         pmes.textContent = 'Trop bas....'
         console.log(pmes)
    } else {
        pmes.textContent = 'Succès...'
        body.style.backgroundColor = 'gren'

    }
    
   /* if (input <= pdiv){
       body.style.backgroundColor = 'yellow'
    } else if(input >= pdiv) {
        body.style.backgroundColor = 'green'
    } else {
        body.style.backgroundColor = 'white'
    }
   
})*/
/*uttoncheck.addEventListener('click', () => {
    let numberdevine = Math.floor(Math.random() * 20) + 1
    let guess 
    let bv = document.getElementsByTagName('input')
    do {
        bv.textContent = guess
        guess = prompt('Devenez')
      
        
        if (numberdevine>guess){
            console.log('trop petit');
            
        } else if (numberdevine<guess){
            console.log('trop grand')
        }
    } while (guess != numberdevine) 

}
)*/
/*
buttoncheck.addEventListener('click', () => {
    let bv = document.querySelector('number')
    
    if(bv<5){
        body.style.backgroundColor = 'red'
    } else if (bv>5){
         body.style.backgroundColor = 'green'
    } 
})*/
/*buttoncheck.addEventListener('click', () => {
    while (!nombreChercher){
        let bv = document.getElementsByTagName('input')
        if (isNaN(bv) || bv<1 || bv>20){
            pmes.textContent = 'Veuillez entrez un nombre compris 1 et 20 ....'
         console.log(pmes)
         continue
        }
       bv++
        
        if( bv<numberdevine) {

            pmes.textContent = 'Trop petit ....'
            console.log(pmes)

        }  else if (bv>numberdevine) {

            pmes.textContent = 'Trop grand ....'
            console.log(pmes)

        } else {

            pmes.textContent = 'Bravo vous avez trouvez ....'
            console.log(pmes)
            body.style.backgroundColor = 'green'
    
            nombreChercher = true
        }
    }
})*/
/*buttoncheck.addEventListener('click', () => {
   
    
   for (let i=0 ; i = numberdevine; i++){
         pmes.textContent = 'coolmmm....'
         console.log(pmes, numberdevine)
     if(bv<numberdevine){
          pmes.textContent = 'cool....'
          console.log(pmes)
          
     }
     console.log(numberdevine)
     break
     
   
   } 
})*/

let buttoncheck = document.getElementsByClassName('btn check')[0]
const input = document.querySelector('number')

const numberdevine = Math.floor(Math.random()*21)

buttoncheck.addEventListener('click', () => {
    do{
        const input = document.getElementById('vv')
      
        if(input.value < numberdevine){
             /*pmes.textContent = 'Trop petit....'
             console.log(pmes)*/
             pmes.innerText = 'Trop petit'
             pspam.textContent = score--
             
        }else if (input.value > numberdevine) {
              pmes.innerText = 'Trop grand'
              pspam.textContent = score--

        } else if(input.value == numberdevine){
             pmes.innerText = 'Succès'
              body.style.backgroundColor = 'green'
              pdiv.textContent = input.value 
              xscore.textContent =  pspam.textContent
              score=20
        } else {
             body.style.backgroundColor = 'blue'
        }
    }while(input.value != numberdevine)
        
})




