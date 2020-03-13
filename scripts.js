function printAbout() {
    document.body.innerHTML = document.body.innerHTML + `
        <br> [konnor.klercke@prototypexenon.com ~]# cat about.txt 
        <br>
        <br> Name: &emsp;&nbsp; "Konnor Otto Klercke"
        <br> Email: &emsp; "klercke@prototypexenon.com"
        <br> About: {
        <br> &emsp;&emsp;&emsp;&emsp; My name is Konnor and I like placeholder text. I'll fill this in later.
        <br> &emsp;&emsp;&emsp;&emsp; }
    `;
}

function ls() {
    document.body.innerHTML = document.body.innerHTML + `
        <br> [konnor.klercke@prototypexenon.com ~]# ls
        <br> total 1
        <br> -rw-r--r-- 1 konnor.klercke konnor.klercke &emsp; 4096 Mar 5 14:58 <button type="button" value="about.txt" onclick="interpretCommand('cat about.txt');">about.txt</button>
    `;
}

function cat(file) {
    switch (file) {
        case "about.txt":
            printAbout();
            break;
        default:
            document.body.innerHTML = document.body.innerHTML + `
            <br> [konnor.klercke@prototypexenon.com ~]# cat ` + file + `
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
        <br> [konnor.klercke@prototypexenon.com ~]# help
        <br> ProtOS smash v1.1.1-release (silly fake website terminal)
        <br> These shell commands are defined internally. Type 'help' to see this list.
        <br>
        <br> ls - lists all files and directories in the current working directory.
        <br> help - prints this list.
        <br> clear - clears the screen.
        <br> cat [file] - prints the contents of 'file'.
    `;
}

window.onload = function init() {
    ls();
    addPrompt();
}

function removePrompt() {
    var blink = document.getElementsByClassName('blink');
    for (var i = 0; i < blink.length; i++) {
        blink[i].remove();
    }
}

function addPrompt() {
    document.body.innerHTML = document.body.innerHTML + `
        <div class="blink">[konnor.klercke@prototypexenon.com ~]# <form> <input autocomplete="off" size="1" type="text" id="command"/> <input type="submit" style="display: none;" onclick="interpretCommand()" /> </form> </div>
    `;

    var input = document.getElementsByTagName('input')[0];

    input.addEventListener("keydown", function(){
        this.size = this.value.length + 1;
    });

    input.select();
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
            <br> [konnor.klercke@prototypexenon.com ~]# ` + rawInput + `
            <br> smash: ` + command[0] + `: command not found
            `;
            break;
    }

    addPrompt();
}