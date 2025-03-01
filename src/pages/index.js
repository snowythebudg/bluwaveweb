import React from "react";
import theme from "theme";
import { Theme, Link, Text, LinkBox, Box, Section, Icon, Strong, Span, List, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Formspree } from "@quarkly/components";
import { MdArrowDownward, MdCloudUpload, MdRefresh } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
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
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-4" lg-background="#000000" background="#000000">
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="flex-start"
				flex-direction="row"
				width="30%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--headline3"
						sm-margin="0px 0 0px 0"
						display="block"
						lg-color="#ffffff"
						lg-font="headline1"
						color="#ffffff"
					>
						BluWave Digital Entertainment
					</Text>
				</LinkBox>
			</Box>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1579818276653-bc3240840cf6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						The premier company in music entertainment
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						BluWave Digital Entertainment
						<br />
						<br />
						<br />
						<br />
						<br />
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section padding="100px 40px 100px 40px" background="--color-dark" sm-padding="40px 20px 40px 20px" lg-background="#000000">
			<Override
				slot="SectionContent"
				flex-direction="row"
				grid-gap="20px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-flex-direction="column"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
				sm-min-width="280px"
			/>
			<Text
				color="--light"
				font="--headline2"
				width="20%"
				text-align="right"
				lg-font="--headline2Lg"
				lg-width="100%"
				lg-text-align="left"
				sm-margin="16px 0px 0px 0px"
				lg-color="#ffffff"
			>
				About us.
			</Text>
			<Box width="40%" md-width="100%" lg-width="35%">
				<Text
					color="--light"
					margin="0px 0px 12px 0px"
					font="--lead"
					lg-width="100%"
					sm-width="100%"
					md-width="540px"
					lg-color="#ffffff"
				>
					BluWave Digital Entertainment is a all-inclusive entertainment and label management company owned and operated by BudgieMint. We run multiple companies specializing in media and entertainment services. You can see the (currently small) list of the companies we manage down below. You can also read about and apply for label distribution management services
				</Text>
			</Box>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
			lg-background="#000000"
			background="#000000"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				record label
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				XZ1 Recordings
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				XZ1 Recordings, also known as XZ1 Recording Ventures is a distribution-focused record label focusing on smaller releases (singles, EPs, eventually albums) and focuses on upcoming artists. You can check out XZ1 Recordings at{" "}
				<Link href="#">
					https://xzone.64-b.it
				</Link>
			</Text>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
			lg-background="#000000"
			background="#000000"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				Music publisher
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				XZ1 MUSIC PUBLISHING
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				XZ1 MUSIC PUBLISHING is the publishing branch of XZ1 Recordings. We are currently servicing XZ1 clients but will expand to non-XZ1 clients soon. XZ1 MUSIC PUBLISHING is serviced by AllTrack and our IPI is 01280759627{"\n\n"}
			</Text>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
			lg-background="#000000"
			background="#000000"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				music distribution
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Fusion Audio Distribution
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Fusion Audio Distribution is a free to use music distribution service founded in April 2024. Fusion Audio Distribution is in the process of shutting down. All releases are being redirected to XZ1 Recordings (see above). You can check out Fusion Audio Distribution at{" "}
				<Link
					href="#"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					https://fusion.l5.ca
				</Link>
			</Text>
		</Section>
		<Section
			padding="60px 0 90px 0"
			sm-padding="60px 0 60px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			background="--color-dark"
			quarkly-title="Advantages/Features-6"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				sm-min-width="280px"
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-width="100%"
				md-margin="0px 0px 30px 0px"
				margin="0px 0px 48px 0px"
				lg-justify-content="center"
			>
				<Text as="p" font="--base" color="--primary" margin="0px 0px 8px 0px">
					<Strong>
						BluWave label distribution and royalty management services
					</Strong>
				</Text>
				<Text
					as="h1"
					margin="0px"
					font="--headline2"
					color="--light"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
					lg-text-align="center"
				>
					What is BluWave label management?
				</Text>
				<Text
					as="p"
					margin="20px 0 0 0"
					font="--lead"
					font-size="20px"
					font-weight="300"
					color="--light"
					width="50%"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="--base"
					lg-text-align="center"
					lg-width="100%"
				>
					BluWave Digital Entertainment provides label distribution and royalty management services for your record label. We sign distribution contracts on your behalf, send releases to be released, send you your royalties, and much more. There are tons of perks you get when you rely on BluWave for your label's distribution and royalty management
				</Text>
			</Box>
			<List
				margin="40px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				as="ul"
				sm-margin="24px 0 0 0"
				list-style-type="none"
				font="normal normal 18px/150% sans-serif"
				display="grid"
				flex-direction="column"
				grid-gap="24px 32px"
				lg-margin="32px 0px 0px 0px"
				grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="md"
						icon={MdCloudUpload}
						size="20px"
						color="--primary"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" color="--light">
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Fast distribution. BluWave provides fast distribution (7 days) for your label through Labelcaster.{" "}
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="md"
						icon={MdRefresh}
						size="20px"
						color="--primary"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" font="18px/27px --fontFamily-sans" color="--light">
						<Span
							font-weight="600"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Automatic royalties. Royaltiies will automatically be sent to you and the artists that are on your label when you reach a certain threshold (50 CAD)
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="io"
						icon={IoMdSettings}
						size="20px"
						color="--primary"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" color="--light" font="18px/27px --fontFamily-sans">
						<Span
							font-weight="600"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Reliable customer service. BluWave is with you 24/7. Our helpful customer service can help you with your management needs quickly.
						</Span>
					</Text>
				</Box>
			</List>
		</Section>
		<Section padding="120px 0 130px 0" lg-padding="80px 0 90px 0" quarkly-title="Stages/Steps-2" background="#000000">
			<Text margin="0px 0px 20px 0px" font="--headline2" color="--light">
				How to become a BluWave managed label
			</Text>
			<Text
				margin="0px 500px 80px 0px"
				color="#ffffff"
				font="normal 300 18px/1.5 --fontFamily-sansHelvetica"
				lg-margin="0px 0 80px 0px"
				md-margin="0px 0 50px 0px"
				background="#000000"
			>
				Becoming a BluWave managed label means your label will become a division of BluWave. Your label's releases will be released under BluWave's provider names and label, although your (C) line will show up as whatever you want it to be, just with "a BluWave managed label" or "a division of BluWave Digital Entertainment" at the end. Other than the distribution and royalties, your label will be fully independent.
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(2, 1fr)"
				grid-template-rows="repeat(2, 1fr)"
				grid-gap="40px 30px"
				md-grid-template-columns="1fr"
				md-grid-template-rows="auto"
				md-grid-gap="26px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					padding="0px 70px 0px 0px"
					lg-padding="0px 0 0px 0px"
				>
					<Box
						min-width="40px"
						min-height="40px"
						background="#00b3ff"
						align-items="center"
						display="flex"
						justify-content="center"
						width="40px"
						height="40px"
						border-radius="50%"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							1
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 25px">
						<Text margin="0px 0px 15px 0px" border-color="--color-light" color="--light" font="normal 500 20px/1.2 --fontFamily-sans">
							Contact us below
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff" background="#000000">
							Send us a message below and we'll decide whether your label is right for our management services
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					padding="0px 70px 0px 0px"
					lg-padding="0px 0 0px 0px"
				>
					<Box
						min-width="40px"
						min-height="40px"
						background="#00b3ff"
						display="flex"
						align-items="center"
						justify-content="center"
						width="40px"
						height="40px"
						border-radius="50%"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							2
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 25px">
						<Text margin="0px 0px 15px 0px" border-color="--color-light" color="--light" font="normal 500 20px/1.2 --fontFamily-sans">
							Enroll in the management program
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
							You need to be an actual musician for this. Once you get accepted, send us your artist information and we'll get you registered in first.
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					padding="0px 70px 0px 0px"
					lg-padding="0px 0 0px 0px"
				>
					<Box
						min-width="40px"
						min-height="40px"
						background="#00b3ff"
						display="flex"
						align-items="center"
						justify-content="center"
						width="40px"
						height="40px"
						border-radius="50%"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							3
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 25px">
						<Text margin="0px 0px 15px 0px" border-color="--color-light" color="--light" font="normal 500 20px/1.2 --fontFamily-sans">
							Register your label's artists
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
							Send us the information for your label's artists and we'll add them into our system.
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					padding="0px 70px 0px 0px"
					lg-padding="0px 0 0px 0px"
				>
					<Box
						min-width="40px"
						min-height="40px"
						background="#00b3ff"
						display="flex"
						align-items="center"
						justify-content="center"
						width="40px"
						height="40px"
						border-radius="50%"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							4
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 25px">
						<Text margin="0px 0px 15px 0px" border-color="--color-light" color="--light" font="normal 500 20px/1.2 --fontFamily-sans">
							Start releasing music for your artists!
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
							Use the XZ1 Recordings' music submission form and specifically state that you're a BluWave managed label member and we'll send your releases off to be signed, you and your artist will both have to sign contracts for the release which will be sent to your emails.{" "}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-dark" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box>
						<Text
							font="--base"
							color="--light"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
						>
							COntact Bluwave
						</Text>
						<Text font="--headline2" max-width="500px" margin="10px 0 0 0" color="#ffffff">
							Want to inquire about label management?
						</Text>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Formspree endpoint="xeqpgrlv">
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Name
									</Text>
									<Input width="100%" name="name" type="text" />
								</Box>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</Box>
								<Box display="flex" flex-direction="column" grid-column="1 / span 2">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</Box>
								<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
									<Button background="#1300ff">
										Send
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="50px 0 50px 0" quarkly-title="Footer-2" lg-background="#000000 radial-gradient(circle at center,#ff0004 0%,rgba(0,0,0,1) 100%)" background="#000000 url() 0% 0% /auto repeat scroll padding-box">
			<Box display="flex" justify-content="space-between" sm-flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="#ffffff"
					sm-margin="0px 0px 15px 0px"
					sm-text-align="center"
					lg-color="#ffffff"
				>
					© 2025 BluWave Digital Entertainment. All rights reserved
					<br />
					Owned and operated by BudgieMint (https://ebb.l5.ca)
				</Text>
				<Box display="grid" grid-template-columns="repeat(5, 1fr)" grid-gap="16px 24px" sm-align-self="center">
					<LinkBox href="https://instagram.com/teaofthetemple" lg-href="#https://instagram.com/teaofthetemple">
						<Icon
							category="fa"
							icon={FaInstagram}
							size="24px"
							color="#b600ff"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
							lg-color="#ff07f0"
						/>
					</LinkBox>
					<LinkBox href="https://github.com/snowythebudg" lg-href="#https://github.com/snowythebudg">
						<Icon
							category="fa"
							icon={FaGithub}
							size="24px"
							color="#ffffff"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
							lg-color="#ffffff"
						/>
					</LinkBox>
					<LinkBox href="https://youtube.com/@mintybudgie" lg-href="#https://youtube.com/@mintybudgie">
						<Icon
							category="fa"
							icon={FaYoutube}
							size="24px"
							color="#ff0b00"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
							lg-color="#ff0000"
						/>
					</LinkBox>
				</Box>
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