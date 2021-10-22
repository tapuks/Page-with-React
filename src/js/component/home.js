import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import hallowen from "../../img/hallowen.png";
import chucky from "../../img/chucky3.png";
import Chucky from "./Chucky.js";
import cuchillo from "../../img/cuchillo.png";
import murcielago from "../../img/murcielago1.gif";

import { array } from "prop-types";
//include images into your bundle

//create your first component
export function Home() {
	const [modalChucky, setModalChucky] = useState(false);
	const [modalGameChuky, setModalGameChucky] = useState(false);
	const [gameChuky, setGameChucky] = useState(false);
	const [contadorGameChuky, setContadorGameChucky] = useState(30);
	const [hiddenCuchillos, setHiddenCuchillos] = useState([]);

	const modal = () => {
		return (
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Has depertado a chucky</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>¿Truco o trato?</p>
				</Modal.Body>

				<Modal.Footer>
					<Button
						onClick={() => setModalChucky(false)}
						variant="secondary">
						Trato
					</Button>
					<Button
						onClick={() => {
							setModalChucky(false);
							setModalGameChucky(true);
						}}
						variant="primary">
						Truco
					</Button>
				</Modal.Footer>
			</Modal.Dialog>
		);
	};

	const cuchillos = () => {
		let array = [];
		for (let i = 1; i < 40; i++) {
			if (i % 2 == 0) {
				array.push(
					<span className="mx-2">
						<img
							onClick={() =>
								setHiddenCuchillos([...hiddenCuchillos, i])
							}
							className={
								hiddenCuchillos.includes(i)
									? "img-cuchillo ocult"
									: "img-cuchillo"
							}
							src={cuchillo}></img>
					</span>
				);
			} else {
				array.push(
					<span className="mx-2">
						<img
							// ref={refchuchillo}
							onClick={() =>
								setHiddenCuchillos([...hiddenCuchillos, i])
							}
							className={
								hiddenCuchillos.includes(i)
									? "img-cuchillo ocult"
									: "img-cuchillo"
							}
							src="https://us.123rf.com/450wm/photopotam/photopotam1603/photopotam160300003/53038036-un-cuchillo-de-cer%C3%A1mica-blanca-sobre-fondo-negro-que-refleja.jpg?ver=6"></img>
					</span>
				);
			}
		}
		// setArrayCuchillos(array);
		return array;
	};
	console.log("hiddencuchillos", hiddenCuchillos);
	console.log("include", hiddenCuchillos.includes(1));
	// useEffect(() => {
	// 	if (gameChuky == true) {
	// 		setInterval(() => {
	// 			setContadorGameChucky(contadorGameChuky - 1);
	// 		}, 1000);
	// 	}
	// }, [gameChuky]);

	useEffect(() => {
		if (contadorGameChuky == 30) {
			const interval = setInterval(() => {
				setContadorGameChucky(
					contadorGameChuky => contadorGameChuky - 1
				);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [gameChuky]);

	return (
		<Container>
			<Row>
				<Col xs={3}>
					<div className="contain-logo">
						<img
							className="img-logo"
							src="https://pbs.twimg.com/profile_images/1410575489681571840/AyfTF5db.jpg"></img>
						<div className="eyes-logo1"></div>
						<div className="eyes-logo2"></div>
					</div>
				</Col>
				<Col>
					<img className="img-title" src={hallowen}></img>
				</Col>
				<Col xs={3}>
					<img
						className="img-sangre"
						src="https://w7.pngwing.com/pngs/137/93/png-transparent-macbeth-blood-king-duncan-blood-miscellaneous-text-photography.png"></img>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col>
					<div className="d-flex">
						<img
							className="img-murcielago mt-5 pt-5"
							src={murcielago}></img>
						<img className="img-murcielago" src={murcielago}></img>
						<img
							className="img-murcielago margtop40"
							src={murcielago}></img>
						<img
							className="img-murcielago margintop20"
							src={murcielago}></img>
					</div>
				</Col>
				<Col>
					{/* <img
						className=""
						src="https://cdn.yoamoloszapatos.com/wp-content/uploads/2019/10/07205140/source-3-1.gif"></img> */}
				</Col>
				{/* <Col>
					<img className="img-murcielago" src={murcielago}></img>
				</Col>
				<Col>
					<img className="img-murcielago" src={murcielago}></img>
				</Col>
				<Col>
					<img className="img-murcielago" src={murcielago}></img>
				</Col>
				<Col>
					<img className="img-murcielago" src={murcielago}></img>
				</Col> */}{" "}
			</Row>

			{/* Game chucky */}
			{gameChuky == true ? (
				<Row className="">
					{/* {IntervalExample()} */}
					<Col className="row-game-chucky">{cuchillos()}</Col>
					<Col>
						<img
							className="chucky animation-chucky"
							src={chucky}></img>
					</Col>
					<Col>
						<h1 className="row-game-chucky time-game">
							{contadorGameChuky}
						</h1>
					</Col>
				</Row>
			) : (
				<Row className="">
					<Col></Col>
					{modalChucky == true && modal()}
					{modalGameChuky == true && (
						<Modal.Dialog>
							<Modal.Header>
								<Modal.Title>Chucky viene a por ti</Modal.Title>
							</Modal.Header>

							<Modal.Body>
								<p>
									Tienes 20 segundos para huir, encuentra la
									llave en uno de los cuchillos de chucky
								</p>
							</Modal.Body>

							<Modal.Footer>
								<Button
									onClick={() => {
										setModalGameChucky(false);
										setGameChucky(true);
										setContadorGameChucky(30);
									}}
									variant="primary">
									Entendido
								</Button>
							</Modal.Footer>
						</Modal.Dialog>
					)}
					{}
					<Col>
						<img
							onClick={() => setModalChucky(true)}
							className="chucky"
							src={chucky}></img>
					</Col>
					<Col></Col>
				</Row>
			)}
		</Container>
	);
}
