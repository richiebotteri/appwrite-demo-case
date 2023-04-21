export default function (string) {
   const loadItem = localStorage.getItem(string);
   try {
      const objectItem = JSON.parse(loadItem);
      return objectItem;
   } catch (e) {
      return loadItem;
   }
}
