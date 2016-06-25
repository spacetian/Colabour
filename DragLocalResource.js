window.onload = function(){
	imgContainer = document.getElementById("imgContainer");
	imgContainer.ondrop = function(e){
		e.preventDefault();

		var f = e.dataTransfer.files[0];
		var fileReader = new FileReader();
		fileReader.onload = function(e){
			showObj(e.target);
			imgContainer.innerHTML = "<img src=\"" +fileReader.result  + "\">"
			
		}
		
		fileReader.readAsDataURL(f);
		
		
		
	}
	
	imgContainer.ondragover = function(e){
		e.preventDefault();
	}
	
	function showObj(obj){
		var s = "";
		for(var k in obj){
			s +=k +":" + obj[k] + "<br/>";
		}
		msgDiv.innerHTML = s;
	}
	
	
}
