function printAbout() {
    document.body.innerHTML = document.body.innerHTML + `
        <br> [klercke@prototypexenon.com ~]# cat about.txt 
        <br>
        <br> Name: &emsp;&nbsp; "Konnor Otto Klercke"
        <br> Email: &emsp; "klercke@prototypexenon.com"
        <br> About: {
        <br> 	My name is Konnor Klercke and this is my website.
        <br>    I'm a FOSS (free and open source software) enthusiast, and an infosec / privacy hobbyist.
        <br>    I spend a lot of my free time developing small scripts or programs for personal use, researching security concepts, and developing my personal WIP Linux distro, ProtOS.
        <br>    I use Arch Linux full time on most of my machines, with the exception of my desktop, which dual boots Arch Linux and Windows 10 for gaming.
        <br>    I love learning about retro tech as well as talking to people with unique experiences, so feel free to shoot me an email if you have some interesting tech stories to share.
        <br>    Outside of the tech world, I love to go camping and hiking, a passion which I got through my experience earning my Eagle Scout award.
        <br>    Cooking is another hobby of mine, especially customizing recipes to change things up.
        <br>    I've also lived in quite a few places in my relatively short time on this Earth, including Baltimore, Rochester, Stockholm, Cincinnati, Kentucky, Louisville, and Nashville.
        <br>    One of my goals in life is to visit every National Park in the United States.
        <br> }
    `;
}

function ls() {
    document.body.innerHTML = document.body.innerHTML + `[klercke@prototypexenon.com ~]#  ls
total 1
-rw-r--r-- 1 klercke klercke &emsp; 4096 Mar 5 14:58 <button type="button" value="about.txt" onclick="interpretCommand('cat about.txt');">about.txt</button>
`;
}

function cat(file) {
    switch (file) {
        case "about.txt":
            printAbout();
            break;
        default:
            document.body.innerHTML = document.body.innerHTML + `
            <br> [klercke@prototypexenon.com ~]#  cat ` + file + `
            <br> cat: ` + file + `: No such file or directory
            `;
            break;
    }    
}

function clear() {
    document.body.innerHTML = "";
}

function help() {
    document.body.innerHTML = document.body.innerHTML + `
        [klercke@prototypexenon.com ~]#  help
        ProtOS smash v2.1.0-release (silly fake website terminal)
        These shell commands are defined internally. Type 'help' to see this list.
        
        ls - lists all files and directories in the current working directory.
        help - prints this list.
        clear - clears the screen.
        cat [file] - prints the contents of 'file'.
    `;
}

window.onload = function init() {
    ls();
	addPrompt();

	let inputBuffer = [];
	
	document.addEventListener('keydown', event => {
		const validChars = "ABCDEFGHIJKLMNOPQRSTUVWQXYZabcdefghijklmnopqrstuvwxyz1234567890.,<>/!@#$%^&*()";
		const key = event.key;

		console.log(key);

		if (key == "Enter") {
			interpretCommand(inputBuffer.join(''));
			inputBuffer = [];
		}
		else if (key == "Backspace") {
			inputBuffer = inputBuffer.slice(0, inputBuffer.length);
			document.getElementById('userInput').innerHTML = document.getElementById('userInput').innerHTML.slice(0, -1);
		}
		else if (validChars.indexOf(key) === -1) {
			return;
		}
		else {
			inputBuffer.push(key);
			document.getElementById('userInput').innerHTML += key;

			//console.log(inputBuffer);
		}
	});

}

function removePrompt() {
    var prompt = document.getElementById('prompt');
    prompt.remove();
}

function addPrompt() {
    document.body.innerHTML = document.body.innerHTML + `<span id='prompt'>[klercke@prototypexenon.com ~]# <span id='userInput'></span></span>`;
	
	document.getElementById('userInput').innerHTML = "&nbsp;";
}

function interpretCommand(input) {
    if (!input) {
        var command = document.getElementById('command').value;
        var rawInput = command;
        command = command.split(" ");
    }
    else {
    	console.log(input);
        var command = input.split(" ");
    }
    

    removePrompt();
    switch (command[0]){
        case 'ls':
            ls();
            break;
        case 'cat':
            cat(command[1]);
            break;
        case 'clear':
            clear();
            break;
        case 'help':
            help();
            break;
        default:
            document.body.innerHTML = document.body.innerHTML + `
            <br> [klercke@prototypexenon.com ~]# ` + rawInput + `
            <br> smash: ` + command[0] + `: command not found
            `;
            break;
    }

    addPrompt();
}
