import React, { useState } from 'react'

var deletedtext = "";


export default function TextForm(props) {
    document.title='TextUtils-Home';
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');

        alertPlaceholder.append(wrapper);
    }

    const styleinput = {
        width:"10%",
    }

    const handlereplace = () => {
        document.getElementById('replacediv').classList.replace('d-none','d-show');
    };

    const getletters = () => {
        // console.log(text.split(" ").filter((elements) => {return(elements.length !== 0)}));
        return(text.split(" ").filter((elements) => {return(elements.length !== 0)}));
    };

    // const donothing = ()=>{};

    const handleFirstLetter = () => {
        let words = getletters() ;
        let newwords = []
        for(let i of words){
            // console.log(i.charAt(0))
            newwords.push(i[0].toUpperCase() + i.slice(1));
        }
        // console.log(newwords);
        // console.log(words);
        let newtext = newwords.join(" ");
        // console.log(newtext);
        settext(newtext);
    };

    const handleRemovePunc = () => {
        let punctions="!@#$%^&*()-_=+`~[]{}';:.,<>/?\\|"
        let allpuncs = punctions.split("");
        allpuncs.push('"')
        var word;
        // console.log(allpuncs)
        let words = getletters();
        let newwords = []
        for(let i of words){
            word = i;
            for(let j of allpuncs){
                // do {
                //     word = word.replace(j,"")
                // } while (word.includes(j));
                while(word.includes(j)){
                    word=word.replace(j,"");
                }
            }
            // console.log(word);
            newwords.push(word);
        }
        // console.log(newwords)
        let newtext = newwords.join(" ")
        settext(newtext);
    };

    const handlereplace2 = () => {
        let toreplace = document.getElementById('replace').value;
        let towith = document.getElementById('with').value;
        document.getElementById('replacediv').classList.replace('d-show','d-none');
        let newtext = text.replace(toreplace,towith);
        document.getElementById('replace').value="";
        document.getElementById('with').value=""
        settext(newtext);
    };

    const handlereclick = () => {
        if (deletedtext !== "") {
            let newtext = deletedtext
            deletedtext = "";
            settext(newtext);
            document.getElementById('display').classList.replace('d-show', 'd-none');
        } else {
            appendAlert('There is no text deleted previously', `${props.opmode}`);
            document.getElementById('display').classList.replace('d-show', 'd-none');
        }
    };
    const handleclearclick = () => {
        deletedtext = text;
        let newtext = "";
        settext(newtext);
        document.getElementById('display').classList.replace('d-none', 'd-show');
    };
    const handleLoclick = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
    };
    const handleUpclick = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
    };
    const handleOnchange = (event) => {
        settext(event.target.value);
    };

    const handlecopy = () => {
        navigator.clipboard.writeText(text);
    };

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
    };

    const [text, settext] = useState('');
    return (
        <>
            <div className={`set-${props.mode}`}>
                <div id="liveAlertPlaceholder"></div>
                <h1 className="my-2">Enter the text below to analyze</h1>
                <div className='mb-3'>
                    <textarea className="form-control" onChange={handleOnchange} id="exampleFormControlTextarea1" value={text} rows="8">
                    </textarea>
                </div>
                <button onClick={handleUpclick} className={`btn my-2 btn-${props.opmode} mx-2`}>Change to Uppercase</button>
                <button onClick={handleLoclick} className={`btn my-2 btn-${props.opmode} mx-2`}>Change to Lowercase</button>
                <button onClick={handleclearclick} className={`btn my-2 btn-${props.opmode} mx-2`}>Clear text</button>
                <button onClick={handlereclick} className={`btn my-2 btn-${props.opmode} mx-2`}>Get deleted text back</button>
                <button onClick={handlereplace} className={`btn my-2 btn-${props.opmode} mx-2`}>Replace text</button>
                <button onClick={handlecopy} className={`btn my-2 btn-${props.opmode} mx-2`}>Copy text</button>
                <button onClick={handleExtraSpaces} className={`btn my-2 btn-${props.opmode} mx-2`}>Remove Extra Spaces</button>
                <button onClick={handleFirstLetter} className={`btn my-2 btn-${props.opmode} mx-2`}>Capitalize First Letter</button>
                <button onClick={handleRemovePunc} className={`btn my-2 btn-${props.opmode} mx-2`}>Remove Punctuations</button>
            </div>
            <div className={`my-4 set-${props.mode}`}>
                <div id='replacediv' className='d-none'>
                <label htmlFor='replace' className='my-2 mx-2'>Replace</label>
                <input type="text" className='my-2 mx-2' id='replace' style={styleinput} />
                <label htmlFor='with' className='my-2 mx-2'>with</label>
                <input type="text" className='my-2 mx-2' id='with' style={styleinput} />
                <input type="button" className=' btn btn-dark my-2 mx-2' value="Submit" onClick={handlereplace2} />
                </div>
                <h2>Your text Summary</h2>
                <p className='my-1'>{text.split(" ").filter((element)=>{return element.length !== 0}).length} Words</p>
                <p className='my-1'>{text.length} Characters</p>
                <p className='my-1'>{text.split(" ").length-1} Spaces</p>
                <p className='my-1'>{text.split(/[\n]+/g).filter((element)=>{return(element.length !== 0)}).length} Paragraphs</p>
                <h2>Preview</h2>
                <p className='my-1'>{text}</p>
                <h2 className="d-none" id='display'>Previously deleted text</h2>
                <p className='my-1'>{deletedtext}</p>
            </div>
        </>
    )
}
