export default function (string, value) {
   if (typeof value === "object") {
      localStorage.setItem(string, JSON.stringify(value));
   } else {
      localStorage.setItem(string, value);
   }
}
