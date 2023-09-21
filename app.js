
const nameStep = document.getElementById("name-step");
const contactStep = document.getElementById("Contact-step");
const birthStep = document.getElementById("birth-step");
const previewStep = document.getElementById("preview-step");
const nextBtnName = document.getElementById("next-btn-name");
const nextBtnContact = document.getElementById("next-btn-contact");
const nextBtnBirth = document.getElementById("next-btn-birth");

const previewName = document.getElementById("Preview-name");
const previewEmail = document.getElementById("Preview-email");
const previewPhone = document.getElementById("Preview-phone");
const previewBirthDate = document.getElementById("Preview-birth-date");
const previewBirthPlace = document.getElementById("Preview-birth-place");

nextBtnName.addEventListener("click", () => {

    if(document.getElementById("first-name").value && document.getElementById("last-name").value) {
        document.getElementById("name-step").style.display = "none";
        document.getElementById("Contact-step").style.display = "block";
        document.getElementById("step-btns-name").classList.remove("active");
        document.getElementById("step-btns-contact").classList.add("active");
    } else {
        alert("Please Fill the form and press next")
    }
});

nextBtnContact.addEventListener("click", () => {
    if(document.getElementById("email").value && document.getElementById("phone").value) {
        document.getElementById("name-step").style.display = "none";
        document.getElementById("Contact-step").style.display = "none";
        document.getElementById("birth-step").style.display = "block";
        document.getElementById("step-btns-name").classList.remove("active");
        document.getElementById("step-btns-contact").classList.remove("active");
        document.getElementById("step-btns-birth").classList.add("active");
    } else {
        alert("Please Fill the form and press next")
    }
    
});

nextBtnBirth.addEventListener("click", () => {
    if(document.getElementById("birth-date").value && document.getElementById("birth-place").value) {
        previewName.innerHTML = 'Name: ' + document.getElementById("first-name").value + ' ' + document.getElementById("last-name").value;
        previewEmail.innerHTML = 'Email: ' + document.getElementById("email").value;
        previewPhone.innerHTML = 'Phone ' + document.getElementById("phone").value;
        previewBirthDate.innerHTML = 'Birth Date is ' + document.getElementById("birth-date").value;
        previewBirthPlace.innerHTML = "Birth Place is " + document.getElementById("birth-place").value;
        nameStep.style.display = "none";
        contactStep.style.display = "none";
        birthStep.style.display = "none";
        previewStep.style.display = "block";
        document.getElementById("step-btns-name").classList.remove("active");
        document.getElementById("step-btns-contact").classList.remove("active");
        document.getElementById("step-btns-birth").classList.remove("active");
        document.getElementById("step-btns-submit").classList.add("active");
    } else {
        alert("Please Fill the form and press next")
    }
    
})

