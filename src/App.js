import {NavBar} from "./components/NavBar";
import {Greeting} from "./components/Greeting";
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
      <Greeting />
      <Bio />
    </>
  );
}

export default App;
