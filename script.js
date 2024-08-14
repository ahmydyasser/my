const output = document.getElementById('output');
const inputField = document.getElementById('input');

function handleInput() {
    const input = inputField.value.trim();
    
    // Ignore empty input
    if (input === '') return;

    // Process the command
    let response = '';

    switch (input.toLowerCase()) {
        case 'help':
            response = `Available commands:\n
- help: Show this help message\n
- writeups: Open writeups section\n
- notes: Open notes section\n
- media: Open media section\n
- links: Open links section\n
- about: Open about section\n
- contact: Open contact section\n
- youtube: Open YouTube\n
- date: Show current date and time\n
- version: Show script version\n
- cls: Clear the screen\n`;
            break;
        case 'writeups':
            response = `Opening Writeups... (link to writeups section)\n`;
            break;
        case 'notes':
            response = `Opening Notes... (link to notes section)\n`;
            break;
        case 'media':
            response = `Opening Media... (link to media section)\n`;
            break;
        case 'links':
            response = `Opening Links... (link to links section)\n`;
            break;
        case 'about':
            response = `Opening About... (link to about section)\n`;
            break;
        case 'contact':
            response = `Opening Contact... (link to contact section)\n`;
            break;
        case 'youtube':
            response = `Opening YouTube...\n`;
            window.open("https://www.youtube.com", '_blank');
            break;
        case 'date':
            response = `Current date and time: ${new Date().toLocaleString()}\n`;
            break;
        case 'version':
            response = `Script version: 1.0.0\n`;
            break;

        case 'hello':
            response = `hello Guest\n`;
            break;



        case 'cls':
        case 'clear':
            output.innerHTML = '<div class="terminal-line">[Guest@ahmydyasser]~$ </div>'; // Clear the output
            inputField.value = ''; // Clear the input field
            return; // Exit early
        default:
            response = `Unknown command: ${input}\nType "help" to see available commands.\n`;
    }

    // Append the command and response to the terminal
    output.innerHTML += `<div class="terminal-line">[Guest@ahmydyasser]~$ ${input}</div>`;
    output.innerHTML += `<div class="terminal-line">${response}</div>`;

    // Clear the input field and focus on it
    inputField.value = '';
    inputField.focus();

    // Scroll to the bottom
    output.scrollTop = output.scrollHeight;
}

// Event listener for handling input
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key action
        handleInput();
    }
});

// Focus on the input field on page load
window.addEventListener('load', function() {
    inputField.focus();
});
