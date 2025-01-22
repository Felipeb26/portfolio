import { styled, SxProps, Theme } from "@mui/material";
import React, { ReactNode } from "react";

interface StyledCardProps {
	children: ReactNode;
	sx?: SxProps<Theme>;
}

export const StyledCard: React.FC<StyledCardProps> = ({ children, sx }) => {
	const StyledCard = styled("div")(({ theme }) => ({
		border: `2px solid ${theme.palette.primary.contrastText}`,
		borderRadius: "10px",
		background: "transparent",
		padding: "0.8rem",
		minWidth: "10rem",
		width: "10vw",
		minHeight: "12vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "1rem",
		transition: "all ease-in-out 500ms",
		color: theme.palette.primary.contrastText,
		letterSpacing: "0.15rem",
		flexWrap: "wrap",
		"&:hover": {
			border: `2px solid ${theme.palette.secondary.light}`,
			boxShadow: `0 0 15px ${theme.palette.secondary.light}`,
		},
	}));

	return <StyledCard sx={sx}>{children}</StyledCard>;
};
