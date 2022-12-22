function validation() {
  const firstName = document.getElementById("name").value;
  const lastname = document.getElementById("lname").value;
  const address = document.getElementById("addredd").value;
  const number = document.getElementById("number").value;
  const zipcode = document.getElementById("code").value;
  const gender = document.getElementById("select-gender").value;
  const state = document.getElementById("select-state").value;

  if (firstName == "") {
    document.getElementById("errorf_name").innerText =
      "Please fill the First Name**";
    return false;
  }
  else if (lastname == "") {
    document.getElementById("errorl_name").innerText =
      "Please fill the Last Name**";
    return false;
  }
  else if (address == "") {
    document.getElementById("erroraddress_name").innerText =
      "Please fill the Address**";
    return false;
  }
  else if (gender == "0") {
    document.getElementById("error_gender").innerText = "Select value**";
    return false;
  }
  else if (state == "0"){
    document.getElementById("error_state").innerText = "Select value**"
  }
  else if (zipcode.length != 6) {
    document.getElementById("error_code").innerText =
      "Zip code must be 6 digits**";
    return false;
  }
  else if (number == "") {
    document.getElementById("error_phone").innerHtexinnerText =
      "Please fill the Phone Number**";
    return false;
  }
  else if (isNaN(number)) {
    document.getElementById("error_phone").innerText = "Write a digit only**";
    return false;
  }
  else if (number.length != 10) {
    document.getElementById("error_phone").innerText = "Mobile Number must be 10 digits**";
    return false;
  }
   
 
  
  alert("firstName :" + firstName + "\nlastName :" + lastname + "\ngender :" + gender + "\nstate :" + state + "\nzipcode :" + zipcode + "\nnumber :" + number );
  alert("form is submit");
}
