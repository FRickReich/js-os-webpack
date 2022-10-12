import './themes/osDefaults.scss';

// function currentTime() {
//     let date = new Date();
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     let session = 'AM';

//     if (hh == 0) {
//         hh = 12;
//     }
//     if (hh > 12) {
//         hh = hh - 12;
//         session = 'PM';
//     }

//     hh = hh < 10 ? '0' + hh : hh;
//     mm = mm < 10 ? '0' + mm : mm;
//     ss = ss < 10 ? '0' + ss : ss;

//     let time = hh + ':' + mm + ':' + ss + ' ' + session;

//     // document.getElementById('clock').innerText = time;
//     let t = setTimeout(function () {
//         currentTime();
//     }, 1000);
// }

// currentTime();

const topbar = () => {
    const topbarElement = document.createElement('DIV');
    topbarElement.id = 'topbar';

    const menuElement = document.createElement('DIV');
    menuElement.id = 'menu';
    menuElement.innerText = 'abc';

    const watchElement = document.createElement('DIV');
    watchElement.id = 'clock';
    watchElement.innerText = '00:00:00';

    topbarElement.append(menuElement, watchElement);

    return topbarElement;
};

const app = () => {
    const viewportElement = document.createElement('DIV');
    viewportElement.id = 'app';

    viewportElement.append(topbar());

    // viewportElement.innerHTML = 'Hello world!!!'

    return viewportElement;
};

document.body.appendChild(app());
