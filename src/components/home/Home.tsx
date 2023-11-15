import myImage from "../../assets/images/fotoPortada.png"
import button from "../../assets/icons/centerButton.png"
import gitHub from "../../assets/icons/iconGitHub.png"
import linkedIn from "../../assets/icons/iconLinkedin.png"
import whatsApp from "../../assets/icons/iconWhatsapp.png"
import sentEmail from "../../assets/icons/SentEmail.png"
import downloadCV from "../../assets/icons/cvDownload.png"
import { useState } from "react"


const Home = () => {
  
  const [paragraph, setParagraph] = useState(false);

  return (
    <section className="flex w-[100%]">

      <aside className="w-[65%] items-end">
        <div className="absolute left-0 bottom-0">
          { paragraph && 
        <p className="h-[140px] text-start shadow-lg bg-[#E4E4E4] rounded-md justify-center w-[50%] p-2 ml-6 mb-20 font-normal animate-fade-left animate-once animate-ease-in-out">
        <strong> HOLA! </strong> 
        <br />
        Soy Facundo desarrollador web fullstack graduado del bootcamp Soy Henry, con experiencia en desarrollo Front End y Back End con tecnologías como <strong> JavaScript, TypeScript, React, HTML, CSS, NodeJS, NestJS </strong> entre otras. 
        <br />
         Conocimientos en metodología de trabajo ágil <strong> Scrum </strong>
        </p>
          }
        <h1 className="text-6xl font-semibold ml-6 mb-10 animate-fade-right animate-once animate-delay-500">
          Facundo
          <p className="">
            Maciel
          </p>
        </h1>
          <figure className="flex ml-6">
            <a href="https://github.com/FacundoMaciel"
              target="_blank"
              className="animate-fade-up animate-once animate-duration-300 animate-delay-300">
              <img src={gitHub} alt="Linked icon to GitHub" className="hover:scale-110 duration-200 ease-in-out" />
            </a>
            <a href="https://www.linkedin.com/in/facundo-maciel-desarrollador-fullstack/"
              target="_blank"
              className="animate-fade-up animate-once animate-duration-700 animate-delay-500">
              <img src={linkedIn} alt="Linked icon to LinkedIn" className="hover:scale-110 duration-200 ease-in-out" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=543795575131"
              target="_blank"
              className="animate-fade-up animate-once animate-duration-1000 animate-delay-700">
              <img src={whatsApp} alt="Linked icon to WhatsApp" className="hover:scale-110 duration-200 ease-in-out" />
            </a>
          </figure>
        </div>
      </aside>

      <article className="animate-fade-down animate-once">
        <figure className="flex justify-center items-center bg-[#E4E4E4]">

          <img 
          id="btn"
          src={button} alt="The show button" 
          className="w-[60px] h-[60px] hover:cursor-pointer hover:scale-105 duration-200 ease-in-out opacity-90 hover:opacity-100" 
          onClick={() => (setParagraph(!paragraph))}/>
          <img 
          src={myImage} alt="My Image" 
          className="w-full" />
        </figure>
      </article>

      <div className="flex flex-col w-[8%] animate-fade-down animate-once">
        <aside className="bg-[#232323] h-full">
          <figure className="flex justify-end">
            <a href="mailto:facundomaciel12@hotmail.com" className="hover:scale-90 duration-200 ease-in-out">
            <img src={sentEmail} alt="Icon to sent an email" className="p-2"/>
            </a>
          </figure>
        </aside>
        <aside className="bg-[#FF1D1D] h-full">
          <figure className="flex justify-end">
            <a href="/CV-MacielFacundo-Desarrollador.pdf" download={true} className="hover:scale-90 duration-200 ease-in-out">
            <img src={downloadCV} alt="Download cv icon" className="p-2"/>
            </a>
          </figure>
        </aside>
      </div>

    </section>
  )
};

export default Home;