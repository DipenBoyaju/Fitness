import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

  return (
    <nav className="">
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={logo} alt="logo" />
            {
              isAboveMediumScreens ? (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link page="Benefits" selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link page="Our Classes" selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link page="Contact Us" selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                  <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                  </div>
                </div>
              ) : (
                <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  {!isMenuToggled ? (<Bars3Icon className="h-6 w-6 text-white" />) : (<XMarkIcon className="h-6 w-6 text-white" />)}
                </button>
              )
            }
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 w-full h-full bg-primary-100 drop-shadow-xl top-24">
          <div className="flex flex-col gap-10 text-2xl justify-center items-center pt-10">
            <Link page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link page="Benefits" selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link page="Our Classes" selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link page="Contact Us" selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav >
  )
}
export default Navbar