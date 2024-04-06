let bgColor = undefined
window.addEventListener('DOMContentLoaded', function() {

    this.document.querySelector('#btn').addEventListener('click', function() {
        onClickMeClicked()
    })
    
})

function onClickMeClicked() {
    updateBg()
}

// Model

/**
 * Gets a color and updates the UI Element.
 */
function updateBg() {
    bgColor = getBgColor()
    showBgColor()
}

/**
 *  Selects a random color from a standard list.
 * @returns the color.
 */
function getBgColor() {
    const colors = ['red', 'white', 'black', 'green', 'blue', 'yellow']
    return colors[Math.floor(Math.random() * colors.length)] // θα φερει απο το 0 εως length-1
}


/**
 * Fills the values of the corresponding UI elements.
 */
function showBgColor() {
    document.querySelector('#clr-hex').innerHTML = bgColor
    document.body.style.backgroundColor = bgColor
}