// Adds custom items to the pack
// Script by vizthex
StartupEvents.registry("item", e => {

    // Divine foods
    e.create("ambrosia")
    e.create("nectar").displayName("Nectar of the Gods")
    e.create("ichor")

})