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
const imageParentStyles = {};
const imageStyles = {
  display: "inline-block",
  marginRight: 12,
  marginBottom: 12,
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <p style={descriptionStyle}>
        <Link to="/">Back</Link>
      </p>
      <h1 style={headingStyles}>Rajasthan</h1>
      <h2>Udaipur</h2>
      <div style={imageParentStyles}>
        <StaticImage
          src="../images/rajasthan/a1.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
        <StaticImage
          src="../images/rajasthan/a2.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
        <StaticImage
          src="../images/rajasthan/a3.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
        <StaticImage
          src="../images/rajasthan/a4.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
        <StaticImage
          src="../images/rajasthan/a5.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
        <StaticImage
          src="../images/rajasthan/a6.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
        <StaticImage
          src="../images/rajasthan/a7.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
      </div>
      <h2>Jaisalmer</h2>
      <div>
        <StaticImage
          src="../images/rajasthan/b1.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
        <StaticImage
          src="../images/rajasthan/b2.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
        <StaticImage
          src="../images/rajasthan/b3.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
        <StaticImage
          src="../images/rajasthan/b4.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
      </div>
      <h2>Thar</h2>
      <div>
        <StaticImage
          src="../images/rajasthan/c1.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
        <StaticImage
          src="../images/rajasthan/c2.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
        <StaticImage
          src="../images/rajasthan/c3.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
      </div>
      <h2>Jodhpur</h2>
      <div>
        <StaticImage
          src="../images/rajasthan/d1.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
        <StaticImage
          src="../images/rajasthan/d2.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
        <StaticImage
          src="../images/rajasthan/d3.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={200}
          style={imageStyles}
        />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Bharat</title>;
