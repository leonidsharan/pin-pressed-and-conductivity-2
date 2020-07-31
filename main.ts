/**
 * Conductivity test
 * 
 *   Any materials
 * 
 *   People chain
 * 
 *   Water jet
 * 
 *   Flame
 * 
 *   .............
 * 
 * See IMAGE in Repo for use
 */
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Heart)
    }
    basic.showIcon(IconNames.No)
})
