var input = document.getElementById('input');
var button = document.querySelectorAll('button');


var string = ""
var arr = Array.from(button);

arr.forEach(button => {
    button.addEventListener('click', function(e) {
        if (e.target.innerHTML == "=") {
            string = eval(string)
            input.value = string
        } else if (e.target.innerHTML == "AC") {
            string = ""
            input.value = string
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - input.value)
            input.value = string
        } else {
            string += e.target.innerHTML;
            input.value = string
        }
    })
})
