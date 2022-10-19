import { FrontCounter } from "../components/FrontCounter";
import PersonIcon from "@mui/icons-material/Person";
import HotelIcon from "@mui/icons-material/Hotel";
import ShowerIcon from "@mui/icons-material/Shower";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ImageRoom1 from "../img/room1.webp";
import ImageRoom2 from "../img/room2.webp";
import ImageRoom3 from "../img/room3.webp";
import houseImg from "../img/house.webp";

export const Home = () => {
	return (
		<div>
			{/* <div className="top_img"></div> */}
			<div className="container">
				<div className="front_about">
					<div className="left_img">
						<img src={houseImg} alt="house" />
					</div>
					<div className="right_about">
						<h1>TomiDom Worker rooms</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
							assumenda temporibus, sunt non enim quo veniam ipsa nisi. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum
							consequatur rem. Molestiae officia cumque voluptate delectus
							tenetur commodi nesciunt eos, nam expedita quaerat saepe enim.
							Quia quam dolor facilis.
						</p>
						<div className="right_about-whatIs">
							<div className="beds">
								<HotelIcon />
								<p>32 beds</p>
							</div>
							<div className="bathrooms">
								<ShowerIcon />
								<p>10 bathrooms</p>
							</div>
							<div className="parking">
								<LocalParkingIcon />
								<p>35 parking spaces</p>
							</div>
							<div className="house_size">
								<ZoomOutMapIcon />
								<p>400m2</p>
							</div>
						</div>

						<a className="btn_details" href="#">
							View Details
						</a>
					</div>
				</div>
			</div>

			<div className="container">
				<h2 className="title">Our Rooms</h2>
				<div className="front_rooms">
					<div className="room">
						<img src={ImageRoom1} alt="Room1" />
						<div className="room_info">
							<h3>Room 1</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
								optio,
							</p>
							<div className="room_infoIcons">
								<div className="rooms_infoIcon">
									<PersonIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<HotelIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<ShowerIcon />
									<p>1</p>
								</div>
								<div className="rooms_infoIcon">
									<ZoomOutMapIcon />
									<p>
										15 m<sup>2</sup>
									</p>
								</div>
							</div>
							{/* <a className="btn_details small" href="#">
							Reade
						</a> */}
						</div>
					</div>
					<div className="room">
						<img src={ImageRoom2} alt="Room2" />
						<div className="room_info">
							<h3>Room 2</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
								optio, quos, veritatis necessitatibus architecto vitae aliquam,
								consequatur et pariatur inventore odio provident maxime. Aliquam
							</p>
							<div className="room_infoIcons">
								<div className="rooms_infoIcon">
									<PersonIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<HotelIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<ShowerIcon />
									<p>1</p>
								</div>
								<div className="rooms_infoIcon">
									<ZoomOutMapIcon />
									<p>
										15 m<sup>2</sup>
									</p>
								</div>
							</div>
							{/* <a className="btn_details small" href="#">
							Reade
						</a> */}
						</div>
					</div>
					<div className="room">
						<img src={ImageRoom3} alt="Room3" />
						<div className="room_info">
							<h3>Room 3</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
								optio, quos, veritatis necessitatibus architecto vitae aliquam,
								consequatur
							</p>
							<div className="room_infoIcons">
								<div className="rooms_infoIcon">
									<PersonIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<HotelIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<ShowerIcon />
									<p>1</p>
								</div>
								<div className="rooms_infoIcon">
									<ZoomOutMapIcon />
									<p>
										15 m<sup>2</sup>
									</p>
								</div>
							</div>
							{/* <a className="btn_details small" href="#">
							Reade
						</a> */}
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<h2 className="title">Gallery</h2>
				<div className="front_gallery">
					<div className="foto1"></div>
					<div className="foto2"></div>
					<div className="foto3"></div>
					<div className="foto4"></div>
					<div className="foto5"></div>
					<div className="foto6"></div>
					<div className="foto7"></div>
					<div className="foto8"></div>
				</div>
			</div>

			<FrontCounter />

			<div className="container">
				<h2 className="title">Free Rooms</h2>
				<div className="front_rooms-free">
					<div className="room">
						<img src={ImageRoom1} alt="Room1" />
						<div className="room_info">
							<h3>Room 1</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
								optio,
							</p>
							<div className="room_infoIcons">
								<div className="rooms_infoIcon">
									<PersonIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<HotelIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<ShowerIcon />
									<p>1</p>
								</div>
								<div className="rooms_infoIcon">
									<ZoomOutMapIcon />
									<p>
										15 m<sup>2</sup>
									</p>
								</div>
							</div>
							<a className="btn_details small" href="#">
								Reade
							</a>
						</div>
					</div>
					<div className="room">
						<img src={ImageRoom2} alt="Room2" />
						<div className="room_info">
							<h3>Room 2</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
								optio, quos, veritatis necessitatibus architecto vitae aliquam,
								consequatur et pariatur inventore odio provident maxime. Aliquam
							</p>
							<div className="room_infoIcons">
								<div className="rooms_infoIcon">
									<PersonIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<HotelIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<ShowerIcon />
									<p>1</p>
								</div>
								<div className="rooms_infoIcon">
									<ZoomOutMapIcon />
									<p>
										15 m<sup>2</sup>
									</p>
								</div>
							</div>
							<a className="btn_details small" href="#">
								Reade
							</a>
						</div>
					</div>
					<div className="room">
						<img src={ImageRoom3} alt="Room3" />
						<div className="room_info">
							<h3>Room 3</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
								optio, quos, veritatis necessitatibus architecto vitae aliquam,
								consequatur
							</p>
							<div className="room_infoIcons">
								<div className="rooms_infoIcon">
									<PersonIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<HotelIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<ShowerIcon />
									<p>1</p>
								</div>
								<div className="rooms_infoIcon">
									<ZoomOutMapIcon />
									<p>
										15 m<sup>2</sup>
									</p>
								</div>
							</div>
							<a className="btn_details small" href="#">
								Reade
							</a>
						</div>
					</div>
					<div className="room">
						<img src={ImageRoom3} alt="Room3" />
						<div className="room_info">
							<h3>Room 4</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
								optio, quos, veritatis necessitatibus architecto vitae aliquam,
								consequatur
							</p>
							<div className="room_infoIcons">
								<div className="rooms_infoIcon">
									<PersonIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<HotelIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<ShowerIcon />
									<p>1</p>
								</div>
								<div className="rooms_infoIcon">
									<ZoomOutMapIcon />
									<p>
										15 m<sup>2</sup>
									</p>
								</div>
							</div>
							<a className="btn_details small" href="#">
								Reade
							</a>
						</div>
					</div>
					<div className="room">
						<img src={ImageRoom3} alt="Room3" />
						<div className="room_info">
							<h3>Room 5</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
								optio, quos, veritatis necessitatibus architecto vitae aliquam,
								consequatur
							</p>
							<div className="room_infoIcons">
								<div className="rooms_infoIcon">
									<PersonIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<HotelIcon />
									<p>4</p>
								</div>
								<div className="rooms_infoIcon">
									<ShowerIcon />
									<p>1</p>
								</div>
								<div className="rooms_infoIcon">
									<ZoomOutMapIcon />
									<p>
										15 m<sup>2</sup>
									</p>
								</div>
							</div>
							<a className="btn_details small" href="#">
								Reade
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
