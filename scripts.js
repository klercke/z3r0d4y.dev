function addAboutContent() {
    var blink = document.getElementsByClassName('blink');
    for (var i = 0; i < blink.length; i++) {
        blink[i].remove();
    }



    document.body.innerHTML = document.body.innerHTML + `
        <br> [konnor.klercke@prototypexenon.com ~]# cat about.txt 
        <br>
        <br> Name: &emsp;&nbsp; "Konnor Otto Klercke"
        <br> Email: &emsp; "klercke@prototypexenon.com"
        <br> About: {
        <br> &emsp;&emsp;&emsp;&emsp; My name is Konnor and I like placeholder text. I'll fill this in later.
        <br> &emsp;&emsp;&emsp;&emsp; }
        <div class="blink">[konnor.klercke@prototypexenon.com ~]# </div>`;
}