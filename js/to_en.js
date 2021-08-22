var btn = document.createElement('li');
btn.className = 'nav-item'
let language = {};
language.now = location.pathname.match(/^\/en/) ? 'en' : 'cn';
if ('en' === language.now) {
    language.label = '中文';
    language.href = location.pathname.replace(/^\/en/, '/cn');
} else {
    language.label = 'English';
    language.href = location.pathname.replace(/^\/cn/, '/en');
}
btn.innerHTML = `<a class="nav-link" href="${language.href}">
    <i class="iconfont2 icon-qiehuanyuyan"></i>
    ${language.label}
    </a>`
$("#navbarSupportedContent")[0].childNodes[1].append(btn);
