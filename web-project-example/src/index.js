// Main JavaScript entry point for the web application
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.innerHTML = '<h1>Welcome to the Web Project Example!</h1>';
    
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    app.appendChild(button);
    
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});