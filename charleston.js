start = new Date();
start_time = start.getTime();

function get_seconds() {
	
	var now = new Date();
	var time_now = now.getTime();
	var time_diff = time_now - start_time;
	var seconds = time_diff/1000;
	var timer_string = Math.round(seconds);
	document.getElementById("timer").innerHTML = timer_string;
	window.setTimeout("get_seconds();", 1000);
}

function random_int(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function add_source(element, src, type) {
	var source = document.createElement("source");
	source.src = src;
	source.type = type;
	element.appendChild(source);
}


function main() {
	var video_no = random_int(1,7);
	var video_string_mpeg = "http://ecmendenhall.github.com/Infinite-Charleston/media/Trudy" + video_no + ".mp4";
	var video_string_webm = "http://ecmendenhall.github.com/Infinite-Charleston/media/Trudy" + video_no + ".webm";
	var videoplayer = document.querySelector(".videoplayer");
	add_source(videoplayer, video_string_mpeg, "video/mp4");
	add_source(videoplayer, video_string_webm, "video/webm");
	videoplayer.addEventListener("onplay", get_seconds(), false);
		
}
