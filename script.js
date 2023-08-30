var typed = new Typed(".multiple-text",{
    strings:["Data Analyst","Data Scientist","Frontend Developer","Problem Solver","SDE","Data Storyteller","Strategist"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop : true 
});

//googel sheets
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form form");
    
    form.addEventListener("submit", async function(e) {
      e.preventDefault();
  
      const name = form.querySelector("#name").value;
      const email = form.querySelector("#email").value;
      const message = form.querySelector("#message").value;
  
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const targetUrl = "https://script.google.com/macros/s/AKfycbzmPjlaFFtCDc1PcFfmVrYDi9I6r-whHKECvilLnlykIvwm0O7tVGPq6pSG21DDlXN7/exec";
      const url = proxyUrl + targetUrl;
      
      const formData = new FormData();
      formData.append("Name", name);
      formData.append("Email", email);
      formData.append("Message", message);
  
      try {
        const response = await fetch(url, {
          method: "POST",
          body: formData
        });
        
        if (response.ok) {
          // Form submitted successfully, you can show a success message or perform other actions.
          console.log("Form submitted successfully.");
        } else {
          // Handle errors if the form submission fails.
          console.error("Form submission failed.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    });
});
