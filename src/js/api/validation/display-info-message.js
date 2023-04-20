export function displayInfoMessage(message) {
   const infoMsgEl = document.querySelector(".info-msg-el");
   const infoMsgText = document.querySelector(".info-msg-text");
   infoMsgEl.classList.replace("d-none", "d-block");
   infoMsgText.innerText = message;
}
