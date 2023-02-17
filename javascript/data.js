var id = document.getElementById("id");
var email = document.getElementById("email");
var password = document.getElementById("password");
var file = document.getElementById("file");
var clickupdate = document.getElementsByClassName("clickupdate");
var body = document.getElementById("body");
javaarrays = {
    id: id.value,
    email: email.value,
    degree: degree.value,
    universityname: universityname.value,
    password:password.value,
}
function deleting(){
    if(id>12){
        alert("your id is to long");
        id.value="";
    }
    email.value="";
    password.value="";
    degree.value="";
    universityname.value="";
    password.value="";
}
//delete data inside the function
deleting();
clickupdate.onclick = function () {
    for (i = 0; i < javaarrays.length; i++) {
       body.innerHTML=`
       <tr>
       <td>${javaarrays[1]}</td>
       <td>${javaarrays[4]}</td>
       <td><a href="update.html" class="updating-data">update</a></td>
       <td><a href="" class="deleting-data">delete</a></td>

   </tr>
   
       `
    }
}