const homeData = [
    {
        title: "SHMUP_1_23",
        contentInfo: `SHMUP_1_23 is a game programming project created with Unity, GIMP, LMMS. 
        SHMUP_1_23 is a shoot 'em up genre that started out as a way to not only re-learn Unity but also utilize many software engineering skills. These skills are design patterns, use of OOP concepts, future-proofing architecture, and keeping things highly cohesive & loosely coupled.
        Can be played on mobile and desktop via WebGL (mobile screen must be rotated to landscape mode for best experience).
        While at the time of writing this, the game is not necessarilly polished, though, it certainly is playable and features a level + boss.
        `,
        photo: "resources\\images\\shmup_1_23.gif",
        buttons: [["new-tab", "https://movleax.github.io/shmup_1_23/", "Play Game"]]
    },
    {
        title: "iAmHungry Mobile App",
        contentInfo: `iAMHungry is a mobile application, created to organize and help offer location suggestions based the user's favorite restaurants.
        The user can add, remove, and configure restaurant criteria for the app, so it can offer the best options for your current situation.
        Uses React Native, JavaScript, Google Maps API, and REST services.
        A backend server was created with a Arch Linux based distro, Java Spring Boot, and MariaDB to supply the app with the REST services and database storage.
        JSON Web Tokens are used as a security method for accessing the REST api.
        This project was migrated to an AWS EC2 instance and made it to an Alpha-testing state on Google Play`,
        photo: "resources\\images\\iAmHungry_showcase.gif",
        buttons: [["new-tab", "https://github.com/movleax/iAmHungryReactNative", "GitHub Project"]]
    },
    {
        title: "SnakeJS",
        contentInfo: `SnakeJS is a JavaScript take on the classic snake game, where the objective is to collect the food pellets, which cause your character to grow by a block size, and ultimately avoid obstacles.

        The app uses classes and basic OOP concepts (limited OOP due to JavaScript).
        Design patterns utilized are currently Command and State.
        The Command pattern is used to encapsulate keyboard presses and which action should be executed for a given input.
        
        The State pattern is used to transition between different game states, such as the MainMenu or MainGame states.
        
        Other concepts such as basic data structures are used in this app also.
        One notable data structure is the linked list. For the actual snake, this is a class that controls a linked list of body node objects. This made implementing control logic for the snake much easier and elegant.`,
        photo: "https://raw.githubusercontent.com/movleax/SnakeJS/master/SnakeJSDesktop.gif",
        buttons: [["new-tab", "https://github.com/movleax/SnakeJS", "GitHub Project"]]
    },
    {
        title: "MazeSolveJS",
        contentInfo: "MazeSolverJS is a JavaScript, canvas-based web app. This web app is designed to load in a map file, which contains ASCII characters for specifying the type of object to create, and the screen location of said object. For instance, when the map parser reads in a 'X' character, this tells the JavaScript program that a object of type Block should be created and pushed onto an array. Using basic math and knowing which iteration of parsing through the map file, a X and Y position can be derived and assigned to created objects. In the future, the app will have a dropdown list to choose which algorithm the maze should use to solve a given map. Currently, the solver object chooses a random direction once it has hit a wall.",
        photo: "https://raw.githubusercontent.com/movleax/MazeSolverJS/master/simple_maze_solver_algo.gif",
        buttons: [["new-tab", "https://github.com/movleax/MazeSolverJS", "GitHub Project"]/*,  ["load", "https://movleax.github.io/MazeSolverJS/index.html", "Load"] */]
    },
    {
        title: "Map Generator",
        contentInfo: `Map generator is coded in C# and uses Winforms as the graphics host.
        This program begins by reading shape files from a designated folder. Specifically, each shape file represents a graphical shape, and is represented by ASCII characters. Unique ASCII characters will also tell the program where connection points are located on the shape. Each shape will then be processed into a drawable graphical object and stored into a list.
        Next, the program then grabs a shape file to place in the center of the screen. Once this object is placed on the screen, the program will randomly grab another object given its list of shapes, and attempt to connect this shape with any currently placed shape on screen. An example of an unsuccessful placement on screen would be a collision of any shape object already placed. Otherwise, the shape object will be placed on screen and the process will repeat.`,
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
        contentInfo: `Way back in the summer of 2014, during the advent of simple yet viral games, such as flappy bird, Hipster Delivery was conceived. 
        With a burning desire to release a mobile application on the google play store, this mobile application was created with Unity, C#, GIMP, and a lot of hard work. 
        Ultimately, Hipster Delivery plays as a 2D "Infinite Runner", where the objective is to deliver newspapers (by tapping on building targets) while avoiding obstacles such as bicyclists and trash bins (By swiping up or down on screen). 
        Survive long enough, and perhaps the protagonist will be ambushed by an alien spaceship hurling trash bins?!`,
        photo: "resources\\images\\hipsterDeliverRun.jpg",
        buttons: [["new-tab", "https://play.google.com/store/apps/details?id=com.austindolve.hipsterdelivery&hl=en_US", "Google Play Store"]]
    },
    {
        title: "Space Patrol",
        contentInfo: `Created completely with C++, MS Paint, audacity, and SDL, Space Patrol is an exciting 2D side-scrolling shooter where asteroids are constantly flying towards the protagonist's spaceship, and alien space ships will attempt to fire lasers at you.
        To say the least, Space Patrol is a very old project (nearly a decade ago), this was one of the first big projects I worked on, and definitely holds sentimental value`,
        photo: "resources\\images\\space_partol.PNG",
        buttons: [["dummy", "", "More Info Coming soon"]]
    },
    {
        title: "Mario Clone",
        contentInfo: `Another interesting classic written in C++, MS Paint, and SDL. Oddly enough, this project started out as a Game Engine project during winter break of sophomore year in college. A few months later, and the project evolved into a goal of creating a 2D Platformer, like mario. This program was the first time I created a way to parse ASCII text from a file in order to build a graphical 2D map. Another fun fact, the game was created as a joke gift for a friend's birthday. This offshoot mario clone offers a fun 2D platformer experience where enemies must be defeated and items must be collected in order to continue to the next level.`,
        photo: "resources\\images\\jacob_sdl.PNG",
        buttons: [["dummy", "", "More Info Coming soon"]]
    }
];

