import { useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "@pages/Home"
import WhoWeHelp from "@pages/Who-we-help"
import SocialMediaAds from '@pages/TiktokAds';
import SEO from '@pages/SEO';
import Blog from '@pages/Blog';
import GoogleAds from '@pages/GoogleAds';
import FacebookAds from '@pages/FacebookAds';
import Content from '@pages/Content';
import EmailMarketing from '@pages/EmailMarketing';
import SocialPosting from '@pages/SocialPosting';
import Website from '@pages/Website';
import About from '@pages/About';
import Contact from '@pages/Contact';
import FreeConsultation from '@pages/FreeConsultation';
import Header from '@components/Header';
import Footer from '@components/Footer';
import CaseStudies from '@pages/CaseStudies';
import Listings from '@pages/Listings';
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentHostname = window.location.hostname;

    if (currentHostname === 'www.localhost:3000') {
      navigate('/')
    }
  }, [navigate])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/who-we-help' element={<WhoWeHelp />} />
        <Route path='/seo' element={<SEO />} />
        <Route path='/google-ads' element={<GoogleAds />} />
        <Route path='/facebook-ads' element={<FacebookAds />} />
        <Route path='/content' element={<Content />} />
        <Route path='/email-marketing' element={<EmailMarketing />} />
        <Route path='/social-posting' element={<SocialPosting />} />
        <Route path='/website' element={<Website />} />
        <Route path='/social-media-ads' element={<SocialMediaAds />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book-consultation' element={<FreeConsultation />} />

        <Route path='/listing' element={<Listings />} />
        <Route path='/case-studies' element={<CaseStudies />} />
      </Routes>
      <Footer />
    </>


  );
}

export default App;
