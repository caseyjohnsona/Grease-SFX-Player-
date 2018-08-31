//Function to change the volume in the current page, and create a download with an updated script
function changeVol(volId){
	var allVols = document.getElementsByClassName("volumepercent");
	var volEl = volId;
	for(var i = 0; i<allVols.length; i++){
		//Finding the acutal element which was passed as an id
		if(allVols[i].childNodes[0]===volEl){
			//Prompting for the new volume
			var newVol = prompt("Current Volume: "+sounds[i+1][4]+"\nNew Volume?");
			sounds[i+1][4] = newVol;
			var element = document.createElement('a');
			var framEl = document.getElementById("soundText");
			framEl.src = "./sounds.js";
			var frameDoc = framEl.contentDocument || framEl.contentWindow.document;
			alert(frameDoc.getElementById(frameBody));
			element.setAttribute('href', 'data:text/javascript;charset=utf-8,'+encodeURIComponent(frameDoc));
			element.setAttribute('download', "sounds.js");

			element.style.display = 'none';
			document.body.appendChild(element);

//			element.click();

			document.body.removeChild(element);
			
		}
	}
	create_table();
}