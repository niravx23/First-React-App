import React , {useState} from 'react'

const About = (props) => {


	const [styleMain,ChangeCss] = useState({
		color:'black',
		backgroundColor:'white' 
	});

	const [btnText, setbtnText] = useState("Enable Dark Mode") ;


	 const toggleStyle =()=>{

		if(styleMain.color === 'black')
		{
			
			
			setbtnText("Enable White Mode") ;		   	
			ChangeCss({
				color:'white',
				backgroundColor:'black' 
			}); 
		}

		else
		{
			ChangeCss({
				color:'black',
				backgroundColor:'white' 
			}); 
			setbtnText("Enable Dark Mode") ;		
		}

	}

  return (
	<div className={`Container document.style.backgroundColor:${props.mode} `}>
		<h1 className={`text-${props.mode === "dark"?'success':'info'}`}>About Us</h1>
		<div className="accordion accordion-flush" id="accordionFlushExample"  style= {styleMain}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style= {styleMain} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" style= {styleMain} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style= {styleMain} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" style= {styleMain}  data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style= {styleMain} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" style= {styleMain} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
	<button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
	</div>
  )
}

export default About
