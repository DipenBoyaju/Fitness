import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";

const App = (props: Props) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(selectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div>
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}
export default App