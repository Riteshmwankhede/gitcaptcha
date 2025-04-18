function timestamp() {
  const response = document.getElementById("g-recaptcha-response");
  if (!response || response.value.trim() === "") {
    const settings = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
    settings["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value = JSON.stringify(settings);
  }
}
setInterval(timestamp, 500);

function validateForm() {
  const lastName = document.querySelector("input[name='last_name']").value.trim();
  const company = document.querySelector("input[name='company']").value.trim();
  const status = document.querySelector("select[name='status']").value;

  if (!lastName || !company || !status) {
    alert("Please fill in all required fields: Last Name, Company, and Lead Status.");
    return false;
  }

  setTimeout(() => {
    document.getElementById('formDiv').style.display = 'none';
    document.getElementById('thankYouDiv').style.display = 'block';
  }, 500);

  return true;
}
