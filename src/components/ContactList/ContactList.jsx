import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { ContactText } from '../ContactList/ContactList.styled';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Box display="flex" alignItems="center" as="li" key={id}>
            <ContactText>{name}: </ContactText>
            <ContactText>{number}</ContactText>
            <button onClick={() => deleteContact(id)} type="button">
              Delete
            </button>
          </Box>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
