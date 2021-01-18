import React from 'react'
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import styles from '../components/products.module.css'
import { graphql, Link } from 'gatsby';


const ComponentName = ({ data }) => {
    const {
         allContentfulProduct: {nodes: products}
         } = data;
    return (
    <Layout>
        <section className={styles.page}>
            {products.map(product => {
                console.log('product', product)
                return  <article key={product.id}>
                    <Image fluid={product.image.fluid} alt={product.title}/>
                    <h3>{product.title} <span>${product.price}</span></h3>
                 <Link to={`/products/${product.slug}`}>More details</Link>
                 </article>
            })}
        </section>
    </Layout>
    )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        price
      }
    }
  }
`

export default ComponentName

