class Switch extends React.Component{
    constructor(props){
        super(props);
        this.renderToggle = this.renderToggle.bind(this);
        this.state = {
            visibility: false
        };
    }

    renderToggle(){
        this.setState((prevState) =>{
            return{
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return(
            <div>
                <h1>Switcher App</h1>
                <button onClick=
                {this.renderToggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                <p>{this.state.visibility ? 'This has been generated': ''}</p>
            </div>
        );
    }
}

ReactDOM.render(<Switch/>, document.getElementById('app'));
