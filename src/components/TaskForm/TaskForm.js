import { Button } from 'components/Button/Button';
// Импортируем хук
import { useDispatch } from "react-redux";
// Импортируем генератор экшена
import { addTask } from "../../redux/actions";
import css from './TaskForm.module.css';

export const TaskForm = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
