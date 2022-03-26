import React, { useEffect, useState } from "react";
import { PilotCard, PilotImage, PilotText } from "./Pilot.styles";

const Pilot = ({ dadesPilot }) => {
	return (
		<PilotCard>
			<PilotImage>
				<img className="card-img-top" src={dadesPilot.image} alt={dadesPilot.name} />
			</PilotImage>
			<PilotText>
				<p>
					Name: <span>{dadesPilot.name}</span>
				</p>
				<p>
					Height: <span>{dadesPilot.height}</span>
				</p>
				<p>
					Mass: <span>{dadesPilot.mass}</span>
				</p>
				<p>
					Hair color: <span>{dadesPilot.hair_color}</span>
				</p>
				<p>
					Skin color: <span>{dadesPilot.skin_color}</span>
				</p>
				<p>
					Eye color: <span>{dadesPilot.eye_color}</span>
				</p>
				<p>
					Birth year: <span>{dadesPilot.birth_year}</span>
				</p>
				<p>
					Gender: <span>{dadesPilot.gender}</span>
				</p>
			</PilotText>
		</PilotCard>
	);
};
export default Pilot;
