//ACCESSING ELEMENTS IN THE DOM

// document.getElementById('heading').innerHTML = 'This is a heading'
// document.getElementById('subheading').innerHTML = 'Module 4'
// document.getElementById('mytitle').innerHTML = 'DOM Manipulation'
// document.getElementById('demo').innerHTML = 'We have just began!'
// document.getElementById('image').src = '/images/sea.jpeg'
//document.getElementById('heading').style.color = 'red'


//EVENT AND EVENT HANDLING IN JAVASCRIPT

//select the element, make the change, return output
// document.getElementById('btn').addEventListener('click', () =>{
//     document.getElementById('output').innerHTML ='Button has been clicked'
//     console.log('first')
// }
// )

// function newFunction() {
//     document.getElementById('btn').addEventListener('click', () => {
//         let input = document.getElementById('userInput')
//         let output = document.getElementById('output')

//         let inputValue = input.value
//         output.innerHTML = inputValue
//         console.log(inputValue)

//     })
// }

//CAPTURE: FIRSTNAME, LASTNAME, EMAIL, PHONE NUMBER
//OUTPUT: FULLNAME, EMAIL, PHONENUMBER

// document.getElementById('details').addEventListener('click', ()=>{
//     let input = document.getElementById('firstName',"lastName", "email", "phoneNumber")
//     let output = document.getElementById('alldetails')
    
//     let inputValue = 
//     output.innerHTML = 
//     console.log(inputValue);
// })


//CHANGE EVENT - READ MORE
document.getElementById('countries').addEventListener('change', () => {
    let countryChosen = document.getElementById('countries').value
    document.getElementById('outputCountry').innerHTML = countryChosen
})



document.getElementById('colors').addEventListener('change',() =>{
    let chosenColor = document.getElementById('colors').value
    //document.getElementById('outputColor').innerHTML = chosenColor //shows in the document
    console.log(chosenColor); //shows in console

})

//KEY UP EVENT
document.getElementById('inputKeyup').addEventListener('keyup',() =>{
    let keysPressed = document.getElementById('inputKeyup').value
    document.getElementById('outputKeyup').innerHTML = keysPressed
})


//BUTTON AND COUNTER
// let count = 0
// const countClicks = document.getElementById("count")
// document.getElementById('btn').addEventListener('click', () =>{
//     count++
//     countClicks.innerHTML = count
//     //console.log(count)
// }
// )

let count = 0
const countClicks = document.getElementById("count")
function noOfClicks(){
    count++
    countClicks.innerHTML = count
}
document.getElementById('btn').addEventListener('click', noOfClicks)

let nm = '7'
console.log(typeof nm);
nm = parseInt(nm)
console.log(typeof nm);

//ASSIGNMENT
let counter = parseInt(document.getElementById('counter').innerHTML)
function incrementCounter(){
    counter++
    document.getElementById('counter').innerHTML = counter
}


