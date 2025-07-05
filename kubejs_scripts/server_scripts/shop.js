// Hopefully adds sellable items to AdminShop
// I might downgrade cuz I didn't really mind the csv format. It's defintely less annoying than this lol.
ServerEvents.recipes(e => {

//// This complicated code chunk function abomination whatever the fucking hell it's called was taken from the new docs for the mod: https://github.com/AmmoniumX/AdminShop/wiki/Adding-Buy-or-Sell-Recipes-(KubeJS)

let sellCounter = 0
function sellItem(item, count, price, permit) {
    let recipe = {
        "type": "adminshop:item_selling",
        "price": price,
        "input": {
            "item": {
                "item": item,
                "count": count
            },
        }
    }
    if (permit !== undefined && permit !== null && permit !== "") {
        recipe["permit"] = permit
    }
    e.custom(recipe).id(`yourmodpack:sell_${sellCounter++}`)
}

function sellItemNBT(item, count, price, nbt, permit) {
    let recipe = {
        "type": "adminshop:item_selling",
        "price": price,
        "input": {
            "item": {
                "item": item,
                "count": count,
                "nbt": nbt
            },
        }
    }
    if (permit !== undefined && permit !== null && permit !== "") {
        recipe["permit"] = permit
    }
    e.custom(recipe).id(`yourmodpack:sell_${sellCounter++}`)
}

function sellTag(tag, count, price, permit) {
    let recipe = {
        "type": "adminshop:item_selling",
        "price": price,
        "input": {
            "tag": {
                "tag": tag,
                "count": count
            },
        }
    }
    if (permit !== undefined && permit !== null && permit !== "") {
        recipe["permit"] = permit
    }
    e.custom(recipe).id(`yourmodpack:sell_${sellCounter++}`)
}

let buyCounter = 0
function buyItem(item, count, price, permit) {
    let recipe = {
        "type": "adminshop:item_buying",
        "price": price,
        "result": {
            "item": item,
            "count": count
        }
    }
    if (permit !== undefined && permit !== null && permit !== "") {
        recipe["permit"] = permit
    }
    e.custom(recipe).id(`yourmodpack:buy_${buyCounter++}`)
}

function buyItemNBT(item, count, price, nbt, permit) {
    let recipe = {
        "type": "adminshop:item_buying",
        "price": price,
        "result": {
            "item": item,
            "count": count,
            "nbt": nbt
        }
    }
    if (permit !== undefined && permit !== null && permit !== "") {
        recipe["permit"] = permit
    }
    e.custom(recipe).id(`yourmodpack:buy_${buyCounter++}`)
}

//// Remove the default buy & sell orders
    e.remove({id: "adminshop:example_buy_item"})
    e.remove({id: "adminshop:example_sell_item"})
    e.remove({id: "adminshop:example_permits"})
    e.remove({id: "adminshop:example_buy_fluid"})
    e.remove({id: "adminshop:example_sell_fluid"})
    e.remove({id: "adminshop:example_buy_nbt"})
    e.remove({id: "adminshop:example_sell_nbt"})
    e.remove({id: "adminshop:example_sell_item_tag"})



//// THE ACTUAL SHOP IS DOWN HERE!
//// God, i fucking hate how this is a thousand lines long just to do one damn thing ffs
/// Number order is count, price (in cents), NBT, permit
/// Bounties pay a bit more than the shop since they require more work and are randomised

// Permits:
// advanced_research
// advanced_technology
// industrial_trading
// me_expert

// Coins
buyItem("essentiallycurrency:copper_coin", 1, 100)
buyItem("essentiallycurrency:iron_coin", 1, 500)
buyItem("essentiallycurrency:gold_coin", 1, 1000)
buyItem("essentiallycurrency:diamond_coin", 1, 2500)
buyItem("essentiallycurrency:emerald_coin", 1, 5000)
buyItem("essentiallycurrency:netherite_coin", 1, 7500)

sellItem("essentiallycurrency:copper_coin", 1, 100)
sellItem("essentiallycurrency:iron_coin", 1, 500)
sellItem("essentiallycurrency:gold_coin", 1, 1000)
sellItem("essentiallycurrency:diamond_coin", 1, 2500)
sellItem("essentiallycurrency:emerald_coin", 1, 5000)
sellItem("essentiallycurrency:netherite_coin", 1, 7500)



//// Buying ////
/// Purchasing items costs 5x their sell price, and gives one tier below the sale (e.g. you get dust instead of an ingot)
// Currencies
buyItem("coinsje:copper_coin", 1, 100)
buyItem("coinsje:iron_coin", 1, 1000)
buyItem("coinsje:gold_coin", 1, 10000)
buyItem("coinsje:diamond_coin", 1, 100000)
buyItem("coinsje:netherite_coin", 1, 1000000)

/// Items
buyItem("bricks", 1, 250)
buyItem("ae2:charged_certus_quartz_crystal", 1, 8000, "me_expert")



//// Selling ////
/// Currencies
sellItem("coinsje:copper_coin", 1, 100)
sellItem("coinsje:iron_coin", 1, 1000)
sellItem("coinsje:gold_coin", 1, 10000)
sellItem("coinsje:diamond_coin", 1, 100000)
sellItem("coinsje:netherite_coin", 1, 1000000)

/// Items
sellTag("forge:bread", 1, 300)
sellTag("cookcraft:pie", 1, 600)
sellTag("cookcraft:sandwich", 1, 750)

})