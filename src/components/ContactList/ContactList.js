import css from './ContactList.module.css';

export const ContactList = ({ contactName }) => {
  return (
    <ul className={css.contactList}>
      <li className={css.contactItem}>{contactName}</li>
    </ul>
  );
};
