function validateform()
{
    var x,y,a,b;

    x = document.getElementById("username").value;

    y = document.getElementById("password").value;

    if(x == "")
    {
        a = alert("Username is Manadatory");
    }
    else if (y == "")
    {
        b = alert("Password is Manadatory");
    }

    // document.getElementById("uname").innerHTML = a;

    // document.getElementById("pass").innerHTML = b;
}