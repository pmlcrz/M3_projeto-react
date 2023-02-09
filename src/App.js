// import { useState, useEffect, useRef} from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./app.css"
import { motion } from 'frame-motion'

import image1 from '../src/images/wandinha.jpg'
import image2 from '../src/images/spn.jpg'
import image3 from '../src/images/tlou.jpg'
import image4 from '../src/images/ahs.jpg'
import image5 from '../src/images/r6.jpg'

const images = [image1, image2, image3, image4, image5]


function App() {
				const carousel = useRef();
				const [width, setWidth] = useState(0)
				
				useEffect(() => {
								console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
								
				}, [])
				
	return (
					<div className="App">
									<motion.div ref={carousel}  className="carousel" whileTap={{ cursor: "grabbing" }}>
									  	<motion.div 
									  	className="inner" 
									  	drag=x
											dragConstraits={{ right: 0, left: -width}}
											initial={{ x: 100 }}
											animate={{ x: 0 }}
											transition={{ duration: 0.8 }}
											>
											
											  {images.map(image => (
											  				<motion.div className="item" key{image}>
											  								<img src={image} alt="Texto alt"/>
											  				</motion.div>
											  ))}
													
											</motion.div>											
									</motion.div>

					</div>
	)
}

//
