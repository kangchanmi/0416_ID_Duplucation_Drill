$(function () {

    /* 아이디 중복 체크 시작 */
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
    /* 아이디 중복 체크 시작 */


    /* 입력취소 클릭이벤트 아이디 중복 메세지 제거 */
    $("button[type=reset]").click(function () {
        $("#idChkMsg").remove();
    });
    /* 입력취소 클릭이벤트 아이디 중복 메세지 제거 */



    /* 비밀번호 보기 체크박스 */
    $("#ChkBox").click(function () {
        var cheTF = $(this).prop("checked");

        if (cheTF == true) {
            $(".PW").attr("type", "text");
        } else {
            $(".PW").attr("type", "password");
        }

    });
    /* 비밀번호 보기 체크박스 */



    // 비밀번호 일관성 검사(동일성 검사),
    //    일치, 불일치 점검
    $("button[type=button]").click(function () {

        var uPW = $("#uPW").val().trim();
        var uPWChk = $("#uPW_Re").val().trim();
        var pwChkMsg = "";

        var pwChk = $("#uPW_Re").next().is("span");

        if (uPW == uPWChk) {
            pwChkMsg = "비밀번호 일치";
            $("span#pwChkMsg").text(pwChkMsg);
        } else {
            pwChkMsg = "불일치";
            $("span#pwChkMsg").text(pwChkMsg);
        }

        if (pwChk) {
            $("span#pwChkMsg").remove();
        }

        $("<span id ='pwChkMsg'>" + pwChkMsg + "</span>").insertAfter("#uPW_Re");

    });
    // 비밀번호 일관성 검사(동일성 검사),
    //    일치, 불일치 점검





    /* 추가내용 (포커스 아웃 이벤트 적용) */
    $("#uID").focusout(function () {
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
    /* 추가내용 (포커스 아웃 이벤트 적용) */



});
