// Adds tags to items used for bounties and the shipping bin
// Script by vizthex
ServerEvents.tags("item", e => {

    //// Harvestcraft items are always placed last since there"s so damn many of them
    // Toast
    e.add("cookcraft:toast", ["refurbished_furniture:toast", "moredelight:toast", "mynethersdelight:toasts", "pamhc2foodcore:toastitem"])


    // Pies
    e.add("cookcraft:pies", ["pumpkin_pie", "pamhc2foodcore:applepieitem", "pamhc2foodcore:sweetberrypieitem", "pamhc2foodcore:caramelpieitem", "pamhc2foodcore:glowberrypieitem", "pamhc2foodcore:choruspieitem", "pamhc2foodcore:chocolatepieitem", "pamhc2foodcore:honeypieitem"])


    // Sandwiches
    e.add("cookcraft:sandwiches", ["#cookcraft:sandwich/grilled_cheese", "pamhc2foodextended:bolognasandwichitem", "pamhc2foodextended:melonjellysandwichitem", "pamhc2foodextended:sweetberryjellysandwichitem", "pamhc2foodextended:friedbolognasandwichitem"])

    e.add("cookcraft:sandwiches/grilled_cheese", ["refurbished_furniture:cheese_toastie", "pamhc2foodcore:grilledcheeseitem", "pamhc2foodextended:groiledcheesesandwichitem", "pamhc2foodextended:grilledcheesevegemitetoastitem"])


    // Burgers (the goat)
    e.add("cookcraft:burgers", ["farmersdelight:hamburger", "moredelight:hamburger_with_cheese", "moredelight:hamburger_with_egg","veggiesdelight:cauliflower_burger", "vintagedelight:cheese_burger",

    "pamhc2foodextended:baconmushroomburgeritem", "pamhc2foodextended:beetburgeritem"])

    e.add("cookcraft:burgers/basic", ["moredelight:simple_hamburger", "moredelight:hamburger_with_cheese",

    "pamhc2foodcore:basichamburgeritem", "pamhc2foodcore:basiccheeseburgeritem", "pamhc2foodextended:onionhamburgeritem", "pamhc2foodextended:jalapenoburgeritem"])

    e.add("cookcraft:burgers/deluxe", ["moredelight:loaded_hamburger", "vintagedelight:deluxe_burger",

    "pamhc2foodcore:baconcheeseburgeritem", "pamhc2foodextended:deluxecheeseburgeritem", "pamhc2foodextended:gourmetbeefburgeritem", "pamhc2foodextended:gourmetporkburgeritem", "pamhc2foodextended:gourmetmuttonburgeritem", "pamhc2foodextended:paradiseburgeritem"])

})