const ajaxInfoUpload = (info) => {
  $.ajax({
    type: "POST",
    url: '/upload_json',
    data: {"info" : info},
    success: ()=>{},
  });
}

$('form').on('submit', function (e) {
  e.preventDefault();
  var info = $('#myTextarea').val();
  //console.log(info);
  ajaxInfoUpload(info);
});

