import React from 'react';

class Toolbar extends React.Component {
    // Function for save button, clears HTML tags from data and logs it.
    handleSave(data) {
        const cleanString = data.replace(/<\/?[^>]+(>|$)/g, "");
        console.log(cleanString);
        return cleanString;
    }

    render() {
        return (
            <div className="Toolbar">
                <button onClick={() => this.handleSave(this.props.data)}>Spara</button>
            </div>
        );
    }
}

export default Toolbar;
