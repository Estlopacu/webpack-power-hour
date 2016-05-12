import React from 'react';

export default React.createClass({
 render: function() {
   return (
     <div className="component1">
         <h2>Hello, {this.props.name}!</h2>
     </div>
   );
 },
});
