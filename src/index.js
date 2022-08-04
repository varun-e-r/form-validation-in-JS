

function validation(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var course = document.getElementById("course").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var address = document.getElementById("address").value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var b = true;


    if(firstname==""){
    alert("firstname cannot empty");
        b=false;
        }
    if(lastname==""){
        alert("lasttname cannot empty");
        b=false;
            }
    if(course=="course"){
        alert("must select a course");
        b=false;
        }
    if(gender=="gender"){
        alert("must select a gender");
        b=false;
        }
    if(!email.match(mailformat)){
        alert("please enter a  valid email address");
        b=false;
    }
    if(!phonenumber.match(phoneno)){
        alert("Please enter a valid phone number");
        b=false;
    }
    
    if(address==""){
        alert("must enter your address");
        b=false;
        }

if (b){
    document.write("firstname:");
    document.write(firstname+"<br>");
    document.write("lastname:");
    document.write(lastname+"<br>");

    document.write("course:")
    document.write(course+"<br>");
    document.write("gender:")
    document.write(gender+"<br>");
    document.write("email:")
    document.write(email+"<br>");
    document.write("phonenumber:")
    document.write(phonenumber+"<br>");
    document.write("address:")
    document.write(address+"<br>");
    
}
}