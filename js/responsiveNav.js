/* import this function at runtime (in html body) */

//listener function
const width = window.matchMedia("(max-width: 830px)");
function switchToMobile(width) {
	var navItems = document.getElementsByClassName("navItem");
	if (width.matches) {
		//set nav items for mobile viewing
		
		//document.body.style.backgroundColor = "yellow";
		document.getElementById("navlist").style.display = "none";
		document.getElementById("openNav").style.display="inline-block";
		document.getElementById("closeNav").style.display="none";
		
		
	} else {
		//set nav items for monitor viewing
		//document.body.style.backgroundColor = "red";
		document.getElementById("navlist").style.display = "inline-block";
		document.getElementById("openNav").style.display="none";
		document.getElementById("closeNav").style.display="none";
	}
}


width.addListener(switchToMobile);
switchToMobile(width); //call listener