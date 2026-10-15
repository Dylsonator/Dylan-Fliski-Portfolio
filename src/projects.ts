export type Project={slug:string;title:string;status:'Completed'|'In Development'|'On Hold';featured:boolean;image?:string;gallery?:{src:string;caption:string}[];sections?:{heading:string;text:string;image?:string;caption?:string;smallMedia?:boolean}[];category:string;tech:string[];summary:string;details:string[];videos?:{label:string;id:string}[];videoFile?:{label:string;src:string;poster?:string};steamTrailerUrl?:string;smallImage?:boolean;fallbackImage?:string;links?:{label:string;url:string}[];source?:string;role?:string;recognition?:string};
export const projects:Project[] = [
  {
    "slug": "the-last-service",
    "title": "The Last Service",
    "status": "Completed",
    "featured": true,
    "image": "https://img.itch.zone/aW1nLzMwOTE1MTMzLnBuZw%3D%3D/original/XZiEQA.png",
    "fallbackImage": "/images/the-last-service-placeholder.svg",
    "category": "Psychological Horror · Game Jam",
    "tech": [
      "Unreal Engine 5.6",
      "First-Person Gameplay",
      "Anomaly Systems",
      "PSX Aesthetic"
    ],
    "summary": "A released PSX-style psychological horror game set at an isolated, looping night-bus stop, featuring 41 anomalies and an eight-stamp escape challenge.",
    "details": [
      "Created and released as a solo entry for Horror Hatch #3: Liminal Transit, The Last Service transforms one isolated forest-side bus stop into a repeating psychological horror journey. You have finished a late shift and just want to get home, but every route seems to lead back to the same place.",
      "I designed the observation-and-decision gameplay around two responses: board the night bus if everything looks normal, or take the marked exit when something has changed. The released game contains 41 environmental and supernatural anomalies, with interactive passengers, unsettling details and strange encounters.",
      "Each correct decision stamps the player’s ticket. Eight correct decisions are needed to complete the journey, while a wrong choice resets the current run. The project was built in Unreal Engine 5.6 and released on itch.io on 15 October 2026, during the five-day jam."
    ],
    "sections": [
      {
        "heading": "A last bus that never takes you home",
        "text": "The setting is intentionally compact: one roadside shelter, a dark forest, a marked way out and a night bus that always seems to return. Familiar objects give players a baseline to memorise, while lighting and sound turn small differences into sources of unease."
      },
      {
        "heading": "41 environmental and supernatural anomalies",
        "text": "The released game features 41 changes to discover, ranging from altered roadside details to unnatural passenger behaviour and other unexpected encounters. Some are subtle observation tests; others use interactive moments and sound to make the location feel increasingly hostile."
      },
      {
        "heading": "Eight stamps, one escape",
        "text": "Each loop asks the player to make a choice. If nothing seems wrong, speak to the driver and board; if an anomaly is present, take the exit passage. Correct calls earn stamps on an inspectable ticket, and collecting eight completes the journey. An incorrect decision resets the current streak."
      },
      {
        "heading": "Solo five-day jam release",
        "text": "I was responsible for the game design, programming and level design for this Horror Hatch #3 submission. Built in Unreal Engine 5.6 and styled after PS1-era horror, The Last Service was released on itch.io on 15 October 2026. The game can be downloaded from the link above."
      }
    ],
    "links": [
      {
        "label": "Play / download on itch.io",
        "url": "https://dylsonator.itch.io/the-last-service"
      },
      {
        "label": "Horror Hatch #3 submission",
        "url": "https://itch.io/jam/horror-hatch-21-day-challenge-3"
      }
    ],
    "role": "Solo developer · game design, programming and level design",
    "recognition": "Horror Hatch #3 — Liminal Transit · October 2026 release",
    "source": "Official itch.io release page · released 15 October 2026"
  },

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
    "summary": "A 3D autonomous marine ecosystem exploring behavioural evolution, inherited morphology and emergent interactions.",
    "details": [
      "Final-year research project focused on an autonomous ecosystem, inherited traits and non-player-driven behavioural evolution.",
      "Implemented hunger, digestion, mating, eggs, ageing, resource selection, carrion, procedural plants and currents.",
      "Added research metrics, CSV export and performance optimisation to support experimentation."
    ],
    "sections": [
      {
        "heading": "Autonomous marine ecosystem",
        "text": "I developed a 3D ecosystem where autonomous fish interact with their environment. The simulation explores behaviour and emergent interactions without direct player control.",
        "image": "/images/gallery/fish-ecosystem.jpg",
        "caption": "The simulated marine environment and active fish population."
      },
      {
        "heading": "Behaviour and inherited morphology",
        "text": "Fish differ through inherited characteristics, while autonomous behaviour responds to factors including hunger, diet, survival and their surroundings.",
        "image": "/images/gallery/fish-closeup.jpg",
        "caption": "A closer look at individual fish and their varying characteristics."
      },
      {
        "heading": "Lifecycle and environmental systems",
        "text": "The simulation includes digestion, mating, eggs, ageing, carrion and resource selection, alongside procedural plants and water currents.",
        "image": "/images/gallery/fish-population.jpg",
        "caption": "Fish and plant resources distributed through the ecosystem."
      },
      {
        "heading": "Research data and iteration",
        "text": "I added research metrics, CSV export and performance optimisation to help assess population behaviour and evolution across generations.",
        "image": "/images/gallery/fish-evolution-graphs.jpg",
        "caption": "On-screen evolution graphs and simulation metrics."
      }
    ],
    "source": "Games Programmer CV",
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
    "summary": "Reusable enemy and boss combat AI for an Unreal Engine action-adventure group project.",
    "details": [
      "Developed enemy detection, chase and return-home behaviours alongside attack selection and cooldowns.",
      "Built data-driven boss attacks with editable damage, range, wind-up, recovery, cooldown, telegraph shape and weighting.",
      "Worked on aligning telegraphed areas with hit detection and debugging C++, Blueprint integration and combat timing."
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
        "text": "I worked on reusable enemy detection, chasing, leash and return-home behaviour. This allows enemies to respond to the player without losing their home-area rules.",
        "image": "/images/gallery/twisted-guardians/enemy-approach.jpg",
        "caption": "Enemy encounters from the recorded combat demonstration."
      },
      {
        "heading": "Data-driven attacks",
        "text": "Boss attacks expose damage, range, wind-up and recovery timing, cooldowns and selection weighting. I developed the systems in C++ with Blueprint integration for iteration.",
        "image": "/images/gallery/twisted-guardians/combat-closeup.jpg",
        "caption": "A close-range combat moment from the original footage."
      },
      {
        "heading": "Telegraphs and hit detection",
        "text": "I worked on coordinating attack telegraphs with hit detection and timing, so incoming danger has a visual warning aligned with the combat logic.",
        "image": "/images/gallery/twisted-guardians/attack-telegraph.jpg",
        "caption": "An attack telegraph shown in the gameplay recording."
      },
      {
        "heading": "Debugging and combat response",
        "text": "I investigated AI transitions, response timing and integration between C++ and Blueprints during combat-system development.",
        "image": "/images/gallery/twisted-guardians/combat-response.jpg",
        "caption": "Combat response during a gameplay test."
      }
    ],
    "source": "Wix project page and Games Programmer CV",
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
    "summary": "A Unity editor extension for faster, more controllable procedural foliage placement.",
    "details": [
      "Originally developed for a university assignment and continued as a published Unity Asset Store tool.",
      "Features configurable foliage types, prefab lists, generation boundaries, presets and scene-aware editor workflows.",
      "Includes deterministic generation, preview workflows, focus-point placement and an editor interface designed for repeated use."
    ],
    "links": [
      {
        "label": "Unity Asset Store",
        "url": "https://assetstore.unity.com/packages/tools/terrain/easyfoliage-321747"
      }
    ],
    "sections": [
      {
        "heading": "Shaped boundaries",
        "text": "The tool places foliage within editable boundaries so artists and level designers can define where objects should appear.",
        "image": "/images/gallery/foliage-boundaries.jpg",
        "caption": "Editable foliage generation boundaries in the Unity editor."
      },
      {
        "heading": "Deterministic generation and previews",
        "text": "Configurable tree, grass, bush and plant settings support deterministic seeds and preview workflows, so placement can be inspected before generation.",
        "image": "/images/gallery/foliage-preview.jpg",
        "caption": "A placement preview in the Unity editor."
      },
      {
        "heading": "Presets and generation workflow",
        "text": "The editor supports prefab lists, presets and focus-point placement. Type-aware spacing and a programmatic interface make repeated generation easier to manage.",
        "image": "/images/gallery/foliage-generated.jpg",
        "caption": "Generated foliage with its preset and generation controls."
      },
      {
        "heading": "Published editor extension",
        "text": "EasyFoliage is an editor-only Unity Asset Store package, designed for Unity 2022.3 LTS and Unity 6 with Built-in, URP and HDRP support."
      }
    ],
    "source": "Wix project page and Games Programmer CV",
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
      "Game Development",
      "Horror"
    ],
    "summary": "An anomaly-focused horror game prototype, currently on hold for potential future development.",
    "details": [
      "A horror game concept built around noticing anomalies and environmental changes.",
      "The source repository is intentionally private while the game may be developed further."
    ],
    "links": [
      {
        "label": "Public prototype on itch.io",
        "url": "https://dylsonator.itch.io/horror-bus"
      }
    ],
    "sections": [
      {
        "heading": "Horror at the depot",
        "text": "Horror Bus is a prototype built around noticing anomalies and investigating unusual passengers and environmental changes. The project is currently on hold.",
        "image": "/images/gallery/horror-bus/depot-road.jpg",
        "caption": "The depot and foggy road establish the nighttime setting.",
        "smallMedia": true
      },
      {
        "heading": "Spotting suspicious passengers",
        "text": "Players encounter passengers and look for details that might not be quite right. The visual interactions form part of the prototype’s anomaly-focused concept.",
        "image": "/images/gallery/horror-bus/passenger-inspection.jpg",
        "caption": "A passenger encountered at the depot."
      },
      {
        "heading": "Questioning and interaction",
        "text": "The prototype includes on-screen questions and passenger interactions to support examining people during the journey.",
        "image": "/images/gallery/horror-bus/passenger-dialogue.jpg",
        "caption": "Passenger questioning and interaction options.",
        "smallMedia": true
      },
      {
        "heading": "Identity and inspection interface",
        "text": "I prototyped a visual inspection interface for comparing information and deciding whether something appears suspicious.",
        "image": "/images/gallery/horror-bus/identity-station.jpg",
        "caption": "An identity-check screen from the prototype.",
        "smallMedia": true
      },
      {
        "heading": "Prototype availability",
        "text": "The public prototype can be played through Itch.io. I am keeping its source code private while the project may be developed further.",
        "image": "/images/gallery/horror-bus/questions.jpg",
        "caption": "Inspection and questioning controls in the prototype.",
        "smallMedia": true
      }
    ],
    "source": "Wix project page",
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
    "image": "/images/sightline-command-cover.jpg",
    "category": "Strategy · Experimental Input",
    "tech": [
      "Unity",
      "Team Project",
      "Hand Tracking"
    ],
    "summary": "A turn-based strategy game using hand-tracking input and a dual-monitor display.",
    "details": [
      "Collaborated on a university group assignment exploring alternative interaction methods and interface design.",
      "The game was invited to showcase at Game-X, the university game convention."
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
        "heading": "Turn-based strategy and alternative input",
        "text": "Sightline Command is a university group project combining turn-based strategy with hand-tracking controls and a dual-monitor setup.",
        "image": "/images/gallery/sightline/strategy-map.jpg",
        "caption": "The tactical map and turn-based interaction view.",
        "smallMedia": true
      },
      {
        "heading": "Enemy encounters",
        "text": "The playable game includes a range of opponents. These screenshots show two different enemy designs from the project.",
        "image": "/images/gallery/sightline/creature.jpg",
        "caption": "A creature encountered in the game.",
        "smallMedia": true
      },
      {
        "heading": "Combat and presentation",
        "text": "Enemy units are presented in 3D alongside the wider tactical systems and interfaces used by the team.",
        "image": "/images/gallery/sightline/mech.jpg",
        "caption": "A mechanical enemy from Sightline Command.",
        "smallMedia": true
      },
      {
        "heading": "Team project and exhibition",
        "text": "Sightline Command was invited to showcase at Game-X. The video demonstrations below show the game and my individual contributions.",
        "image": "/images/sightline-command-cover.jpg",
        "caption": "Original Sightline Command title artwork."
      }
    ],
    "source": "Wix project page",
    "gallery": [
      {
        "src": "/images/gallery/sightline/strategy-map.jpg",
        "caption": "The tactical map and turn-based interaction view."
      },
      {
        "src": "/images/gallery/sightline/creature.jpg",
        "caption": "A creature encountered in the game."
      },
      {
        "src": "/images/gallery/sightline/mech.jpg",
        "caption": "A mechanical enemy from Sightline Command."
      },
      {
        "src": "/images/sightline-command-cover.jpg",
        "caption": "Original Sightline Command title artwork."
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
    "category": "Game Development · VFX",
    "tech": [
      "Team Project",
      "VFX"
    ],
    "summary": "A collaborative game project with a dedicated visual-effects demonstration.",
    "details": [
      "A university team project. The linked VFX demonstration showcases part of the work.",
      "Further technical breakdown and individual contributions can be added once confirmed."
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
        "heading": "Co-op sci-fi horde shooter",
        "text": "Bound in Time is a university team game released on Steam. Two players play as a cyborg and a samurai, defending environments against waves of enemies.",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3716810/a0e9923a4b5061b0203f2d4ab40545dc1c3b732c/ss_a0e9923a4b5061b0203f2d4ab40545dc1c3b732c.1920x1080.jpg?t=1758823382",
        "caption": "Official Steam gameplay screenshot showing the split-screen co-op action."
      },
      {
        "heading": "Character abilities and teamwork",
        "text": "The game uses character-specific abilities and co-operative mechanics, with upgrade choices as players progress. This image comes from the public Steam game listing.",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3716810/a0e9923a4b5061b0203f2d4ab40545dc1c3b732c/ss_a0e9923a4b5061b0203f2d4ab40545dc1c3b732c.1920x1080.jpg?t=1758823382",
        "caption": "Steam gameplay screenshot showing both players and their ability interface."
      },
      {
        "heading": "Visual effects contribution",
        "text": "The VFX demonstration linked below focuses on work from my contribution to this university team project."
      },
      {
        "heading": "Gameplay trailer and release",
        "text": "Watch the official gameplay trailer and see additional footage and screenshots on the public Steam page.",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3716810/52a3bdf6c5bb74aec27392d0f59d26a103a29336/header.jpg?t=1758823382",
        "caption": "Official Bound in Time Steam artwork."
      }
    ],
    "source": "Wix project page",
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
    "image": "https://static.wixstatic.com/media/220016_f8114ca538e74c6e906f79a8ee1805e7~mv2.png",
    "category": "Algorithms · Pathfinding",
    "tech": [
      "C#",
      "Dijkstra’s Algorithm"
    ],
    "summary": "A C# navigation demonstration built around Dijkstra’s shortest-path algorithm.",
    "details": [
      "Demonstrates graph navigation and shortest-path calculation in a star-map context.",
      "See the linked demonstration for the implementation in action."
    ],
    "videos": [
      {
        "label": "Demonstration",
        "id": "ThL5Exlvdbs"
      }
    ],
    "sections": [
      {
        "heading": "Shortest-path navigation",
        "text": "I implemented a star-map navigation demonstration using Dijkstra’s algorithm in C#. It explores graph-based route calculation.",
        "image": "https://static.wixstatic.com/media/220016_f8114ca538e74c6e906f79a8ee1805e7~mv2.png",
        "caption": "C# star-map pathfinding demonstration.",
        "smallMedia": false
      },
      {
        "heading": "Algorithm demonstration",
        "text": "The video below shows the navigation behaviour in action."
      }
    ],
    "source": "Wix project page",
    "smallImage": false,
    "fallbackImage": "/images/dijkstra.png",
    "role": "Solo C# pathfinding and movement assignment",
    "recognition": "Project assessment: 2:1 (64%)"
  },
  {
    "slug": "multiplayer-menu",
    "title": "Main Menu / Multiplayer Networking (Blueprints)",
    "status": "Completed",
    "featured": false,
    "image": "https://static.wixstatic.com/media/220016_de610a37a04843c9bc4b3e303f7f7932~mv2.png",
    "category": "UI · Networking",
    "tech": [
      "Unreal Engine",
      "Blueprints",
      "Networking"
    ],
    "summary": "A main-menu and multiplayer networking demonstration made with Unreal Blueprints.",
    "details": [
      "A technical prototype demonstrating menu and multiplayer functionality using Blueprint scripting.",
      "The video walkthrough shows the project in use."
    ],
    "videos": [
      {
        "label": "Demonstration",
        "id": "sBhJQO_rXos"
      }
    ],
    "sections": [
      {
        "heading": "Menus and multiplayer flow",
        "text": "This Unreal Engine Blueprint project demonstrates a main-menu workflow and multiplayer networking functions.",
        "image": "https://static.wixstatic.com/media/220016_de610a37a04843c9bc4b3e303f7f7932~mv2.png",
        "caption": "Unreal Blueprint menu and networking prototype.",
        "smallMedia": false
      },
      {
        "heading": "Blueprint implementation",
        "text": "The linked walkthrough shows the interface and network-related functionality in use.",
        "smallMedia": true
      }
    ],
    "source": "Wix project page",
    "smallImage": false,
    "fallbackImage": "/images/multiplayer-menu.png",
    "role": "Main-menu and UI developer · university assignment",
    "recognition": "Project assessment: First (72%)"
  },
  {
    "slug": "character-creator",
    "title": "Character Creator — C++ Remaster",
    "status": "In Development",
    "featured": false,
    "image": "https://static.wixstatic.com/media/220016_26ea127c25524f58acf18f1ff42fb2c3~mv2.png",
    "category": "Gameplay Systems · Customisation",
    "tech": [
      "Unreal Engine 5.3",
      "C++",
      "Blueprints",
      "UMG",
      "Data Assets"
    ],
    "summary": "Remastering my Blueprint-based university character creator with reusable C++ customisation systems and a redesigned interface.",
    "details": [
      "The original university version was built primarily with Blueprints, with modular head, torso, legs and feet options presented through a character customisation interface. I have kept its original footage and screenshots here as a reference point for the remaster.",
      "I am rebuilding the customisation logic around a reusable Unreal C++ component and an automatically generated option catalogue, replacing repeated Blueprint table lookups and manual character-option setup.",
      "The new UMG interface and presentation scene are still in development. The demonstration below shows the original version, not the completed remaster."
    ],
    "videos": [
      {
        "label": "Demonstration",
        "id": "kfbytZMiNyw"
      }
    ],
    "sections": [
      {
        "heading": "Original Blueprint prototype",
        "text": "The original university character creator uses a Blueprint-driven interface to swap modular character meshes. The image and demonstration show that original prototype, preserved for a before-and-after comparison.",
        "image": "https://static.wixstatic.com/media/220016_26ea127c25524f58acf18f1ff42fb2c3~mv2.png",
        "caption": "Character customisation interface.",
        "smallMedia": false
      },
      {
        "heading": "C++ refactor in progress",
        "text": "The remaster introduces a reusable character-customisation component and a generated catalogue of meshes and preview images, reducing the manual data setup in the original Blueprint workflow. The next stage is the new UMG interface and connecting the catalogue to the finished customisation flow."
      }
    ],
    "source": "Original university project · 2026 C++ remaster in progress",
    "smallImage": false,
    "fallbackImage": "/images/character-creator.png",
    "role": "Character-customisation developer · university assignment",
    "recognition": "Project assessment: 2:1 (63%)"
  },
  {
    "slug": "3d-boids",
    "title": "3D Boids — Flocking Remaster",
    "status": "Completed",
    "featured": false,
    "image": "/images/gallery/boids-remaster/cohesion-test.jpg",
    "category": "AI · 3D Simulation",
    "tech": [
      "Unreal Engine 5.3",
      "C++",
      "Blueprints",
      "UMG",
      "Boids AI",
      "Spatial Partitioning"
    ],
    "summary": "I returned to an old university flocking simulation, rebuilding its steering behaviour and in-game tools while keeping the original project visible as a before-and-after comparison.",
    "details": [
      "I originally made this 3D Boids simulation for a university assignment, using C++ for the movement behaviours and Blueprints for the bird actors and player interactions. Years later, I recovered the project in Unreal Engine 5.3 and decided to see how much I could improve it without losing what made the original interesting.",
      "The remaster focuses on the parts I would approach differently today: more natural steering, a more efficient neighbour search, obstacle and boundary behaviour, and a proper interface for experimenting with the flock. I kept the original screenshot and demonstration here as well, because comparing the two versions tells the story better than replacing the old work."
    ],
    "sections": [
      {
        "heading": "Where it started — the university assignment",
        "text": "The first version was a C++/Blueprint project built around a manager that spawned and updated a flock of bird actors. It already allowed me to change separation, cohesion and alignment, use the mouse to influence the flock, and spawn obstacles to test the movement. Looking back at the code revealed a few flaws that were worth fixing rather than covering up. This is the original project before the 2026 changes.",
        "image": "/images/gallery/boids-remaster/original-university.jpg",
        "caption": "Original university simulation with the first UI and low-poly forest scene."
      },
      {
        "heading": "Recovering the original C++ project",
        "text": "After getting the older C++ project running again in Unreal Engine 5.3, I could inspect the original boid behaviour before changing anything. The bird meshes and flock still rendered, but the simulation and the original UI gave me a clear starting point for a more substantial refactor.",
        "image": "/images/gallery/boids-remaster/original-recovered.jpg",
        "caption": "The restored original project running before the 2026 steering and UI changes."
      },
      {
        "heading": "Bringing the flock back in Unreal Engine 5.3",
        "text": "I recovered the older Unreal C++ project, got it building again, and kept the existing bird Blueprint and scene assets. For the new demonstration I used the forest test map so the flock could be seen moving through a more interesting environment instead of only an empty sky.",
        "image": "/images/gallery/boids-remaster/forest-gameplay.jpg",
        "caption": "2026 remaster running in the low-poly forest environment, captured from the new gameplay video."
      },
      {
        "heading": "Reworking the flocking behaviour",
        "text": "I found a bug in the original cohesion calculation and rewrote how the classic steering forces work together. Separation now responds more strongly to close neighbours, while cohesion and alignment continuously contribute to the direction of travel. I added smoother, turn-rate-limited steering and actual wandering, then tested very different weight combinations using the new live controls.",
        "image": "/images/gallery/boids-remaster/separation-test.jpg",
        "caption": "Testing high separation with cohesion and alignment turned down in the remastered simulation."
      },
      {
        "heading": "A more efficient neighbourhood search",
        "text": "Originally, each boid searched the entire population for nearby birds. I replaced that with a 3D spatial grid and a per-frame snapshot of positions and headings, so the manager can query nearby cells and calculate the flocking forces from consistent data. I also reduced unnecessary per-boid ticking and limited the number of neighbour-debug spheres drawn. These are architectural optimisations; I have not published a controlled before-and-after FPS benchmark.",
        "image": "/images/gallery/boids-remaster/neighbour-debug.jpg",
        "caption": "Neighbour-radius and world-boundary debug visualisations. These spheres visualise local sensing, not the internal spatial-grid cells."
      },
      {
        "heading": "Testing movement around obstacles",
        "text": "I reworked obstacle avoidance to scan ahead with sphere sweeps and consider alternative paths, while spreading scans across frames instead of tracing for every bird at once. I also softened the steering response near the simulation boundary. The pillar test scene lets me inspect the birds around static obstacles while changing the flocking weights live.",
        "image": "/images/gallery/boids-remaster/cohesion-test.jpg",
        "caption": "Remastered simulation in the obstacle test scene, with cohesion and alignment increased."
      },
      {
        "heading": "Rebuilding the in-game controls",
        "text": "The original control panel was a long, tightly packed list of sliders. I built a replacement UMG interface with Population, Flocking and World tabs, live numerical readouts, debug options, and Respawn, Reset and Pause buttons. A C++ widget class connects those controls to the existing Boid Manager, while the original Blueprint player interactions remain available.",
        "image": "/images/gallery/boids-remaster/ui-closeup.jpg",
        "caption": "Updated UMG controls for experimenting with speed, sensing radius and flocking weights."
      },
      {
        "heading": "Why I wanted to remaster it",
        "text": "The interesting part of this project is being able to compare what I built for university with what I would build now. I kept the original demonstration alongside a new gameplay recording rather than presenting the remaster as an entirely new project. It gave me a chance to revisit C++ simulation architecture, debugging, optimisation and tool usability in one place."
      }
    ],
    "videos": [
      {
        "label": "Original university demonstration",
        "id": "hzgmNK61kY0"
      }
    ],
    "videoFile": {
      "label": "2026 remaster — forest gameplay and live controls (1:06)",
      "src": "/videos/boids-remaster-2026.mp4",
      "poster": "/images/gallery/boids-remaster/video-poster.jpg"
    },
    "source": "Original university submission and 2026 Unreal Engine C++ / UMG remaster",
    "smallImage": false,
    "fallbackImage": "/images/gallery/boids-remaster/forest-gameplay.jpg",
    "role": "C++ boids simulation · university assignment",
    "recognition": "Project assessment: First (72%)"
  }
];
