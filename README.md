# DnDeemo
Making Dnd accessible.

I tried to go through all files and add comments on what I was envisioning, explaining any
bugs or what I wanted to implement where I currently have hardcoded variables.

if part of your refactor is moving notes in here (there are a lot of them) but I though it would be easier at first to see them in the files they are applicable to.

the main goal is to create a walk through to playing DnD for beginners guided by an ai dm so the players actions will have real time effects on the game as they would in a real game.

for next js, I kind of blended the use of the new app-router version and their api services from the previous versions.  its not the cleanest, but it does work.  

The "app" folder is our home page url.  any folders inside of it are url extensions.  any "page" file in a folder is the code for the page itself.   The api folder has route folders instead used to access apis.  the components only have the component name files, no page or route files.  styles folder has the component or page name ".module.css"

# GETTING STARTED
you will need an api key for the open ai.

you can create an account with open ai and generate an api key with them very easily, it takes less than a minute.  that will be the source of your conversation.

you will need to run npm i to install all dependencies and npm run build to compile the typescript

once that is done, run npm run dev and let your journey begin

