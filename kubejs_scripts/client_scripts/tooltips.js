// Adds tooltips to various items
// Script by vizthex
ItemEvents.tooltip(e=>{

    // Coin values
    e.add("coinsje:copper_coin", Text.gold("$1"))
    e.add("coinsje:iron_coin", Text.gold("$5"))
    e.add("coinsje:gold_coin", Text.gold("$10"))
    e.add("coinsje:diamond_coin", Text.gold("$50"))
    e.add("coinsje:netherite_coin", Text.gold("$100"))

})