var _a;
// Get the resume container
var resumeContainer = document.getElementById("resumeContainer");
// Add an event listener to make sections editable
resumeContainer === null || resumeContainer === void 0 ? void 0 : resumeContainer.addEventListener("click", function (event) {
    var target = event.target;
    // Only toggle editable mode if the clicked element is part of the resume
    if (target.classList.contains("editable")) {
        target.contentEditable = "true";
        target.focus();
        // When user clicks out of the editable area, save changes
        target.addEventListener("blur", function () {
            target.contentEditable = "false";
            // Additional logic to handle saving the updated content, if needed.
        });
    }
});
// Function to generate the resume dynamically based on form inputs
function generateResume() {
    var name = document.getElementById("name");
    var dob = document.getElementById("dob");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var degree = document.getElementById("degree");
    var institution = document.getElementById("institution");
    var year = document.getElementById("year");
    var company = document.getElementById("company");
    var position = document.getElementById("position");
    var duration = document.getElementById("duration");
    var skills = document.getElementById("skills");
    var resumeHTML = "\n    <h2 class=\"editable\">Personal Information</h2>\n    <p class=\"editable\"><strong>Full Name:</strong> ".concat(name.value, "</p>\n    <p class=\"editable\"><strong>Date of Birth:</strong> ").concat(dob.value, "</p>\n    <p class=\"editable\"><strong>Email:</strong> ").concat(email.value, "</p>\n    <p class=\"editable\"><strong>Phone:</strong> ").concat(phone.value, "</p>\n    <br/>\n    \n    <h2 class=\"editable\">Education</h2>\n    <p class=\"editable\"><strong>Degree:</strong> ").concat(degree.value, "</p>\n    <p class=\"editable\"><strong>Institution:</strong> ").concat(institution.value, "</p>\n    <p class=\"editable\"><strong>Year:</strong> ").concat(year.value, "</p>\n    <br/>\n\n    <h2 class=\"editable\">Work Experience</h2>\n    <p class=\"editable\"><strong>Company:</strong> ").concat(company.value, "</p>\n    <p class=\"editable\"><strong>Position:</strong> ").concat(position.value, "</p>\n    <p class=\"editable\"><strong>Duration:</strong> ").concat(duration.value, "</p>\n    <br/>\n\n    <h2 class=\"editable\">Skills</h2>\n    <p class=\"editable\"><strong>Skills:</strong> ").concat(skills.value, "</p>\n  ");
    // Update the resume container with the generated resume
    resumeContainer.innerHTML = resumeHTML;
}
// Listen for form submission
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    generateResume();
});
