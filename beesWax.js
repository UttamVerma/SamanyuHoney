function SendMail() {
    // e.preventDefault();
    let number = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("textQuerry").value;
    let personName = document.getElementById("name").value;
    let final_message = `"${personName}" is having the following query from you : "${message}". The person's mobile number is "${number}". The person's email is "${email}". The person's address is : "${address}".`;
    let params = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      message: final_message,
    };
    emailjs.send("service_qjlks8t", "template_3eitsj8", params);
  }

// let form = document.getElementById("formSection");
// form.addEventListener("onSubmit", function (e){
//     e.preventDefault();
// })