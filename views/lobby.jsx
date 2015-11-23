Lobby = {
    header() {
        return <MUI.AppBar
            title="Lobby"
            iconClasNameRight="muidocs-icon-navigation-export-more"/>
    },

    content() {
        return <RoomList />
    },

    footer() {
        return <FloatingAction />;
    }
};


RoomList = React.createClass({
    render() {
        return (
            <MUI.List subheader="Available Chat Rooms">
                <RoomListItem name="Room 1"/>
                <RoomListItem name="Room 2"/>
                <RoomListItem name="Room 3"/>
                <RoomListItem name="Room 4"/>
                <RoomListItem name="Room 5"/>
            </MUI.List>
        );
    }
});

RoomListItem = React.createClass({
    visitRoom() {
        FlowRouter.go('viewRoom');
    },

    render() {
        return <MUI.ListItem
            onClick={this.visitRoom}
            leftAvatar={
                <MUI.Avatar>{this.props.name[0]}</MUI.Avatar>
            }
            primaryText={this.props.name}
            secondaryText="Room Description"/>
    }
});