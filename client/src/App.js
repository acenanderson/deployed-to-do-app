import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';
import Modal from './components/Modal';
import Auth from './components/Auth';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const authToken = cookies.AuthToken;
  const userEmail = cookies.Email;
  const [tasks, setTasks] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`
      );
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, []);

  // Sort by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && (
        <>
          <ListHeader
            listName={'🏝️ Holiday Tick List'}
            setShowModal={setShowModal}
            setCurrentTask={setCurrentTask}
          />
          <p className="user-email">Welcome back {userEmail}</p>
          {sortedTasks?.map((task) => (
            <ListItem
              key={task.id}
              task={task}
              setShowModal={setShowModal}
              setCurrentTask={setCurrentTask}
              getData={getData}
            />
          ))}
          {showModal && (
            <Modal
              setShowModal={setShowModal}
              currentTask={currentTask}
              getData={getData}
            />
          )}
        </>
      )}
      <p className="copyright">© Code With Gustav</p>
    </div>
  );
};

export default App;
