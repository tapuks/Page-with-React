import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import hallowen from "../../img/hallowen.png";
import chucky from "../../img/chucky.png";
import Chucky from "./Chucky.js";
import cuchillo from "../../img/cuchillo.png";
import { array } from "prop-types";
//include images into your bundle

//create your first component
export function Home() {
	const [modalChucky, setModalChucky] = useState(false);
	const [modalGameChuky, setModalGameChucky] = useState(false);
	const [gameChuky, setGameChucky] = useState(false);

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
		for (let i = 1; i < 100; i++) {
			array.push(
				<span>
					<img className="img-cuchillo" src={cuchillo}></img>
				</span>
			);
		}
		return array;
	};

	return (
		<Container>
			<Row>
				<Col xs={4}>
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
				{/* <Col></Col> */}
			</Row>
			{gameChuky == true ? (
				<Row className="mt-5">
					<Col></Col>
					<Col>
						<img className="chucky" src={chucky}></img>
					</Col>
					<Col>{cuchillos()}</Col>
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
