import Home from "./home"; 
import Projects from "./projects"; 
import About from "./about"; 
import ContactForm from './contactForm';
import Footer from "./footer"; 

export default function App() {
  return (
    <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <ContactForm />
        <section id="footer"><Footer /></section>
      </main>
  );
}

