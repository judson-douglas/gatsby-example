import React from "react";
import Layout from '../components/Layout';
import { ExampleButton } from '../components/Button';

export default function Home() {
  return ( 
  <Layout>
  <div>Hello people!</div>
  <ExampleButton>Click Me</ExampleButton>
  </Layout>
  );
}
