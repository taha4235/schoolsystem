let email = document.getElementById("email");
let password = document.getElementById("password");
let logbtn = document.getElementById("logbtn");
let tbody = document.getElementById("body");
arrays={
    email:email.value,
    password:password.value,
}
logbtn.addEventListener("click",function(){
    for(i=0;i<arrays.length;i++){
    tbody.innerHTML=  `
    <tr>
    <td>${arrays[0]}</td>
    <td>${arrays[1]}</td>
    <td><a href="" class="updating-data">update</a></td>
    <td><a href="" class="deleting-data">delete</a></td>

</tr>;
    `
    }
})