const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');
const errorMessage = document.querySelector('#error-message');

const booksOfMormon = ['1 Nephi', 
                        '2 Nephi', 
                        'Jacob', 
                        'Enos', 
                        'Jarom', 
                        'Omni', 
                        'Mormon', 
                        'Mosiah', 
                        'Alma', 
                        'Helaman', 
                        '3 Nephi', 
                        '4 Nephi', 
                        'Mormon', 
                        'Ether', 
                        'Moroni'];

function getChapterList() {
    const chapters = localStorage.getItem('chapters');
    return chapters ? JSON.parse(chapters) : [];
}

function setChapterList(chaptersArray) {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function displayList(item) {
    const liElement = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    liElement.textContent = item;

    liElement.appendChild(deleteButton);

    listElement.appendChild(liElement);

    deleteButton.addEventListener('click', () => {
        deleteChapter(item);
        listElement.removeChild(liElement);
    });
}

function deleteChapter(chapter) {
    const chapterName = chapter.slice(0, -1);
    chaptersArray = chaptersArray.filter(item => item !== chapterName);
    setChapterList(chaptersArray);
}

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

buttonElement.addEventListener('click', () => {
    const inputValue = inputElement.value;
    const regex = /^([a-zA-Z0-9]+\s[a-zA-Z0-9]*\s*\d+)$/; 
    const bookName = inputValue.split(' ').slice(0, inputValue.split(' ').length - 1).join(' ');

    if (inputValue !== '' && regex.test(inputValue) && booksOfMormon.includes(bookName)) {
        displayList(inputValue);
        chaptersArray.push(inputValue);
        setChapterList(chaptersArray);
        inputElement.value = '';
        inputElement.focus();
    } else {
        errorMessage.textContent = 'Please enter a Book and Chapter of the Book of Mormon in the correct format (e.g., "1 Nephi 5" o "Alma 5").'; 
        inputElement.value = ''; 
        inputElement.focus();
    }
});