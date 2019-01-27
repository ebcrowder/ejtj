export const typeDefs = /* GraphQL */ `type AggregateTrip {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createTrip(data: TripCreateInput!): Trip!
  updateTrip(data: TripUpdateInput!, where: TripWhereUniqueInput!): Trip
  updateManyTrips(data: TripUpdateManyMutationInput!, where: TripWhereInput): BatchPayload!
  upsertTrip(where: TripWhereUniqueInput!, create: TripCreateInput!, update: TripUpdateInput!): Trip!
  deleteTrip(where: TripWhereUniqueInput!): Trip
  deleteManyTrips(where: TripWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Permission {
  ADMIN
  USER
  ITEMCREATE
  ITEMUPDATE
  ITEMDELETE
  PERMISSIONUPDATE
}

type Query {
  trip(where: TripWhereUniqueInput!): Trip
  trips(where: TripWhereInput, orderBy: TripOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trip]!
  tripsConnection(where: TripWhereInput, orderBy: TripOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TripConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  trip(where: TripSubscriptionWhereInput): TripSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Trip {
  id: ID!
  name: String!
  city: String!
  state: String
  country: String!
  dateStart: String!
  dateEnd: String!
  notes: String
  image: String
  pastEvent: Boolean!
  dream: Boolean!
}

type TripConnection {
  pageInfo: PageInfo!
  edges: [TripEdge]!
  aggregate: AggregateTrip!
}

input TripCreateInput {
  name: String!
  city: String!
  state: String
  country: String!
  dateStart: String!
  dateEnd: String!
  notes: String
  image: String
  pastEvent: Boolean!
  dream: Boolean!
}

type TripEdge {
  node: Trip!
  cursor: String!
}

enum TripOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  country_ASC
  country_DESC
  dateStart_ASC
  dateStart_DESC
  dateEnd_ASC
  dateEnd_DESC
  notes_ASC
  notes_DESC
  image_ASC
  image_DESC
  pastEvent_ASC
  pastEvent_DESC
  dream_ASC
  dream_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TripPreviousValues {
  id: ID!
  name: String!
  city: String!
  state: String
  country: String!
  dateStart: String!
  dateEnd: String!
  notes: String
  image: String
  pastEvent: Boolean!
  dream: Boolean!
}

type TripSubscriptionPayload {
  mutation: MutationType!
  node: Trip
  updatedFields: [String!]
  previousValues: TripPreviousValues
}

input TripSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TripWhereInput
  AND: [TripSubscriptionWhereInput!]
  OR: [TripSubscriptionWhereInput!]
  NOT: [TripSubscriptionWhereInput!]
}

input TripUpdateInput {
  name: String
  city: String
  state: String
  country: String
  dateStart: String
  dateEnd: String
  notes: String
  image: String
  pastEvent: Boolean
  dream: Boolean
}

input TripUpdateManyMutationInput {
  name: String
  city: String
  state: String
  country: String
  dateStart: String
  dateEnd: String
  notes: String
  image: String
  pastEvent: Boolean
  dream: Boolean
}

input TripWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  dateStart: String
  dateStart_not: String
  dateStart_in: [String!]
  dateStart_not_in: [String!]
  dateStart_lt: String
  dateStart_lte: String
  dateStart_gt: String
  dateStart_gte: String
  dateStart_contains: String
  dateStart_not_contains: String
  dateStart_starts_with: String
  dateStart_not_starts_with: String
  dateStart_ends_with: String
  dateStart_not_ends_with: String
  dateEnd: String
  dateEnd_not: String
  dateEnd_in: [String!]
  dateEnd_not_in: [String!]
  dateEnd_lt: String
  dateEnd_lte: String
  dateEnd_gt: String
  dateEnd_gte: String
  dateEnd_contains: String
  dateEnd_not_contains: String
  dateEnd_starts_with: String
  dateEnd_not_starts_with: String
  dateEnd_ends_with: String
  dateEnd_not_ends_with: String
  notes: String
  notes_not: String
  notes_in: [String!]
  notes_not_in: [String!]
  notes_lt: String
  notes_lte: String
  notes_gt: String
  notes_gte: String
  notes_contains: String
  notes_not_contains: String
  notes_starts_with: String
  notes_not_starts_with: String
  notes_ends_with: String
  notes_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  pastEvent: Boolean
  pastEvent_not: Boolean
  dream: Boolean
  dream_not: Boolean
  AND: [TripWhereInput!]
  OR: [TripWhereInput!]
  NOT: [TripWhereInput!]
}

input TripWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: String
  permissions: [Permission!]!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: String
  permissions: UserCreatepermissionsInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: String
  permissions: [Permission!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: String
  permissions: UserUpdatepermissionsInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: String
  permissions: UserUpdatepermissionsInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: String
  resetTokenExpiry_not: String
  resetTokenExpiry_in: [String!]
  resetTokenExpiry_not_in: [String!]
  resetTokenExpiry_lt: String
  resetTokenExpiry_lte: String
  resetTokenExpiry_gt: String
  resetTokenExpiry_gte: String
  resetTokenExpiry_contains: String
  resetTokenExpiry_not_contains: String
  resetTokenExpiry_starts_with: String
  resetTokenExpiry_not_starts_with: String
  resetTokenExpiry_ends_with: String
  resetTokenExpiry_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`