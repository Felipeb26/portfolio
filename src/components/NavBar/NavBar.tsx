import { Brightness1, Brightness5, LocalLibrary } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	IconButton,
	Menu,
	MenuItem,
	MenuList,
	Select,
	SelectChangeEvent,
	Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { PAGES } from "../../configs/routes/RoutesContants";
import StyledNavBar from "./StyledNavBar";

const NavBar = () => {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState<string>(i18n.language);
	const [anchorNav, setAnchorNav] = useState<null | HTMLElement>();
	const [darkTheme, setDarkTheme] = useState(true);

	const changeLanguage = (changeEvent: SelectChangeEvent) => {
		const lng = changeEvent.target.value;
		i18n.changeLanguage(lng);
		setLanguage(lng)
	};

	const changeTheme = () => {
		setDarkTheme((value) => !value);
	};

	const openMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorNav(event.currentTarget);
	};

	const closeMenu = () => {
		setAnchorNav(null);
	};

	return (
		<>
			<AppBar position="absolute">
				<Toolbar>
					<IconButton
						size="large"
						color="secondary"
						edge="start"
						aria-label="menu-btn"
						sx={{ display: { xs: "none", md: "flex" } }}
					>
						<LocalLibrary fontSize="large" />
					</IconButton>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							alignItems: "center",
						}}
						display="flex"
						justifyContent="end"
					>
						{PAGES.map((page, index) => (
							<StyledNavBar to={page.routeName} key={index}>
								{page.baseName
									? page.baseName
									: `teste ${index}`}
							</StyledNavBar>
						))}
						<Select
							defaultValue="pt"
							value={language}
							onChange={changeLanguage}
						>
							<MenuItem value={"pt"} color="secondary">
								portugues
							</MenuItem>
							<MenuItem value={"en"} color="secondary">
								ingles
							</MenuItem>
						</Select>
						<IconButton onClick={changeTheme}>
							{darkTheme ? (
								<Brightness5 color="secondary" />
							) : (
								<Brightness1 color="secondary" />
							)}
						</IconButton>
					</Box>
					{/* Para quando for layout mobile e tablet */}
					<Box
						sx={{
							display: { xs: "flex", md: "none" },
						}}
						display="flex"
						justifyContent="end"
					>
						<IconButton
							edge="start"
							color="secondary"
							size="large"
							onClick={openMenu}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							anchorEl={anchorNav}
							open={Boolean(anchorNav)}
							onClose={closeMenu}
							sx={{
								display: { xs: "flex", md: "none" },
							}}
							color="primary"
						>
							<MenuList
								sx={{
									background: "#a72c2c46",
									alignItems: "center",
									display: "flex",
									flexDirection: "column",
								}}
							>
								{PAGES.map((page, index) => (
									<MenuItem onClick={closeMenu} key={index}>
										<StyledNavBar to={page.routeName}>
											{page.baseName
												? page.baseName
												: `teste ${index}`}
										</StyledNavBar>
									</MenuItem>
								))}
								<IconButton onClick={changeTheme}>
									{darkTheme ? (
										<Brightness5 color="secondary" />
									) : (
										<Brightness1 color="secondary" />
									)}
								</IconButton>
							</MenuList>
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default NavBar;
