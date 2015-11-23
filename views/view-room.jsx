ViewRoom = {

    goBack() {
        FlowRouter.go('lobby');
    },

    header() {
        return <MUI.AppBar
            title="Room Title"
            iconElementLeft={
                <MUI.IconButton onClick={this.goBack}>
                    <MUI.Libs.SvgIcons.NavigationArrowBack />
                </MUI.IconButton>
            }/>
    },

    content() {
        return <RoomContent />
    },

    footer() {
        return <MessageEditor />
    }
};

RoomContent = React.createClass({

    render() {
        return <div style={{padding: 20}}>
            <UserComment></UserComment><UserComment></UserComment><UserComment></UserComment>
        </div>
    }

});

UserComment = React.createClass({

    render() {
        return <MUI.Card style={{marginBottom: 10}}>
            <MUI.CardText>
                Lorem Ipsum
            </MUI.CardText>
        </MUI.Card>
    }
});

MessageEditor = React.createClass({

    getInitialState() {
        return {message: ""};
    },

    componentDidMount() {
        this.refs.messageInput.focus()
    },

    updateMessage() {
        this.setState({message: this.refs.messageInput.getValue()});
    },

    submitMessage() {
        console.log(this.state.message);
        this.refs.messageInput.setValue("");
        this.refs.messageInput.focus();
    },

    render() {
        return <MUI.Toolbar style={{
            position: "fixed",
            bottom: 0,
            left:0,
            right:0
        }}>
            <MUI.ToolbarGroup float="left" style={{width: 'calc(100% - 36px)'}}>
                <MUI.TextField
                    onChange={this.updateMessage}
                    ref="messageInput"
                    fullWidth={true}
                    hintText="Enter a message"/>
            </MUI.ToolbarGroup>

            <MUI.ToolbarGroup float="right" style={{width: 36}}>
                <MUI.IconButton onClick={this.submitMessage}>
                    <MUI.Libs.SvgIcons.ContentSend/>
                </MUI.IconButton>
            </MUI.ToolbarGroup>
        </MUI.Toolbar>
    }
});