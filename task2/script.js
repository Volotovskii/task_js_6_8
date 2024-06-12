const consolelog = document.querySelector("#consoleLog");
const Prompt = document.querySelector("#Prompt");
const Alert = document.querySelector("#alert");

consolelog.addEventListener('click',() => {
    alert('Пример использования команды console.log');
    console.log('Пример использования команды console.log');
});

Prompt.addEventListener('click',() => {
    const age = prompt('Пример использования команды prompt', 'Пример использования команды prompt');
});

Alert.addEventListener('click',()=>{
    alert('Пример использования команды alert');
})