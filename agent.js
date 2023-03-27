function userAgent() {
  var x = "Your user agent: " + navigator.userAgent;
  document.getElementById("agent").innerHTML = x;
}

function vendor(){
	var vend = "Your vendor information: "+navigator.vendor;
	document.getElementById("vending").innerHTML = vend;
	
	var p = "You have the following plugins: "+navigator.plugins;
	document.getElementById("plu").innerHTML = p;
	
	var v = "Version information: "+navigator.appVersion;
	document.getElementById("ver").innerHTML = v;
}