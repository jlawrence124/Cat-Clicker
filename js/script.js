function loadData() {
    var $clickCount = $('#clickCount');
    var $catImage = $('.cat-image');
    var $cat = $('#cat');
    var $kitty = $('#kitty');
    var $counter = $('.counter');

function Cat() {
	var count = 0;
	this.increase = function() {
		count += 1;
		console.log(count);
	}
	this.count = count;
}


var darwin = new Cat;
var edgar = new Cat;
var girlcat = new Cat;
var jason = new Cat;
var scrappy = new Cat;

console.log(cat.count);
console.log(kitty.count);

$cat.click(cat.increase);
$kitty.click(kitty.increase);



};

loadData();
