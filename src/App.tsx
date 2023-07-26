import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Partenaires from "./pages/Partenaires";
import Explorer from "./pages/Explorer";
import MobileServiceProjet211 from "./pages/MobileServiceProjet211";
import MobileServiceCrerProjet from "./pages/MobileServiceCrerProjet";
import MobileServiceModificationAp from "./pages/MobileServiceModificationAp";
import MobileServiceAjouterUnAppo from "./pages/MobileServiceAjouterUnAppo";
import MobileExplorerMembre from "./pages/MobileExplorerMembre";
import MobileServiceAjouterUnAppo1 from "./pages/MobileServiceAjouterUnAppo1";
import MobileServiceProjetOpratio from "./pages/MobileServiceProjetOpratio";
import MobileServiceProjetOpratio1 from "./pages/MobileServiceProjetOpratio1";
import MobileServiceProjet2 from "./pages/MobileServiceProjet2";
import MobileServiceProjet21 from "./pages/MobileServiceProjet21";
import MobileServiceProjetPriv1 from "./pages/MobileServiceProjetPriv1";
import MobileServiceProjet22 from "./pages/MobileServiceProjet22";
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
      case "/-mobileexplorer":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet2":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileservicecrer-projet":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileservicemodification-apport":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceajouter-un-apport-2":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileexplorermembre":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceajouter-un-apport":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet-oprationel-2":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet-oprationel":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet21":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet22":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet-priv-1":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet23":
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
      <Route path="/" element={<Partenaires />} />
      <Route path="/-mobileexplorer" element={<Explorer />} />
      <Route
        path="/-mobileserviceprojet2"
        element={<MobileServiceProjet211 />}
      />
      <Route
        path="/-mobileservicecrer-projet"
        element={<MobileServiceCrerProjet />}
      />
      <Route
        path="/-mobileservicemodification-apport"
        element={<MobileServiceModificationAp />}
      />
      <Route
        path="/-mobileserviceajouter-un-apport-2"
        element={<MobileServiceAjouterUnAppo />}
      />
      <Route path="/-mobileexplorermembre" element={<MobileExplorerMembre />} />
      <Route
        path="/-mobileserviceajouter-un-apport"
        element={<MobileServiceAjouterUnAppo1 />}
      />
      <Route
        path="/-mobileserviceprojet-oprationel-2"
        element={<MobileServiceProjetOpratio />}
      />
      <Route
        path="/-mobileserviceprojet-oprationel"
        element={<MobileServiceProjetOpratio1 />}
      />
      <Route
        path="/-mobileserviceprojet21"
        element={<MobileServiceProjet2 />}
      />
      <Route
        path="/-mobileserviceprojet22"
        element={<MobileServiceProjet21 />}
      />
      <Route
        path="/-mobileserviceprojet-priv-1"
        element={<MobileServiceProjetPriv1 />}
      />
      <Route
        path="/-mobileserviceprojet23"
        element={<MobileServiceProjet22 />}
      />
      <Route path="/-mobileaccueil" element={<MobileAccueil />} />
      <Route path="/-mobileserviceprojet1" element={<MobileServiceProjet1 />} />
    </Routes>
  );
}
export default App;