const projectsData = [
    {
        title: "SHMUP_1_23",
        projectInfo: `SHMUP_1_23 is a game programming project created with Unity, GIMP, LMMS. Can be played on mobile and desktop via WebGL (mobile screen must be rotated for best experience). While at the time of writing this, the game is not necessarilly polished, though, it certainly is playable and features a level + boss.`,
        photo: "resources\\images\\shmup_1_23.gif",
        buttons: [["new-tab", "https://movleax.github.io/shmup_1_23/", "Play Game"]]
    },
    {
        title: "iAmHungry Mobile App",
        projectInfo: `A mobile application, created to organize and help offer location suggestions based the user's favorite restaurants. The user can add, remove, and configure restaurant criteria, so the app can offer the best options. Uses React Native, JavaScript, Google Maps API, and REST services via a hand crafted backend server.`,
        photo: "resources\\images\\iAmHungry_showcase.gif",
        buttons: [["new-tab", "https://github.com/movleax/iAmHungryReactNative", "GitHub Project"]]
    },
    {
        title: "SnakeJS",
        projectInfo: `SnakeJS is a JavaScript take on the classic snake game. Programming concepts used are Linked List (the snake's body), Command design pattern for keyboard input, and State design pattern for managing main menu and the main gameplay`,
        photo: "https://raw.githubusercontent.com/movleax/SnakeJS/master/SnakeJSDesktop.gif",
        buttons: [["new-tab", "https://github.com/movleax/SnakeJS", "GitHub Project"]]
    },
    {
        title: "MazeSolveJS",
        projectInfo: "JavaScript, canvas-based web app. This web app is designed to load in a map file, which describes a maze, and solve the maze using a selected algorithm.",
        photo: "resources\\images\\MazeSolveJS.PNG",
        buttons: [["new-tab", "https://github.com/movleax/MazeSolverJS", "GitHub Project"]/* , ["load", "https://movleax.github.io/MazeSolverJS/index.html", "Load"] */]
    },
    {
        title: "Map Generator",
        projectInfo: "Coded in C#, this program reads shape files with ASCII content from a designated folder, creates graphical objects based on the shape files, and performs calculations to connect these shapes in a cohesive manner on screen.",
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
        projectInfo: "Created with Unity, C#, GIMP, and a lot of hard work, Hipster Delivery plays as a 2D \"Infinite Runner\", where the objective is to deliver newspapers while avoiding obstacles such as bicyclists and trash bins (and possibly an alien spaceship hurling trash bins at you)",
        photo: "resources\\images\\hipsterDeliverRun.jpg",
        buttons: [["new-tab", "https://play.google.com/store/apps/details?id=com.austindolve.hipsterdelivery&hl=en_US", "Google Play Store"]]
    },
    {
        title: "Space Patrol",
        projectInfo: "Though an old project, space patrol is an exciting 2D side-scrolling shooter where asteroids and alien laser beams must avoided and enemies beat. Created with C++, MS Paint, Audacity, and SDL",
        photo: "resources\\images\\space_partol.PNG",
        buttons: [["dummy", "", "TBD"]]
    },
    {
        title: "Mario Clone",
        projectInfo: "Another interesting classic written in C++, MS Paint, and SDL. This offshoot mario clone offers a fun 2D platformer experience where items must be collected and enemies defeated.",
        photo: "resources\\images\\jacob_sdl.PNG",
        buttons: [["dummy", "", "TBD"]]
    }
];

function getButtonClickType(button)
{
    var onclick;
    
    switch(button[0])             
    {
        case "new-tab": onclick = `window.open('${button[1]}')`; break;
        case "load": onclick = `$('.container').load('${button[1]}')`; break;
        case "dummy": onclick = ``; break;
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

    var max_width700 = window.matchMedia("(max-width: 700px)")
    checkWindowSize(max_width700) // Call listener function at run time
    max_width700.addListener(checkWindowSize) // Attach listener function on state changes
});

    
    
function checkWindowSize(x) 
{
    if (x.matches) 
    { // If media query matches
        LoadProjects();
    } 
    else 
    {
        LoadHomePage();
    }
}

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

