var myimage=document.querySelector('img');
var myheading=document.querySelector('h1');
document.querySelector('h3').onclick=function(){
	var mysrc=myimage.getAttribute('src');
	if(mysrc=='images/pet-store.png'){
		myimage.setAttribute('src','images/cute-puppy.jpg');
	}
	else{
		myimage.setAttribute('src','images/pet-store.png');
	}
}
var mybutton=document.querySelector('button');
mybutton.onclick=function(){
	setUserName();
}
function setUserName(){
	var myname=prompt('please enter ur name.');
	localStorage.setItem('name',myname);
	myheading.textContent='My Web Page welcomes '+myname;
}
if(!localStorage.getItem('name')){
	setUserName();
}
else{
	alert('u r entering website as '+localStorage.getItem('name'));
	myheading.textContent='My Web Page welcomes '+localStorage.getItem('name');
}

