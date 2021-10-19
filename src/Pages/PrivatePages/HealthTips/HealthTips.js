import React from 'react';
import { Container } from 'react-bootstrap';
import './HealthTips.css';

const HealthTips = () => {
	return (
		<div id="health-tips" className="my-5">
			<div className="tips-img">
				<img src="https://healthtipsus.com/wp-content/uploads/2021/04/20-health-tips-for-20202021.jpg" alt="" />
			</div>

			<Container>
				<div className="text-center my-5">
					<h1 className="fw-bold text-danger">5 Most effective health tips that you should follow</h1>

					<p>Everyone knows that eating a balanced diet, exercising and getting plenty of rest are key to maintaining good health. However, that can seem to be an impossible task while in college. Frequently, the appeal of sweets, fast food, caffeine and alcohol outweigh healthy options when you’re in the company of friends or under stress from coursework. Here are some tips for staying healthy.</p>
				</div>

				<div>
					<div className="my-5">
						<h3>1. Eat a healthy diet</h3>
						<p>Eat a combination of different foods, including fruit, vegetables, legumes, nuts and whole grains. Adults should eat at least five portions (400g) of fruit and vegetables per day. You can improve your intake of fruits and vegetables by always including veggies in your meal; eating fresh fruit and vegetables as snacks; eating a variety of fruits and vegetables; and eating them in season. By eating healthy, you will reduce your risk of malnutrition and noncommunicable diseases (NCDs) such as diabetes, heart disease, stroke and cancer.</p>
					</div>

					<div  className="my-5">
						<h3>2. Consume less salt and sugar</h3>
						<p>Filipinos consume twice the recommended amount of sodium, putting them at risk of high blood pressure, which in turn increases the risk of heart disease and stroke. Most people get their sodium through salt. Reduce your salt intake to 5g per day, equivalent to about one teaspoon. It’s easier to do this by limiting the amount of salt, soy sauce, fish sauce and other high-sodium condiments when preparing meals; removing salt, seasonings and condiments from your meal table; avoiding salty snacks; and choosing low-sodium products.</p>
					</div>

					<div  className="my-5">
						<h3>3. Reduce intake of harmful fats</h3>
						<p>Fats consumed should be less than 30% of your total energy intake. This will help prevent unhealthy weight gain and NCDs. There are different types of fats, but unsaturated fats are preferable over saturated fats and trans-fats. WHO recommends reducing saturated fats to less than 10% of total energy intake; reducing trans-fats to less than 1% of total energy intake; and replacing both saturated fats and trans-fats to unsaturated fats.</p>
					</div>

					<div  className="my-5">
						<h3>4. Avoid harmful use of alcohol</h3>
						<p>There is no safe level for drinking alcohol. Consuming alcohol can lead to health problems such as mental and behavioural disorders, including alcohol dependence, major NCDs such as liver cirrhosis, some cancers and heart diseases, as well as injuries resulting from violence and road clashes and collisions.</p>
					</div>

					<div  className="my-5">
						<h3>5. Don’t smoke</h3>
						<p>Smoking tobacco causes NCDs such as lung disease, heart disease and stroke. Tobacco kills not only the direct smokers but even non-smokers through second-hand exposure. Currently, there are around 15.9 million Filipino adults who smoke tobacco but 7 in 10 smokers are interested or plan to quit.</p>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default HealthTips;