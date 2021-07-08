function catAbout() {
    document.body.innerHTML = document.body.innerHTML +
        `[klercke@prototypexenon.com ~]# cat about.json\r\n` +
        `\r\n` +
        `Name: &emsp;&nbsp; "Konnor Otto Klercke"\r\n` +
        `Email: &emsp; "klercke@prototypexenon.com"\r\n` +
        `About: {\r\n` +
        `   My name is Konnor Klercke and this is my website.\r\n` +
        `   I'm a FOSS (free and open source software) enthusiast, and an infosec / privacy hobbyist.\r\n` +
        `   I spend a lot of my free time developing small scripts or programs for personal use, researching security concepts, and developing my personal WIP Linux distro, ProtOS.\r\n` +
        `   I use Arch Linux full time on most of my machines, with the exception of my desktop, which dual boots Arch Linux and Windows 10 for gaming.\r\n` +
        `   I love learning about retro tech as well as talking to people with unique experiences, so feel free to shoot me an email if you have some interesting tech stories to share.\r\n` +
        `   Outside of the tech world, I love to go camping and hiking, a passion which I got through my experience earning my Eagle Scout award.\r\n` +
        `   Cooking is another hobby of mine, especially customizing recipes to change things up.\r\n` +
        `   I've also lived in quite a few places in my relatively short time on this Earth, including Baltimore, Rochester, Stockholm, Cincinnati, Kentucky, Louisville, and Nashville.\r\n` +
        `   One of my goals in life is to visit every National Park in the United States. ` +
        `}\r\n`;

}

function ls() {
    document.body.innerHTML += `[klercke@prototypexenon.com ~]# ls\r\n` +
        `total 1\r\n` + 
        `-rw-r--r-- 1 klercke klercke &emsp; 4096 Mar 5 14:58 <button type="button" value="about.json" onclick="interpretCommand('cat about.json');">about.json</button>\r\n`;
}

function cat(file) {
    switch (file) {
        case "about.json":
            catAbout();
            break;
        default:
            document.body.innerHTML +=
            `[klercke@prototypexenon.com ~]#  cat ` + file + `\r\n` +
            `cat: ` + file + `: No such file or directory\r\n`;
            break;
    }    
}

function clear() {
    document.body.innerHTML = "";
}

function help() {
    document.body.innerHTML += `[klercke@prototypexenon.com ~]# help\r\n` + 
        `ProtOS smash v2.1.0-release (silly fake website terminal)\r\n` +
        `These shell commands are defined internally. Type 'help' to see this list.\r\n` +
        `\r\n`+
        `ls - lists all files and directories in the current working directory.\r\n` +
        `help - prints this list.\r\n` +
        `clear - clears the screen.\r\n` +
        `cat [file] - prints the contents of 'file'.\r\n`;
}

window.onload = function init() {
    ls();
	addPrompt();

	var inputBuffer = [];
	
    var bufferIdx = 0;

	document.addEventListener('keydown', event => {
		const validChars = "ABCDEFGHIJKLMNOPQRSTUVWQXYZabcdefghijklmnopqrstuvwxyz1234567890.,<>/!@#$%^&*() ";
		const key = event.key;

		if (key == "Enter") {
			interpretCommand(inputBuffer.join(''));
			inputBuffer = [];
            bufferIdx = 0;
		}
        else if (key == "ArrowRight") {
            if (bufferIdx < inputBuffer.length) {
                bufferIdx++;
                document.getElementById('userInput').innerText = 
                    inputBuffer.join("").substr(0, bufferIdx);
                document.getElementById('userInput2').innerText = 
                    inputBuffer.join("").substr(bufferIdx + 1);
                if (bufferIdx <= inputBuffer.length - 1)
                    document.getElementById('cursorCharacter').innerText = 
                        inputBuffer[bufferIdx];
                else
                    document.getElementById('cursorCharacter').innerText = "";
            }
        }
        else if (key == "ArrowLeft") {
            if (bufferIdx > 0) { 
                bufferIdx--;
                document.getElementById('userInput').innerText = 
                    inputBuffer.join("").substr(0, bufferIdx);
                document.getElementById('userInput2').innerText = 
                    inputBuffer.join("").substr(bufferIdx + 1);    
                if (bufferIdx <= inputBuffer.length - 1)
                    document.getElementById('cursorCharacter').innerText = 
                        inputBuffer[bufferIdx];
                else
                    document.getElementById('cursorCharacter').innerText = ""    ;  
            }   
        }
		else if (key == "Backspace") {
            if (bufferIdx > 0) {
                bufferIdx--;
                inputBuffer.splice(bufferIdx, 1);
                document.getElementById('userInput').innerText = 
                    inputBuffer.join("").substr(0, bufferIdx);
                document.getElementById('userInput2').innerText = 
                    inputBuffer.join("").substr(bufferIdx + 1);    
                if (bufferIdx <= inputBuffer.length - 1)
                    document.getElementById('cursorCharacter').innerText = 
                        inputBuffer[bufferIdx];
                else
                    document.getElementById('cursorCharacter').innerText = "";
            }
        }

		else if (validChars.indexOf(key) === -1) {
            console.log("Unknown key: " + key);
			return;
		}
		else {
            inputBuffer.splice(bufferIdx, 0, key)
            bufferIdx++;
			document.getElementById('userInput').innerText = 
                inputBuffer.join("").substr(0, bufferIdx);
            document.getElementById('userInput2').innerText = 
                inputBuffer.join("").substr(bufferIdx + 1);    
            if (bufferIdx <= inputBuffer.length - 1)
                document.getElementById('cursorCharacter').innerText = 
                    inputBuffer[bufferIdx];
            else
                document.getElementById('cursorCharacter').innerText = "";
		}
	});
}

function removePrompt() {
    var prompt = document.getElementById('prompt');
    prompt.remove();
}

function addPrompt() {
    document.body.innerHTML += `<span id='prompt'>[klercke@prototypexenon.com ~]# <span id='userInput'></span><span id='cursorCharacter'></span><span id='userInput2'></span></span>`;
	
	document.getElementById('userInput').innerHTML = "";
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
            document.body.innerHTML = document.body.innerHTML + 
                `[klercke@prototypexenon.com ~]# ` + command + `\r\n` +
                `smash: ` + command[0] + `: command not found\r\n`;
            break;
    }

    addPrompt();
}
