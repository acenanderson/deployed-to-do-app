import ProgressBar from './ProgressBar';
import TickIcon from './TickIcon';

const ListItem = ({ task, setShowModal, setCurrentTask, getData }) => {
  const deleteTodo = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${task.id}`,
        {
          method: 'DELETE',
        }
      );
      if (response.status === 200) {
        getData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar progress={task.progress} />
      </div>
      <div className="button-container">
        <button
          className="edit"
          onClick={() => {
            setShowModal(true);
            setCurrentTask(task);
          }}
        >
          EDIT
        </button>
        <button className="delete" onClick={deleteTodo}>
          DELETE
        </button>
      </div>
    </li>
  );
};

export default ListItem;
