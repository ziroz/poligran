$(document).ready(function(){
    $(".image").on("mouseover",function(){
        var id = $(this).data("id");
        
        $(".mipais").hide();
        $("#" + id).show();
        
    });
});

