// Adds quality-of-life recipes cuz i'm addicted lol
// Script by vizthex
ServerEvents.recipes(e => {

    // Replace Mangoes with forge:fruits
    e.replaceInput(
      { input: "mango" , not: [{id: "pamhc2foodextended:mangoyogurtitem"}, {id: "pamhc2foodextended:mangosmoothieitem"}, {id: "pamhc2foodextended:mangopieitem"}, {id: "pamhc2foodextended:mangojuiceitem"}, {id: "pamhc2foodextended:mangojellyitem"}, {id: "pamhc2foodextended:mangochutneyitem"}, {id: ""}, {id: ""}] },
        "cozyfoods:mango",
        "#forge:fruits"
    )

})