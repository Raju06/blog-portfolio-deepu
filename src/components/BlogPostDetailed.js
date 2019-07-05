import React from "react";
import "../styles/Blogs.css";
import { Link } from "react-router-dom";

function BlogPostDetailed(props) {
  return (
    <div className="blog-container blog-container-detail">
      <div className="image-container">
        <img src={require('../media/melissa-askew-y4xZxzN754M-unsplash.jpg')} alt="s"></img>
      </div>
      <div className="blog-content">
        <div className="tags">
          <a href="#">CRISPR</a>
        </div>
        <div className='post-meta'>
          <h1>CRISPR in agriculture: A boon or a bane?</h1>
          <span className="author">by <b>Laxmikant Wali</b></span>
        </div>
        <p>
          The world today, largely driven by technology and innovation, is experiencing major changes as disruptive technologies like Clustered Regularly Interspaced Short Palindromic Repeats (CRISPR)-based gene editing have enabled scientists in academia and industries to address a wide range of problems in agriculture with relative ease. In this relation, they claim that CRISPR technology is not only easing the barriers to genome editing, at the same time, it could revolutionise plant breeding and pave the way for second green revolution. However, the advancement in the field of CRISPR-technology has been so rapid that the potential societal, ethical and safety issues are left behind.
        </p>
        <p>
          <img style={{ float: "left" }} className="secondary-image-left" src={require('../media/biology-close-up-instrument-60022 .jpg')} alt="s"></img>
          CRISPR was first discovered in Bacteria as part of its antiviral defence system. Today CRISPR is used as a molecular toolkit by researchers to alter DNA (Deoxyribonucleic Acid) and change gene function in various fields including agriculture. In the public domain  CRISPR-edited crops are often confused with Genetically Modified Organisms (GMOs), and have fuelled the debate over the strict regulation of the technology. While GMOs are created by adding foreign DNA sequences into a genome, CRISPR is able to make alterations in the genome at specific sites without the introduction of a foreign DNA sequence.
        </p>
        <p>
          <img style={{ float: "right" }} className="secondary-image-right" src={require('../media/akshay-chauhan-De4KxjbWvzQ-unsplash.jpg')} alt="s"></img>
          In 2018, the European Court of Justice ruled that the CRISPR-edited crops are to be considered the same as GMOs (Court of Justice of the European Union; PRESS RELEASE No 111/18; Luxembourg, 25 July 2018). While NGOs like GreenPeace and Friends of the Earth welcomed the decision, in the scientific community it drew criticism from more than 170 scientists from various European institutes 1, stressing that the ruling is not in line with the existing scientific evidence. Although this ruling does not affect basic research on gene editing in plants, it poses hurdles to field trails and applied-research projects on CRISPR. Further, researchers and scientists believe that the ruling could potentially suppress the democratic aspect of CRISPR-technology, and thereby benefit only the multinational companies that are able to afford the expensive regulatory process. Even though scientists from various countries agree that CRISPR technology offers unparalleled precision, ease-of-use in editing genes and is an improvement over conventional breeding2, at the same time they are critical about the potential off-target3 and on-target effects4 arising from the CRISPR-tool. Adding to the debate, many researchers point at the studies that offer evidence in quantifying off-target effects and the possible solution to overcome these drawbacks5.
        </p>
        <p>
          The general opinion among the consumers about the CRISPR-edited crops is rather negative and draws same scrutiny as GMOs6. Similarly, most of the farmers remain in opposition to the implementation of the CRISPR in agriculture. Farmers opposing CRISPR cite the lack of transparency about CRISPR-edited products and their distrust in big corporations as their main reasons7. On the other hand, farmers that face challenges of climate change, welcome the implementation of CRISPR. According to their experience, the technology benefits them by reducing crop loss, increasing yield and having to spray fewer chemicals8,9,10. Furthermore, a percentage of organic farmers also stand pro to CRISPR and argue that the CRISPR-edited crops are similar to crops produced through conventional breeding techniques because in both the cases DNA is altered11.
        </p>
        <p>
          The controversy regarding the implementation of CRISPR in agriculture has largely been fuelled by the lack of understanding of the technology in the public domain, along with technical uncertainties and lack of long-term scientific studies regarding the effect of CRISPR-edited crops on human health and the world around us. Although scientifically there is a need to resolve the technical uncertainties surrounding CRISPR-tool, the major hurdles for the implementation of CRISPR, however, are government regulations and the lack of public acceptance. Given these circumstances, scientists have a social responsibility for addressing public concerns and resolving the transparency issue regarding the technology.
        </p>
        <h5>References</h5>
        <ol>
          <li>
            <p>
              Gao, C. (2018). The future of CRISPR technologies in agriculture. Nature Reviews Molecular Cell Biology, 19(5), pp.275- 276.
          </p>
          </li>
          <li>
            <p>
              Arora, L. and Narula, A. (2017). Gene Editing and Crop Improvement Using CRISPR-Cas9 System. Frontiers in Plant Science, 8.
            </p>
          </li>
          <li>
            <p>
              Zhang, X., Tee, L., Wang, X., Huang, Q. and Yang, S. (2015). Off-target Effects in CRISPR/Cas9- mediated Genome Engineering. Molecular Therapy - Nucleic Acids , 4, p.e264.
            </p>
          </li>
          <li>
            <p>
              Kosicki, M., Tomberg, K. and Bradley, A. (2018). Repair of double-strand breaks induced by CRISPR– Cas9 leads to large deletions and complex rearrangements. Nature Biotechnology.
            </p>
          </li>
          <li>
            <p>
              Akcakaya, P., Bobbin, M., Guo, J., Malagon-Lopez, J., Clement, K., Garcia, S., Fellows, M., Porritt, M., Firth, M., Carreras, A., Baccega, T., Seeliger, F., Bjursell, M., Tsai, S., Nguyen, N., Nitsch, R., Mayr, L., Pinello, L., Bohlooly-Y, M., Aryee, M., Maresca, M. and Joung, J. (2018). In vivo CRISPR editing with no detectable genome-wide off-target mutations. Nature, 561(7723), pp.416-419.
            </p>
          </li>
          <li>
            <p>
              Aaron M. Shew, L. Lanier Nalley, Heather A. Shell, Rodolfo M. Nayga Jr., Bruce L. Dixon . (2018) CRISPR versus GMOs: Public acceptance and valuation Global Food Security Volume 19, December 2018, Pages 71-80
            </p>
          </li>
          <li>
            <p>
              Motherboard. (2019). Some Farmers Still Don't Trust CRISPR, Thanks to GMOs. [online] Available at: <a target="_blank" rel="noopener noreferrer" href="https://motherboard.vice.com/en_us/article/wjp5vw/some-farmers-still-dont-trust-crispr-thanks-to-gmos">https://motherboard.vice.com/en_us/article/wjp5vw/some-farmers-still-dont-trust-crispr-thanks-to-gmos [Accessed 5 Apr. 2019]</a>.
            </p>
          </li>
          <li>
            <p>
              Niiler, E., Niiler, E., Allain, R., Simon, M., Barrett, B., Simon, M., Wolchover, N. and Soto, B. (2019). European Ruling Could Slow Africa’s Push for Crispr Crops. [online] WIRED. Available at:<a target="_blank" rel="noopener noreferrer" href="https://www.wired.com/story/european-ruling-could-slow-africas-push-for-crispr-crops/">https://www.wired.com/story/european-ruling-could-slow-africas-push-for-crispr-crops/ [Accessed 9 Apr. 2019]</a>.
            </p>
          </li>
          <li>
            <p>
              Knuivers, M. (2019). US farmer's pros and cons of genetically modified crops (GMO). [online] Future farming. Available at: <a target="_blank" rel="noopener noreferrer" href="https://www.futurefarming.com/Smart-farmers/Articles/2017/7/US-farmers-pros-and-cons-of-genetically-modified-crops-GMO-1640WP/">https://www.futurefarming.com/Smart-farmers/Articles/2017/7/US-farmers-pros-and-cons-of-genetically-modified-crops-GMO-1640WP/ [Accessed 9 Apr. 2019]</a>.
            </p>
          </li>
          <li>
            <p>
              The Conversation. (2019). Organic farming with gene editing: An oxymoron or a tool for sustainable agriculture?. [online] Available <a target="_blank" rel="noopener noreferrer" href="https://theconversation.com/organic-farming-with-gene-editing-an-oxymoron-or-a-tool-for-sustainable-agriculture-101585">https://theconversation.com/organic-farming-with-gene-editing-an-oxymoron-or-a-tool-for-sustainable-agriculture-101585 [Accessed 2 Apr. 2019]</a>.
            </p>
          </li>
          <li>
            <p>
              Fcrn.org.uk. (2019). FCRN Blogs | Food Climate Research Network (FCRN). [online] Available at:<a target="_blank" rel="noopener noreferrer" href="https://www.fcrn.org.uk/comment/544#comment-544">https://www.fcrn.org.uk/comment/544#comment-544 [Accessed 4 Apr. 2019]</a>.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default BlogPostDetailed;
