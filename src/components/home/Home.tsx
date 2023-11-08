import myImage from "../../assets/images/fotoPortada.png"
import button from "../../assets/icons/centerButton.png"

const Home = () => {
  return (
    <section className="flex">

      <aside className="w-[65%] text-center">
        <h1 className="text-6xl font-bold">
          Facundo
          <p className="">
            Maciel
          </p>
        </h1>
      </aside>

      <article>
        <figure className="flex justify-center items-center bg-[#E4E4E4]">

          <img src={button} alt="The show button" className="w-[60px] h-[60px] hover:cursor-pointer hover:scale-105 duration-200 ease-in-out" />

          <img src={myImage} alt="My Image" className="w-full" />
        </figure>
      </article>
      <div className="flex flex-col w-[8%]">
        <aside className="bg-[#232323] h-full">
          
        </aside>
        <aside className="bg-[#FF1D1D] h-full">
          
        </aside>
      </div>

    </section>
  )
};

export default Home;