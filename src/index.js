import './themes/osDefaults.scss';

function component() {
    const element = document.createElement('div');
    element.id = 'app';

    element.innerHTML = 'Hello world!!!';

    return element;
}

document.body.appendChild(component());
