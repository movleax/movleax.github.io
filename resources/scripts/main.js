const homeData = [
    {
        title: "MazeSolveJS",
        contentInfo: "MazeSolverJS is a JavaScript, canvas-based web app. This web app is designed to load in a map file, which contains ASCII characters for specifying the type of object to create, and the screen location of said object. For instance, when the map parser reads in a 'X' character, this tells the JavaScript program that a object of type Block should be created and pushed onto an array. Using basic math and knowing which iteration of parsing through the map file, a X and Y position can be derived and assigned to created objects. In the future, the app will have a dropdown list to choose which algorithm the maze should use to solve a given map. Currently, the solver object chooses a random direction once it has hit a wall.",
        photo: "https://raw.githubusercontent.com/movleax/MazeSolverJS/master/simple_maze_solver_algo.gif",
        buttons: [["new-tab", "https://github.com/movleax/MazeSolverJS", "GitHub Project"], ["load", "https://movleax.github.io/MazeSolverJS/index.html", "Load"]]
    },
    {
        title: "Map Generator",
        contentInfo: "Top-down 2D Map generator in C#. The program reads shape files from a designated folder, and performs calculations to connect these shapes in a cohesive manner. ",
        photo: "https://raw.githubusercontent.com/movleax/dungeonGeneratorPoC/master/readme_resources/dungeon_generator_running.gif",
        buttons: [["new-tab", "https://github.com/movleax/dungeonGeneratorPoC", "GitHub Project"]]
    },
    {
        title: "StopWatch++",
        contentInfo: "Created a WPF application to help keep track of how long certain work tasks take. This also helps organize specific tasks and provides good feedback. Utilized the Xceed toolkit to create child windows inside of the main window. Tasks can be created, deleted. Each task has a timer value hh:mm:ss, start and stop button for the timer, and a logging mechanism. Log items for a given task include the title, but also contain an optional description. Log items can be modified once created.",
        photo: "resources\\images\\stopwatchpp.jpg",
        buttons: [["new-tab", "https://github.com/movleax/StopWatch", "GitHub Project"]]
    },
    {
        title: "Hipster Delivery",
        contentInfo: "Created with Unity and C#, this android game plays as a 2D \"Infinite Runner\", where the objective is to deliver papers while avoiding obstacles.",
        photo: "resources\\images\\hipsterDeliverRun.jpg",
        buttons: [["new-tab", "https://play.google.com/store/apps/details?id=com.austindolve.hipsterdelivery&hl=en_US", "Google Play Store"]]
    },
    {
        title: "Space Patrol",
        contentInfo: "Though an old project, space patrol is an exciting 2D side-scrolling shooter where obstacles must avoided and enemies beat. Written in C++ and SDL.",
        photo: "resources\\images\\space_partol.PNG",
        buttons: [["load", "", "More Info Coming soon"]]
    },
    {
        title: "Mario Clone",
        contentInfo: "Another interesting classic written in C++. This offshoot mario clone offers a fun 2D platformer experience where items must be collected and enemies defeated.",
        photo: "resources\\images\\jacob_sdl.PNG",
        buttons: [["load", "", "More Info Coming soon"]]
    }
];

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

function homepageTemplate(content){
    return `
    <div class="content-element">
        <div>
            <img class="content-picture" src="${content.photo}" alt="${content.title}">
        </div>
        <div class="content-information">
            <div class="content-title">
                ${content.title}
            </div>
            <div class="content-details">
                ${content.contentInfo}
            </div>
            ${content.buttons ? getButtons(content.buttons) : ''}
        </div>
    </div>
    `;
}

function LoadHomePage(){
    $(".container").empty();

    document.getElementsByClassName("container")[0].innerHTML = `
    <div class='home'>
    ${homeData.map(homepageTemplate).join('')}
    </div>
    `;
}


$( document ).ready( () => {
    $('.splashscreen-text').fadeIn(1500, "swing");
    $(".splashscreen-text").animate({height: '150px', width: '150px'}, 125, () =>{
        $(".splashscreen-loader").fadeIn(400);
        setTimeout(() => {
            AnimateIntro();
        }, 3000);
    });

    $(".home-header-text a").on("click", (e)=>{
        switch(e.target.id)
        {
            case "projects": ScrollToProjects(); break;
        }
        selectSideBarLink(e.target.id);
    });

    LoadHomePage();
});

$('.splashscreen').on("mousemove", () => {
    AnimateIntro();
});

function ScrollToProjects()
{
    $('html, body').animate({
        scrollTop: ($('.container').offset().top)
    },500);
}

// HideSplashScreen(10, 10);
// ShowSidePanel(10, 10);
function AnimateIntro()
{
    HideSplashScreenIntro(1000, 1000);
    // ShowSidePanel(250, 3000);
    ShowProfile(1000,2000);
    ShowContainer(250, 250);
    
    // ShowContent(250, 2000);
}

function HideSplashScreenIntro(animationSpeed, timeout)
{
    $(".splashscreen-loader").css("border-left", "7px solid #3498db");
    $(".splashscreen-loader").css("border-right", "7px solid #3498db");
    $(".splashscreen-loader").css("border-bottom", "7px solid #3498db");

    setTimeout(() => { $('.splashscreen-loader').fadeOut(animationSpeed); }, timeout);
    setTimeout(() => { $('.splashscreen-text').fadeOut(animationSpeed); }, timeout);
}

function ShowProfile(animationSpeed, timeout)
{
    setTimeout(() => { $('.home-header-text').fadeIn(animationSpeed);}, timeout);
}

function ShowContainer(animationSpeed, timeout)
{
    setTimeout(() => { $('.container').fadeIn(animationSpeed);}, timeout);
}

function ShowContent(animationSpeed, timeout)
{
    setTimeout(() => { $('.content').fadeIn(animationSpeed);}, timeout);
}

