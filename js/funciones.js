//Ocultar Nav2

function ShowHideElement(){
    let text = "";
    if($("#showHide").text() === "+"){
        $(".nav2").slideToggle("slow");
        text = "-";
    }else{
        $(".nav2").slideToggle("slow");
        text = "+";
    }

    $("#showHide").html(text);
}