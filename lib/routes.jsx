if (Meteor.isServer) {
    navigator = {};
}

FlowRouter.route("/", {
    name: "lobby",

    subscriptions () {
        // Insert any subscriptions here.
    },

    action: wrapAction(function () {
        ReactLayout.render(MainLayout, Lobby);
    })
});

FlowRouter.route("/room/insert", {
    name: "insertRoom",

    subscriptions () {
        // Insert any subscriptions here.
    },

    action: wrapAction(function () {
        ReactLayout.render(MainLayout, InsertRoom);
    })
});


FlowRouter.route("/room/view/:_id", {
    name: "viewRoom",

    subscriptions () {
        // Insert any subscriptions here.
    },

    action: wrapAction(function () {
        ReactLayout.render(MainLayout, ViewRoom);
    })
});

function wrapAction (fn) {
    return function () {
        if (Meteor.isServer) {
            let context = FlowRouter.current();
            navigator.userAgent = context.serverRequest.headers['user-agent'];
        }

        let result = fn.apply(this, arguments);

        if (Meteor.isServer) {
            delete navigator.userAgent;
        }

        return result;
    }
}