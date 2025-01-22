import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of goods and services over the internet. These
          websites offer a convenient and efficient shopping experience by
          providing a wide range of products, detailed descriptions, user
          reviews, and secure payment options. E-commerce sites often feature
          user-friendly interfaces, personalized recommendations, and customer
          support to enhance the overall shopping experience. Additionally, they
          enable businesses to reach a global audience, operate 24/7, and
          leverage data analytics to understand consumer behavior and optimize
          sales strategies.
        </p>
        <p>
          The rise of e-commerce websites has transformed the retail industry,
          allowing businesses of all sizes to compete globally. These platforms
          use advanced technologies like AI and machine learning for
          personalized shopping, efficient inventory management, and improved
          supply chains. Features such as social media integration, mobile
          optimization, and digital wallet payments enhance the user experience.
          As consumer preferences change, e-commerce sites adapt with
          innovations like virtual try-ons, subscription services, and seamless
          transactions to stay competitive and meet evolving demands.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
