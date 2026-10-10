export type Project={slug:string;title:string;status:'Completed'|'In Development'|'On Hold';featured:boolean;image?:string;gallery?:{src:string;caption:string}[];sections?:{heading:string;text:string;image?:string;caption?:string;smallMedia?:boolean}[];category:string;tech:string[];summary:string;details:string[];videos?:{label:string;id:string}[];videoFile?:{label:string;src:string;poster?:string};steamTrailerUrl?:string;smallImage?:boolean;fallbackImage?:string;links?:{label:string;url:string}[];source?:string;role?:string;recognition?:string};
export const projects:Project[] = [
  {
    "slug": "fish-evolution",
    "title": "IRP — Fish Evolution Simulation",
    "status": "Completed",
    "featured": true,
    "image": "/images/fish-evolution.jpg",
    "gallery": [
      {
        "src": "/images/gallery/fish-closeup.jpg",
        "caption": "Fish morphology and grouping"
      },
      {
        "src": "/images/gallery/fish-population.jpg",
        "caption": "Fish population in the environment"
      },
      {
        "src": "/images/gallery/fish-ecosystem.jpg",
        "caption": "Ecosystem terrain and simulation"
      },
      {
        "src": "/images/gallery/fish-evolution-graphs.jpg",
        "caption": "Research metrics and evolution graphs"
      },
      {
        "src": "/images/gallery/fish-behaviour.jpg",
        "caption": "Autonomous agent behaviour"
      }
    ],
    "category": "Research · Simulation",
    "tech": [
      "Unity",
      "C#",
      "Simulation",
      "Procedural Generation"
    ],
    "summary": "My final-year Unity research project exploring autonomous fish, inherited traits and changing populations inside a simulated marine ecosystem.",
    "details": [
      "For my final-year research project, I developed a 3D marine ecosystem in Unity using C#. I wanted to explore how a population of autonomous fish would change over generations when each creature had its own traits, needs and behaviour instead of being directly controlled by a player.",
      "I programmed the fish agents and the systems they interact with, including food, hunger, digestion, predators and prey, reproduction, ageing and environmental conditions. I also worked on inherited behaviour and morphology so the fish could vary between individuals and generations rather than all behaving identically.",
      "A large part of the project was observing and debugging the simulation. I added selected-fish readouts, population graphs and CSV logging, then worked on performance and balancing as I tested how the ecosystem behaved over longer runs. Some behaviours needed repeated adjustments as predator and prey populations changed."
    ],
    "sections": [
      {
        "heading": "Building the ecosystem",
        "text": "I created the Unity environment and the systems that keep the simulation running, including resources, procedural plants and changing environmental conditions. The wider view shows the habitat that the fish move around and depend on.",
        "image": "/images/gallery/fish-ecosystem.jpg",
        "caption": "The simulated habitat, with fish and environmental resources visible."
      },
      {
        "heading": "Fish behaviour and inherited traits",
        "text": "I programmed agents that respond to things such as hunger, nearby threats and their own inherited characteristics. The selection and debug panels let me inspect a particular fish’s current behaviour, health, energy and other values while it is running.",
        "image": "/images/gallery/fish-closeup.jpg",
        "caption": "A fish in the simulation with its individual debug information visible."
      },
      {
        "heading": "Population and resources",
        "text": "I worked on the systems connecting feeding, reproduction, eggs, ageing and death to the available resources. These interactions affect how the population changes over time. The screenshot shows fish distributed around the environment; it does not by itself show every lifecycle system.",
        "image": "/images/gallery/fish-population.jpg",
        "caption": "Fish spread through the simulation environment."
      },
      {
        "heading": "Tracking generations and testing changes",
        "text": "I added graphs and CSV exports so I could record information such as population, diversity and behaviour over multiple generations. I used these alongside debugging and performance tests to see whether changes were improving the simulation or causing new problems.",
        "image": "/images/gallery/fish-evolution-graphs.jpg",
        "caption": "In-game graph and generation information used while testing the ecosystem."
      }
    ],
    "source": "Games Programmer CV / final-year research project",
    "role": "Solo developer · final-year research project"
  },
  {
    "slug": "twisted-guardians",
    "title": "Twisted Guardians",
    "status": "Completed",
    "featured": true,
    "image": "/images/twisted-guardians-original.png",
    "category": "Combat · AI",
    "tech": [
      "Unreal Engine 5",
      "C++",
      "Blueprints",
      "AI"
    ],
    "summary": "For a university group assignment, I programmed enemy and boss AI for an Unreal Engine action-adventure game focused on boss combat.",
    "details": [
      "For a university group assignment, I worked as a programmer on Twisted Guardians, an Unreal Engine action adventure game focused around boss combat. My main work was creating the enemy and boss AI systems mainly in C++ with Blueprints used where needed. This included enemy detection, chasing the player, returning to a home area, attack selection, cooldowns, hit detection and telegraphed attacks.",
      "I also made the system use editable attack data instead of hardcoded attacks, so values like damage, range, wind-up time, recovery, cooldowns, telegraph shape and attack weighting could be changed more easily by the team. A big part of the work was making sure the boss attacks felt fair, so the ground telegraphs had to match where the damage would actually happen.",
      "I spent a lot of time debugging AI detection, C++ build errors, Blueprint issues, attack timing and general combat balancing. This project helped me improve a lot with Unreal Engine C++, AI controllers, actor components, data assets and working on a larger team project. The project is currently waiting for its final grade."
    ],
    "videos": [
      {
        "label": "Official trailer",
        "id": "1rP6UPtGnb8"
      }
    ],
    "sections": [
      {
        "heading": "Enemy detection and pursuit",
        "text": "I created enemy AI that detects the player, follows them and returns to its home area when the encounter ends or the player moves away. I worked on making that behaviour reusable for different enemies instead of writing completely separate logic for each one.",
        "image": "/images/gallery/twisted-guardians/enemy-approach.jpg",
        "caption": "An encounter captured from the project’s gameplay recording."
      },
      {
        "heading": "Data-driven attacks",
        "text": "I programmed the attack-selection system in C++ with editable data for damage, range, wind-up, recovery, cooldowns, telegraph shapes and attack weighting. This meant the team could tune attacks without having to change the C++ code for every adjustment.",
        "image": "/images/gallery/twisted-guardians/combat-closeup.jpg",
        "caption": "A combat moment from the recorded Unreal Engine build."
      },
      {
        "heading": "Matching attack warnings to damage",
        "text": "I worked on the telegraph and hit-detection systems so the area shown to the player matched where the attack would actually deal damage. Getting the timing and positioning right was important for making boss attacks feel fair.",
        "image": "/images/gallery/twisted-guardians/attack-telegraph.jpg",
        "caption": "A visible ground telegraph during an enemy attack."
      },
      {
        "heading": "Testing and debugging the AI",
        "text": "I spent time diagnosing inconsistent detection, attack timing, C++ compilation issues and Blueprint integration problems. Testing the encounters in-game helped me check that the AI behaved as expected rather than relying only on the code.",
        "image": "/images/gallery/twisted-guardians/combat-response.jpg",
        "caption": "Gameplay testing of the enemy combat systems."
      }
    ],
    "source": "Original Wix project description + Games Programmer CV",
    "videoFile": {
      "label": "Combat AI gameplay recording",
      "src": "/videos/twisted-guardians-combat.mp4",
      "poster": "/images/gallery/twisted-guardians/enemy-approach.jpg"
    },
    "gallery": [
      {
        "src": "/images/gallery/twisted-guardians/enemy-approach.jpg",
        "caption": "Enemy encounters from the recorded combat demonstration."
      },
      {
        "src": "/images/gallery/twisted-guardians/combat-closeup.jpg",
        "caption": "A close-range combat moment from the original footage."
      },
      {
        "src": "/images/gallery/twisted-guardians/attack-telegraph.jpg",
        "caption": "An attack telegraph shown in the gameplay recording."
      },
      {
        "src": "/images/gallery/twisted-guardians/combat-response.jpg",
        "caption": "Combat response during a gameplay test."
      }
    ],
    "role": "Enemy and boss AI programmer · university group assignment"
  },
  {
    "slug": "easyfoliage",
    "title": "EasyFoliage",
    "status": "In Development",
    "featured": true,
    "image": "/images/easyfoliage.png",
    "gallery": [
      {
        "src": "/images/gallery/foliage-generated.jpg",
        "caption": "Generated foliage and preset controls"
      },
      {
        "src": "/images/gallery/foliage-boundaries.jpg",
        "caption": "Editable generation boundaries"
      },
      {
        "src": "/images/gallery/foliage-preview.jpg",
        "caption": "Foliage generation preview"
      }
    ],
    "category": "Editor Tool · Procedural",
    "tech": [
      "Unity",
      "C#",
      "Editor Scripting",
      "Procedural Generation"
    ],
    "summary": "A Unity editor tool I developed in C# to give developers more control over procedural foliage placement.",
    "details": [
      "I originally made EasyFoliage for a university assignment, where the idea was to create a Unity editor tool that could place foliage around a scene without having to position every object by hand. After submitting the assignment, I kept working on it because I wanted to turn it into something other Unity developers could actually use.",
      "I programmed a custom editor window with separate controls for trees, bushes, grass, plants and generation boundaries. I worked on prefab lists, the generation system and the controls for where objects can appear, then continued improving how the editor handles multiple boundaries, presets and previews.",
      "A lot of the work after the assignment has been about usability as well as the generation itself. I improved the layout, add and remove controls, prefab management and how boundaries are kept in sync with the scene. The tool is published on the Unity Asset Store and is still being developed."
    ],
    "links": [
      {
        "label": "Unity Asset Store",
        "url": "https://assetstore.unity.com/packages/tools/terrain/easyfoliage-321747"
      }
    ],
    "sections": [
      {
        "heading": "Building the editor tool",
        "text": "I wrote a custom Unity editor window so users could manage foliage types and their prefab lists in one place. I kept the layout consistent across trees, grass, bushes and plants to make it easier to switch between them.",
        "image": "/images/gallery/foliage-generated.jpg",
        "caption": "The EasyFoliage editor next to a scene containing generated foliage."
      },
      {
        "heading": "Setting generation boundaries",
        "text": "I added and improved a boundary system to control which areas of the scene can receive foliage. I also worked on the scene and UI workflow for selecting, adding and managing boundaries.",
        "image": "/images/gallery/foliage-boundaries.jpg",
        "caption": "Boundary outlines visible over the terrain in Unity."
      },
      {
        "heading": "Previewing and repeating results",
        "text": "I implemented preview and preset workflows so users could try settings before generating the final objects. Seed-based generation makes it possible to repeat placements when the same setup is used.",
        "image": "/images/gallery/foliage-preview.jpg",
        "caption": "The Unity editor showing foliage placement previews and generation controls."
      }
    ],
    "source": "Original Wix project description + Games Programmer CV",
    "role": "Solo Unity editor-tool developer"
  },
  {
    "slug": "horror-bus",
    "title": "Horror Bus",
    "status": "On Hold",
    "featured": false,
    "image": "/images/horror-bus-cover.jpg",
    "category": "Horror · Prototype",
    "tech": [
      "Unity",
      "Solo Development",
      "Gameplay Prototyping",
      "UI"
    ],
    "summary": "A solo first-person horror prototype in Unity about examining bus passengers and deciding who to let aboard.",
    "details": [
      "Horror Bus is my first larger solo indie game project. I started developing it around a simple idea: the player drives the same bus route, checks the passengers waiting to board and decides who to allow on using limited information.",
      "I wanted the horror to come from observation and memory rather than constant jump scares. I worked on a passenger-inspection loop with questioning and identity-check interfaces, while keeping obvious hints to a minimum so players would have to pay attention to what they could actually see.",
      "The project is currently on hold, and there are parts of the design I still want to expand. In particular, I want more sophisticated anomalies, better delayed consequences and scoring, and additional audio and visual polish. Those are plans for a future version, not features I am claiming are complete in the current prototype."
    ],
    "links": [
      {
        "label": "Public prototype on itch.io",
        "url": "https://dylsonator.itch.io/horror-bus"
      }
    ],
    "sections": [
      {
        "heading": "The bus route and atmosphere",
        "text": "I set the prototype around one repeating bus route, using the dark depot and foggy road to make ordinary stops feel uneasy. The environment is part of the atmosphere I wanted: players should become familiar enough with the setting to notice when something changes.",
        "image": "/images/gallery/horror-bus/depot-road.jpg",
        "caption": "The depot and foggy road visible from the bus.",
        "smallMedia": true
      },
      {
        "heading": "Inspecting passengers",
        "text": "I built the game around looking closely at people before making a decision. The passenger shown here is one of the people the player can observe at a stop; the image shows the character, rather than proving that any particular anomaly has occurred.",
        "image": "/images/gallery/horror-bus/passenger-inspection.jpg",
        "caption": "A passenger viewed up close at the depot."
      },
      {
        "heading": "Questioning the people on board",
        "text": "I added a questioning interface so the player can ask passengers for information instead of relying only on appearances. I wanted conversations to add to the uncertainty without simply telling players the correct answer.",
        "image": "/images/gallery/horror-bus/passenger-dialogue.jpg",
        "caption": "Dialogue and questioning choices displayed inside the bus.",
        "smallMedia": true
      },
      {
        "heading": "Checking identification",
        "text": "I worked on an identity-checking interface that gives the player another way to inspect a passenger. The screenshot shows that UI directly, rather than the wider bus gameplay.",
        "image": "/images/gallery/horror-bus/identity-station.jpg",
        "caption": "The identification-check interface from the prototype.",
        "smallMedia": true
      },
      {
        "heading": "Making decisions",
        "text": "I prototyped interactions around what to do with a passenger after examining them. My longer-term plan is to make those decisions matter over the course of a run through improved consequences and scoring.",
        "image": "/images/gallery/horror-bus/questions.jpg",
        "caption": "Passenger interaction options visible in the current prototype.",
        "smallMedia": true
      }
    ],
    "source": "Original Wix project description + published itch.io feature list",
    "gallery": [
      {
        "src": "/images/gallery/horror-bus/depot-road.jpg",
        "caption": "The depot and foggy road establish the nighttime setting."
      },
      {
        "src": "/images/gallery/horror-bus/passenger-inspection.jpg",
        "caption": "A passenger encountered at the depot."
      },
      {
        "src": "/images/gallery/horror-bus/passenger-dialogue.jpg",
        "caption": "Passenger questioning and interaction options."
      },
      {
        "src": "/images/gallery/horror-bus/identity-station.jpg",
        "caption": "An identity-check screen from the prototype."
      },
      {
        "src": "/images/gallery/horror-bus/questions.jpg",
        "caption": "Inspection and questioning controls in the prototype."
      }
    ],
    "role": "Solo developer · prototype on hold"
  },
  {
    "slug": "sightline-command",
    "title": "Sightline Command",
    "status": "Completed",
    "featured": false,
    "image": "/images/sightline-command-cover.webp",
    "category": "Strategy · Experimental Input",
    "tech": [
      "Unity",
      "Team Project",
      "Hand Tracking"
    ],
    "summary": "A university group project exploring turn-based strategy gameplay with hand tracking and a dual-monitor setup.",
    "details": [
      "I worked as a programmer on Sightline Command during a university group assignment at the University of Gloucestershire. The module was about exploring unusual ways to interact with games, so our team developed a turn-based strategy game in Unity using hand tracking as the main input method and a dual-monitor setup.",
      "The project was a team effort, and the original project description does not break down which individual systems I programmed. Rather than claiming ownership of the hand tracking, character designs or other team work, I have included a separate video of my own contributions alongside the full game trailer.",
      "We were invited to demonstrate Sightline Command at Game-X, the university’s game event. I received a 2:1 (68%) for the project."
    ],
    "videos": [
      {
        "label": "Game trailer",
        "id": "9iY2GnT9XGc"
      },
      {
        "label": "My contributions",
        "id": "z9ATEXkAegI"
      }
    ],
    "links": [
      {
        "label": "Play on itch.io",
        "url": "https://dylsonator.itch.io/sightline-command"
      }
    ],
    "sections": [
      {
        "heading": "Turn-based tactical gameplay",
        "text": "Our team developed a turn-based strategy game with an overhead view of the map, units and available actions. This top-down screenshot is the gameplay view and shows the tactical interface that players interact with.",
        "image": "/images/gallery/sightline/strategy-map.jpg",
        "caption": "Actual gameplay: the top-down tactical map and interface.",
        "smallMedia": true
      },
      {
        "heading": "Hand tracking and the display setup",
        "text": "The module challenged us to experiment with input and presentation instead of relying on a conventional keyboard-and-mouse game. Sightline Command used a hand-tracking device and two monitors. The team developed these ideas together; my personal work is shown in the contributions video below."
      },
      {
        "heading": "Creature artwork",
        "text": "This image is artwork from Sightline Command, showing one of the creature designs. It is included to show the look of the project, not as a gameplay screenshot or as art I am claiming I created.",
        "image": "/images/gallery/sightline/creature.jpg",
        "caption": "Project artwork: creature design, not a gameplay capture.",
        "smallMedia": true
      },
      {
        "heading": "Mechanical character artwork",
        "text": "This is another piece of artwork from the project, showing a mechanical character. I am including it as a visual from the team project rather than evidence of my own programming work.",
        "image": "/images/gallery/sightline/mech.jpg",
        "caption": "Project artwork: mechanical character, not a gameplay capture.",
        "smallMedia": true
      },
      {
        "heading": "Showing the project at Game-X",
        "text": "Our team was invited to show Sightline Command at Game-X. The full trailer and my individual-contributions video are available below, so it is possible to see the project and my work separately.",
        "image": "/images/sightline-command-cover.webp",
        "caption": "Sightline Command title artwork."
      }
    ],
    "source": "Original Wix project description and videos",
    "gallery": [
      {
        "src": "/images/gallery/sightline/strategy-map.jpg",
        "caption": "Gameplay screenshot: top-down tactical map and turn-based interface."
      },
      {
        "src": "/images/gallery/sightline/creature.jpg",
        "caption": "Project artwork: creature design (not gameplay)."
      },
      {
        "src": "/images/gallery/sightline/mech.jpg",
        "caption": "Project artwork: mechanical character (not gameplay)."
      },
      {
        "src": "/images/sightline-command-cover.webp",
        "caption": "Sightline Command title art."
      }
    ],
    "role": "Programmer · university group assignment",
    "recognition": "Game-X showcase invitation · Project assessment: 2:1 (68%)"
  },
  {
    "slug": "bound-in-time",
    "title": "Bound in Time",
    "status": "Completed",
    "featured": false,
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3716810/52a3bdf6c5bb74aec27392d0f59d26a103a29336/header.jpg?t=1758823382",
    "category": "Niagara · Visual Effects",
    "tech": [
      "Unreal Engine 5",
      "Niagara",
      "Real-Time VFX",
      "Team Collaboration"
    ],
    "summary": "My Niagara VFX work on a university team game, including laser shots, stun bursts, sword slashes and a self-revive sequence.",
    "details": [
      "For a university assignment, I joined the team developing Bound in Time as a visual effects artist. I worked alongside Level 6 students, and my role was making real-time effects in Unreal Engine using Niagara rather than programming the game’s combat systems.",
      "This was my first time using Niagara. I started with effects such as laser shots, then worked on stun bursts, sword slashes and a fully sequenced self-revive effect. Along the way I learned to use tools including vortex forces, trail renderers and shape constraints to build more layered effects.",
      "I worked with the design team to make the effects fit the actions and visual style of the game, and I became more comfortable sequencing and optimising them independently. Bound in Time went on to win Best Game at Game-X. The linked VFX video demonstrates my actual effects; the Steam images show the wider game made by the team."
    ],
    "videos": [
      {
        "label": "VFX demonstration",
        "id": "8NoWWi6hZwI"
      }
    ],
    "links": [
      {
        "label": "Steam page",
        "url": "https://store.steampowered.com/app/3716810/Bound_in_Time/"
      }
    ],
    "sections": [
      {
        "heading": "Creating effects for gameplay",
        "text": "I used Niagara to create effects such as laser shots, stun bursts and sword slashes. My part of the project was the visual feedback for these actions, not the gameplay code behind the abilities. The screenshot shows the released game, while the video below shows my effects directly.",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3716810/a0e9923a4b5061b0203f2d4ab40545dc1c3b732c/ss_a0e9923a4b5061b0203f2d4ab40545dc1c3b732c.1920x1080.jpg?t=1758823382",
        "caption": "Official Steam screenshot showing the wider game, not a claim that every visible asset is mine."
      },
      {
        "heading": "Learning Niagara and sequencing effects",
        "text": "I started with simpler particle effects and then moved towards layered work, especially the self-revive sequence. I experimented with vortex forces, trail renderers, shape constraints and timing to get the look and movement I wanted."
      },
      {
        "heading": "Working with the wider team",
        "text": "I worked with designers to make the effects feel appropriate for the game’s actions and style. It gave me experience contributing to a larger team in a specialist VFX role. The game later won Best Game at Game-X."
      }
    ],
    "source": "Original Wix project description",
    "steamTrailerUrl": "https://store.steampowered.com/app/3716810/Bound_in_Time/",
    "gallery": [
      {
        "src": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3716810/a0e9923a4b5061b0203f2d4ab40545dc1c3b732c/ss_a0e9923a4b5061b0203f2d4ab40545dc1c3b732c.1920x1080.jpg?t=1758823382",
        "caption": "Official Steam gameplay screenshot"
      }
    ],
    "role": "Niagara VFX artist · university team project",
    "recognition": "Best Game at Game-X"
  },
  {
    "slug": "dijkstra-starmap",
    "title": "Dijkstra's Algorithm StarMap Navigation (C#)",
    "status": "Completed",
    "featured": false,
    "image": "/images/archive/starmap.webp",
    "category": "Algorithms · Pathfinding",
    "tech": [
      "Unity",
      "C#",
      "Dijkstra’s Algorithm",
      "Pathfinding"
    ],
    "summary": "A Unity/C# university assignment where I implemented Dijkstra’s shortest-path algorithm and movement through a generated star network.",
    "details": [
      "For a university assignment, I built a star-map navigation simulation in Unity using C#. The main task was to implement Dijkstra’s algorithm to find a route through a connected network of stars.",
      "I wrote the pathfinding and movement methods used by the simulation. The interface lets you generate a star map, choose where to travel and calculate a route before moving through the selected path.",
      "This was a chance to put the mathematical and algorithmic techniques from the module into something interactive rather than only solving the problem on paper. I received a 2:1 (64%) for the assignment."
    ],
    "videos": [
      {
        "label": "Demonstration",
        "id": "ThL5Exlvdbs"
      }
    ],
    "sections": [
      {
        "heading": "Generating a network and finding a route",
        "text": "I implemented Dijkstra’s algorithm in C# to calculate a path between selected locations in the connected star map. The screenshot shows the network and the controls for configuring it and calculating a route.",
        "image": "/images/archive/starmap.webp",
        "caption": "Generated star network and pathfinding controls from the simulation."
      },
      {
        "heading": "Moving along the calculated path",
        "text": "After finding a path, I used my own movement methods to travel through the calculated route. The demonstration video shows that route being followed rather than only displaying the algorithm’s result."
      }
    ],
    "source": "Original Wix project description",
    "smallImage": false,
    "role": "Solo C# pathfinding and movement assignment",
    "recognition": "Project assessment: 2:1 (64%)"
  },
  {
    "slug": "multiplayer-menu",
    "title": "Main Menu / Multiplayer Networking (Blueprints)",
    "status": "Completed",
    "featured": false,
    "image": "/images/archive/main-menu.webp",
    "category": "UI · Networking",
    "tech": [
      "Unreal Engine 5",
      "C++",
      "Blueprints",
      "UI",
      "Multiplayer"
    ],
    "summary": "An Unreal Engine university assignment where I built a main-menu flow for a multiplayer prototype, including UI transitions, animation and sound.",
    "details": [
      "For a university assignment, I worked on a multiplayer prototype in Unreal Engine 5 using C++ and Blueprints. The main assessed part of my project was building a complete main menu that could lead into the multiplayer experience.",
      "I created the menu flow with options to host a game, join a game, change settings and quit. I also worked on the interface animations and sound effects. The assignment allowed the gameplay to be a sample scene, so my focus was making the menu and its navigation work properly rather than creating a full standalone game.",
      "This helped me practise connecting UI elements and game flow in Unreal Engine. I received a First (72%) for the assignment."
    ],
    "videos": [
      {
        "label": "Demonstration",
        "id": "sBhJQO_rXos"
      }
    ],
    "sections": [
      {
        "heading": "Building the main menu",
        "text": "I created a command-prompt-style menu with Host Game, Settings, Join Game and Quit options. The screenshot shows that menu, which was the focus of the assignment.",
        "image": "/images/archive/main-menu.webp",
        "caption": "Main menu showing the four available options."
      },
      {
        "heading": "Connecting the menu to the multiplayer prototype",
        "text": "I worked on the navigation loop from the main menu into the multiplayer experience, along with UI animations and sound effects. The demonstration video shows the working menu flow rather than presenting the sample gameplay scene as a complete game."
      }
    ],
    "source": "Original Wix project description",
    "smallImage": false,
    "role": "Main-menu and UI developer · university assignment",
    "recognition": "Project assessment: First (72%)"
  },
  {
    "slug": "character-creator",
    "title": "Character Creator (Blueprints)",
    "status": "Completed",
    "featured": false,
    "image": "/images/archive/character-creator.webp",
    "category": "Customisation · UI",
    "tech": [
      "Unreal Engine 5",
      "Character Customisation",
      "UI",
      "Blueprints / C++"
    ],
    "summary": "A university assignment where I built an Unreal Engine character-customisation interface for changing body parts and colours.",
    "details": [
      "For a university assignment, I built a character creator mechanic in Unreal Engine 5. The task was to make an interactive customisation system like those used in RPGs, racing games and MMOs.",
      "I worked on the interface for choosing different character parts and changing appearance settings. The screenshot shows options for the head, torso, legs and feet alongside colour selectors for skin, hair and clothing, with the selected character displayed in the middle.",
      "The assignment was about implementing the mechanic, not making original character models or clothing. We were allowed to use appropriately credited assets, which let me concentrate on the programming and interface. I received a 2:1 (63%) for the project."
    ],
    "videos": [
      {
        "label": "Demonstration",
        "id": "kfbytZMiNyw"
      }
    ],
    "sections": [
      {
        "heading": "Changing character parts",
        "text": "I worked on the interface that lets users choose different parts of the character, including the head, torso, legs and feet. The preview in the middle shows how the selected options affect the character.",
        "image": "/images/archive/character-creator.webp",
        "caption": "Character creator with body-part choices and a preview model."
      },
      {
        "heading": "Appearance controls and asset use",
        "text": "I also worked on the customisation controls for colours and other appearance options. The focus of the assignment was the interactive system, and the character art itself was not required to be original work."
      }
    ],
    "source": "Original Wix project description",
    "smallImage": false,
    "role": "Character-customisation developer · university assignment",
    "recognition": "Project assessment: 2:1 (63%)"
  },
  {
    "slug": "3d-boids",
    "title": "3D Boids (C++)",
    "status": "Completed",
    "featured": false,
    "image": "/images/archive/boids.webp",
    "category": "Simulation · AI",
    "tech": [
      "Unreal Engine 5",
      "C++",
      "Steering AI",
      "Flocking"
    ],
    "summary": "A C++ flocking simulation I made in Unreal Engine 5 for a university assignment, with adjustable steering behaviours.",
    "details": [
      "For a university assignment, I created a 3D boids simulation in Unreal Engine 5 using C++. The task was to use basic steering and flocking behaviour to make groups of agents move around a shared environment.",
      "I worked on the movement rules, including separation, cohesion and alignment, and provided controls for values such as population size, speed, spacing and wandering. Changing those settings affects how the boids move as a group rather than following a single pre-set animation.",
      "The assignment also required a code report explaining my implementation. It helped me practise steering behaviour and simulation programming in C++, and I received a First (72%) for the project."
    ],
    "videos": [
      {
        "label": "Demonstration",
        "id": "hzgmNK61kY0"
      }
    ],
    "sections": [
      {
        "heading": "Steering and flocking behaviour",
        "text": "I implemented basic flocking rules in C++ so nearby boids influence each other’s movement. The screenshot shows a large group moving around the forest environment.",
        "image": "/images/archive/boids.webp",
        "caption": "The boids simulation, with a flock moving through the low-poly forest."
      },
      {
        "heading": "Adjusting simulation settings",
        "text": "I exposed controls for the spawn count, speed, separation, cohesion, alignment, wandering and boundaries. I used these to change and observe how the flock behaves, rather than relying on one fixed configuration."
      }
    ],
    "source": "Original Wix project description",
    "smallImage": false,
    "role": "C++ boids simulation · university assignment",
    "recognition": "Project assessment: First (72%)"
  }
];
