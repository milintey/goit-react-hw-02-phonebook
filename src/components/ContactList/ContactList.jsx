export function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => deleteContact(id)} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
