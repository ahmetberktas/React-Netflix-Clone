import React from "react";

const footerLinks = [
  {
    title: "FAQ",
    url: "#",
  },
  {
    title: "Investor Relations",
    url: "#",
  },
  {
    title: "Terms of Use",
    url: "#",
  },
  {
    title: "Contact Us",
    url: "#",
  },
  {
    title: "Help Center",
    url: "#",
  },
  {
    title: "Jobs",
    url: "#",
  },
  {
    title: "Privacy",
    url: "#",
  },
  {
    title: "Speed Test",
    url: "#",
  },
  {
    title: "Account",
    url: "#",
  },
  {
    title: "Redeem Gift Cards",
    url: "#",
  },
  {
    title: "Cookie Preferences",
    url: "#",
  },
  {
    title: "Legal Notices",
    url: "#",
  },
  {
    title: "Media Center",
    url: "#",
  },
  {
    title: "Ways to Watch",
    url: "#",
  },
  {
    title: "Corporate Information",
    url: "#",
  },
  {
    title: "Only on Netflix",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Questions? Call <a href="tel:08503907444">0850-390-7444</a>
        </p>
        <div className="row">
          {footerLinks.map((link, index) => (
            <div className="col-sm-3" key={index}>
              <a href={link.url}>{link.title}</a>
              <br />
            </div>
          ))}
        </div>
        <div className="select-wrapper mt-3">
          <select className="custom-select">
            <option value="en">English</option>
            <option value="tr">Turkish</option>
          </select>
        </div>
        <p className="mt-3">Netflix Türkiye Clone</p>
      </div>
    </footer>
  );
};

export default Footer;
