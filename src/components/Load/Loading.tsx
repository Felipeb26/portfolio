import { keyframes, styled } from "@mui/material";
import { useIsFetching } from "@tanstack/react-query";

const Loading = () => {
	const isFetching: number = useIsFetching();
	const color = "#00ff0a";

	const animation = keyframes`
        0%{
            filter: hue-rotate(0deg);
        }
        100%{
            filter: hue-rotate(360deg);
        }
    `;

	const animate = keyframes`
        0%{
            filter: hue-rotate(0deg);
            transform: scale(1);
        }
        80%,100%{
            filter: hue-rotate(360deg);
            transform: scale(0);
        }
    `;

	const StyledSection = styled("section")(() => ({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		background: "#181818d5",
		animation: animation,
		height: "100%",
		width: "100%",
		zIndex: "5",
		position: "absolute",
		".loader": {
			position: "relative",
			width: "120px",
			height: "120px",
		},
		span: {
			position: "absolute",
			top: "0",
			left: "0",
			width: "100%",
			height: "100%",
			transform: "rotate(calc(18deg * var(--i)))",
		},
		"span::before": {
			content: '" "',
			position: "absolute",
			top: "0",
			left: "0",
			width: "15px",
			height: "15px",
			background: color,
			borderRadius: "50%",
			boxShadow:
				"0 0 10px #00ff0a," +
				"0 0 20px #00ff0a," +
				"0 0 40px #00ff0a," +
				"0 0 60px #00ff0a," +
				"0 0 80px #00ff0a," +
				"0 0 100px #00ff0a",
			animation: `${animate} 2s linear infinite`,
			animationDelay: "calc(0.1s * var(--i))",
		},
	}));

	const spans = Array.from({ length: 20 }, (_, index) => index + 1);

	return (
		<>
			{isFetching > 0 && (
				<StyledSection>
					<div className="loader">
						{spans.map((span, index) => (
							<span
								style={{ "--i": span } as React.CSSProperties}
								key={index}
							></span>
						))}
					</div>
				</StyledSection>
			)}
		</>
	);
};

export default Loading;
