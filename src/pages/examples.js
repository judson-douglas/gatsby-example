import React from 'react'
import Layout from '../components/Layout';
import Header from '../examples/Header';
import { graphql } from 'gatsby';

const examples = ({data}) => {
    const {site: { info: {author, description} } } = data
    return (
        <Layout>
        <div>
            <p>hello from examples page</p>
            <Header />
            <h5>author: {author}</h5>
            <h5>info: {description} </h5>
        </div>
        </Layout>
    )
}
export const data = graphql`
query MyQuery {
    site {
      info: siteMetadata {
        author
        description
        data
        person {
          age
          name
        }
        title
      }
    }
  }
`
export default examples
