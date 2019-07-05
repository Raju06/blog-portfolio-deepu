import React from "react";

function Home(props) {
  return (
    <div className="App">
      <div className="avatar" />
      <h1>Laxmikant Wali</h1>
      <a id="email" href="mailto:laxmikant.wali@gmail.com?Subject=Hello!" target="_top ">
        laxmikant.wali@gmail.com
      </a>
      {/* <p>Always curious</p> */}
      <p style={{ fontWeight: 500 }}>MSc. Molecular Microbiology, Microbial Ecology &amp; Immunology</p>
      <p>
        <i>Graduate student at the University of Vienna with a focus in Molecular microbiology and Immunology. My primary interest lies in gaining an in-depth understanding of gene regulation in bacteria &amp; Archaea, at the same time, I am also interested in understanding the role of the microbiome in human health and disease.</i>
      </p>
      <ul id="social">
        <li>
          <a href="https://in.linkedin.com/in/laxmikant-wali" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
      {/* <p id="quote">
        <q>Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road</q> - Stewart Brandt
      </p> */}
    </div>
  );
}

export default Home;