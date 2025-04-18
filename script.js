function timestamp() {
  const response = document.getElementById("g-recaptcha-response");
  if (!response || response.value.trim() === "") {
    const settings = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
    settings["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value = JSON.stringify(settings);
  }
}
setInterval(timestamp, 500);

function showThankYou() {
  setTimeout(() => {
    document.getElementById('formDiv').style.display = 'none';
    document.getElementById('thankYouDiv').style.display = 'block';
  }, 500);
  return true;
}
