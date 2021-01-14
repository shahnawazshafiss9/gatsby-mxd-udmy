import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return <Layout>
    <section className="newsletter-page">
      <div className="page-center">
        <h2>Get all the latest stories to your inbox</h2>
        <h4>I write to my friends every few weeks</h4>
        <form 
        className="contact-form"
        name="testing-contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/success"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="testing-contact" />
          <input type="text" name="name" placeholder="Your Name" className="form-control" />
          <input type="email" name="email" placeholder="Your Email" className="form-control" />
          <button className="btn btn-form-control-submit">Subscribe</button>
        </form>
      </div>
    </section>
  </Layout>
}

export default NewsLetter
