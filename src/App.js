import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Toolbar from './components/Toolbar';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "Hello world",
        };
    }

    handleEditorChange() {
		return ( event, editor ) => {
			this.setState( { data: editor.getData() } );
		}
	}

    render() {
        return (
            <div className="App">
                <Toolbar data={this.state.data}/>
                <h2>
                    <u>CKeditor5</u>
                </h2>
                <div>
                    <CKEditor editor={ClassicEditor} data={this.state.data} onChange={this.handleEditorChange()}/>
                </div>
            </div>

        )
    }
}

export default App;
