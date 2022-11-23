# Civ Blitz Readme

Welcome to Civ Blitz! This is a web application used to generated custom 
factions for Sid Meier's Civilization VI by mixing and matching abilities
found in the base game and official expansions and DLC. Of course, if you try
to use something from some DLC you do not own, it will not work.

This readme is provided to give instructions on how to run Civ Blitz on your
own machine, as the webapp hosting that Civ Blitz has been based on until now
is no longer free, and there's not quite enough demand to be worth paying for it.

## Prerequisites

This is a web application written in Java, so all you really need is to
have a Java runtime installed to run the packaged file provided.

I recommend downloading the latest version of Adoptium's OpenJDK distribution from:

### https://adoptium.net/

There should be a button labelled "Latest LTS Release" or similar. The version should be 17.x.x or later.
Download and install that. Be sure to have the "Add to PATH" option enabled 
(it is enabled by default so don't worry) and "Associate .jar".

Once done, open a command prompt anywhere and run `java -version`, and you should get 
output somewhat like the following:
```
openjdk version "17.0.5" 2022-10-18
OpenJDK Runtime Environment Temurin-17.0.5+8 (build 17.0.5+8)
OpenJDK 64-Bit Server VM Temurin-17.0.5+8 (build 17.0.5+8, mixed mode, sharing)
```

If not, you have not installed Java and made it available on your system PATH. 
Either follow the steps above again or refer to Google.

## Downloading and Running

- Go to the Civ Blitz releases page at https://github.com/rossturner/civ-blitz/releases
- Download civblitz.jar from the latest release (the one to the top of the page)
- Put this somewhere on your computer and open a command prompt to this location
- Run `java -jar civblitz.jar` to launch the jar file using your Java (17) runtime
- If  successful, you should see a bunch of stuff printed to the command line, beginning with a funky CivBlitz ascii art banner
- Go to http://localhost:8080/ in your browser

You *could* just double-click the .jar file to run it, but this will leave Civ Blitz running as a 
background process until you either restart your computer, or kill the process called "OpenJDK Platform binary".

Note that you'll have to come back and manually download any new versions of Civ Blitz,
if we create any (such as for new DLC leaders).
