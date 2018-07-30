function search(){
	if(document.getElementById("search_input").value != ""){
		window.location.href = "https://m.baidu.com/s?word=" + document.getElementById("search_input").value + "&tn=simple";
		document.getElementById("search_input").value = "";
	}
	return false;
}