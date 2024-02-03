import React from "react";
import { useLocation } from "react-router-dom";
import HeaderPreviews from "../components/HeaderPreviews";
import { useMediaQuery } from "@mui/material";
import HomeImage from "../assets/home_2.jpg";
import WhoWeHelpImage from "../assets/who-we-help.jpg";
import SEOImage from "../assets/seo-bg.jpg";
import GoogleAdsImage from "../assets/google-ads_bg.jpg";
import FacebookAds from "../assets/facebook-ads_bg.jpg";
import ContentImage from "../assets/content-bg.jpg";
import EmailMarketing from "../assets/email-marketing.jpg"
import SocialManagementImage from "../assets/social-management.jpg";
import AboutImage from "../assets/about-bg.jpg";
import WebsiteImage from "../assets/website-bg.jpg";
import SocialMediaAds from "../assets/social-ads.jpg";
import ListingImage from "../assets/Listing_bg.jpg";
import CaseStudies from "../assets/case-studies.jpg";
import BlogImage from "../assets/blog.jpg";
const HeaderController = () => {
  const { pathname } = useLocation();
  const isSmallScreen = useMediaQuery("(max-width: 991px)");

  let backgroundImage;
  let upDescription;
  let Keyword;
  let description;
  let callToAction;
  let pageTitle;
  let height;

  if (pathname === "/") {
    backgroundImage = HomeImage;
    upDescription =
      "A Versatile Powerhouse for Web Design, SEO, Marketing, and More";
    Keyword = "Revolutionize Your Digital Presence with Speed and Precision";
    description =
      "Kenrow Digital Marketing Agency, the all-in-one solution for a dynamic online presence – We empower your business to navigate the digital landscape with unmatched speed and precision.";
    pageTitle = "Kenrow Agency";
    callToAction = "Get Started";
    height = isSmallScreen ? "60vh" : "80vh";
  } else if (pathname == "/who-we-help") {
    backgroundImage = WhoWeHelpImage;
    upDescription = null;
    Keyword = "Who We Help";
    description =
      "Our team assists a variety of businesses from small, entrepreneurial startups to large-scale established corporations. Take a look and see how you can benefit from our plans!";
    callToAction = null;
    pageTitle = "Who we Help";
    height = "50vh";
  } else if (pathname == "/seo") {
    backgroundImage = SEOImage;
    upDescription = null;
    Keyword = "SEO";
    description =
      "Search engine optimization serves to help your website rank organically through on-page and backend website optimizations.";
    callToAction = null;
    pageTitle = "SEO";
    height = "50vh"
  } else if (pathname == "/google-ads") {
    backgroundImage = GoogleAdsImage;
    upDescription = null;
    Keyword = "Google Ads";
    height = "50vh";
    description =
      "Skip the line and start getting eyes on your business immediately. Take advantage of Google's powerful advertising tools today!";
    callToAction = null;
    pageTitle = "Google Ads";

  } else if (pathname == "/facebook-ads") {
    backgroundImage = FacebookAds;
    upDescription = null;
    Keyword = "Facebook Ads";
    description =
      "Reach nearly three billion users on the world's largest social media platform. Take advantage of powerful marketing tools with virtually no hurdles!";
    callToAction = null;
    pageTitle = "Facebook Ads";
    height = "50vh";
  } else if (pathname == "/content") {
    backgroundImage = ContentImage;
    upDescription = null;
    Keyword = "Content";
    description =
      "Complete your website with high-quality, information articles that promote traffic, growth, and social shares online.";
    callToAction = null;
    pageTitle = "Content";
    height = "50vh";
  } else if (pathname == "/email-marketing") {
    backgroundImage = EmailMarketing ;
    upDescription = null;
    Keyword = "Email Marketing";
    description =
      "Complete your website with high-quality, information articles that promote traffic, growth, and social shares online.";
    callToAction = null;
    pageTitle = "Email Marketing";
    height = "50vh";
  } else if (pathname == "/social-management") {
    backgroundImage = SocialManagementImage;
    upDescription = null;
    Keyword = "Social Management";
    description =
      "Establish a rapport with your customers by entering the online conversation.";
    callToAction = null;
    pageTitle = "Social Management";
    height = "50vh";
  } else if (pathname == "/social-media-ads") {
    backgroundImage = SocialMediaAds;
    upDescription = null;
    Keyword = "Social Ads";
    description =
      "Establish a rapport with your customers by entering the online conversation.";
    callToAction = null;
    pageTitle = "Social Ads";
    height = "50vh";
  } else if (pathname == "/website") {
    backgroundImage = WebsiteImage;
    upDescription = null;
    Keyword = "Websites";
    description =
      "Every business needs a high-quality website with an intuitive interface, fast load times, and great content to keep visitors coming back.";
    callToAction = null;
    pageTitle = "Website";
    height = "50vh";
  } else if (pathname == "/about") {
    backgroundImage = AboutImage;
    upDescription = null;
    Keyword = "About";
    description =
      "Get to know about the team at Business Name. Discover what makes our digital marketing experts different from the competition.";
    callToAction = null;
    pageTitle = "about";
    height = "50vh";
  } else if (pathname == "/blog") {
    backgroundImage = BlogImage;
    upDescription = null;
    Keyword = "Blog";
    description =
      "Keep up to date with the latest news and information in the digital marketing world! Our experts share expertise and helpful insights regularly.";
    callToAction = null;
    pageTitle = "blog";
    height = "50vh";
  } else if (pathname == "/case-studies") {
    backgroundImage = CaseStudies;
    upDescription = null;
    Keyword = "Case Studies";
    description =
      "Take a deep-dive into the studies and analytics we have regarding our previous experiences with our digital marketing campaigns.";
    callToAction = null;
    pageTitle = "Case Studies";
    height = "50vh";
  } else if (pathname == "/contact") {
    backgroundImage = "../assets/case-studies.jpg";
    upDescription = null;
    Keyword = "Contact Us";
    description =
      "Take a deep-dive into the studies and analytics we have regarding our previous experiences with our digital marketing campaigns.";
    callToAction = null;
    pageTitle = "Contact";
    height = "50vh";
  }
  else if (pathname == "/listing") {
    backgroundImage = ListingImage;
    upDescription = null;
    Keyword = "Listings";
    description =
      "Help your customers find your business with optimized directory listings everywhere you're located online.";
    callToAction = null;
    pageTitle = "Listing";
    height = "50vh";
  }
  else if (pathname == "/social-posting") {
    backgroundImage = SocialManagementImage;
    upDescription = null;
    Keyword = "Social Posting";
    description =
      "Establish a rapport with your customers by entering the online conversation.";
    callToAction = null;
    pageTitle = "Social Management";
    height = "50vh";

  }

  return (
    <HeaderPreviews
      Keyword={Keyword}
      backgroundImage={backgroundImage}
      upDescription={upDescription}
      description={description}
      callToAction={callToAction}
      pageTitle={pageTitle}
      height={height}
    />
  );
};

export default HeaderController;
