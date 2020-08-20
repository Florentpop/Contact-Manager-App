import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import  {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Ama Oko',
                email: 'amaoko@gmail.com',
                phone: '0240112233',
                group: 'work'
            },
            {
                id: 2,
                name: 'Ali Banda',
                email: 'aliba@gmail.com',
                phone: '0240002233',
                group: 'Home'
            },
            {
                id: 3,
                name: 'Florent Francis',
                email: 'flo@gmail.com',
                phone: '0240101010',
                group: 'work'
            }

        ],

        current: null
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact

    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact});
    };

    // delete Contact

    const deleteContact = id => {
        
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    // Set Current Contact

    const setCurrent = contact => {
        
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    // Clear Current Contact

    const clearCurrent = () => {
        
        dispatch({ type: CLEAR_CURRENT });
    };

    // Update Contact
    const updateContact = contact => {

        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };


    // Filter Contact

     // Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact

            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState; 