FloatingAction = React.createClass({
   render() {
       return (
           <MUI.FloatingActionButton
               linkButton={true}
               href={FlowRouter.path('insertRoom')}
               backgroundColor="red"
               style={{
                   position: 'fixed',
                   bottom: 32,
                   right: 32
                }}>
               <MUI.FontIcon tooltip="Create new Room">+</MUI.FontIcon>
           </MUI.FloatingActionButton>
       );
   }
});