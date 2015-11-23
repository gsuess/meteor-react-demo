MainLayout = React.createClass({

    header() {
        if (this.props.header)
            return this.props.header();
    },

    content() {
        return this.props.content()
    },

    footer() {
        if (this.props.footer)
            return this.props.footer()
    },

    render() {
        return (
            <MUI.AppCanvas>
                <header>{this.header()}</header>
                <main>{this.content()}</main>
                <footer>{this.footer()}</footer>
            </MUI.AppCanvas>
        );
    }
});