var gql = require("graphql-tag")

var a = "ojij"

var frag = gql`
  fragment test on user {
    id
    name
    username
  }
`