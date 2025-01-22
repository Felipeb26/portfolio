import { styled } from "@mui/material";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface StyledButtonProps {
	children: ReactNode;
	to: string;
}

const StyledNavBar: React.FC<StyledButtonProps> = ({ children, to }) => {
	const StyledNavBar = styled(NavLink)(({ theme }) => ({
		color: theme.palette.secondary.main,
		margin: "0 0.5rem",
		textTransform: "uppercase",
		fontWeight: "bold",
		textDecoration: "none",
		position: "relative",
		"&.active": {
			color: theme.palette.secondary.light,
		},
		"&::after": {
			content: '""',
			position: "absolute",
			backgroundColor: theme.palette.secondary.light,
			width: "100%",
			height: "3px",
			left: "0",
			right: "40%",
			bottom: "-0.3rem",
			transition: "all 0.5s ease-in-out",
			transform: "scale(0, 0.8)",
			borderRadius: "10px",
		},

		"&:hover": {
			fontWeight: "bold",
			textDecoration: "none",
		},

		"&:hover::after": {
			transform: "scale(1, 1)",
		},
	}));

	return (
		<>
			<StyledNavBar to={to}>{children}</StyledNavBar>
		</>
	);
};

export default StyledNavBar;
