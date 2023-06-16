import axios from 'axios';

function generate() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    axios.get('https://icanhazdadjoke.com', config).then(
        res => document.getElementById('joke').innerHTML = res.data.joke
    );
}

function buildWarningMessage(message) {
    return "Warning: " + message;
}

function buildErrorMessage(message) {
    return "Error: " + message;
}

function buildInfoMessage(message) {
    return "Info: " + message;
}

export {
    buildInfoMessage, 
    buildErrorMessage, 
    buildWarningMessage, 
    generate
};