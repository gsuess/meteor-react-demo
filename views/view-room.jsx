ViewRoom = {

    header() {
        return <RoomHeader roomId={FlowRouter.current().params._id}/>
    },

    content() {
        return <RoomContent roomId={FlowRouter.current().params._id}/>
    },

    footer() {
        return <MessageEditor roomId={FlowRouter.current().params._id}/>
    }
};

RoomHeader = React.createClass({
    mixins: [ReactMeteorData],

    goBack() {
        FlowRouter.go('lobby');
    },

    getMeteorData() {
        return Rooms.findOne(this.props.roomId, {fields: {name: 1}});
    },

    render() {
        return <MUI.AppBar
            title={this.data.name}
            iconElementLeft={
                <MUI.IconButton onClick={this.goBack}>
                    <MUI.Libs.SvgIcons.NavigationArrowBack />
                </MUI.IconButton>
            }/>
    }
});

RoomContent = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        let roomId = this.props.roomId;
        return {
            roomId: roomId,
            posts: Posts.find({roomId: roomId}, {createdAt: -1}).fetch()
        };
    },

    render() {
        return <div style={{padding: 20}}>
            {this.data.posts.map(function (post) {
                return <UserComment key={post._id} post={post}/>
            })}
        </div>
    }
});

UserComment = React.createClass({
    render() {
        return <MUI.Card style={{marginBottom: 10}}>
            <MUI.CardText>
                {this.props.post.text}
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
        Posts.insert({
            createdAt: new Date(),
            roomId: this.props.roomId,
            text: this.state.message
        });
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