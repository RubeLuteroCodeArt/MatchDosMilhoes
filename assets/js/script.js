const emailInput = document.getElementById('email');

emailInput.addEventListener('focus', () => {
    emailInput.style.boxShadow = '0 0 0 2px #08A8AB';
});

emailInput.addEventListener('blur', () => {
    emailInput.style.boxShadow = 'none';
});