import React from 'react';
import { Carousel } from 'react-bootstrap';

import slider1 from '../../../../public/images/banners/slider-1.png';
import slider2 from '../../../../public/images/banners/slider-2.jpg';
import slider3 from '../../../../public/images/banners/slider-3.jpg';

const Home = () => {
	return (
		<div>
			<Carousel fade>

				{/* Banner Slider-1 */}
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={slider1}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>


			</Carousel>
		</div>
	);
};

export default Home;