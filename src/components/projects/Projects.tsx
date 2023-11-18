import helloWorld from "../../assets/images/helloWorld.gif"

const Projects = () => {
  return (
    <section id="Projects" className="w-[100%] flex flex-col p-5 mt-20 text-center justify-center">
        <h1 className="text-3xl text-center font-bold">
            Projects
        </h1>
        <figure className="w-[50%]">
          <img src={helloWorld} alt="" />
        </figure>
        
    </section>
  )
}

export default Projects