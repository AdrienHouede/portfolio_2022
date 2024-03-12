
document.addEventListener('DOMContentLoaded', function () {

	/* ---------------- ID PAGES ------ */

	let about = document.getElementById("about");
	let jumper = document.getElementById("jumper");
	let sweet = document.getElementById("sweet");

	/* ---------------- BOUTONS - Footer ------ */

	let img_me = document.getElementById("img_me");
	let img_uj = document.getElementById("img_uj");
	let img_sd = document.getElementById("img_sd");

	img_me.addEventListener("click", switch_page(about));
	img_uj.addEventListener("click", switch_page(jumper));
	img_sd.addEventListener("click", switch_page(sweet));

	function switch_page(page){
		
	}
}); // document.addEventListener('DOMContentLoaded', function() {
