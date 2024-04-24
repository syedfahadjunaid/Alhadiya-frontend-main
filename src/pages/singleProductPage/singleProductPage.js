import React, { useState } from "react";
import "./singleProductPage.css";
import img from "../../assets/placeholder (2).png";
import img1 from "../../assets/placeholder.png";
import img2 from "../../assets/placeholder (1).png";
import { LinkedIn, WhatsApp } from "@mui/icons-material";
function SingleProductPage() {
  const [selected, setSelected] = useState("DESCRIPTION");
  return (
    <div className="singleProductPage">
      <div className="singleProductPage_breadcreams">
        <a>Home</a> / <a>TV & Monitors</a> / <p>LED</p>
      </div>
      <div className="singleProductPage_top">
        <div className="singleProductPage_top_left">
          <div className="singleProductPage_top_left_left">
            <img src={img} alt="single" />
            <img src={img} alt="single" />
            <img src={img} alt="single" />
            <img src={img} alt="single" />
            <img src={img} alt="single" />
          </div>
          <div className="singleProductPage_top_left_right">
            <img src={img1} alt="single" />
          </div>
        </div>
        <div className="singleProductPage_top_right">
          <p className="singleProductPage_top_right_skucode">SKU 12314124124</p>
          <p className="singleProductPage_top_right_title">
            LED Monitor With High Quality In The World
          </p>
          <strong className="singleProductPage_top_right_price">
            AED 976.33
          </strong>
          <p className="singleProductPage_top_right_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
            <ul>
              <li>- Direct Full Array</li>
              <li>- Quantum Dot Technology</li>
              <li>- Ambient Mode</li>
              <li>- One Remote Control</li>
            </ul>
          </p>
          <button className="singleProductPage_top_right_enquiry_button">
            Make An Enquiry For This Product
          </button>
          <div className="singleProductPage_top_right_share">
            <p>Share:</p>
            <ul>
              <li>
                <LinkedIn />
              </li>
              <li>
                <WhatsApp />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="singleProductPage_bottom">
        <div className="singleProductPage_bottom_heading">
          <p
            className={selected === "DESCRIPTION" && "active_tab"}
            onClick={() => setSelected("DESCRIPTION")}
          >
            DESCRIPTION
          </p>
          <p
            className={selected === "SHIPPING INFO" && "active_tab"}
            onClick={() => setSelected("SHIPPING INFO")}
          >
            SHIPPING INFO
          </p>
        </div>
        {selected === "DESCRIPTION" && (
          <div className="singleProductPage_bottom_discreption">
            <h6>See the best picture no matter where you sit</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div>
              <img src={img2} alt="image" />
              <img src={img2} alt="image" />
              <img src={img2} alt="image" />
              <img src={img2} alt="image" />
              <img src={img2} alt="image" />
            </div>
            <h6>Powerful intelligence for perfection</h6>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
            <h6>The power of less</h6>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat
            </p>
          </div>
        )}
        {selected === "SHIPPING INFO" && (
          <div className="singleProductPage_bottom_shiping">
            <h6>See the best picture no matter where you sit</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleProductPage;
