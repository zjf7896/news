$(function () {


    $('.del-box .content .list').on('click', function () {
        $(this).appendTo($('.add-box .content'));
        let id = $(this).attr('data-id');
        $.ajax({
            url: "/index.php?c=page&m=nav",
            data: {
                id: id,
                isdefault: 0
            },
            success: function () {

            }
        });
    });


    $('.add-box .content .list').on('click', function () {
        let id = $(this).attr('data-id');
        $(this).appendTo($('.del-box .content'));
        $.ajax({
            url: "/index.php?c=page&m=nav",
            data: {
                id: id,
                isdefault: 1,
            },
            success: function () {

            }
        });
    })

})


// var del = document.querySelectorAll('.del-box .content .list');
// console.log(del);
// var dels = document.querySelector('.del-box .content');
// console.log(dels);
// var add = document.querySelectorAll('.add-box .content .list');
// console.log(add);
// var adds = document.querySelector('.add-box .content');
// console.log(adds);
//
//
// for (i = 0; i < del.length; i++) {
//     del[i].onclick = function () {
//         adds.append(this);
//     }
// }
// del.onclick=function () {
//     var obj = new XMLHttpRequest();
//     obj.open("get",'../controller/index/page.php?s="1"',true);
//     obj.setRequestHeader('content-type','application/x-www-form-urlencoded');
//     obj.send();
// };
// for (i = 0; i < add.length; i++) {
//     add[i].onclick = function () {
//         dels.append(this)
//     }
// }