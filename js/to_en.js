var btn = document.createElement('button');
let language = {};
language.now = location.pathname.match(/^\/en/) ? 'en' : 'cn';
if ('en' === language.now) {
    language.label = '中文';
    language.href = location.pathname.replace(/^\/en/, '/cn');
} else {
    language.label = 'English';
    language.href = location.pathname.replace(/^\/cn/, '/en');
}
btn.innerHTML = `<li class="nav-item">
    <a class="nav-link" href="${language.href}">
    ${language.label}
    </a>
    </li>`
$("#navbarSupportedContent")[0].childNodes[1].append(btn);
