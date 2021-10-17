import React from 'react';
import { Carousel } from 'react-bootstrap';

import slider1 from '../../../images/banners/slider-1.png';
import slider2 from '../../../images/banners/slider-2.jpg';
import slider3 from '../../../images/banners/slider-3.jpg';
import About from '../About/About';
import Doctors from '../Doctors/Doctors';
import GetOffers from '../GetOffers/GetOffers';
import HealthcareBanner from '../HealthcareBanner/HealthcareBanner';
import Services from '../Services/Services';

const Home = () => {
	return (
		<main>

			{/* Banner Slider Start */}
			<div>
				<Carousel fade variant="dark">

					{/* Banner Slider-1 */}
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={slider1}
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>Feel better soon!</h3>
							<p>May good health envelop you, spurring a quick recovery.</p>
						</Carousel.Caption>
					</Carousel.Item>


					{/* Banner Slider-2 */}
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={slider2}
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>Have a speedy recovery!</h3>
							<p>We hope each new day brings you closer to a full and speedy recovery!</p>
						</Carousel.Caption>
					</Carousel.Item>


					{/* Banner Slider-3 */}
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={slider3}
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Hoping you find strength with each new day</h3>
							<p>Thinking of you lots and hoping for your speedy recovery.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			{/* Banner Slider END */}

			{/* About Section */}
			<About></About>

			{/* Services Section */}
			<Services></Services>

			{/* HealthCare Banner */}
			<HealthcareBanner></HealthcareBanner>

			{/* Best Doctors Sectio */}
			<Doctors></Doctors>

			{/* Get Offers Section */}
			<GetOffers></GetOffers>
		</main>
	);
};

export default Home;