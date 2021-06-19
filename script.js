//selecting all required elements

const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
wifiicon = wrapper.querySelector(".icon"),
title = wrapper.querySelector("span"),
subtitle = wrapper.querySelector("p"),
cliseIocn = wrapper.querySelector(".close-icon");

window.onload = ()=>{
	//once window loaded
	function ajax() {
		let xhr = new XMLHttpRequest(); //creating new xml object 
		xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); //sending get request to this URL
		xhr.onload = (event)=>{
			//once ajax loaded 
			if (xhr.status == 200 && xhr.status < 300) {
				toast.classList.remove("offline");
				title.innerText = "You're online now";
				subtitle.innerText = "Hurray! Interner is connected.";
				wifiicon.innerHTML = '<i class="fa fa-wifi "></i>';

				cliseIocn.onclick = ()=>{
					wrapper.classList.add("hide");
				}
				setTimeout(()=>{
					wrapper.classList.add("hide");
				},5000);
			}else{
				offline();
			}
		}
		xhr.onerror = ()=>{
			offline();
		}
		xhr.send();
	}
	function offline(){
		wrapper.classList.remove("hide");
		toast.classList.add("offline");
		title.innerText = "You're Offline new";
		subtitle.innerText = "Opps! Internet is disconnected.";
		wifiicon.innerHTML = '<i class="fa fa-frown-o"></i>';
	}
	setInterval(()=>{
		ajax();//calling ajax function
	},100); //100ms
	
}