import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { 
  Header,
  Footer,
  
  Page_Home,
  Page_About,
  Page_Team,
  Page_Services,
  Page_Projects,
  Page_Project,
  Page_FAQ,
  Page_Contact,
  Page_BlogPost,
  Page_Blog,
  Page_Simple

} from "./components";  

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Routes>
              <Route exact path="/" element={<Page_Home />} />
              {/* under menu itam PAGES */}
                <Route path="/about" element={<Page_About />} />
                <Route path="/team" element={<Page_Team />} />
                <Route path="/services" element={<Page_Services />} />
                <Route path="/faq" element={<Page_FAQ />} />
                <Route path="/projects" element={<Page_Projects />} />
                <Route path="/project" element={<Page_Project />} />
                
              <Route path="/blog" name="tolis" element={<Page_Blog sidebar="right" key={"right"} />} />
              <Route path="/blog-left-sidebar"  element={<Page_Blog sidebar="left" key={"left"} />} />
              <Route path="/blog-no-sidebar"  element={<Page_Blog sidebar="no" key={"no"} />} />

              <Route path="/post" element={<Page_BlogPost sidebar="right" key={"right"} />} />
              <Route path="/post-left-sidebar" element={<Page_BlogPost sidebar="left" key={"left"} />} />
              <Route path="/post-no-sidebar" element={<Page_BlogPost sidebar="no" key={"no"} />} />

              <Route path="/contact" element={<Page_Contact />} />

              <Route path="/terms" element={<Page_Simple key={"terms"} />} />
              <Route path="/privacy" element={<Page_Simple key={"privacy"} />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
