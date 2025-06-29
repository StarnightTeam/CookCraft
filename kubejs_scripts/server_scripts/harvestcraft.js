// Changes things from Pam"s Harvestcraft
// Scripts made by Shadowmaster and fixed by vizthex
ServerEvents.tags("item", e => {

    // Remove unecessary tags from various items
    e.remove("forge:egg/banana", "pamhc2trees:bananaitem")
    e.remove("forge:egg/avocado", "pamhc2trees:avocadoitem")
    e.remove("forge:cheese/silkentofu", "pamhc2foodextended:silkentofuitem")

})


ServerEvents.recipes(e => {

    // Replace Marshmallows with the ones from Roasted
    e.replaceInput(
      { input: "pamhc2foodcore:marshmellowsitem" },
        "pamhc2foodcore:marshmellowsitem",
        "roasted:marshmallow"
    )

})


// make pamhc2trees:pamstarfruit drop pamhc2trees:pamstarfruit