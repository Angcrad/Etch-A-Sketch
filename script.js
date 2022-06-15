let gridX=10;
let gridY=10;
let htmlStr="";
let target;
let sliderValTxt=document.querySelector("#sliderValue");
let slider = document.getElementById("sizeSlider");
let gridVar=document.getElementById("grid");
generateGrid(gridX,gridY);
let resBtn = document.querySelector(".reset");
slider.addEventListener("mousemove", updateSlider, false);
resBtn.addEventListener("click",function()
									{
										generateGrid(gridX,gridY);
									},false);



function hover()
{
	for(let i=0;i<target.length;i++)
	{
		target[i].onmouseover=function()
								{
									target[i].classList.remove("unselected");
									target[i].classList.add("selected");
								};
	}
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
	
	/*document.getElementById("grid").innerHTML=htmlStr;
	document.getElementById("grid").style="grid-template-columns: repeat("+gridX+", 1fr); grid-template-rows: repeat("+gridY+", 1fr);";*/
	gridVar.innerHTML=htmlStr;
	gridVar.style="grid-template-columns: repeat("+gridX+", 1fr); grid-template-rows: repeat("+gridY+", 1fr);";
	target = document.querySelectorAll(".pixel");
	for(let i=0;i<target.length;i++)
	{
		target[i].addEventListener("mouseover", hover, false);
	}
}
function updateSlider()
{
	sliderValTxt.innerText=slider.value+"x"+slider.value;
}