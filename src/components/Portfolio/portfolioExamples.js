import React from 'react'
import './portfolioExamples.css'
import ReactPlayer from 'react-player';
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery";

const IvorfallIntro = () => {
  return (
    <section id='portfolioExamples'>
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
        </div>
        <div className='ivorfallExample'>
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
          <span className='codeSnipetTitle'>Portfolio Code Snipets</span>
          {/* <span className='challengesTitle'>Challenges and Solutions</span> */}
        </div>
    </section>
  )
}

export default IvorfallIntro