/**
 * Handles the hover over '.wallpaper' and '.presspack' elements
 * animating x position of the image.
 *
 * @param e - event object
 */
function hoverOverDownload(e) {
	var image=e.currentTarget.getElementsByTagName("DIV")[0].getElementsByTagName("IMG")[0];
	//console.log("image:", image);
	var targetX=$(image).innerWidth()*-0.5;
	$(image).stop(true,true).animate({left:targetX+'px'},300,"easeInOutQuart");
	/*
	var command;
	switch( e.currentTarget.parentNode.className ){
		case "wallpaper":
			command={left:targetX+'px'};
			break;
		case "presspack":
			command={left:targetX+'px'};
			break;
		default:
			return false;
			break;
	}
	$(e.currentTarget).stop(true,true).animate(command,300,"easeInOutQuart");
	*/
	/*
	image.style.left = '0px';
	window.getComputedStyle(image).getPropertyValue('left');	// force update of styles on element
	image.style.left = targetX+'px';
	*/
	var list=e.currentTarget.getElementsByTagName("A");
	$(list).each(function(){
		this.style.visibility="visible";
	});
}

/**
 * Handles the hover out '.wallpaper' and '.presspack' elements
 * animating x position of the image.
 *
 * @param e - event object
 */
function hoverOutDownload(e) {
	var image=e.currentTarget.getElementsByTagName("DIV")[0].getElementsByTagName("IMG")[0];
	$(image).stop(true,true).animate({left:'0px'},300,"easeInOutQuart");
	/*
	var command;
	switch( e.currentTarget.parentNode.parentNode.className ){
		case "photos_left":
			command={left:'0px'};
			break;
		case "photos_right":
			command={right:'0px'};
			break;
		default:
			return false;
			break;
	}
	$(e.currentTarget).stop(true,true).animate(command,300,"easeInOutQuart");
	*/
	/*
	window.getComputedStyle(image).getPropertyValue('left');
	image.style.left = '0px';
	*/
	var list=e.currentTarget.getElementsByTagName("A");
	$(list).each(function(){
		this.style.visibility="hidden";
	});
	/*
	window.getComputedStyle(sec).getPropertyValue('left');	// force update of styles on element
	sec.style.left = targetX+'px';*/
}
