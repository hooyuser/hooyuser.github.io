$(window).on('load', function(){
    let language = {};
    language.now = location.pathname.match(/^\/en/) ? 'en' : 'cn';
    if ('en' === language.now) {
        language.label = '中文';
        language.href = location.pathname.replace(/^\/en/, '/cn');
    } else {
        language.label = 'English';
        language.href = location.pathname.replace(/^\/cn/, '/en');
    }
    $("#navbarSupportedContent")[0].childNodes[1].append(`<li class="nav-item">
    <a class="nav-link" href="${language.href}">
    ${language.label}
    </a>
    </li>`);
});