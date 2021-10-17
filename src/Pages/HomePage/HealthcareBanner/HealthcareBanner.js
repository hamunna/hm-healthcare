import React from 'react';
import healthcareBanner from '../../../images/health-care-banner.jpg';

const HealthcareBanner = () => {
	return (
		<div className="d-flex my-5 py-5">

			{/* Left side of About */}
			<div>
				<img src={healthcareBanner} alt="" />
			</div>

			{/* Right Side of About */}
			<div className="theme-primary-bg text-white p-5">
				<h2 className="fw-bold text-capitalize">the world's best treatment in our hospital</h2>

				<h6 className="my-4 fw-bolder">Health services consist of medical professionals</h6>


				<p className="my-4">Medical professionals, organizations, and ancillary health care workers who provide medical care to those in need. Health services serve patients, families, communities, and populations. These services are centered around making health care accessible, high quality, and patient-centered.</p>

				<button className="theme-secondary-btn color-white fw-bold">Know more</button>

			</div>

		</div>
	);
};

export default HealthcareBanner;