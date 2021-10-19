import React from 'react';
import healthcareBanner from '../../../images/health-care-banner.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const arrow = <FontAwesomeIcon icon={faArrowRight} />

const HealthcareBanner = () => {
	return (
		<div className="d-md-flex d-md-column d-sm-flex flex-sm-row mb-5">

			{/* Left side of About */}
			<div className="w-100">
				<img className="img-fluid" src={healthcareBanner} alt="" />
			</div>

			{/* Right Side of About */}
			<div className="theme-primary-bg text-white p-5 w-100">
				<h2 className="fw-bold text-capitalize">the world's best treatment in our hospital</h2>

				<h6 className="my-4 fw-bolder">Health services consist of medical professionals</h6>


				<p className="my-4">Medical professionals, organizations, and ancillary health care workers who provide medical care to those in need. Health services serve patients, families, communities, and populations. These services are centered around making health care accessible, high quality, and patient-centered.</p>

				<button className="theme-secondary-btn color-white fw-bold">Know more
					<span className="mx-2">{arrow}</span>
				</button>

			</div>

		</div>
	);
};

export default HealthcareBanner;