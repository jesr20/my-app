import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
    const [addData, setData] = useState('');
    const handleChange = (e, editor) => {
        const data = editor.getData();
        setData(data);
    }
    function save() {
        const data = addData;
        const dataClean = data.replace(/<\/?[^>]+(>|$)/g, "");
        console.log(dataClean);
    }
    return (
        <div className="App">
            <div>
                <button onClick={save}>Spara</button>
            </div>
            <h2>
                <u>CKeditor5</u>
            </h2>
            <div>
                <CKEditor editor={ClassicEditor} data={addData} onChange={handleChange} />
            </div>
        </div>
    )
}

export default App;
