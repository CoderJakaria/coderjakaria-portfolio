import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PreLoader from "./components/preloader/PreLoader";
import { db } from "./firebase";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Project from "./pages/projects/Project";
import Service from "./pages/serivce/Service";
import Skills from "./pages/skills/Skills";
import { get__info } from "./redux/reducers/infoReducer";

function App() {
  const [loader, isLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("infos").onSnapshot(snapshot => {
      dispatch(get__info(snapshot.docs.map(doc => doc.data())));
      isLoader(true);
    });
  }, []);

  return (
    <div className="App">
      {loader ? (
        <>
          <Navbar />
          <Home />
          <About />
          <Service />
          <Skills />
          <Project />
          <Blogs />
          <Contact />
          <Footer />
        </>
      ) : (
        <PreLoader />
      )}
    </div>
  );
}

export default App;
