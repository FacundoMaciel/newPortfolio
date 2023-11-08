import myImage from "../../assets/images/fotoPortada.png"
import button from "../../assets/icons/centerButton.png"
import gitHub from "../../assets/icons/iconGitHub.png"
import linkedIn from "../../assets/icons/iconLinkedin.png"
import whatsApp from "../../assets/icons/iconWhatsapp.png"
import sentEmail from "../../assets/icons/SentEmail.png"
import downloadCV from "../../assets/icons/cvDownload.png"


const Home = () => {
  return (
    <section className="flex">

      <aside className="w-[65%] items-end">
        <div className="absolute left-0 bottom-0">
        <h1 className="text-6xl text-[#232323] font-bold ml-6 mb-10">
          Facundo
          <p className="">
            Maciel
          </p>
        </h1>
        <figure className="flex ml-6">
          <img src={gitHub} alt="Linked icon to GitHub" />
          <img src={linkedIn} alt="Linked icon to LinkedIn" />
          <img src={whatsApp} alt="Linked icon to WhatsApp" />
        </figure>
        </div>
      </aside>

      <article>
        <figure className="flex justify-center items-center bg-[#E4E4E4]">

          <img src={button} alt="The show button" className="w-[60px] h-[60px] hover:cursor-pointer hover:scale-105 duration-200 ease-in-out" />

          <img src={myImage} alt="My Image" className="w-full" />
        </figure>
      </article>

      <div className="flex flex-col w-[8%]">
        <aside className="bg-[#232323] h-full">
          <figure className="flex justify-end">
            <img src={sentEmail} alt="Icon to sent an email" className="p-2"/>
          </figure>
        </aside>
        <aside className="bg-[#FF1D1D] h-full">
          <figure className="flex justify-end">
            <img src={downloadCV} alt="Download cv icon" className="p-2"/>
          </figure>
        </aside>
      </div>

    </section>
  )
};

export default Home;