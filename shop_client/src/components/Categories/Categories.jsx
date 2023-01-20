import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://cf.shopee.com.my/file/fd4a29f824da7bd207eed9e07c7719f7"
            alt="Keychain"
          />
          <button>
            <Link className="link" to="/products/4">
              Keychain
            </Link>
          </button>
        </div>
        
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://lzd-img-global.slatic.net/g/p/3392fa95762622aed466dd928df9ec63.jpg_720x720q80.jpg_.webp"
            alt="Standee"
          />
          <button>
            <Link to="/products/3" className="link">
              Standee
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://cdn.shopify.com/s/files/1/0095/6910/8015/products/fseg888571953_0_480x360.jpg?v=1565868740"
                alt="Nesoberi"
              />
              <button>
                <Link to="/products/1" className="link">
                  Nesoberi
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/384/579/themes/839203/assets/slide-img3.png?1662712787274"
                alt="Figure"
              />
              <button>
                <Link to="/products/2" className="link">
                  Figure
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://www.uk-anime.net/Images/2015sales-banner01.jpg?width=610&height=350&mode=crop"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
