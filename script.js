let gridX=10;
let gridY=10;
let htmlStr="";
let target;
let sliderValTxt=document.querySelector("#sliderValue");
let slider = document.getElementById("sizeSlider");
let gridVar=document.getElementById("grid");
let mouseDown = false;
document.body.onmousedown = function()
								{
									mouseDown = true;
								};
document.body.onmouseup = function()
								{
									mouseDown = false;
								};
generateGrid(gridX,gridY);
let resBtn = document.querySelector(".reset");
slider.addEventListener("mousemove", updateSlider, false);
resBtn.addEventListener("click",function()
									{
										generateGrid(gridX,gridY);
									},false);


function changeColor(e)
{
	if (e.type === 'mouseover' && !mouseDown) return
	
	e.target.classList.remove("unselected");
	e.target.classList.add("selected");
	
}
function generateGrid(gridX,gridY)
{
	sliderValTxt.innerText=slider.value+"x"+slider.value;
	gridX=slider.value;
	gridY=slider.value;
	htmlStr="";
	for(let i=0;i<(gridX*gridY);i++)
	{	
		htmlStr+="<div class=\"unselected pixel\"></div>\n";
	}
	gridVar.innerHTML=htmlStr;
	gridVar.style="grid-template-columns: repeat("+gridX+", 1fr); grid-template-rows: repeat("+gridY+", 1fr);";
	target = document.querySelectorAll(".pixel");
	for(let i=0;i<target.length;i++)
	{
		target[i].addEventListener("mousedown", changeColor, false);
		target[i].addEventListener("mouseover", changeColor, false);
	}
}
function updateSlider()
{
	sliderValTxt.innerText=slider.value+"x"+slider.value;
}