import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contactNames, deleteItem }) => {
  return (
    <ul className={css.contactList}>
      {contactNames.map(({ name, number, id }) => {
        return (
          <ContactItem
            name={name}
            number={number}
            key={id}
            deleteItem={() => deleteItem(id)}
          />
        );
      })}
    </ul>
  );
};
