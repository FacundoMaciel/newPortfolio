import About from "./components/about/About"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Projects from "./components/projects/Projects"


function App() {
  
  return (
    <>
      <main>
       <Header />
       <Home />
       <div className="inline-flex items-center justify-center w-full mt-10">
        <hr className="w-[85%] h-px my-8 border-0 rounded bg-gray-300" />
      </div>
       <About />
       <Projects />
      </main>
    </>
  )
}

export default App
