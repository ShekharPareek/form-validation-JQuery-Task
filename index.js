$(document).ready(function () {
  $("#fnamecheck_error").hide();
  $("#lnamecheck_error").hide();
  $("#emailcheck_error").hide();
  $("#phonecheck_error").hide();

  var errorfname = false;
  var errorlname = false;
  var erroremail = false;
  var errorphone = false;

  $("#first_name").blur(function () {
    check_fname();
  });

  $("#last_name").blur(function () {
    check_lname();
  });

  $("#email").blur(function () {
    check_email();
  });
  $("#phone").blur(function () {
    check_phone();
  });

  function check_fname() {
    var pattern = /^[A-Z ]+$/;
    var f_name = $("#first_name").val();
    if (pattern.test(f_name) && f_name.length >= 2) {
      $("#fnamecheck_error").hide();
    } else {
      $("#fnamecheck_error").html("field required use capital characters!");
      $("#fnamecheck_error").show();
      errorfname = true;
    }
  }
  function check_lname() {
    var pattern = /^[A-Z ]+$/;
    var l_name = $("#last_name").val();
    if (pattern.test(l_name) && l_name.length >= 2) {
      $("#lnamecheck_error").hide();
    } else {
      $("#lnamecheck_error").html("field required use capital characters!");
      $("#lnamecheck_error").show();
      errorlname = true;
    }
  }

  function check_email() {
    var pattern =
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email_name = $("#email").val();
    if (pattern.test(email_name) && email_name.length >= 2) {
      $("#emailcheck_error").hide();
    } else {
      $("#emailcheck_error").html("write correct format!");
      $("#emailcheck_error").show();
      erroremail = true;
    }
  }

  function check_phone() {
    var pattern = /^[0-9-+]+$/;
    var phone_number = $("#phone").val();
    console.log(phone_number.length, pattern.test(phone_number));
    if (phone_number.length == 10 && pattern.test(phone_number)) {
      $("#phonecheck_error").hide();
    } else {
      $("#phonecheck_error").html("write your 10 digits phone number");
      $("#phonecheck_error").show();
      errorphone = true;
    }
  }

  $(".radio-btn").click(function () {
    var radioValue = $("input[name='gender']:checked").val();
    if (radioValue) {
      alert("Your are a - " + radioValue);
    }
  });

  $("form").submit(function () {
    // e.preventDefault();
    errorfname = false;
    errorlname = false;
    erroremail = false;
    errorphone = false;

    check_fname();
    check_lname();
    check_email();
    check_phone();

    if (
      errorfname === false &&
      errorlname === false &&
      erroremail === false &&
      errorphone === false
    ) {
      alert("form submitted");
      return true;
    } else {
      alert("Please fill out all fields! (unsuccessfull)");
      return false;
    }
  });
});

//   $('.form-container').submit(function (e) {
//         e.preventDefault();
//    var firstname = $('#first_name').val();
//     var lastname =  $('#last_name').val();
//     var email = $('#last_name').val();
//      var phnumber = $('#phone').val();
//   if (firstname.length < 10) {
//     $('.errortext').show();
//     $('.errortext').html('*This field is required');
//   }
//    else{
//      $('.errortext').hide();
//    }
//    if(lastname.length < 1){
//    }
//     var regex = /^[A-Z ]+$/;
//   if((regex).test ($('#first_name').val()) ){
//      return true;
//    }
//     else{
//        $('.errortext').show();
//     $('.errortext').html('use alphabets only');
//     }

//  });

//  if(
//   $('.input').val())
//      {
//         $('.errortext').show();
//      }
//    if($('.input').val().length < 10 ){
//      $('.errortext').show();
//      $('.errortext').html('* Field is required');
//    }
//    else{
//      $('.errortext').hide();
//    }
//      var regex = /^[A-Z ]+$/;
//    if((regex).test ($('.alpha').val()) ){
//      return true;
//    }

//      else {
//    // else{
//    //   $('#fnamecheck').show();
//    //   $('#fnamecheck').html('2*please use small alphabets in name without space');
//        return false;
//    }
