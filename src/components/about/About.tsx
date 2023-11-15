import dev from "../../assets/icons/webDeveloperWorking.png"

const About = () => {
  return (
    <section id="About" className="w-[100%] flex bg-[#E4E4E4] p-5">
        <aside className="w-[45%]">
            <figure className="w-[60%]">
                <img src={dev} alt="Developer Image" className=""/>
            </figure>
        </aside>
        <aside className="w-[45%]">
        <h1 className="text-3xl text-center font-bold">
            About Me
        </h1>
        <br />
        <article>
        Me fascina la programación, poder crear, innovar, solucionar, seguir creciendo en conocimiento, experiencia, lenguajes, herramientas, todo para ser un mejor profesional, aportar lo que se pueda al equipo de trabajo y cumplir las metas de la empresa, cliente y superar las propias!Tuve varias experiencias loborales donde aprendí mucho, sentía igualmente que no era lo mío, lo que me hace feliz. Empecé la busqueda de un trabajo remoto y doy gracias por eso que fue donde descubrí el bootcamp de Henry, para así comenzar un intenso y dificil camino aprendiendo de programación web y encontrando eso que si me hace feliz, también un grupo de gente excelente, talentosa y en la busqueda de los mismos objetivos. Hoy estoy agradecido de haberme graduado de full stack web developer, en la busqueda de experiencias laborales, adquirir mayor conocimiento sobre lenguajes, herramientas y todo sobre el mundo de la tecnología
        </article>
        </aside>
    </section>
  )
}

export default About