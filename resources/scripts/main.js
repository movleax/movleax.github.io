$( document ).ready( () => {
    $('.splashscreen-text').fadeIn(2000, "swing");
    $(".splashscreen-text").animate({height: '150px', width: '150px'}, 125, () =>{
        $("#splashscreen-loader").fadeIn(400);
        setTimeout(() => {
            AnimateIntro();
        }, 4000);
    });
});

$('.splashscreen').on("mousemove", () =>{
    AnimateIntro();
});

function AnimateIntro()
{
    HideSplashScreen(1000, 1000);
    ShowSidePanel(250, 3000);
    ShowContainer(250, 3250)
    //ShowContent(250, 2000);
}

function HideSplashScreen(animationSpeed, timeout)
{
    $("#splashscreen-loader").css("border-left", "7px solid #3498db");
    $("#splashscreen-loader").css("border-right", "7px solid #3498db");
    $("#splashscreen-loader").css("border-bottom", "7px solid #3498db");

    setTimeout(() => { $('.splashscreen').fadeOut(animationSpeed); }, timeout);
}

function ShowContainer(animationSpeed, timeout)
{
    setTimeout(() => { $('.container').fadeIn(animationSpeed);}, timeout);
}

function ShowSidePanel(animationSpeed, timeout)
{
    setTimeout(() => { $('.sidebar').animate({left: '0px'}, animationSpeed); }, timeout);
}

function ShowContent(animationSpeed, timeout)
{
    setTimeout(() => { $('.content').fadeIn(animationSpeed);}, timeout);
}

