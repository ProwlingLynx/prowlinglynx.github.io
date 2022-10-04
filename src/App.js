import {NavBar} from "./components/NavBar";
import {Bio} from "./components/Bio";
import './App.css';


/**
 * Renders the app views.
 * TODO: migrate to React Router
 * @returns {JSX.Element}
 */

function App() {
  return (
    <>
      <NavBar />
      <Bio />
    </>
  );
}

export default App;
