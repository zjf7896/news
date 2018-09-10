$(function(){
    $(document).keydown(function(event){
        if(event.keyCode==13){
            $("#btnSubmit").click();


        }
    });

    $("#btnSubmit").click(function(){
        var inputtext=$("#input").val();
        $.ajax({
            url:"../controller/index/page.php",
            data:{title:'inputtext'},
        });

    });
});