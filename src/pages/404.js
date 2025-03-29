import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				BluWave Digital Entertainment 
			</title>
			<meta name={"description"} content={"The premier company in music entertainment. Parent company of XZ1 Recordings."} />
			<meta property={"og:title"} content={"BluWave Digital Entertainment "} />
			<meta property={"og:description"} content={"The premier company in music entertainment. Parent company of XZ1 Recordings."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/677c6de9e5d27700189acb9e/images/Second%20Vista%20Holdings.jpg?v=2025-01-09T04:25:47.071Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/677c6de9e5d27700189acb9e/images/Emey87-Trainee-Magic.32.png?v=2025-01-09T04:21:22.159Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-152.png?v=2023-03-29T20:05:05.735Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-152.png?v=2023-03-29T20:05:05.735Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-152.png?v=2023-03-29T20:05:05.735Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-152.png?v=2023-03-29T20:05:05.735Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-271.png?v=2023-03-29T20:05:13.498Z"} />
			<meta name={"msapplication-TileColor"} content={"#F2EFEA"} />
		</Helmet>
		<Section
			padding="88px 0 88px 0"
			min-height="100vh"
			quarkly-title="404-6"
			lg-background="#000000"
			background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1541256942802-7b29531f0df8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /auto repeat scroll padding-box"
		>
			<Override slot="SectionContent" max-width="1220px" justify-content="center" />
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text
					color="--light"
					margin="0px 0px 24px 0px"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					font="--headline1"
					lg-color="#ffffff"
				>
					404
				</Text>
				<Text
					width="40%"
					lg-width="80%"
					font="--lead"
					color="--light"
					margin="0px 0px 40px 0px"
					text-align="center"
					lg-color="#ffffff"
				>
					Thanks for visiting the BluWave Digital Entertainment website. The problem is, you've just made it to a 404 page. The page could either be broken or there's something wrong on your end. Click the button below to head home!
				</Text>
				<Link
					font="--lead"
					padding="12px 24px 12px 24px"
					background="--color-dark"
					border-radius="8px"
					href="#"
					text-decoration-line="initial"
					color="--light"
				>
					Go Back to Home
				</Link>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});