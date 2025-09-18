function change(){
    const number = document.forms.form.phone.value;
    document.forms.form.phone.value = "55" + number;
};
function clearing(){
    document.forms.form.phone.value = "";
};
function saveMessage(){
    localStorage.setItem("message", document.forms.form.text.value);
};
function getMessage(){
    if (localStorage.getItem("message")){
        document.forms.form.text.value = localStorage.getItem("message");
    };
};
document.getElementById("demo").innerHTML = localStorage.getItem("message");