import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft"
import { FiChevronRight } from "@react-icons/all-files/fi/FiChevronRight"
import { FiChevronLeft } from "@react-icons/all-files/fi/FiChevronLeft"
import Title from "./title";
import data from "../constants/recommendationsData.js";

const Recommendations = () => {
	// eslint-disable-next-line
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = people.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, people]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 13000);

		return () => clearInterval(slider);
	}, [index]);

	return (
		<section className="rec-section">
			<Title title="Recommendations" />
			<div className="rec-section-center">
				{people.map((person, personIndex) => {
					const { id, image, name, title, quote } = person;
					let position = "nextSlide";
					if (personIndex === index) {
						position = "activeSlide";
					}
					if (
						personIndex === index - 1 ||
						(index === 0 && personIndex === people.length - 1)
					) {
						position = "lastSlide";
					}

					return (
            <article className={`rec-article ${position}`} key={id}>
              {image}
              <h4 className="normal-heading">{name}</h4>
              <p className="rec-title-p">{title}</p>
              <p className="rec-text">
                <FaQuoteLeft
                  style={{ marginRight: "0.3em", color: "#49aeba" }}
                />
                {quote}
              </p>
            </article>
          )
				})}
				<button className="rec-prev" onClick={() => setIndex(index - 1)}>
					<FiChevronLeft />
				</button>
				<button className="rec-next" onClick={() => setIndex(index + 1)}>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
};

export default Recommendations;
