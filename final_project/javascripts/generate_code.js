function generateRandomCode() {
    let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 4;
    for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

window.onload = function() {
    const code = generateRandomCode();
    document.getElementById('code_num').innerHTML = `${code}`;
};