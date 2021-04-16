$(function () {
    $("button[type=button]").click(function () {

        var inputUID = $("#uID").val().trim(); // form 화면에서 입력한 ID

        var regIDList = ["test01", "geust", "member03"];
        // regIDList라는 배열은 인덱스 번호가 0, 1, 2로 구성됨
        // i = indexArray > idxAry > idx > i

        var idUseChk = true;


        $.each(regIDList, function (i, v) {
            if (inputUID == v) {
                idUseChk = false;
            }
        });

        if (idUseChk) {
            alert("사용 가능!");
        } else {
            alert("사용 중인 ID");
        }



    });

});
