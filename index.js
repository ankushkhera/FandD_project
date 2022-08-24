
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (p) {
//         var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
//         var mapOptions = {
//             center: LatLng,
//             zoom: 13,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         var map = new google.maps.Map(document.getElementById("mapdiv"), mapOptions);
//         var marker = new google.maps.Marker({
//             position: LatLng,
//             map: map,
//             title: "<div style = 'height:60px;width:200px'><b>Your location:</b><br />Latitude: " + p.coords.latitude + "<br />Longitude: " + p.coords.longitude
//         });
//         google.maps.event.addListener(marker, "click", function (e) {
//             var infoWindow = new google.maps.InfoWindow();
//             infoWindow.setContent(marker.title);
//             infoWindow.open(map, marker);
//         });
//     });
// } else {
//     alert('Geo Location feature is not supported in this browser.');
// }


// var x = navigator.geolocation;
// x.getCurrentPosition(success, failure);

// function success(position){
//     var myLat = position.coords.latitude;
//     var myLong = position.coords.longitude;

//     var coords = new google.maps.LatLng(myLat,myLong);

//     var mapOptions = {
//         zoom:9,
//         center: coords,
//         mapTypeId: google.maps.mapTypeId.ROADMAP
//     }

//     var map = new google.maps.Map(document.getElementById("mapdiv"), mapOptions);
//     var marker = new google.maps.Marker({map:map, position:coords});
// } 

// function failure(){};


function email(){
    var p=/[a-zA-Z0-9]{1,}(@)[a-z]{4,}(.com)/g;
    var str=document.getElementById("inpemail").value;
    var m=p.test(str);
    if (m==1){
        // document.getElementById("regemail").innerHTML="Correct";
        alert("Message sent successfully :)");
        // var pro = confirm("Do you want to send?");
        // if(pro==1){
        //     alert("Message sent successfully :)");
        // }else{
        //     alert("Message couldn't be send :(");
        // }
    }else{
        // document.getElementById("regemail").innerHTML="In-correct";
        alert("Enter correct details!");
    }
}



function opensidebar(){
    var sidebar = document.getElementById("sidebarid");
    sidebar.classList.add("open");
}

function closesidebar(){
    var sidebar = document.getElementById("sidebarid");
    sidebar.classList.remove("open");
}