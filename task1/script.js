// Получаем элементы div, input и button
const div = document.getElementById("myDiv");
const input = document.getElementById("myInput");
const submitButton = document.getElementById("submitButton");

console.log('Привет, мир!');
Page = function(message) {
   // Очищаем предыдущее содержимое div
   div.innerHTML = "";

   // Создаем новый элемент p для каждого сообщения
   const p = document.createElement("p");
   p.textContent = message;

   // Добавляем элемент p в div
   div.appendChild(p);
   console.log(message);
};


submitButton.addEventListener("click", () => {

  Page(input.value); 

});
