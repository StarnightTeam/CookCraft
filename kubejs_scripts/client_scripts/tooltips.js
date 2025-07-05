// Adds tooltips to various items
// Script by vizthex
ItemEvents.tooltip(e=>{

    //// Currency values
    /// 9 coins per pile
    /// 1 pile + 1 coin = next tier

	// Coins
    e.add("coinsje:copper_coin", Text.gold("$1"))
    e.add("coinsje:iron_coin", Text.gold("$10"))
    e.add("coinsje:gold_coin", Text.gold("$100"))
    e.add("coinsje:diamond_coin", Text.gold("$1,000"))
    e.add("coinsje:netherite_coin", Text.gold("$10,000"))

    // Piles
    e.add("coinsje:copper_coin_pile", Text.gold("$9"))
    e.add("coinsje:iron_coin_pile", Text.gold("$90"))
    e.add("coinsje:gold_coin_pile", Text.gold("$900"))
    e.add("coinsje:diamond_coin_pile", Text.gold("$9,000"))
    e.add("coinsje:netherite_coin_pile", Text.gold("$90,000"))

})