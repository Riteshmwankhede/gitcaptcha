function handleSubmit(event) {
  const form = document.getElementById('leadForm');
  const thankYou = document.getElementById('thankYouMsg');

  // Optionally validate captcha
  const response = grecaptcha.getResponse();
  if (response.length === 0) {
    alert("Please complete the CAPTCHA.");
    return false;
  }

  // Delay redirect and show thank you
  setTimeout(() => {
    form.classList.add("hidden");
    thankYou.classList.remove("hidden");
  }, 500);

  return true; // allow form to submit
}
