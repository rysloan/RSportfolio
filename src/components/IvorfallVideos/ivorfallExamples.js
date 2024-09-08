import React from 'react'
import './ivorfallExamples.css'
import ReactPlayer from 'react-player';
import Ivorfall1 from '../../assets/Ivorfall1.mp4'
import Ivorfall2 from '../../assets/Ivorfall2.mp4'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery";
import { prototype as PrototypeImages } from './ivorfallCodeImages/prototypeImages'
import { final as FinalImages } from './ivorfallCodeImages/finalImages'

const IvorfallIntro = () => {
  return (
    <section id='ivorfallExamples'>
      <div className='ivorfallExampleArea'>
        <div className='ivorfallExample'>
          <span className='vidText'>
            This is the state of the AI during the Ivorfall prototype which was created within the first 2 weeks on the project.
            During these two weeks I created two different enemies types, a melee and a ranged, that both inherited from a parant base blueprint class.
            In addition, I created an AI controller that handles their perception so they attack the player when they have sight or when the player damages them and setups all the initial
            blackboard varaibles.
            The points on the floor are created by an EQS, environment query system, that gives information to the AI on the best points to move to based off the players location.
            Both the melee and ranged AI have their own EQS class. All of the behavior for the AI is decided from a behavior tree that I created. This tree has custom tasks that tell
            them when to attack, when to move, when to chase the player, or when to patrol around a certain area.
          </span>
          <ReactPlayer url={Ivorfall1} playing={true} loop={true} controls={true} height={'360px'} width={'640px'} className='exampleVideo' />
        </div>
        <div className='ivorfallExample'>
          <ReactPlayer url={Ivorfall2} playing={true} loop={true} controls={true} height={'360px'} width={'640px'} className='exampleVideo' />
          <span className='vidText'>
            This is the state of the AI during the Ivorfall final build.
            We have many more types of enemies, from a melee boxer that slams the ground and charges at the player and a guy that fire blobs of oil that damage and slow the player when hit.
            The AI controller stayed mostly the same throughout the games creation with only a few more initial setup variables.
            Some enemy type use the same EQS to make things simplier for the player, but I added 5 unique EQS classes for the enemies.
            Not all enemy types are shown in the video since they are randomly picked at BeginPlay, but the list of enemies are as follows;
            Boxer, Blunderbuss Thug, Electric Thug, Oil Thug, Sniper Thug, Base Thug, Cog Thug, and Tommygun Thug.
            All Thugs share the same behavior tree and the boxer has their own.
          </span>
        </div>
      </div>
      <div className='ivorfallCodeSnipets'>
          <span className='codeSnipetTitle'>Ivorfall Code Snipets</span>
          <span className='codeSnipetDesc'>Prototype Code vs Final Build Code</span>
          <span className='codeTitle'>Prototype</span>
          <ImageGallery items={PrototypeImages} useBrowserFullscreen={false} showIndex={true} showBullets={true} />
          <span className='imageDescriptions'>
            <ol style={{ listStyleType: 'decimal' }}>
              <li className='imageDescriptionItem'>
                Base Enemy AI Controller - This was the first iteration of the AI controller. When the AI is possesed we run their behavior tree, set their state as passive, and set
                their attack and defense range (attack range defines where they shoot from, and defense range defines when they consider themselves outside of the players range and 
                begin to chase them again). Get Ideal Range is a interface function so that different enemies can define their own ranges. On Perception Update is how the enemies triggers
                when they percieve the player. The AI will enter the attack state when the player enters the sight range or damages the enemy.
              </li>
              <li className='imageDescriptionItem'>
                Melee Behavior Tree - This is split up into three images in order to fully capture the entire tree. The first image shows how the enemies equip their weapons and when their
                state is equal to attacking they enter the CombatState and if their state is equal to passive then they run their Passive State subtree. The second image shows how 
                the combat state is split up into two behaviors, attack and strafe, the attack moves the enemy into their attack range and does their weapons default attack. Stafe has two
                sequences, first it checks if it is within the defend radius of the target and if not will move into that range and the second on the third image runs the stafe EQS query 
                and move them to that point of interest (this gives that circling behavior shown in the video above).
              </li>
              <li className='imageDescriptionItem'>
                Melee Environment Query System - This EQS is the strafe EQS used by the melee enemy. This EQS generate 8 points in a circle around the player, it discards any unreachable
                points and only picks point that are between 100 and 500 units away from the enemy. This distance check ensures that the enemy picks a point close to themselves, but also
                ensures that it doesn't pick the same point that it was on.
              </li>
              <li className='imageDescriptionItem'>
                Behavior Tree Decorators - List of the behavior tree decorators that are used in the prototype enemy behavior trees
              </li>
              <li className='imageDescriptionItem'>
                Enemy Patrol Behavior Tree - This behavior tree is used to create the patroling behavior seen in the video. If the enemy has a patrol path then they will move along that
                desired path. Otherwise they will remain in an idle state.
              </li>
              <li className='imageDescriptionItem'>
                Behavior Tree Tasks - List of the behavior tree tasks that are used in the prototype enemy behavior trees
              </li>
              <li className='imageDescriptionItem'>
                Ranged Behavior Tree - This tree is similar to the melee behavior tree where it is split up into a combat state and a passive state. The passive state run the Patrol Behavior tree.
                The combat state checks if the enemy is within its defense radius of the target, if not it will move within that range. Otherwise if it has line of sight of the target then it
                run the ranged EQS query and do a default attack. And if none of those branches run then the enemy doesn't have line of sight and will move so it can see the target.
              </li>
              <li className='imageDescriptionItem'>
                Ranged Environment Query System - This EQS is the ranged EQS used by the ranged enemy. This EQS generates a giant grid of point around the target that has a grid half size
                equal to the enemies attack range, it discards any unreachable points and points that are between 100 and 600 units away from the enemy. 
                It also discards any point that don't have line of sight of the player and values points that are further away from the player higher than points close to the player.
              </li>
            </ol>
          </span>
          <span className='codeTitle'>Final Build</span>
          <ImageGallery items={FinalImages} useBrowserFullscreen={false} showIndex={true} showBullets={true} />
          <span className='imageDescriptions'>
            <ol style={{ listStyleType: 'decimal' }}>
              <li className='imageDescriptionItem'>
                Base Enemy Environment Query System - This is the final iteration of the ranged environment query system and is used by most of the enemies in our game. 
                The generated points are now a donut around the player, that has three rings and 8 points per ring. The inner radius is passed into the EQS by a query param
                ScaredRadius (this is the minimum range for the enemies and with some if the player gets in range of that radius they will run away or do a melee attack) and the outer
                radius is passed in by the param AttackRadius. The rest of the EQS is mostly the same but now we discared points that a pawn overlaps so we don't have enemies picking 
                locations that are already occupied by another enemy.
              </li>
              <li className='imageDescriptionItem'>
                Blunderbuss Enemy Environment Query System - The blunderbuss EQS is very similar to the melee EQS in the prototype, but we no longer have the default 400 unit radius
                and now have a query param that uses the enemies DefendRadius. We also check to make sure that the enemy has line of sight.
              </li>
              <li className='imageDescriptionItem'>
                Boxer Behavior Tree - This is the boxer behavior tree, which is split up into 2 images. It has a passive and combat state, the passive state as before runs the patrol
                behavior tree. The move selector check if the enemy is within range of the player, if not it will move into their defend radius and is they are in range then they
                will run their EQS query and move around the target. The attack sequence has a selector called pick attack that picks whether the boxer does a slam attack at close range
                or a shoulder charge attack that causes them to charge at the player. If it picks the slam and isn't able to do it within 2 seconds then it will default to the shoulder
                charge (this helps prevent the enemy just chasing the player around and never really being able to do their attacks)
              </li>
              <li className='imageDescriptionItem'>
                Base AI Controller - The base AIC sets up the blackboard key variables and does all the perception checking for damage and sight. Then is has a couple wait gameplay event
                nodes so that we can determine if they were spawned via a spawner then we want them to imediately target the player and otherwise they will remain in the passive state.
              </li>
              <li className='imageDescriptionItem'>
                Behavior Tree Decorators - List of the behavior tree decorators that are used in the final enemy behavior trees
              </li>
              <li className='imageDescriptionItem'>
                Behavior Tree Tasks - List of the behavior tree tasks that are used in the final enemy behavior trees
              </li>
              <li className='imageDescriptionItem'>
                Thug AI Controller - This is the thug AI controller which is very similar to the base AIC, however, we now set the ranges for the enemy blackboard based on what weapon, or mod 
                as our game calls them, the enemy is holding. We need to make sure that the weapon is equipped before we can decide what their ranges will be so we call the event SetRanges
                after the mod is equipped so we can ensure that they have the correct corrisponding range.
              </li>
              <li className='imageDescriptionItem'>
                Thug Behavior Tree - The thug behavior tree is split up into two states, the passive state and the combat state. 
                The passive state runs the patrol behavior tree, while the ccombat state does a bit more complex behavior. In the combat state we have 5 different sequences: melee attack, run away,
                move within range, ranged attack, and move to line of sight. Melee attack first checks a couple things, that the enemy is within their ScaredRadius range and that they don't 
                have the sniper or oil mod equipped, and if both are true then they will perform a melee attack on the player that knocks them back and does damage. The run away sequence
                makes the same range check, checking if the player has entered the enemeis ScaredRadius range, but now checks to see if the enemy has either the sniper or oil mod equipped. 
                If both are true then the enemy will do one more attack the run their EQS behavior which makes them run away from the target and get to a point with distance equal to AttackRange.
                Where the oil and sniper differ on this part is that the sniper enemy will actually use a dash ability to gain distance from the player. The next sequence to be run is the move within
                range sequence that does what the title describes, moves the enemy into their AttackRadius, the only thing different is that the blunderbuss enemy will use the dash ability to 
                close the distance. The ranged attack causes the enemy to do their ranged attack ability and then do their EQS so that they continue to move around the player and not
                be static. Finally the move to line of sight sequence checks to see if the enemy hcan see the target and if not will run their EQS which will move them into sight of 
                the target.
              </li>
            </ol>
          </span>
          <span className='challengesTitle'>Challenges and Solutions</span>

        </div>
    </section>
  )
}

export default IvorfallIntro