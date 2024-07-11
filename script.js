function generatePassword() {
    const username = document.getElementById('username').value;
    const length = document.getElementById('length').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$*_";
    let password = username;

    // Add random characters to the password until it reaches the desired length
    for (let i = username.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // Shuffle the password to make it more secure
    password = shuffleString(password);

    document.getElementById('password').value = password;
}

function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
}
