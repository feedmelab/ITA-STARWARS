/* eslint-disable import/no-anonymous-default-export */
import { Nav, active } from "./Nav.styles";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
export default () => {
	return (
		<Container>
			<Row className="mt-5 d-flex align-items-center">
				<Col></Col>
				<Col className="d-flex justify-content-center">
					<Nav>
						<ul>
							<li>
								<NavLink className={(navData) => (navData.isActive ? "active" : "")} to="/">
									HOME
								</NavLink>
							</li>
							<li>|</li>
							<li>
								<NavLink className={(navData) => (navData.isActive ? "active" : "")} to="/starships">
									STARSHIPS
								</NavLink>
							</li>
							<li>|</li>
							<li>
								<NavLink className={(navData) => (navData.isActive ? "active" : "")} to="/cinema">
									CINEMA
								</NavLink>
							</li>
						</ul>
					</Nav>
				</Col>
				<Col className="d-flex justify-content-end align-self-end"></Col>
			</Row>
		</Container>
	);
};
