import { render } from '../../components/base.js';

export function createCard(
    task,
    deleteCard,
    selector = 'body',
    position = 'beforeend'
) {
    const template = /*html*/ `
        <li>
            <div class="card">
            <hgroup title=${task.id}>
                <h3>${task.title}</h3>
                <label>
                <input type="checkbox" ${task.isDone ? 'checked' : ''}
                    name="isDone" title="completada">
                </label>
            </hgroup>
            <p>Responsable: <span>${task.owner}</span></p>
            <p>Descripción: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illum, ullam rem sint
                aliquam quo, in eius ipsum fugiat esse fugit necessitatibus? Non quo dolor fugit assumenda et rem deserunt.
            </p>
            <button>Borrar</button>
            </div>
        </li>
        `;
    const element = render(selector, position, template);

    const button = element.querySelector('button');
    button.addEventListener('click', () => {
        console.log(task);
        deleteCard(task);
        element.remove();
    });
    return element;
}
