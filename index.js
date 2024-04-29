

//Let us target the btn, it is the first thing we need.
let btn = document.querySelector(".btn");

//Let us add a class to the remark by tagetting it.
let remark = document.querySelector(".remark");

//Let us add the class hide so it can hide the correct!
remark.classList.add("hide");

//let us add an event listener for the button.
btn.addEventListener("click", (e) =>{
    //let us prevent defult behaviour to stop refreshing.
    e.preventDefault();
    
    //let us target the things we need
    //let us target guessed-fruit.
    let guessedFruit = document.getElementById("guessed-fruit").value;
    
    //let us target the remark again.
    let remark = document.querySelector(".remark");

    //let us target the remark stm
    let remarkStm = document.querySelector(".remark-stm");

    //let us target the fruit-name
    let fruitName = document.querySelector(".fruit-name");

    //let us target the fruit-img
    let fruitImg = document.querySelector(".fruit-img");

    //let us create an array for the fruit
    let fruits = ["Apple", "Banana", "Orange", "Amla", "Lychee", "Jackfruit", "Ackee", "Passion Fruit", "Pitaya", "Sugar Apple"];

    //let us create a form validation.
    //form validation
    if (guessedFruit == "") {
        //let us use the setTimeout template.
        setTimeout(() => {
            //let us bring the remark by removing the hide.
            remark.classList.remove("hide");
            remarkStm.innerHTML = "Please guess a fruit."
            remark.style.backgroundColor = "red";

            //let us make it vanish.
            setTimeout(() => {
                remark.classList.add("hide");
            }, 2000);
        }, 200);
    }else{
        //let us remove the class
        remark.classList.remove("hide");

        //let us create an index.
        let indexNumber = Math.round(Math.random() * 9);
        fruitName.innerHTML = fruits[indexNumber];

        guessedFruit = guessedFruit.toUpperCase();

        //let us make sure if the person got it right or wrong.
        if ((fruitName.innerHTML.toUpperCase()) == guessedFruit) {
            remarkStm.innerHTML = "Congratulations! You guessed right!";
            remark.style.backgroundColor = "green";
            remark.style.color = "white";
    
        }else{
            remarkStm.innerHTML = "Sorry, try again...";
            remark.style.backgroundColor = "red"
            remark.style.color = "white";
        }

        //let us set the image.
        fruitImg.src = "images/"+fruits[indexNumber]+".jpg";
    }
});


