const validateform =() =>{
    let x = document.forms["contact_form"]["name"].value;
    let y = document.forms["contact_form"]["subject"].value;
    let z = document.forms["contact_form"]["message"].value;
    if (x == "" || y == "" || z == "") {
      alert("Please fill required details");}
    return false;
    }
