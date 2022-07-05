import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
import ContactCart from './ContactCart';

const ContactList = (props) => {
    const inputE1 = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactID(id);
    }

    const renderContactList = props.contacts.map((contacts) => {
        return(
            <ContactCart contact={contacts} clickHandler={deleteContactHandler} key={contacts.id}/>
        );
    })

    const getSearchTerm = () => {
        props.searchKeyword(inputE1.current.value);
    }

    return(
        <div>
            <div className='contact-list'>
                <span className="contact2-form-title2">Contact list
                    <Link to="/contact-manager/add" className="contact2-form-add">
                        <button className="btn2">Add contact</button>
                    </Link>
                </span>
                
                <div className='con-length'>
                    Total Contacts: {props.contacts.length}
                </div>
                <div className='con-search'>
                    <div className='con-search-input'>
                        <input ref={inputE1} type="text" placeholder="Search Contact" className="Prompt" value={props.term} onChange={getSearchTerm} />
                        <i className="fa fa-search"></i>
                    </div>
                </div>
                <div className='con-list'>
                    {renderContactList.length>0 ? renderContactList : <div className='con-list-empty'>No Contacts Found</div>}
                </div>
            </div>
        </div>
    );
};

export default ContactList;