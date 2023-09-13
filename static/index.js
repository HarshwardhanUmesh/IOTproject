if (screen.width > 768) {
    var mvp = document.getElementById('myViewport');
    mvp.setAttribute('content','width=768');
}
$("p.btn.btn-primary.reset").click(function(){
  $.ajax({url: "https://potholedetection-f0b97ab1eedf.herokuapp.com/delete", success: function(result){
    alert("deleted");
    location.reload()
  },error: function(xhr, status, error) {
  var err = eval("(" + xhr.responseText + ")");
  alert(err.Message);
}});
});
