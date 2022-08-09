const depth = location.pathname.split("/").length - 2;
let path = "../".repeat(depth);
document.addEventListener('DOMContentLoaded', function () {
    const body = document.getElementsByTagName('body').item(0);
    const link = document.getElementsByTagName('link').item(0);
    const DParser = new DOMParser();
    const XSerializer = new XMLSerializer();
    link.insertAdjacentHTML('beforebegin', `<link rel="stylesheet" href="${path}style/bootstrap-reboot.css" />`)
    fetch('../header.html')
        .then((res) => res.text())
        .then((text) => {
            return DParser.parseFromString(text, 'text/html');
        })
        .then((dom) => {
            body.insertAdjacentHTML('afterbegin', XSerializer.serializeToString(dom.getElementsByTagName('header').item(0)));
            link.insertAdjacentHTML('beforebegin', XSerializer.serializeToString(dom.getElementsByTagName('head').item(0)).replace(/<\/?head>/, '').replace("./",path));
        });
    fetch('../footer.html')
        .then((res) => res.text())
        .then((text) => {
            return DParser.parseFromString(text, 'text/html');
        })
        .then((dom) => {
            body.insertAdjacentHTML('beforeend', XSerializer.serializeToString(dom.getElementsByTagName('footer').item(0)));
            link.insertAdjacentHTML('beforebegin', XSerializer.serializeToString(dom.getElementsByTagName('head').item(0)).replace(/<\/?head>/, '').replace("./",path));
        });
})