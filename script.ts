// Get the resume container
const resumeContainer = document.getElementById("resumeContainer");

// Add an event listener to make sections editable
resumeContainer?.addEventListener("click", function (event) {
  const target = event.target as HTMLElement;

  // Only toggle editable mode if the clicked element is part of the resume
  if (target.classList.contains("editable")) {
    target.contentEditable = "true";
    target.focus();

    // When user clicks out of the editable area, save changes
    target.addEventListener("blur", () => {
      target.contentEditable = "false";
      // Additional logic to handle saving the updated content, if needed.
    });
  }
});

// Function to generate the resume dynamically based on form inputs
function generateResume() {
  const name = document.getElementById("name") as HTMLInputElement;
  const dob = document.getElementById("dob") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const phone = document.getElementById("phone") as HTMLInputElement;
  const degree = document.getElementById("degree") as HTMLInputElement;
  const institution = document.getElementById(
    "institution"
  ) as HTMLInputElement;
  const year = document.getElementById("year") as HTMLInputElement;
  const company = document.getElementById("company") as HTMLInputElement;
  const position = document.getElementById("position") as HTMLInputElement;
  const duration = document.getElementById("duration") as HTMLInputElement;
  const skills = document.getElementById("skills") as HTMLInputElement;

  const resumeHTML = `
    <h2 class="editable">Personal Information</h2>
    <p class="editable"><strong>Full Name:</strong> ${name.value}</p>
    <p class="editable"><strong>Date of Birth:</strong> ${dob.value}</p>
    <p class="editable"><strong>Email:</strong> ${email.value}</p>
    <p class="editable"><strong>Phone:</strong> ${phone.value}</p>
    <br/>
    
    <h2 class="editable">Education</h2>
    <p class="editable"><strong>Degree:</strong> ${degree.value}</p>
    <p class="editable"><strong>Institution:</strong> ${institution.value}</p>
    <p class="editable"><strong>Year:</strong> ${year.value}</p>
    <br/>

    <h2 class="editable">Work Experience</h2>
    <p class="editable"><strong>Company:</strong> ${company.value}</p>
    <p class="editable"><strong>Position:</strong> ${position.value}</p>
    <p class="editable"><strong>Duration:</strong> ${duration.value}</p>
    <br/>

    <h2 class="editable">Skills</h2>
    <p class="editable"><strong>Skills:</strong> ${skills.value}</p>
  `;

  // Update the resume container with the generated resume
  resumeContainer!.innerHTML = resumeHTML;
}

// Listen for form submission
document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    generateResume();
  });
