import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
	return (
		<div id="about" style={{paddingTop: '1px'}}>
			<Container>
				<div className="d-flex gap-3 my-5 py-5">

					{/* Left side of About */}
					<div>
						<h5 className="text-uppercase text-secondary fw-bolder">About us</h5>
						<h2 className="text-uppercase">the world's best treatment in our hospital</h2>

						<h4 className="theme-primary-text">Health services consist of medical professionals, organizations, and ancillary health</h4>

						<p className="text-secondary">Medical professionals, organizations, and ancillary health care workers who provide medical care to those in need. Health services serve patients, families, communities, and populations. These services are centered around making health care accessible, high quality, and patient-centered.</p>

						<button className="theme-primary-btn color-white fw-bold">Know more</button>

					</div>

					{/* Right Side of About */}
					<div>
						<iframe style={{ border: '3px solid #5663c1', borderRadius: '10px'}} width="560" height="315" src="https://www.youtube.com/embed/cKj94KXmINY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default About;