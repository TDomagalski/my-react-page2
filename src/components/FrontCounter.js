import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

export const FrontCounter = () => {
	// let [counter, setCounter] = useState(0);

	// useEffect(() => {
	// 	if (
	// 		counter < maxRangeYears ||
	// 		counter < maxRangeArea ||
	// 		counter < maxRangeRooms ||
	// 		counter < maxRangeVisitors
	// 	) {
	// 		setTimeout(() => setCounter(counter + 1), 100);
	// 	}
	// });

	return (
		<div className="front_counter">
			<div className="container">
				<div className="counter">
					<h2 className="front_counter-num">
						<CountUp
							start={0}
							end={2}
							enableScrollSpy={true}
							scrollSpyOnce={true}
						/>
					</h2>
					<p>Years of Service</p>
				</div>
				<div className="counter">
					<h2 className="front_counter-num">
						<CountUp
							start={0}
							end={450}
							enableScrollSpy={true}
							scrollSpyOnce={true}
						/>
					</h2>
					<p>Sq. Meters Area</p>
				</div>
				<div className="counter">
					<h2 className="front_counter-num">
						<CountUp
							start={0}
							end={10}
							enableScrollSpy={true}
							scrollSpyOnce={true}
						/>
					</h2>
					<p>Comfortable Rooms</p>
				</div>
				<div className="counter">
					<h2 className="front_counter-num">
						<CountUp
							start={0}
							end={420}
							enableScrollSpy={true}
							scrollSpyOnce={true}
						/>
					</h2>
					<p>Happy Visitors</p>
				</div>
			</div>
		</div>
	);
};
