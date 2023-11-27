$("p.btn.btn-primary.reset").click(function(){
  $.ajax({url: "https://potholedetection-f0b97ab1eedf.herokuapp.com/delete", success: function(result){
    alert("deleted");
    location.reload()
  },error: function(xhr, status, error) {
  var err = eval("(" + xhr.responseText + ")");
  alert(err.Message);
}});
});
 document.getElementById('sampleVideoButton').addEventListener('click', function() {
          // Replace 'YOUR_FILE_ID' with your actual Google Drive file ID
          var fileID = '1EQ48oxPS_GhJi40mP1IAcvPy-2rrIda4';
          var googleDriveLink = 'https://drive.google.com/file/d/' + fileID + '/view';
          window.location.href = googleDriveLink;
      });
       }

$("#field-location svg.bi.bi-caret-down-fill").click(function (event) {
    $("#field-location svg.bi.bi-caret-down-fill").css({visibility: "hidden"})
    $("#field-location .card-body").animate({height: "50px"})
    $("#field-location .card-body").children().animate({height: "0px"})
    $("#field-location svg.bi.bi-caret-up-fill").css({visibility: "visible"})
})

$("#field-location svg.bi.bi-caret-up-fill").click(function (event) {
    $("#field-location svg.bi.bi-caret-up-fill").css({visibility: "hidden"})
    $("#field-location .card-body").animate({height: "342px"})
    $("#field-location .card-body").children().animate({height: "330px"})
    $("#field-location svg.bi.bi-caret-down-fill").css({visibility: "visible"})
})

$("#field-graph svg.bi.bi-caret-down-fill").click(function (event) {
    $("#field-graph svg.bi.bi-caret-down-fill").css({visibility: "hidden"})
    $("#field-graph .card-body").animate({height: "50px"})
    $("#field-graph .card-body").children().animate({height: "0px"})
    $("#field-graph svg.bi.bi-caret-up-fill").css({visibility: "visible"})
})

$("#field-graph svg.bi.bi-caret-up-fill").click(function (event) {
    $("#field-graph svg.bi.bi-caret-up-fill").css({visibility: "hidden"})
    $("#field-graph .card-body").animate({height: "342px"})
    $("#field-graph .card-body").children().animate({height: "330px"})
    $("#field-graph svg.bi.bi-caret-down-fill").css({visibility: "visible"})
})
