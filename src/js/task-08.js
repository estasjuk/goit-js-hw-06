const formRef = document.querySelector('.login-form');
    
formRef.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;

    const formData = { email: email.value, password: password.value };
    
        if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены")
    }
    
    console.log(formData);
    event.currentTarget.reset();
}
