export default function (string) {
   const loadItem = localStorage.getItem(string);
   return loadItem;
}
