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
    mixins: [ReactMeteorData],

    getMeteorData() {
        return {rooms: Rooms.find({}, {sort: {createdAt: 1}}).fetch()};
    },

    render() {
        return (
            <MUI.List subheader="Available Chat Rooms">
                {this.data.rooms.map(function (room) {
                    return <RoomListItem key={room._id} room={room}/>
                })}
            </MUI.List>
        );
    }
});

RoomListItem = React.createClass({
    visitRoom() {
        FlowRouter.go('viewRoom', {_id: this.props.room._id});
    },

    render() {
        let {room} = this.props;
        return <MUI.ListItem
            onClick={this.visitRoom}
            leftAvatar={
                <MUI.Avatar>{room.name[0]}</MUI.Avatar>
            }
            primaryText={room.name}
            secondaryText={room.description}/>
    }
});