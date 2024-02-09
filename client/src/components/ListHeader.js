import { useCookies } from 'react-cookie';

const ListHeader = ({ listName, setShowModal, setCurrentTask }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const signOut = () => {
    removeCookie('Email');
    removeCookie('AuthToken');
    window.location.reload();
  };

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button
          className="create"
          onClick={() => {
            setShowModal(true);
            setCurrentTask(null);
          }}
        >
          ADD NEW
        </button>
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
    </div>
  );
};

export default ListHeader;
