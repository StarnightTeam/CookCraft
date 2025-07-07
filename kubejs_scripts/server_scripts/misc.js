// Adds misc recipes that don't fit elsewhere
ServerEvents.recipes(e => {

    // Peat -> Peat
    e.smelting("forestry:peat", "biomeswevegone:peat", 0.5).id("kubejs:peat")

})