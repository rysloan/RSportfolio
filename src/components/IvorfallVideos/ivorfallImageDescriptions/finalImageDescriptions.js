const FinalImgDesc = () => {
    return (
        <ol style={{ listStyleType: 'decimal' }}>
            <li className='imageDescriptionItem'>
                Base Enemy Environment Query System - This is the final iteration of the ranged EQS and is used by most of the enemies in our game
            </li>
                <ol style={{ listStyleType: 'disc' }}>
                  <li className='imageDescriptionItem2'>
                    Generates points in a donut around the player, that has three rings and 8 points per ring
                  </li>
                  <li className='imageDescriptionItem2'>
                    Inner radius is passed into the EQS by a query param ScaredRadius (this is the minimum range for the enemies and is used for some additional 
                    functionality in the behavior Tree).Outer radius is passed in by the param AttackRadius
                  </li>
                  <li className='imageDescriptionItem2'>
                    The rest of the EQS is very similar to the ranged EQS in the prototype
                  </li>
                </ol>
            <li className='imageDescriptionItem'>
                Blunderbuss Enemy Environment Query System - The EQS used by the blunderbuss AI
            </li>
                <ol style={{ listStyleType: 'disc' }}>
                  <li className='imageDescriptionItem2'>
                    Similar to the melee EQS in the prototype
                  </li>
                  <li className='imageDescriptionItem2'>
                    Radius is passed in by a query param called DefendRadius
                  </li>
                </ol>
            <li className='imageDescriptionItem'>
                Boxer Behavior Tree - Behavior tree used by the Boxer AI, this is the new melee enemy (split up into 2 images)
            </li>
                <ol style={{ listStyleType: 'disc' }}>
                  <li className='imageDescriptionItem2'>
                    Like all AI it has a Passive and Combat State
                  </li>
                  <li className='imageDescriptionItem2'>
                    If the AI is within range of the player and their attack is not on cooldown then they will do their attack sequence. This sequencehas a random change to do the 
                    slam attack and if it doesn't. or the time limit exceeds 2 seconds then it will do the shoulder sttack
                  </li>
                  <li className='imageDescriptionItem2'>
                    If it not in range then it will run the move selector and move into range of the player. The move also has a time limit so that the player can't just simply 
                    run away from the Boxer, eventually the AI will do its charge attack 
                  </li>
                </ol>
            <li className='imageDescriptionItem'>
                Base AI Controller - This was the final iteration of the Base AI controller
            </li>
                <ol style={{ listStyleType: 'disc' }}>
                  <li className='imageDescriptionItem2'>
                    Sets up the blackboard key variables and does all the perception checking for damage and sight
                  </li>
                  <li className='imageDescriptionItem2'>
                    The wait gameplay event nodes help determine if they were spawned via a spawner then we want them to imediately target the player and 
                    otherwise they will remain in the passive state
                  </li>
                </ol>
            <li className='imageDescriptionItem'>
                Behavior Tree Decorators - List of the behavior tree decorators that are used in the final enemy behavior trees
            </li>
            <li className='imageDescriptionItem'>
                Behavior Tree Tasks - List of the behavior tree tasks that are used in the final enemy behavior trees
            </li>
            <li className='imageDescriptionItem'>
                Thug AI Controller - The AI controller used by all Thug enemies (We no longer use the BaseAIC for all the enemies)  
            </li>
                <ol style={{ listStyleType: 'disc' }}>
                  <li className='imageDescriptionItem2'>
                    Very similar to the base AIC, however, we now set the ranges for the enemy blackboard based on what weapon, or mod 
                    as our game calls them, the enemy is holding.
                  </li>
                  <li className='imageDescriptionItem2'>
                    We need to make sure that the weapon is equipped before we can decide what their ranges will be so we call the event SetRanges
                    after the mod is equipped so we can ensure that they have the correct corrisponding range.
                  </li>
                </ol>
            <li className='imageDescriptionItem'>
                Thug Behavior Tree - Behavior tree used by all Thug AI 
            </li>
                <ol style={{ listStyleType: 'disc' }}>
                  <li className='imageDescriptionItem2'>
                    Like all AI it has a Passive and Combat State
                  </li>
                  <li className='imageDescriptionItem2'>
                    In the combat state we have 5 different sequences: melee attack, run away, move within range, ranged attack, and move to line of sight
                  </li>
                  <li className='imageDescriptionItem2'>
                    Melee attack first checks a couple things, that the enemy is within their ScaredRadius range and that they don't 
                    have the sniper or oil mod equipped, and if both are true then they will perform a melee attack on the player that knocks them back and does damage
                  </li>
                  <li className='imageDescriptionItem2'>
                    Run away makes the same range check as melee attack but instead checks to see if the enemy has either the sniper or oil mod equipped. 
                    If both are true then the enemy will do one more attack then run their EQS which makes them run away from the target and get to a 
                    point with distance equal to AttackRange. Sniper AI differ will use a dash ability to gain distance from the player
                  </li>
                  <li className='imageDescriptionItem2'>
                    Move within range moves the enemy into their AttackRadius. The blunderbuss AI will use the dash ability to close the distance
                  </li>
                  <li className='imageDescriptionItem2'>
                    Ranged attack causes the enemy to do their ranged attack ability and then do their EQS so that they continue to move around the player and not be static
                  </li>
                  <li className='imageDescriptionItem2'>
                    Move to line of sight checks to see if the AI can see the target and if not will run their EQS which will move them into sight of the target
                  </li>
                </ol>
        </ol>
    )
}

export default FinalImgDesc