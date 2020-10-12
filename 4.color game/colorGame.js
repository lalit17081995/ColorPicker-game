let n=6;
let colors =generateRandomColors(n);
// selecting button for new colors
let colorButton= document.querySelector("#moreColors");
//selectin easy and hard mode
let easyButton=document.querySelector("#easy");
let hardButton=document.querySelector("#hard");
hardButton.classList.add("selected");
let squares=document.querySelectorAll(".square");
let pickedColor=pickColor();

let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
// message shown in bar
let message = document.getElementById("message");
// section head
let h1=document.querySelector(".header");

for(let i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor =colors[i];
    squares[i].addEventListener("click",function(){
        
        let clickedColor =this.style.backgroundColor;
        if (clickedColor===pickedColor)
        {
            message.textContent = "well done idiot !!"; 
            h1.style.backgroundColor =clickedColor;
            colorButton.textContent = "Play again ?";
            changeColor(clickedColor);    
        }
        else
        {
            this.style.backgroundColor = "#232323";
            message.textContent = "try Again Sucker !!";
        }

    });
}

// more colors or reset colors
colorButton.addEventListener("click",function(){
    //generate new colors
    colorButton.textContent="New Colors";
    colors=generateRandomColors(n);
    // assign new picked color
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    //change squares color
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor=colors[index];
   // reset h1 color
    h1.style.backgroundColor="steelblue";
        message.textContent = null;
    }
})
// easy buttom
easyButton.addEventListener("click", function () {
    n=3;
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    //generate new colors
    colors = generateRandomColors(3);
    // assign new picked color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //change squares color
    for (let index = 0; index < squares.length; index++) {
        if(colors[index]){
            squares[index].style.backgroundColor = colors[index];
        }
        else{
            squares[index].style.display ="none";
        }
    }
    // reset h1 color
    h1.style.backgroundColor = "steelblue";
    message.textContent=null;
    
})
// hard button
hardButton.addEventListener("click", function () {
    n=6;
    // select hard button
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    //generate new colors
    colors = generateRandomColors(n);
    // assign new picked color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //change squares color
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.display="block";
        squares[index].style.backgroundColor = colors[index];
        

    }
    // reset h1 color
    h1.style.backgroundColor = "steelblue";
    message.textContent=null;
})

// function for changing color when found correct
function changeColor(color){
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor=color;
        
    }
}

// random color picking
function pickColor(){
    let random =Math.floor(Math.random()*colors.length);
    return colors[random];
}

// generating a random color Array
function generateRandomColors(num){
    let arr=[];
    for (let index = 0; index < num; index++) {
        // push random color in array  
        arr.push(randomColor());
    }
    return arr;
}

// generate random colo
function randomColor(){
    // pick a red from  0-255
     let r= Math.floor(Math.random()*256);
    // pick a green from 0-255
    let g=Math.floor(Math.random() * 256);
    // pick a blue from 0-255
    let b =Math.floor(Math.random() * 256);
    //return rgb(r, g, b)
    return "rgb("+r+", "+g+", "+b+")";
}