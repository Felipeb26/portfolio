interface Tecnologies {
	name: string;
	image: string;
}

export const Tecnologies: Tecnologies[] = [
	{
		name: "Java",
		image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
	},
	{
		name: "kotlin",
		image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
	},
	{
		name: "gradle",
		image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg",
	},
	{
		name: "maven",
		image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
	},
	{
		name: "spring",
		image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
	},
	{
		name: "sqlserver",
		image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
	},
	{
		name: "angularjs",
		image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
	},
	{
		name: "python",
		image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
	},
	{
		name: "reactjs",
		image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
	},
];

export const LocateImage = (tecnologie: string) => {
	tecnologie = tecnologie.toLowerCase();
	const tech = Tecnologies.find(
		(tech) => tech.name.toLowerCase() === tecnologie
	);

	if (tecnologie.startsWith("ejs"))
		return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iIzRkZTVlMiIgZD0iTTE4OS4zNSAxMjAuNDg0djU4Ljg2NUw2NC41OSAyMzYuNDUzTDE4OS4zNSAyOTUuNnY1Ny42ODVMMCAyNjMuNDU2di01Mi41NDN6bTEyOC44NDUgNTMuMjljMC0xNS4wNC0xMy44My0yNC40OTEtMjQuODMzLTE2Ljk3MXMtMTEuMDAzIDI2LjQyMiAwIDMzLjk0M3MyNC44MzMtMS45MzIgMjQuODMzLTE2Ljk3Mm0tNDUuMTIgNDYuMjExYy0zNy4zMTItMjAuNDU0LTM3LjMxMi03MS44NjggMC05Mi4zMjNjMzcuMzEzLTIwLjQ1NCA4NC4yMDcgNS4yNTMgODQuMjA3IDQ2LjE2MnMtNDYuODk0IDY2LjYxNi04NC4yMDYgNDYuMTYxbTE5OS44MzggMTE5LjkyN2MwLTE1LjA0LTEzLjgzLTI0LjQ5MS0yNC44MzMtMTYuOTcxcy0xMS4wMDMgMjYuNDIyIDAgMzMuOTQyczI0LjgzMy0xLjkzIDI0LjgzMy0xNi45N20tNDUuMTIgNDYuMjExYy0zNy4zMTItMjAuNDU0LTM3LjMxMi03MS44NjggMC05Mi4zMjNTNTEyIDI5OS4wNTMgNTEyIDMzOS45NjJzLTQ2Ljg5NCA2Ni42MTYtODQuMjA2IDQ2LjE2MW0tMTE0LjY1NCA3LjE3OWwxOTQuNDEtMjc0LjYwNGgtNjYuNDNMMjQzLjQ3IDM5My4zMDJ6Ii8+PC9zdmc+";

	const find: Tecnologies = tech
		? tech
		: {
				name: tecnologie,
				image: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tecnologie}/${tecnologie}-original.svg`,
		};
	return find.image;
};
