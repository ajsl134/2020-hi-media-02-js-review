/* // 3번째 list 선택
$(".list").eq(2)
$(".wrapper > list:nth-child(3)")
$(".container").find(".list").eq(2)
$(".list", ".container").eq(2)

$(".list").click(function(){
    var idx = $(this).index();
    console.log(idx);
});

// length - 배열(Array)

console.log($(".list").length);

$(".list").each(function(i){
    console.log(i);
});

// 객체와 메서드
function aa() {
    // 함수
}

var Human = {
    each: function() {
        // 메서드
    }
} */