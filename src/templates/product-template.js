import React from 'react'

import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Image from 'gatsby-image'

const ComponentName = ({ data: {
  product: { 
    title,
    price,
    image: { fixed },
    description: { description }
 }
 }
}) => {
  console.log('title', title)
  console.log('price', price)
  console.log('fixed', fixed)
  console.log('description', description);
  return (
  <Layout>
    <div style={{textAlign: 'center'}}>
      <Link to="/products">Back to products</Link>
      <h1>single product: {title}</h1>
    </div>
    <section className="single-product">
      <article>
        <Image fixed={fixed} alt={title} />
      </article>
      <article>
        <h1>{title}</h1>
        <h3>${price}</h3>
        <p>{description}</p>
        <button>add to cart</button>
      </article>
    </section>
  </Layout>
  )
}

export const query = graphql`
query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: {eq: $slug}) {
      title
      price
      image {
        fixed(width:300) {
          ...GatsbyContentfulFixed
        }
      }
      description {
        description
      }
    }
  }
`

export default ComponentName