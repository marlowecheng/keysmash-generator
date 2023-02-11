
// Button Event
var btn = document.querySelector('.btn');
btn.addEventListener('click', keysmashTime)

// Generator function 
var field = document.querySelector('.keysmash-output');

function keysmashTime() {
    document.querySelector('.copy-text').classList.remove('hidden');
    document.querySelector('.copied-text').classList.add('hidden');
   
    var output = '';
    var keysList = ['a','s','d','f','g','h','j','k','l'];

    var smashLength = Math.floor(Math.random() * (25 - 8)) + 8;

    for (let i = 0; i < smashLength; i++) {

        // this didn't work for some reason
        // var randomKeys = Math.floor(Math.random() * 10);
        // output += keysList[randomKeys];
        // console.log(output);

        output += keysList[Math.floor(Math.random() * (keysList.length - 1))];
    };

    field.value = output;
};

// Click to Copy Function
var copyTime = document.querySelector('.output-container');
copyTime.addEventListener('click', copyKeysmash);

function copyKeysmash() {
    document.querySelector('.copy-text').classList.add('hidden');
    field.select();
    navigator.clipboard.writeText(field.value);
    document.querySelector('.copied-text').classList.remove('hidden');
}

// Add the current year in the footer copyright
function initialization() {
    const date = new Date();
    var year = date.getFullYear();
    document.querySelector('.year').innerHTML = year;
};