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
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { PAGES } from "../../configs/routes/RoutesContants";
import { StyledNavBar, MaterialUISwitch } from "./StyledNavBar";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState<string>(i18n.language);
	const [anchorNav, setAnchorNav] = useState<null | HTMLElement>();
	const [darkTheme, setDarkTheme] = useState(true);
	const navigation = useNavigate()

	const changeLanguage = (changeEvent: SelectChangeEvent) => {
		const lng = changeEvent.target.value;
		i18n.changeLanguage(lng);
		setLanguage(lng);
	};

	const changeTheme = () => {
		setDarkTheme((value) => !value);
		console.log(darkTheme);
	};

	const openMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorNav(event.currentTarget);
	};

	const closeMenu = () => {
		setAnchorNav(null);
	};

	const navigate = () =>{
		navigation("home")
	}

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
						onClick={navigate}
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
								<Typography variant="inherit" key={index}>
									{page.baseName
										? page.baseName
										: page.routeName}
								</Typography>
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
						<MaterialUISwitch onClick={changeTheme} />
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
												: page.routeName}
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
						<Typography variant="h2">Batsworks</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default NavBar;
