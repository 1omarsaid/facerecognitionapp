import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return(
        <div className="title">
            <p>
                {'This Magic Brain will detect faces in your pictures. Give it a try'}
            </p>
            <p>
                {'Example: https://i.imgur.com/r5L79CZ.jpg'}
            </p>
                <div className='form center pa4 br3 shadow-5'>
                    <input 
                        className='f4 pa2 w-70 center' 
                        type='text' 
                        onChange={onInputChange}
                        placeholder="Enter Image link"/>
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
                        onClick={onSubmit}>Detect</button>
                </div>
        </div>
    );
}


export default ImageLinkForm