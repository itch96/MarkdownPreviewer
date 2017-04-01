function main() {
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {markdown: ""};
        }
        handleChange(event) {
            this.setState({markdown: event.target.value});
        }
        render() {
            return (
                <div className='row'>
                    <div className="col-12 col-md-6">
                        <h2>Markdown</h2>
                        <textarea onChange={this.handleChange.bind(this)} value={this.state.markdown} rows="15"/>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>Preview</h2>
                        <div id='result' dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
                    </div>
                </div>
            );
        }
    }

    ReactDOM.render(<App/>, document.querySelector('.render-target'));
}

$(document).ready(main);