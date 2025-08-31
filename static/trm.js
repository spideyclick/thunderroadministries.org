function callback() {
    if (this.response !== undefined) {
        document.getElementById(findIdsInClass('outputDiv')[0]).innerHTML = this.response;
        removeClass(findIdsInClass('outputDiv')[0], 'outputDiv')
    }
};
function randomNumber(min, max, enableNegative) {
    thisNumber = Math.floor(Math.random() * max) + min;
    if (enableNegative == true) {
        if (Math.floor(Math.random() * 2) + 1 == 2) {
            thisNumber = thisNumber * -1
        }
    }
    return thisNumber
};
function degToRad(degrees) {
    return degrees * Math.PI / 180;
}
function hexToDec(myStr) {
    output = []
    output.push((parseInt(myStr.substring(0, 2), 16) / 255).toFixed(3));
    output.push((parseInt(myStr.substring(2, 4), 16) / 255).toFixed(3));
    output.push((parseInt(myStr.substring(4, 6), 16) / 255).toFixed(3));
    // console.log(output)
    return output;
}
// window.addEventListener("scroll", function () {
//     document.querySelector("#hiddenNav").style.top = window.pageYOffset >= 400 ? "0" : "-40px";
// });