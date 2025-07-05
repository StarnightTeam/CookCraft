// Tweaks Coins JE's recipes
// Script by vizthex
ServerEvents.recipes(e => {

    // 9 coins per pile
    // 1 pile + 1 coin = next tier

    // Remove default recipes
    e.remove({id: "coinsje:crafting/downgrade_iron_to_copper"})
    e.remove({id: "coinsje:crafting/downgrade_gold_to_iron"})
    e.remove({id: "coinsje:crafting/downgrade_diamond_to_gold"})
    e.remove({id: "coinsje:crafting/downgrade_netherite_to_diamond"})

    // Smelting and Blasting recipes
    e.remove({type: "smelting", output: "coinsje:copper_coin"})
    e.remove({type: "smelting", output: "coinsje:iron_coin"})
    e.remove({type: "smelting", output: "coinsje:gold_coin"})
    e.remove({type: "smelting", output: "coinsje:diamond_coin"})
    e.remove({type: "smelting", output: "coinsje:netherite_coin"})

    e.remove({type: "blasting", output: "coinsje:copper_coin"})
    e.remove({type: "blasting", output: "coinsje:iron_coin"})
    e.remove({type: "blasting", output: "coinsje:gold_coin"})
    e.remove({type: "blasting", output: "coinsje:diamond_coin"})
    e.remove({type: "blasting", output: "coinsje:netherite_coin"})

    // Upgrade coins to the next tier
    e.shapeless("coinsje:iron_coin", ["coinsje:copper_coin_pile", "coinsje:copper_coin"]).id("kubejs:copper_to_iron")
    e.shapeless("coinsje:gold_coin", ["coinsje:iron_coin_pile", "coinsje:iron_coin"]).id("kubejs:iron_to_gold")
    e.shapeless("coinsje:diamond_coin", ["coinsje:gold_coin_pile", "coinsje:gold_coin"]).id("kubejs:gold_to_diamond")
    e.shapeless("coinsje:netherite_coin", ["coinsje:diamond_coin_pile", "coinsje:diamond_coin"]).id("kubejs:diamond_to_netherite")

})