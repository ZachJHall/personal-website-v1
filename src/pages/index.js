import React from "react"
import Layout from '../components/layout'
import Contact from '../components/contact';
import "../css/index.css";
import Header from '../components/header'

const IndexPage = () => {
  return (
    <Layout>
    <Header />
    <div class="index-content">

      <div class="short-biography">

        <a target="_blank" rel="noopener noreferrer" href="https://placeholder.com"><img id = "user-image" src="https://via.placeholder.com/150" alt="Website owner headshot"/></a>
        <h1>I'm Zach Hall</h1>
        <h2>A Computer Science student at <a target="_blank" rel="noopener noreferrer" href="https://semo.edu/">SEMO</a></h2>
      </div>

      <Contact />

    </div>

    </Layout>
  )
}

export default IndexPage
