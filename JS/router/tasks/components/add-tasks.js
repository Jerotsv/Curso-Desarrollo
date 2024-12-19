import { render } from '../../components/base.js';

export function createAddTask(selector = 'body', position = 'beforeend') {
    const template = /*html*/ `
     <form>
        <label>
          <span>Título</span>
          <input type="text" name="title" required>
        </label>
        <label>
          <span>Responsable</span>
          <input type="text" name="owner">
        </label>
        <button type="submit">Crear</button>
      </form>
    
    `;

    const element = render(selector, position, template);
    return element;
}
