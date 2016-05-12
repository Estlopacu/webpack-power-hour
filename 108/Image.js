import React from 'react';

var imagen = require('./images/dance.gif');

export default React.createClass({
 render: function() {
   return (
     <div>
         <img src={imagen}/>
     </div>
   );
 },
});
