export function displaySuccessMessage(username) {
   const successMsgEl = document.querySelector(".success-msg");
   successMsgEl.innerText = `Hey ${username}, welcome to Watchthis! We will redirect your to login`;
   const errorMsgEl = document.querySelector(".error-msg");
   successMsgEl.classList.replace("d-none", "d-block");
   if (errorMsgEl.classList.contains("d-block")) {
      errorMsgEl.classList.replace("d-block", "d-none");
   }
}
