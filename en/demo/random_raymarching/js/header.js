document.addEventListener('wheel', onMouseWheel, false);

function onMouseWheel(event) {
    // event.preventDefault();
    var wheelDelta = event.deltaY;
    let cont = $("#container")[0];
    if (wheelDelta < 0) {
        $("#header1")[0].style.display = 'block';

        cont.style.marginTop = '30px';
        cont.style.paddingTop = '20px';
        cont.style.marginBottom = '50px';
        console.log("鼠标向上滚动");
    } else {
        $("#header1")[0].style.display = 'none';
        cont.style.marginTop = '30px';
        cont.style.paddingTop = '50px';
        cont.style.marginBottom = '0px';
        console.warn("鼠标向下滚动");
    }
}

// $(document).ready(function () {//在文档加载完毕后执行
//
//     $(window).scroll(function () {//开始监听滚动条
//
// //获取当前滚动条高度
//
//         var topp = $(document).scrollTop();
//
// //用于调试 弹出当前滚动条高度
//
// //alert(topp);
//
// //判断如果滚动条大于90则弹出 "ok"
//
//         if (topp > 0) {
//             $("#header1")[0].style.display = 'none';
//             $("#container")[0].style.marginTop = '20px';
//             $("#container")[0].style.paddingTop = '50px';
//             $("#container")[0].style.marginBottom = '0px';
//         }
//         else{
//             $("#header1")[0].style.display = 'block';
//             $("#container")[0].style.marginTop = '20px';
//             $("#container")[0].style.marginBottom = '50px';
//         }
//     })
// })