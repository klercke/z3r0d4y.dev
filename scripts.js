function printAbout() {
    removePrompt();

    document.body.innerHTML = document.body.innerHTML + `
        <br> [konnor.klercke@prototypexenon.com ~]# cat about.txt 
        <br>
        <br> Name: &emsp;&nbsp; "Konnor Otto Klercke"
        <br> Email: &emsp; "klercke@prototypexenon.com"
        <br> About: {
        <br> &emsp;&emsp;&emsp;&emsp; My name is Konnor and I like placeholder text. I'll fill this in later.
        <br> &emsp;&emsp;&emsp;&emsp; }
    `;

    addPrompt();
}

function ls() {
    removePrompt();

    document.body.innerHTML = document.body.innerHTML + `
        <br> [konnor.klercke@prototypexenon.com ~]# ls
        <br> total 1
        <br> -rw-r--r-- 1 konnor.klercke konnor.klercke &emsp; 4096 Mar 5 14:58 <button type="button" value="about.txt" onclick="printAbout();">about.txt</button>
    `;

    addPrompt();
}


function unknownCommand(command) {
    removePrompt();

    document.body.innerHTML = document.body.innerHTML + `
    <br> [konnor.klercke@prototypexenon.com ~]# ` + command + `
    <br> bash: ` + command + `: command not found
    `;
    addPrompt();
}


window.onload = function init() {
    addPrompt();
    ls();
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

function interpretCommand() {
    var command = document.getElementById('command').value;
    console.log(command);

    switch (command){
        case 'ls':
            ls();
            break;
        default:
            unknownCommand(command);
            break;
    }
}