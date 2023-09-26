import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MobileServiceProjet211 from "./pages/CrerProjet2";
import ExplorerAnnonces from "./pages/ExplorerAnnonces";
import Profil from "./pages/Profil";
import MobileServiceModificationAp from "./pages/ModiApport";
import ValiderApport from "./pages/ValiderApport";
import VoirApport2 from "./pages/VoirApport2";
import ProjetOpratio3 from "./pages/ProjetOpratio3";
import VoirApportPrive from "./pages/VoirApportPrive";
import ValiderApport1 from "./pages/ValiderApport1";
import VoirApportPublic from "./pages/VoirApportPublic";
import VoirApportPublic1 from "./pages/VoirApportPublic1";
import Principal3 from "./pages/Principal3";
import Principal2 from "./pages/Principal2";
import Principal1 from "./pages/Principal1";
import VoirApportPublic2 from "./pages/VoirApportPublic2";
import Principal21 from "./pages/Principal21";
import Principal11 from "./pages/Principal11";
import ExplorerMembres from "./pages/ExplorerMembres";
import Notfications from "./pages/Notfications";
import Principal from "./pages/Principal";
import Ouverture3 from "./pages/Ouverture3";
import Ouverture2 from "./pages/Ouverture2";
import Ouverture1 from "./pages/Ouverture1";
import Ouverture4 from "./pages/Ouverture4";
import Connexion from "./pages/Connexion";
import Partenaires from "./pages/Partenaires";
import MobileServiceAjouterUnAppo from "./pages/AjouterUnAppo";
import MobileServiceAjouterUnAppo1 from "./pages/AjouterUnAppo2";
import MobileServiceProjetOpratio from "./pages/ProjetOpratio";
import MobileServiceCrerProjet from "./pages/CrerProjet";
import MobileServiceProjet2 from "./pages/CrerProjetPublic2";
import MobileServiceProjet21 from "./pages/CrerProjetPublic3";
import MobileServiceProjetPriv1 from "./pages/CrerProjetPriv";
import MobileServiceProjet22 from "./pages/CrerProjetPublic";
import MobileServiceProjetOpratio1 from "./pages/ProjetOpratio2";
import MobileAccueil from "./pages/SiteAccueil";
import AjouterUnAppo3 from "./pages/AjouterUnAppo3";
import Principal31 from "./pages/Principal31";
import Principal211 from "./pages/Principal211";
import Configuration from "./pages/Configuration";
import Profil from "./pages/Profil1";
import Connexion from "./pages/Connexion1";
import Inscription from "./pages/Inscription";
import Ouverture from "./pages/Ouverture";
import ExplorerProjets from "./pages/ExplorerProjets";
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
      case "/-explorerannonces":
        title = "";
        metaDescription = "";
        break;
      case "/-profil":
        title = "";
        metaDescription = "";
        break;
      case "/-modiapport":
        title = "";
        metaDescription = "";
        break;
      case "/-validerapport":
        title = "";
        metaDescription = "";
        break;
      case "/-voirapport2":
        title = "";
        metaDescription = "";
        break;
      case "/-projetopratio3":
        title = "";
        metaDescription = "";
        break;
      case "/-voirapportprive":
        title = "";
        metaDescription = "";
        break;
      case "/-validerapport1":
        title = "";
        metaDescription = "";
        break;
      case "/-voirapportpublic":
        title = "";
        metaDescription = "";
        break;
      case "/-voirapportpublic1":
        title = "";
        metaDescription = "";
        break;
      case "/-principal3":
        title = "";
        metaDescription = "";
        break;
      case "/-principal2":
        title = "";
        metaDescription = "";
        break;
      case "/-principal1":
        title = "";
        metaDescription = "";
        break;
      case "/-voirapportpublic2":
        title = "";
        metaDescription = "";
        break;
      case "/-principal-21":
        title = "";
        metaDescription = "";
        break;
      case "/-principal-1":
        title = "";
        metaDescription = "";
        break;
      case "/-explorermembres":
        title = "";
        metaDescription = "";
        break;
      case "/-notfications":
        title = "";
        metaDescription = "";
        break;
      case "/-principal":
        title = "";
        metaDescription = "";
        break;
      case "/-ouverture-3":
        title = "";
        metaDescription = "";
        break;
      case "/-ouverture-2":
        title = "";
        metaDescription = "";
        break;
      case "/-ouverture-1":
        title = "";
        metaDescription = "";
        break;
      case "/-ouverture-4":
        title = "";
        metaDescription = "";
        break;
      case "/-connexion":
        title = "";
        metaDescription = "";
        break;
      case "/-partenaires":
        title = "";
        metaDescription = "";
        break;
      case "/-ajouterunappo-2":
        title = "";
        metaDescription = "";
        break;
      case "/-ajouterunappo":
        title = "";
        metaDescription = "";
        break;
      case "/-projetopratio2":
        title = "";
        metaDescription = "";
        break;
      case "/-crerprojet":
        title = "";
        metaDescription = "";
        break;
      case "/-crerprojet3":
        title = "";
        metaDescription = "";
        break;
      case "/-crerprojetpublic3":
        title = "";
        metaDescription = "";
        break;
      case "/-crerprojetpriv":
        title = "";
        metaDescription = "";
        break;
      case "/ajoutapport":
        title = "";
        metaDescription = "";
        break;
      case "/-projetopratio":
        title = "";
        metaDescription = "";
        break;
      case "/-siteaccueil":
        title = "";
        metaDescription = "";
        break;
      case "/-ajouterunappo-3":
        title = "";
        metaDescription = "";
        break;
      case "/-principal-2":
        title = "";
        metaDescription = "";
        break;
      case "/-principal-22":
        title = "";
        metaDescription = "";
        break;
      case "/-configuration":
        title = "";
        metaDescription = "";
        break;
      case "/-profil1":
        title = "";
        metaDescription = "";
        break;
      case "/-connexion1":
        title = "";
        metaDescription = "";
        break;
      case "/-inscription":
        title = "";
        metaDescription = "";
        break;
      case "/-ouverture":
        title = "";
        metaDescription = "";
        break;
      case "/-explorerprojets":
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
      <Route path="/-explorerannonces" element={<ExplorerAnnonces />} />
      <Route path="/-profil" element={<Profil />} />
      <Route path="/-modiapport" element={<MobileServiceModificationAp />} />
      <Route path="/-validerapport" element={<ValiderApport />} />
      <Route path="/-voirapport2" element={<VoirApport2 />} />
      <Route path="/-projetopratio3" element={<ProjetOpratio3 />} />
      <Route path="/-voirapportprive" element={<VoirApportPrive />} />
      <Route path="/-validerapport1" element={<ValiderApport1 />} />
      <Route path="/-voirapportpublic" element={<VoirApportPublic />} />
      <Route path="/-voirapportpublic1" element={<VoirApportPublic1 />} />
      <Route path="/-principal3" element={<Principal3 />} />
      <Route path="/-principal2" element={<Principal2 />} />
      <Route path="/-principal1" element={<Principal1 />} />
      <Route path="/-voirapportpublic2" element={<VoirApportPublic2 />} />
      <Route path="/-principal-21" element={<Principal21 />} />
      <Route path="/-principal-1" element={<Principal11 />} />
      <Route path="/-explorermembres" element={<ExplorerMembres />} />
      <Route path="/-notfications" element={<Notfications />} />
      <Route path="/-principal" element={<Principal />} />
      <Route path="/-ouverture-3" element={<Ouverture3 />} />
      <Route path="/-ouverture-2" element={<Ouverture2 />} />
      <Route path="/-ouverture-1" element={<Ouverture1 />} />
      <Route path="/-ouverture-4" element={<Ouverture4 />} />
      <Route path="/-connexion" element={<Connexion />} />
      <Route path="/-partenaires" element={<Partenaires />} />
      <Route
        path="/-ajouterunappo-2"
        element={<MobileServiceAjouterUnAppo />}
      />
      <Route path="/-ajouterunappo" element={<MobileServiceAjouterUnAppo1 />} />
      <Route path="/-projetopratio2" element={<MobileServiceProjetOpratio />} />
      <Route path="/-crerprojet" element={<MobileServiceCrerProjet />} />
      <Route path="/-crerprojet3" element={<MobileServiceProjet2 />} />
      <Route path="/-crerprojetpublic3" element={<MobileServiceProjet21 />} />
      <Route path="/-crerprojetpriv" element={<MobileServiceProjetPriv1 />} />
      <Route path="/ajoutapport" element={<MobileServiceProjet22 />} />
      <Route path="/-projetopratio" element={<MobileServiceProjetOpratio1 />} />
      <Route path="/-siteaccueil" element={<MobileAccueil />} />
      <Route path="/-ajouterunappo-3" element={<AjouterUnAppo3 />} />
      <Route path="/-principal-2" element={<Principal31 />} />
      <Route path="/-principal-22" element={<Principal211 />} />
      <Route path="/-configuration" element={<Configuration />} />
      <Route path="/-profil1" element={<Profil />} />
      <Route path="/-connexion1" element={<Connexion />} />
      <Route path="/-inscription" element={<Inscription />} />
      <Route path="/-ouverture" element={<Ouverture />} />
      <Route path="/-explorerprojets" element={<ExplorerProjets />} />
    </Routes>
  );
}
export default App;
