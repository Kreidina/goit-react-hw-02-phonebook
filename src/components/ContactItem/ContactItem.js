import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, deleteItem }) => {
  return (
    <li className={css.contactItem}>
      <span>{name}</span>: <span>{number}</span>
      <button className={css.deleteBtn} type="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  );
};
