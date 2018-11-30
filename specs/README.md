## Use Cases

- recipes with easy-to-find products
- recipe available with selected store
- low cost recipes
- recipes with low sugar
- optimize quantities to match products sizes
- find best quality/price store

## Stories

At the beginning, there is nothing.
Users add recipes, products & subrecipes.
In these condition, user can't filter recipes with available products -> all products are considered available
User pick a recipe, run errands normaly, and tell us where, at what price, the quality, quantity & availability
When there is enough product information, user can start to filter recipes available from a selection of store.

When a new recipe comes with a new ingredient, people with filter will not see it until someone add this ingredient in one of the selected store. If we link product to store with "has" or "has_not", we can filter recipes available from store with products that have "has" or no relation (unknow).

With separated graph for recipes / products and stores, how to efficiency filter recipes to selected stores?

Whitelist:

Build a list of product from a selection of stores.
Filter recipes for which all requirements are on the list.

Blacklist:

Build a list of products from a selection of stores (has_not).
Filter recipes for which one of the requirement is on the list.

