import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MobileServiceProjetPriv1 from "./pages/MobileServiceProjetPriv1";
import MobileServiceProjet2 from "./pages/MobileServiceProjet2";
import MobileServiceProjet21 from "./pages/MobileServiceProjet21";
import MobileAccueil from "./pages/MobileAccueil";
import MobileServiceProjet1 from "./pages/MobileServiceProjet1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet21":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet2":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileaccueil":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MobileServiceProjetPriv1 />} />
      <Route
        path="/-mobileserviceprojet21"
        element={<MobileServiceProjet2 />}
      />
      <Route
        path="/-mobileserviceprojet2"
        element={<MobileServiceProjet21 />}
      />
      <Route path="/-mobileaccueil" element={<MobileAccueil />} />
      <Route path="/-mobileserviceprojet1" element={<MobileServiceProjet1 />} />
    </Routes>
  );
}
export default App;
