export const typeDefs = `
type Product {
  productId: ID!
  code: String!
  belongsTo: [Product] @relation(name: "BELONGS_TO", direction: "OUT")
  children: [Product] @relation(name: "BELONGS_TO", direction: "IN")
}
`;