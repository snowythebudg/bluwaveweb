import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"labelmgmt"} />
		<Helmet>
			<title>
				Second Vista Holdings | See Beyond, Experience Tomorrow.
			</title>
			<meta name={"description"} content={"The holdings company with a focus on media. See beyond. Experience Tomorrow"} />
			<meta property={"og:title"} content={"Second Vista Holdings | See Beyond, Experience Tomorrow."} />
			<meta property={"og:description"} content={"The holdings company with a focus on media. See beyond. Experience Tomorrow"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/677c6de9e5d27700189acb9e/images/Second%20Vista%20Holdings.jpg?v=2025-01-09T04:25:47.071Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/677c6de9e5d27700189acb9e/images/Emey87-Trainee-Magic.32.png?v=2025-01-09T04:21:22.159Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-152.png?v=2023-03-29T20:05:05.735Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-152.png?v=2023-03-29T20:05:05.735Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-152.png?v=2023-03-29T20:05:05.735Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-152.png?v=2023-03-29T20:05:05.735Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-271.png?v=2023-03-29T20:05:13.498Z"} />
			<meta name={"msapplication-TileColor"} content={"#F2EFEA"} />
		</Helmet>
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