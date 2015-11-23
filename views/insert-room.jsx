InsertRoom = {




    header() {
        return <MUI.AppBar
            iconElementLeft={
                <MUI.IconButton linkButton={true} href={FlowRouter.path('lobby')}>
                    <MUI.Libs.SvgIcons.NavigationArrowBack />
                </MUI.IconButton>
            }
            iconElementRight={
                <MUI.FlatButton label="Create Room" form="insert-room" type="submit"/>
            }/>
    },

    content() {
        return <InsertRoomForm />
    }
};

InsertRoomForm = React.createClass({

    componentDidMount() {
        this.refs.name.focus();
    },

    onChange() {
        let state = {
            name: this.refs.name.getValue(),
            desc: this.refs.description.getValue()
        };

        this.setState(state);

        if (!state.name) {
            this.refs.name.setErrorText('This value is required');
        }
    },

    handleSubmit(event) {
        event.preventDefault();

        console.log(this.state);

        FlowRouter.go('lobby');
    },

    render() {

        this.form = <form id="insert-room" style={{padding: 20}} onSubmit={this.handleSubmit}>
            <MUI.TextField
                ref="name"
                onChange={this.onChange}
                fullWidth={true}
                required={true}
                floatingLabelText="Room Name" />
            <MUI.TextField
                ref="description"
                onChange={this.onChange}
                fullWidth={true}
                floatingLabelText="Room Description"/>
        </form>;

        return this.form;
    }
});