import React from "react"
import "./index.css"

const IndexPage = () => {
  return (
    <div className="links-container">
      <p>
        Matthew Alexander{" "}
        <a href="https://www.linkedin.com/in/mattalxndr/" title="LinkedIn Profile">works</a>{" "}
        on {" "}
        <a href="https://stackexchange.com/users/133538/mattalxndr" title="StackExchange Profile">software</a>{" "}
        <a href="https://github.com/mattalxndr" title="GitHub Profile">projects</a>{" "}
        from his home in Austin, Texas.
      </p>
    </div>
  )
}

export default IndexPage
