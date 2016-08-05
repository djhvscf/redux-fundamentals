import React from 'react';
import ReactDOM from 'react-dom';
import h from 'react-hyperscript';
import tags from 'hyperscript-helpers';

const {div, h1, input, button, label, table, tbody, tr, td, header, textarea, pre} = tags(h);

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            input: '/* add jsx here */',
            output: '',
            err: ''
        }
        this.update = this.update.bind(this)
    }
    update(e) {
        let code = e.target.value
        try {
            this.setState({
                output: babel.transform(code, {
                            stage: 0,
                            loose: "all"
                        }).code,
                err: ''
            })
        }
        catch(err) {
          this.setState({
            err: err.message
          })
        }
    }
    render() {
        return div([
            header([this.state.err]),
            div(".container",[
                textarea({
                    onChange: this.update,
                    defaultValue: this.state.input
                }),
                pre([this.state.output])
            ])
        ])
    }
}

export default App