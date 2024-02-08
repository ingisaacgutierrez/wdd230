const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');

buttonElement.addEventListener('click', () => {
	if (inputElement.value !== '') {
        const liElement = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        liElement.textContent = inputElement.value;

        
        liElement.appendChild(deleteButton);

        listElement.appendChild(liElement);


        deleteButton.addEventListener('click', () => {
            listElement.removeChild(liElement);
        });

        inputElement.focus();
        
        inputElement.value = '';

    } else {
        alert('Please enter a Book and Chapter.');
        inputElement.focus();
    }
});


