import * as React from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Button from "./shared/FormButton";

export interface CarouselProps {}

function SampleNextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block", right: '18px' }}
		onClick={onClick}
	  />
	);
}
  
function SamplePrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block", left: '8px', zIndex: 1000}}
		onClick={onClick}
	  />
	);
}

const Carousel: React.SFC<CarouselProps> = () => {
	const [data, setData] = React.useState([] as any);
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
      	prevArrow: <SamplePrevArrow />,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	};

	React.useEffect(() => {
		const getApiData = async () => {
			const result = await axios(
				"https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
			);
			setData(result.data.Details);
		};
		getApiData();
	}, []);
    
    const handleSubmit = () => {
		navigate(`contact-us`);
	};
	return (
		<div className="carousel">
			<Slider {...settings}>
			{data.map((item: any, index: any) => {
				return <div key={index}>
					<div className="carousel-block" style={{backgroundImage: `url(${item.ImageUrl})`}}></div>
					<div className="carousel-block__content">
						<div className="carousel-block__content carousel-block__content--title">{item.Title}</div>
						<div className="carousel-block__content carousel-block__content--subtitle">{item.Subtitle}</div>
						<div className="carousel-block__content carousel-block__content--button">
							<Button
								className="button button__blueButton"
								text="Contact us"
								onClick={handleSubmit}
							/>
						</div>
					</div>
				</div>
			})}
			</Slider>
		</div>
	);
};

export default Carousel;
