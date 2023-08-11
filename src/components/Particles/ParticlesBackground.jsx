import React, {useCallback} from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const options ={
	background: {
		color: {
			value: "transparent",
		},
	},
	fpsLimit: 120,
	interactivity: {
		events: {
			onClick: {
				enable: true,
				mode: "push",
			},
			onHover: {
				enable: true,
				mode: "repulse",
			},
			resize: true,
		},
		modes: {
			push: {
				quantity: 7,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
		},
	},
	particles: {
		color: {
			value: "#ffff00",
		},
		links: {
			color: "#ffffff",
			distance: 150,
			enable: true,
			opacity: 0.2,
			width: 1,
		},
		move: {
			direction: "none",
			enable: true,
			outModes: {
				default: "bounce",
			},
			random: false,
			speed: 2,
			straight: true,
		},
		number: {
			density: {
				enable: true,
				area: 800,
			},
			value: 120,
		},
		opacity: {
			value: 0.5,
		},
		shape: {
			type: "circle",
		},
		size: {
			value: { min: 1, max: 5 },
		},
	},
	detectRetina: true,
}

const ParticlesBackground = () => {
	const particlesInit = useCallback(async engine => {
		//console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadSlim(engine);
	}, []);
	
	const particlesLoaded = useCallback(async container => {
		//await console.log(container);
	}, []);
	return (
		<Particles
			className="particles"
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={options}
		/>
	);
};

export default ParticlesBackground;