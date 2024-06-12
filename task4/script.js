const Prompt = document.querySelector("#Prompt");

Prompt.addEventListener('click', (event) => {
    event.preventDefault();
    const newText =  event.textContent = prompt('Введите текст в окно ввода, это изменит текст ссылки', '');
    if (newText){
        Prompt.textContent = newText;
    }else{
        Prompt.textContent = 'Измените текст ссылки';
    }
});