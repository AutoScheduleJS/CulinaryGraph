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

Whitelist:

Build a list of product from a selection of stores.
Filter recipes for which all requirements are on the list.
All the unknow product are lost.

Blacklist:

Build a list of products from a selection of stores (has_not).
Filter recipes for which one of the requirement is on the list.

## Thoughts

home made recipe and similar products in store share similar properties:
- quality: both can vary in quality
  - are they ? It make no sense to call a recipe "discount", "basic". It's better to call a recipe "simple" or "elaborated". Quality depends on ingredient's quality used and directions.
- directions: merchandise are not necessarly ready to use and need some preparation
  - directions from finished products is equivalent to any other recipe, and have requirements. All finished products with similar directions can be grouped in the same product node.
- merchandise are attached to stores
- recipe can't link merchandise, they must refer a family product node

How to compute nutrition fact on a recipe?

We could save nutrition fact on each product, keeping the min & max from "instance" of this product.
When choosing recipe to present to user, it will only take the "min" value for properties we want to maximize (eg: vitamins), and "max" for those we want to minimize (eg: calories). Then we ensure that theses values are in the range of accepted ones (eg: between min/max cal for a day)