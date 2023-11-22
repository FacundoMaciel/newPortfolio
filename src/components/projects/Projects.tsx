import helloWorld from "../../assets/images/helloWorld.gif"

const Projects = () => {
  return (
    <section id="Projects" className="w-[100%] flex flex-col p-5 mt-20 text-center justify-center">
        <div className="flex justify-center p-4 mb-5 m-5">
      <div className="w-96">
        <img
          className="w-full rounded-lg"
          src={helloWorld}
          alt="NotFOund"
        />
        <div className="place-content-center text-center ml-2 px-5 pb-5">
          <h3 className="text-gray-900 text-xl tracking-tight mt-3 flex flex-row justify-around">
            title
          </h3>
          <p className="text-center text-gray-600"> Ready in </p> 
          <div className="flex items-center justify-center">
            <span className="text-gray-900 text-lg w-[30%] rounded-lg px-1 py-1 text-center">
              Minutes
            </span>{" "}
          </div>
            <div className="flex items-center justify-center mt-3 mb-5">
              <button className="bg-gray-100 p-2 border-gray-700 rounded-lg text-gray-900 hover:bg-gray-300 border-2 hover:text-gray-900 font-bold duration-300">
                Details 
              </button>
            </div>     
        </div>
      </div>
    </div>
    </section>
  )
}

export default Projects