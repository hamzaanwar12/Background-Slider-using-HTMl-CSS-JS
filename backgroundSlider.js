let reverseButton = document.getElementsByTagName("button")[0]
let forwardButton = document.getElementsByTagName("button")[1]
let i = 3;

console.log(forwardButton)
console.log(reverseButton)

let onClickFunction = () => 
{
    // activeOrInactive()
    if (i > 2 && i <= 15)
    {
        document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.7),  rgba(0, 0, 0, 0.7)),
        url("pic${i}.jpg") no-repeat`
        document.body.style.backgroundSize = "cover"
    }

}


forwardButton.addEventListener("click", () => {
    if(i<15)
        ++i
    console.log("forward Clicked")
    console.log(i)
    onClickFunction()
  
    if (i >= 15) 
    {
        forwardButton.disabled = true
        forwardButton.classList.add("disable");
    }
    
    if (reverseButton.classList.contains("disable"))
    {
        reverseButton.disabled = false
        reverseButton.classList.remove("disable")
    }

})

reverseButton.addEventListener("click", () => 
{
    if(i>3)
        --i

    console.log("reverse Clicked")
    console.log(i)
    onClickFunction(false)
  
    if (i <= 3) 
    {
        reverseButton.disabled = true
        reverseButton.classList.add("disable")
    }
    if (forwardButton.classList.contains("disable")) 
    {
        forwardButton.disabled = false
        forwardButton.classList.remove("disable")
    }

})