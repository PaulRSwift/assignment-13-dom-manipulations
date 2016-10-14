
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2

  // I am not sure why the commneted out code below is not working. I do understand that what I am using is more direct.

  // var answerPTagWithValue = document.querySelector('#compoundInvestment').innerHTML
  //console.log(answerPTagWithValue.innerHTML);
  //console.log(answerPTagWithValue);

  // var answerPTagWithValue = answerPTagWithValue * 2

document.querySelector('#compoundInvestment').innerHTML = document.querySelector('#compoundInvestment').innerHTML * 2

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3

  var circleGoingBlack = document.querySelector("#circle-bw")
  //console.log([circleGoingBlack]);

  var elStyles = window.getComputedStyle(circleGoingBlack)
 console.log(elStyles.backgroundColor);

  //circleGoingBlack.style.backgroundColor = "rgb(0, 0, 0)"


  if (elStyles.backgroundColor === "rgb(255, 255, 255)") {
     circleGoingBlack.style.backgroundColor = "rgb(0, 0, 0)"
  } else {(elStyles.backgroundColor === "rgb(0, 0, 0)")
     circleGoingBlack.style.backgroundColor = "rgb(255, 255, 255)"
 }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4
  var circleEl = document.querySelector(".circle-red")
  //console.log([circleEl]);

  var elementStyles = window.getComputedStyle(circleEl)
  //console.log(elementStyles)
  //console.log(elementStyles.width)
  //console.log( elementStyles.height)

  var elWidthSt = elementStyles.width
  var elHeightSt = elementStyles.height

  var elWidthNum = elWidthSt.slice(0,2)
  var elHeightNum = elWidthSt.slice(0,2)
  //console.log(elHeightNum);

  var elWidthMathAgent = parseInt(elWidthNum)
  var elHeightMathAgent = parseInt(elHeightNum)
  //console.log(elHeightMathAgent);

  var doubledWithEl = elWidthMathAgent * 2
  var doubleHeightEl = elHeightMathAgent * 2
  //console.log(doubleHeightEl);

  circleEl.style.width = doubledWithEl + "px"
  circleEl.style.height = doubleHeightEl + "px"

  if (circleEl < "320px") {
     circleEl.style.width = "40px"
     circleEl.style.height = "40px"

  }

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var userListEl = document.querySelector("#user-list" )
  //console.log(userListEl);

  var activeAndInactive = document.querySelectorAll('#user-list li')
      //console.log( activeAndInactive )
      for (var i = 0; i < activeAndInactive.length; i++) {
         //console.log(activeAndInactive[i]);
         var allUser = activeAndInactive[i]
         //console.log(allUser);
         if (allUser.classList.contains('active') !== true){
            console.log(allUser)
            userListEl.removeChild(allUser)
         }
      }


})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

   var oppOrderEl = document.querySelector("#reverse-squares .answer-box")
   //console.log(oppOrderEl);

   var orderBoxEl = document.querySelectorAll("#reverse-squares .answer-box span")
   //console.log(orderBoxEl)

   for (var i = orderBoxEl.length - 1; i >= 0; i--) {
       oppOrderEl.removeChild(orderBoxEl[i])
       oppOrderEl.appendChild(orderBoxEl[i])
   }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
