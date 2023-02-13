// Реализовать функцию, которая показывает подсказку (tooltip) возле необходимого элемента. Функция принимает на вход 2 аргумента - элемент, возле которого нужно отбразить подсказку и текст подсказки, который будет отображен в тултипе. Подсказка должна быть отображена над элементом, так же должна быть отцентрована.

// Элемент подсказки должен иметь абсолютное позиционирование, то есть не влиять на остальную верстку
// Статические стили (цвет, размеры и тд) примените с помощью класса, а координаты с помощью объекта style.
// Елемент с подсказкой(тултип) должен быть добавлен в body
// Для сдачи домашняя работа обязательно должна сожержать html с рабочим примером. Если ваш тултип будет выходить за границы экрана - не страшно, просто передвиньте ваш елемент, к которому прикрепили подсказку, дальше от края вьюпорта.






const createTooltip = (button, text) => {

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip")
    tooltip.innerText = text;

    document.body.append(tooltip);

    const anchorElemCoords = button.getBoundingClientRect();

    const tooltipTop = anchorElemCoords.top - 10 - tooltip.clientHeight;
    const tooltipLeft =anchorElemCoords.left + anchorElemCoords.width / 2 -tooltip.clientWidth /2;

    tooltip.style.top = `${tooltipTop}px`;
    tooltip.style.left = `${tooltipLeft}px`;

    console.log(tooltip)

}

const button = document.getElementById('example');

createTooltip(button, tool);