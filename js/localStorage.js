const addButton = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    // console.log(inputValue);
    inputField.value = '';
    return inputValue;
}

const setValueToLS = () => {
    document.getElementById('btn-add-name').addEventListener('click',function(){
        const inputValue = addButton('name-field');
        console.log(inputValue);
        localStorage.setItem('name', inputValue);
    })
}

setValueToLS();