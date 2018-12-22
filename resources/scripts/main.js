const projectsData = [
    {
        title: "MazeSolveJS",
        projectInfo: "JavaScript, canvas-based web app. This web app is designed to load in a map file, which describes a maze, and solve the maze using a selected algorithm.",
        photo: "resources\\images\\MazeSolveJS.PNG",
        buttons: [["new-tab", "https://github.com/movleax/MazeSolverJS", "GitHub Project"], ["load", "https://movleax.github.io/MazeSolverJS/index.html", "Load"]]
    },
    {
        title: "Map Generator",
        projectInfo: "Coded in C#, this program reads shape files from a designated folder, and performs calculations to connect these shapes in a cohesive manner.",
        photo: "resources\\images\\dungeonGenerator.jpg",
        buttons: [["new-tab", "https://github.com/movleax/dungeonGeneratorPoC", "GitHub Project"]]
    },
    {
        title: "StopWatch++",
        projectInfo: "Utilizing the Xceed toolkit, this C# WPF application can be used to help keep track of how long certain work tasks take and log information.",
        photo: "resources\\images\\stopwatchpp.jpg",
        buttons: [["new-tab", "https://github.com/movleax/StopWatch", "GitHub Project"]]
    },
    {
        title: "Hipster Delivery",
        projectInfo: "Created with Unity and C#, this android game plays as a 2D \"Infinite Runner\", where the objective is to deliver papers while avoiding obstacles.",
        photo: "resources\\images\\hipsterDeliverRun.jpg",
        buttons: [["new-tab", "https://play.google.com/store/apps/details?id=com.austindolve.hipsterdelivery&hl=en_US", "Google Play Store"]]
    },
    {
        title: "Space Patrol",
        projectInfo: "Though an old project, space patrol is an exciting 2D side-scrolling shooter where obstacles must avoided and enemies beat. Written in C++ and SDL.",
        photo: "resources\\images\\space_partol.PNG",
        buttons: [["load", "", "More Info Coming soon"]]
    },
    {
        title: "Mario Clone",
        projectInfo: "Another interesting classic written in C++. This offshoot mario clone offers a fun 2D platformer experience where items must be collected and enemies defeated.",
        photo: "resources\\images\\jacob_sdl.PNG",
        buttons: [["load", "", "More Info Coming soon"]]
    }
];

function getButtonClickType(button)
{
    var onclick;
    
    switch(button[0])             
    {
        case "new-tab": onclick = `window.open('${button[1]}')`; break;
        case "load": onclick = `$('.container').load('${button[1]}')`; break;
    }

    return onclick;
}

function getButtons(buttons)
{
    return `
        ${buttons.map((button) => `<button type="button" onclick="${getButtonClickType(button)}">${button[2]}</button>`).join('')}
    `;
}

function projectTemplate(project)
{
    return `
    <div class="grid-item">
        <div class="project">
            <img src="${project.photo}" alt="${project.title}">
            <div class="title">
                <h1>${project.title}</h1>
            </div>
            <div class="project-info">
                ${project.projectInfo}
            </div>

            ${project.buttons ? getButtons(project.buttons) : ''}
        </div>
    </div>
    `;
}
    
function LoadProjects() {

    $(".container").empty();
    
    document.getElementsByClassName("container")[0].innerHTML = `
    <div class='grid-container'>
    ${projectsData.map(projectTemplate).join('')}
    </div>
    `;

}

function LoadContactInfo()
{
    $(".container").empty();
    document.getElementsByClassName("container")[0].innerHTML = `
    <div class="contact">    
        <div class="contact-header">
            Contact & Info
        </div>
        <hr>
            <img class="contact-side-img" src="resources\\images\\gecko.jpg" alt="gecko picture"> 
        
        <div class="contact-content">
            <span>The best way to contact me would be through LinkedIn </span><a href="https://www.linkedin.com/in/austindolve/" rel="noopener noreferrer" target="_blank"><img class="linkedin-img" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn"></a>
        </div>
    </div>
    `;
}

function typeWriterContactMe()
{
    
}


$( document ).ready( () => {
    $('.splashscreen-text').fadeIn(1500, "swing");
    $(".splashscreen-text").animate({height: '150px', width: '150px'}, 125, () =>{
        $(".splashscreen-loader").fadeIn(400);
        setTimeout(() => {
            AnimateIntro();
        }, 3000);
    });

    $(".sidebar a").on("click", (e)=>{
        switch(e.target.id)
        {
            case "home": $(".container").empty(); break;
            case "projects": LoadProjects(); break;
            case "contact": LoadContactInfo(); break;
            case "about": $(".container").empty(); break;
        }
        selectSideBarLink(e.target.id);
    });
});

$('.splashscreen').on("mousemove", () => {
    AnimateIntro();
});

function selectSideBarLink(linkId)
{
    $(".sidebar a").each(function( a ) 
    {

        if($(this).attr('id') == linkId)
        {
            $(this).attr("class", "active");
        }
        else
        {
            $(this).attr("class", "");
        }
    });

}
// HideSplashScreen(10, 10);
// ShowSidePanel(10, 10);
function AnimateIntro()
{
    HideSplashScreen(1000, 1000);
    ShowSidePanel(250, 3000);
    ShowContainer(250, 3250)
    //ShowContent(250, 2000);
}

function HideSplashScreen(animationSpeed, timeout)
{
    $(".splashscreen-loader").css("border-left", "7px solid #3498db");
    $(".splashscreen-loader").css("border-right", "7px solid #3498db");
    $(".splashscreen-loader").css("border-bottom", "7px solid #3498db");

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

