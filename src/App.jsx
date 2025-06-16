import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRoutes } from "react-router-dom";
import routes from './routes'
function App() {
  const router = useRoutes(routes)

  return (
    <>
      <div className="overflow-hidden">
        <Header />
        {router}
        <Footer />
      </div>
    </>
  );
}

export default App;
