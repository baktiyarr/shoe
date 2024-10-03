document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Simple validation
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Both fields are required!';
        alert('Both fields are required!');
        return;
    }
    
   
});
