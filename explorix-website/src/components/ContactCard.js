import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import React from "react";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
  return (
    // added the styling part for contact cards
    <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '10px'
      }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: '30px' }}/>
        <div style={{ marginLeft: '10px' }}>
          <div style={{ fontWeight: 'bold' }}>{name}</div>
          <div>{email}</div>
        </div>
      </div>
      <i className="trash alternate outline icon" style={{ color: 'red' , fontSize: '24px'}} />
    </div>
  );
};

export default ContactCard;


// import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from "react";


// const ContactCard = ({ contact: { id, name, email } }) => {
//     return (
//         <div className="item">
//             {/* use the indiviudal icon code from font awesome website */}
//             <FontAwesomeIcon icon={faCircleUser} />
//             <div className="content">
//                 <div className="header">{name}</div>
//                 <div>{email}</div>
//             </div>
//             {/* added a trash bin icon */}
//             <i className="trash alternate outline icon" 
//             style={{color:"red", marginTop:"7px"}}></i>
//         </div>
//     );
// };

// export default ContactCard;