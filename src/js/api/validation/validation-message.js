export class validationMessage {
   /**
    * Create a success or error validationMessage. It displays a given message on a given element.
    * @class
    * @param {string} message - The message you want to display
    * @param {string} attribute - The ID, Class, Dataset to your element container
    */
   constructor(message, elAttribute) {
      this.message = message;
      this.elAttribute = elAttribute;
   }

   displaySuccess() {
      const validationEl = document.querySelector(`${this.elAttribute}`);
      validationEl.innerText = this.message;
      if (validationEl.classList.contains("text-danger")) {
         validationEl.classList.replace("text-danger", "text-success");
      } else {
         validationEl.classList.add("text-success");
      }
      validationEl.classList.replace("d-none", "d-block");
   }

   displayError() {
      const validationEl = document.querySelector(`${this.elAttribute}`);
      validationEl.innerText = this.message;
      if (validationEl.classList.contains("text-success")) {
         validationEl.classList.replace("text-success", "text-danger");
      } else {
         validationEl.classList.add("text-danger");
      }
      validationEl.classList.replace("d-none", "d-block");
   }

   displayInfo() {
      const infoMsgEl = document.querySelector(`${this.elAttribute}`);
      const infoMsgText = document.querySelector(".info-msg-text");
      infoMsgEl.classList.replace("d-none", "d-block");
      infoMsgText.innerText = this.message;
   }
}
