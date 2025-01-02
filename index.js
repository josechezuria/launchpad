let btnList = document.querySelectorAll(".btn-style")

for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener("click", function() {

        let buttonInnerHTML = this.innerHTML;

        switchButtonKey(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });    
}

document.addEventListener("keydown", function(event){

    switchButtonKey(event.key.toLocaleUpperCase());

    buttonAnimation(event.key.toLocaleUpperCase());
})

function switchButtonKey (key) {
    switch (key) {
        case "A":
            let crash = new Audio('./sounds/crash.mp3');
            return crash.play();
        break;

        case "S":
            let kick = new Audio('./sounds/kick-bass.mp3');
            return kick.play();
        break;

        case "D":
            let snare = new Audio('./sounds/snare.mp3');
            return snare.play();
        break;

        case "F":
            let tom1 = new Audio('./sounds/tom-1.mp3');
            return tom1.play();
        break;

        case "G":
            let tom2 = new Audio('./sounds/tom-2.mp3');
            return tom2.play();
        break;

        case "H":
            let tom3 = new Audio('./sounds/tom-3.mp3');
            return tom3.play();
        break;

        case "J":
            let tom4 = new Audio('./sounds/tom-4.mp3');
            return tom4.play();
        break;
    
        default:
            console.log(buttonInnerHTML)
        break;
    }
}

function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey.toLowerCase());
  
    activeButton.classList.add("pressed");
  
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
  
  }