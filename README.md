# Projekt-OOP

This project from Object-Oriented Programming (abbreviated OOP) will be based on concepts from the first game in the Metal Slug series (the full name of the first game is Metal Slug: Super Vehicle-001). Like the original game, the project game will belong to the genres of 2D platformer and "Run 'n Gun".

Notes:
- The repo contains a more detailed project documentation in the .docx format (class hierarchy diagram, what made the final cut, what didn't etc.).
- This project was made in the OTTER framework.

## Project introduction

In the first game, players take on the roles of soldiers from the Peregrine Falcon Squad of the Regular Army, Marco Rossi (our main character in the project), and Tarma Roving. They must face the antagonist, General Morden, and his Rebel Army (our main enemies in the project), who seeks to eliminate governments and establish a new world order, all driven by his rage caused by the death of his family, which could have been prevented if the Regular Army had not been corrupt.

The primary goal in the first "Metal Slug" game (as well as in the entire series) is to progress through different levels filled with enemy soldiers and other obstacles, avoiding enemy attacks, and collecting power-ups provided by war prisoners. Additionally, players aim to achieve high scores by efficiently destroying enemies, rescuing war prisoners, and completing levels as quickly as possible.

## Project functionality overview

### Game logic
When all lives are lost, the main player is sent to the beginning of the first mission. Otherwise, they are respawned at the point where they "died" at the start of that mission. Three "power-ups" have different attributes: the Heavy Machine Gun fires bullets faster than the starting pistol, the Flame Shot shoots large amounts of fire that deal more damage than the pistol, but it can only hit enemies "up close" (and fires slower), while the Rocket Launcher shoots rockets that are a mix of the Heavy Machine Gun and Flame Shot – slower but deal more damage. Special weapons (power-ups) have a limited amount of ammo. If we are close enough to the enemy when shooting, instead of shooting, we stab them with our knife.

### Mechanics
Our protagonist can run left/right and jump. An important part of the game is, of course, shooting. The protagonist can shoot upwards, downwards, left, and right. At the beginning, they shoot from a pistol but can collect three different power-ups, which give them different weapons/ammo (i.e., Heavy Machine Gun, Flame Shot, and Rocket Launcher). The knife can also be used. Power-ups are obtained by saving war prisoners, or POWs (Prisoners Of War). Our player has (three) five lives. However, the player dies with a single shot from the enemy, just like the enemies (in most cases). Points are collected by completing levels faster, killing enemies, saving POWs, and additional lives upon victory.

### Points
The results at the end of the game depend on: the number of saved war prisoners and killed enemies (also depending on how strong each enemy is), the speed of completing each level, and additional lives upon victory. Points (score) are displayed at the end of the game.

### Progression
Power-ups are the only form of progression, and we can choose which ones we want, but in doing so, we lose the one we previously had. As mentioned earlier, we lose a power-up (special weapon) when we run out of ammo for it, and we also lose the power-up we had if we lose a life.

### Environment
For our environment (map), we will use locations from the first mission of the original game (near a temple and jungle/swamp). It is important to note how bullets pass through different platforms in the levels.

### Characters
Here, we have our protagonist as the main character of Metal Slug.

### Non-playable characters
These are generally the enemies we must defeat: Rebel Army soldiers and their aircraft ("boss"), with General Morden being the main antagonist, as well as war prisoners we need to save, who then give us special weapons.

### Possible resource gathering
Just like with progression, power-ups are the only resource we can gather, and immediately afterward, use. We collect them by saving war prisoners, who give them to us after we shoot or cut the ropes they are tied with.

### Control scheme
The main character is controlled using the keyboard, specifically: (AWSD keys) arrows are used for movement and aiming, (J) "A" for jumping (even through platforms), and (K) "S" for shooting. By combining keys, we can shoot in the air and change the direction in which we shoot.

### Game/simulation/application end
If we reach the end of the second or third level (mission) and destroy the enemy aircraft, the game "ends." Afterward, the score we collected throughout the previous (two) three levels is displayed, along with how many lives we had left and the final time.

## Cloning and running

#### Steps:

1. Create a new folder (name doesn’t matter)  
2. Open the folder and launch Git Bash  
3. Clone the repository:  
   ```bash  
   git clone https://github.com/Rei0101/Projekt-OOP.git 
   ```
4. Open the project in Visual Studio Code and run with the Live server extension (or just open index.html)
5. For best experience, toggle on "Output info" checkbox
6. Click on the "Maps" button and select a map (level/mission)
7. Click on "Setup game #"
8. Finally, click on "START"
9. Have fun!

