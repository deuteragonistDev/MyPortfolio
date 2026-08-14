

export function Hero() {

    return (
        <div className={"flex flex-col items-center justify-center h-screen"}>
            <h1 className={"text-4xl font-bold text-gray-900 dark:text-cyan-50 mb-4"}>Opa, bem-vindo(a) querido(a)!</h1>
            <span className={"text-lg text-gray-700 dark:text-cyan-200 mb-8"}>Me chamo João Paulo,
                Sou desenvolvedor de software e entusiasta da area de Cibersegurança.
                desde 2022 brincando de programar, desde 2024 Graduando Ciencias da Computação e descobrindo suas inúmeras vertentes. </span>
            <a href={"#projects"} className={"px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"}>Veja Alguns dos projetos que atuei ativamente</a>
        </div>
    )
}
export default Hero;