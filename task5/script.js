      const textInput = document.getElementById('inputText');
      const duplicateField = document.getElementById('duplicateField');
      const submitButton = document.getElementById('submitButton');


      if (submitButton && textInput) { 
        //input DOM
        textInput.addEventListener('input',() =>{
            duplicateField.textContent = textInput.value;
          });

        submitButton.addEventListener('click', (e) => {
          e.preventDefault();
          // console + del value
          if (textInput) { 
            if (inputText.value.length){
                console.log(textInput.value);
                textInput.value = '';
                duplicateField.textContent = '';
            }else{
                alert(duplicateField.textContent ='Введите текст в поле input')
            }
        
          }
        });
      }