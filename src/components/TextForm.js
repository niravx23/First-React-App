import React, { useState } from 'react'


const TextForm = (props) => {
	const cssForButtons = "btn btn-primary mx-2  mb-2 bg-info  border-0" ; 

	const HandleUpper = () =>{
		console.log("Upper CLicked " +  text) ;
		let newtext = text.toUpperCase() ;
		setText(newtext);
		props.showAlert(" Converted To upper Case ", "primary") ; 
	}

	const HandleLower = () =>{
		let newtext = text.toLowerCase() ;
		setText(newtext);
		props.showAlert(" Converted To Lower Case ", "dark") ; 
	}


	const handleOnChange = (event) => {
		setText(event.target.value) ; 
	}

	
	
	const HandleFonts = (event) =>{
		let arr = [" text-primary " ,  " text-secondary " , " text-success ", "text-danger" ]
		const randomNumber = Math.floor(Math.random() * 4);

		changeCSS("form-control border-3 " + arr[randomNumber]) ;
		console.log(cssForFont) ;

	}

	const HandleResetAll = () =>{
		changeCSS("form-control border-3"); 
		setText(""); 
		props.showAlert(" Reset Complete ", "warning") ; 
	}
	
	const [text, setText] = useState('');
	const [cssForFont, changeCSS] = useState("form-control border-3 text-dark");

	function getWords()
	{
		if(text.length === 0) return 0  ; 
		else return text.split(" ").length ; 
	}

	return (
	<>
		<div className={`Container text-${props.mode === 'light' ? 'dark':'white'}`}>

				<h1 className='my-3'>{props.heading}</h1>
				<div className="mb-3 my-3">
					<textarea className={`${cssForFont} bg-${props.mode === 'light'?'grey':'white'}  text-dark`} id="myBox" rows="5" value={text} onChange={handleOnChange} ></textarea>
				</div>
				<button className={cssForButtons} onClick={HandleUpper} >Convert Upper</button>
				<button className={cssForButtons} onClick={HandleLower} >Convert Lower</button>
				<button className={cssForButtons} onClick={HandleFonts}>Random Colors</button>
				<button className={cssForButtons} onClick={HandleResetAll}>Reset all</button>
		</div>

		<div className={`Container my-5 text-${props.mode === 'light' ? 'dark':'white'}`}>
				<h3>Text Summary</h3>
				<p>Word Count - {getWords()} </p>
				<p>char Count - {text.length} </p>

				<h3 className="text-info my-4">Preview</h3>
				<p>
					{text}
				</p>
		</div>

	</>
	)
}

export default TextForm; 
