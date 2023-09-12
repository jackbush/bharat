import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 0,
  maxWidth: 320,
};
const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Bhārat</h1>
      <p style={descriptionStyle}>Photos from the subcontinent</p>
      <Link to="/rajasthan">
        <h2>Rajasthan</h2>
        <StaticImage
          src="../images/rajasthan/b2.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={600}
          height={400}
        />
      </Link>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Bharat</title>;
