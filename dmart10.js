///////// GEOLOCATION //////////
// Ensure the browser is geolocation enabled
if('geolocation' in navigator){
    console.log("Geolocation is supported!");
  }else{
    console.log("This browser is not geolocation enabled.");
  }
  
  var options = {
    // enableHighAccuracy = true: more accurate result, false: less accurate
    enableHighAccuracy: false,
    // timeout = how long does the device have, (milliseconds) to return a result?
    timeout: 5000,
    // maximumAge = max age for a possible cached position. 0 = returns current position
    maximumAge: 0
  };
  
  // call getCurrentPosition()
  var locationimg =document.getElementById("locationimg");
  locationimg.addEventListener('click',function(){
    navigator.geolocation.getCurrentPosition(success, error, options);
  
  })

  // upon success, do this
  function success(pos){
    // get longitude and latitude from the position object passed in
    lng = pos.coords.longitude;
    lat = pos.coords.latitude;
    
    // Create a Google Maps URL
    var url = "https://www.google.com/maps/@?" + lat + "," + lng + ",15z";
    
    // Alert the user's location with a link to Google Maps
    alert("Your current location is: " + lat + ", " + lng + ". View on Google Maps: " + url);
  };
  function error(err){
    alert("Error: " + err.code + " - " + err.message);
  };