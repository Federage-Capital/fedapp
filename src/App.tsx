import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MobileServiceProjet211 from "./pages/CrerProjet2";
import Explorer from "./pages/Explorer";
import Configuration from "./pages/Configuration";
import Profil from "./pages/Profil";
import MobileAccueil from "./pages/SiteAccueil";
import MobileServiceProjetPriv1 from "./pages/CrerProjetPriv";
import MobileServiceProjet21 from "./pages/CrerProjetPublic3";
import MobileServiceProjet2 from "./pages/CrerProjetPublic2";
import MobileServiceProjetOpratio1 from "./pages/ProjetOpratio2";
import MobileServiceProjetOpratio from "./pages/ProjetOpratio";
import MobileServiceAjouterUnAppo1 from "./pages/AjouterUnAppo2";
import MobileServiceAjouterUnAppo from "./pages/AjouterUnAppo";
import MobileServiceModificationAp from "./pages/ModiApport";
import MobileServiceCrerProjet from "./pages/CrerProjet";
import Partenaires from "./pages/Partenaires";
import MobileExplorerMembre from "./pages/ExplorerMembre";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import MobileServiceProjet22 from "./pages/CrerProjetPublic";
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
      case "/-configuration":
        title = "";
        metaDescription = "";
        break;
      case "/-profil":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileaccueil":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet-priv-1":
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
      case "/-mobileserviceprojet-oprationel":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceprojet-oprationel-2":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceajouter-un-apport":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileserviceajouter-un-apport-2":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileservicemodification-apport":
        title = "";
        metaDescription = "";
        break;
      case "/-mobileservicecrer-projet":
        title = "";
        metaDescription = "";
        break;
      case "/-partenaires":
        title = "";
        metaDescription = "";
        break;
      case "/-explorermembre":
        title = "";
        metaDescription = "";
        break;
      case "/-connexion":
        title = "";
        metaDescription = "";
        break;
      case "/-inscription":
        title = "";
        metaDescription = "";
        break;
      case "/-crerprojetpublic":
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
      <Route path="/-mobileexplorer" element={<Explorer />} />
      <Route path="/-configuration" element={<Configuration />} />
      <Route path="/-profil" element={<Profil />} />
      <Route path="/-mobileaccueil" element={<MobileAccueil />} />
      <Route
        path="/-mobileserviceprojet-priv-1"
        element={<MobileServiceProjetPriv1 />}
      />
      <Route
        path="/-mobileserviceprojet2"
        element={<MobileServiceProjet21 />}
      />
      <Route
        path="/-mobileserviceprojet21"
        element={<MobileServiceProjet2 />}
      />
      <Route
        path="/-mobileserviceprojet-oprationel"
        element={<MobileServiceProjetOpratio1 />}
      />
      <Route
        path="/-mobileserviceprojet-oprationel-2"
        element={<MobileServiceProjetOpratio />}
      />
      <Route
        path="/-mobileserviceajouter-un-apport"
        element={<MobileServiceAjouterUnAppo1 />}
      />
      <Route
        path="/-mobileserviceajouter-un-apport-2"
        element={<MobileServiceAjouterUnAppo />}
      />
      <Route
        path="/-mobileservicemodification-apport"
        element={<MobileServiceModificationAp />}
      />
      <Route
        path="/-mobileservicecrer-projet"
        element={<MobileServiceCrerProjet />}
      />
      <Route path="/-partenaires" element={<Partenaires />} />
      <Route path="/-explorermembre" element={<MobileExplorerMembre />} />
      <Route path="/-connexion" element={<Connexion />} />
      <Route path="/-inscription" element={<Inscription />} />
      <Route path="/-crerprojetpublic" element={<MobileServiceProjet22 />} />
    </Routes>
  );
}
export default App;
