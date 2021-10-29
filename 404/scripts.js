var quotes =[ 
	"// Oopsie-poopsie, someone made a fucky-wucky",
	"// Come back with a warrant",
	"// Well, this is awkward",
	"// It's probably your fault",
	"// It's probably my fault",
	"// Break the internet, Konnor Klercke",
	"// I stole this idea from Minecraft",
	"// Send me your funny quote ideas!",
	"// If you're reading this, JavaScript is working",
	"// 404: Quote not found",
	"// I spent more time on this error page than the rest of the website",
	"// Probably not a DNS issue",
	"// Did you try saying please?",
	"// Have you tried not getting an error?",
	"// Why'd you do that?",
	"// Whoever gave you this link is a stinkin' liar!",
	"// So, you come here often?",
	"// Warning: this website can expose you to chemicals which are known to the state of California to cause cancer, birth defects, or other reproductive harm"
]

window.onload = function() {
	console.log("Hey there, this is broken!");

	var randomNumber = Math.floor(Math.random() * quotes.length);
	document.getElementById('quote').innerHTML = " " + quotes[randomNumber];
}
