const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
});


const tableContainer = document.querySelector('.table-container');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    userImageContainer.classList.toggle('active');
    tableContainer.classList.toggle('active');
});


const userImageContainer = document.querySelector('.user-image-container');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    userImageContainer.classList.toggle('active');
    
});


const nuevoGastoBtn = document.querySelector('.nuevo-gasto-btn');

nuevoGastoBtn.addEventListener('click', () => {
    // Perform action here (e.g., open a form, navigate to a page, etc.)
    console.log('Nuevo Gasto button clicked!'); // Replace with your desired action
});
