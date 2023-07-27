import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MobileServiceProjet211 from "./pages/CrerProjet2";
import Connexion from "./pages/Connexion";
import MobileExplorerMembre from "./pages/ExplorerMembre";
import MobileServiceProjet22 from "./pages/CrerProjetPublic";
import Partenaires from "./pages/Partenaires";
import Explorer from "./pages/Explorer";
import MobileServiceCrerProjet from "./pages/CrerProjet";
import MobileServiceModificationAp from "./pages/ModiApport";
import MobileServiceAjouterUnAppo from "./pages/AjouterUnAppo";
import MobileServiceAjouterUnAppo1 from "./pages/AjouterUnAppo2";
import MobileServiceProjetOpratio from "./pages/ProjetOpratio";
import MobileServiceProjetOpratio1 from "./pages/ProjetOpratio2";
import MobileServiceProjet2 from "./pages/CrerProjetPublic2";
import MobileServiceProjet21 from "./pages/CrerProjetPublic3";
import MobileServiceProjetPriv1 from "./pages/CrerProjetPriv";
import MobileAccueil from "./pages/SiteAccueil";
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
      case "/-connexion":
        title = "";
        metaDescription = "";
        break;
      case "/-explorermembre":
        title = "";
        metaDescription = "";
        break;
      case "/-crer-projet-public-1":
        title = "";
        metaDescription = "";
        break;
      case "/-partenaires":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileexplorer":
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
      case "/-mobileserviceprojet2":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet21":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet-priv-1":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileaccueil":
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
      <Route path="/" element={<MobileServiceProjet211 />} />
      <Route path="/-connexion" element={<Connexion />} />
      <Route path="/-explorermembre" element={<MobileExplorerMembre />} />
      <Route
        path="/-crer-projet-public-1"
        element={<MobileServiceProjet22 />}
      />
      <Route path="/-partenaires" element={<Partenaires />} />
      <Route path="/-mobileexplorer" element={<Explorer />} />
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
      <Route path="/-mobileserviceprojet2" element={<MobileServiceProjet2 />} />
      <Route
        path="/-mobileserviceprojet21"
        element={<MobileServiceProjet21 />}
      />
      <Route
        path="/-mobileserviceprojet-priv-1"
        element={<MobileServiceProjetPriv1 />}
      />
      <Route path="/-mobileaccueil" element={<MobileAccueil />} />
    </Routes>
  );
}
export default App;
