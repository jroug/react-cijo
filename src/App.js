import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { 
  Header,
  Footer,
  
  Page_Home,
  Page_About,
  // Page_Team,
  // Page_Services,
  // Page_Projects,
  // Page_ProjectPresentation,
  // Page_FAQ,
  // Page_Contact,
  // Page_BlogNoSidebar,
  // Page_BlogLeftSidebar,
  // Page_BlogInner,
  Page_Blog

} from "./components";  

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Routes>
              <Route exact path="/" element={<Page_Home />} />
              <Route path="/about" element={<Page_About />} />
              <Route path="/blog" element={<Page_Blog />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
