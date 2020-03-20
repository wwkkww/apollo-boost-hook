import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const getAllPost = gql`
    {
      allPosts(first: 20) {
        id
        title
        url
      }
    }`

export default () => useQuery(getAllPost)

