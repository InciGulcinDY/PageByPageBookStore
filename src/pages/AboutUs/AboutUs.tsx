import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="container text-center mb-5">
      <div className="row my-3">
        <div className="col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.4781605394664!2d29.017463976428566!3d41.10224711363284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5dd2032fb11%3A0x629c5e4a976cff27!2zTWFzbGFrLCDEsFTDnCBBeWF6YcSfYSBLYW1ww7xzw7wsIDM0NDg1IFNhcsSxeWVyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1706614000260!5m2!1str!2str"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-12">
          <h3>Adress:</h3>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
            porro!
          </p>
          <h6 className="sub-title">Phone:</h6>
          <p className="text-secondary">+ 90 0212 111 55 22</p>
          <p className="text-secondary">+ 90 0555 444 99 11</p>
          <h6 className="sub-title">Email: </h6>
          <p>
            <Link to="mailto:info@pagebypagecom.tr">info@pagebypagecom.tr</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
