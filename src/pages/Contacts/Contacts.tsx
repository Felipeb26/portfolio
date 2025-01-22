import { Book, Code, Download, HandymanTwoTone, Mail, } from "@mui/icons-material";

const Contatos = () => {
	return (
		<div className="min-h-screen bg-[#2D004D] text-white">
			{/* Hero Section */}
			<header className="container mx-auto px-4 py-20">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div className="md:w-1/2 space-y-6">
						<h1 className="text-5xl font-bold">Felipe Batista</h1>
						<p className="text-xl text-gray-300">
							Desenvolvedor de Software
						</p>
						<div className="flex gap-4">
							<button className="bg-[#FFD700] text-[#2D004D] px-6 py-2 rounded-lg font-bold flex items-center gap-2">
								<Download  /> Download CV
							</button>
							<button className="border border-[#FFD700] text-[#FFD700] px-6 py-2 rounded-lg font-bold flex items-center gap-2">
								<Mail  /> Contato
							</button>
						</div>
					</div>
					<div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
						<div className="w-64 h-64 rounded-full bg-[#693D93] overflow-hidden">
							{/* Seu avatar atual aqui */}
						</div>
					</div>
				</div>
			</header>

			{/* Skills Section */}
			<section className="bg-[#693D93] py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-10 text-center">
						Habilidades
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								icon: <Code  />,
								title: "Desenvolvimento",
								desc: "Full Stack Development",
							},
							{
								icon: <HandymanTwoTone  />,
								title: "Experiência",
								desc: "Projetos Profissionais",
							},
							{
								icon: <Book  />,
								title: "Aprendizado",
								desc: "Sempre Evoluindo",
							},
						].map((item, i) => (
							<div
								key={i}
								className="bg-[#2D004D] p-6 rounded-xl text-center space-y-4"
							>
								<div className="flex justify-center text-[#FFD700]">
									{item.icon}
								</div>
								<h3 className="text-xl font-bold">
									{item.title}
								</h3>
								<p className="text-gray-300">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-10 text-center">
						Projetos
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[1, 2, 3].map((item) => (
							<div
								key={item}
								className="bg-[#693D93] rounded-xl overflow-hidden"
							>
								<div className="h-48 bg-gray-700"></div>
								<div className="p-6 space-y-4">
									<h3 className="text-xl font-bold">
										Projeto {item}
									</h3>
									<p className="text-gray-300">
										Descrição do projeto e tecnologias
										utilizadas
									</p>
									<button className="text-[#FFD700] font-bold flex items-center gap-2">
										Ver mais <Code  />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#693D93] py-10">
				<div className="container mx-auto px-4">
					<div className="flex justify-center space-x-6">
						{/* <Github/>
						<Linkedin
							className="text-[#FFD700] cursor-pointer"
							size={24}
						/>
						<Mail
							className="text-[#FFD700] cursor-pointer"
							size={24}
						/> */}
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Contatos;