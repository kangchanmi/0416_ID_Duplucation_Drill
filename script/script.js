$(function () {
    $("button[type=button]").click(function () {

        var inputUID = $("#uID").val().trim(); // form 화면에서 입력한 ID

        var regIDList = ["test01", "geust", "member03"];
        // regIDList라는 배열은 인덱스 번호가 0, 1, 2로 구성됨


        var idUseChk = true;


        $.each(regIDList, function (i, v) {
            if (inputUID == v) {
                idUseChk = false;
            }
        });


        var msg = ""; //message
        if (idUseChk) {
            msg = "사용가능!";
        } else {
            msg = "사용 중인 ID";
        }


        var spanChk = $("#uID").next().is("span");
        // span요소 유무 체크
        if (spanChk) {
            $("span#idChkMsg").remove();
        }


        $("<span id='idChkMsg'>" + msg + "</span>").insertAfter("#uID");
        // $("A).insertAfter("B");  요소 A를 요소 B 뒤로 이동하세요

    });

    $("button[type=reset]").click(function() {
        $("#idChkMsg").remove();


    });

});
