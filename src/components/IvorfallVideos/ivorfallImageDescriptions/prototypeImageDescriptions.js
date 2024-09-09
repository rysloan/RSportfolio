
const ProtoImgDesc = () => {
    return (
        <ol style={{ listStyleType: 'decimal' }}>
            <li className='imageDescriptionItem'>
              Base Enemy AI Controller - This was the first iteration of the AI controller
            </li>
                <ol style={{ listStyleType: 'disc' }}>
                  <li className='imageDescriptionItem2'>
                    When the AI is possesed we run their behavior tree, set their state as passive, and set their attack and defense ranges
                  </li>
                  <li className='imageDescriptionItem2'>
                    Get Ideal Range is a interface function so that different AI can define their own ranges
                  </li>
                  <li className='imageDescriptionItem2'>
                    On Perception Update triggers when the AIPerception component updates. The AI will enter the attack state when the player enters the sight range or deals damage to the AI
                  </li>
                </ol>
            <li className='imageDescriptionItem'>
              Melee Behavior Tree - The behavior tree that runs the melee AI (This is split up into three images in order to fully capture the entire tree)
            </li>
                <ol style={{ listStyleType: 'disc' }}>
                  <li className='imageDescriptionItem2'>
                    The melee AI first equips their weapon, then if their state is equal to attacking they enter the CombatState and otherwise if their state is equal to passive then they run 
                    their Passive State subtree (This state varaible is a enum varaible in the blackboard)
                  </li>
                  <li className='imageDescriptionItem2'>
                    If in the CombatState the AI will first try to attack the player if their cooldown is available. This moves them into range and does the DefaultAttack task (this has different beahvior 
                    depending on the weapon equipped)
                  </li>
                  <li className='imageDescriptionItem2'>
                    If the cooldown is not available then the tree will go down the Strafe selector. This will move them in range if the player is outside the DefendRadius passed in from the AIController
                    or it will run the Strafe EQS
                  </li>
                </ol>
            <li className='imageDescriptionItem'>
                Melee Environment Query System - This EQS is the Strafe EQS used by the melee enemy
            </li>
                <ol style={{ listStyleType: 'disc' }}>
                  <li className='imageDescriptionItem2'>
                    This EQS generate 8 points in a circle around the player
                  </li>
                  <li className='imageDescriptionItem2'>
                    It discards any unreachable points and only picks point that are between 100 and 500 units away from the enemy. This distance check ensures that the enemy picks a point close to themselves, but also
                    ensures that it doesn't pick the same point that it was on
                  </li>
                </ol>
            <li className='imageDescriptionItem'>
              Behavior Tree Decorators - List of the behavior tree decorators that are used in the prototype enemy behavior trees
            </li>
            <li className='imageDescriptionItem'>
              Enemy Patrol Behavior Tree - This behavior tree is run when the AI is in the Passive State
            </li>
                <ol style={{ listStyleType: 'disc' }}>
                  <li className='imageDescriptionItem2'>
                    If the enemy has a patrol path then they will move along that
                    desired path. Otherwise they will remain in an idle state
                  </li>
                </ol>
            <li className='imageDescriptionItem'>
              Behavior Tree Tasks - List of the behavior tree tasks that are used in the prototype enemy behavior trees
            </li>
            <li className='imageDescriptionItem'>
                Ranged Behavior Tree - The behavior tree that runs the ranged AI
            </li>
                <ol style={{ listStyleType: 'disc' }}>
                  <li className='imageDescriptionItem2'>
                    The ranged AI has the Combat and Passive State similar to the melee enemy
                  </li>
                  <li className='imageDescriptionItem2'>
                    The combat state checks if the enemy is within its defense radius of the target, if not it will move within that range
                  </li>
                  <li className='imageDescriptionItem2'>
                    If in range and it has line of sight of the target then it run the ranged EQS query and do a default attack
                  </li>
                  <li className='imageDescriptionItem2'>
                    If none of those branches run then the enemy doesn't have line of sight and will move so it can see the target
                  </li>
                </ol>
            <li className='imageDescriptionItem'>
                Ranged Environment Query System - This EQS is the ranged EQS used by the ranged enemy
            </li>
                <ol style={{ listStyleType: 'disc' }}>
                  <li className='imageDescriptionItem2'>
                    This EQS generates a giant grid of point around the target that has a grid half size equal to the attack range
                  </li>
                  <li className='imageDescriptionItem2'>
                    It discards any unreachable points, points that are between 100 and 600 units away from the enemy, and points that dont have line of sight of the player
                  </li>
                  <li className='imageDescriptionItem2'>
                    This EQS puts greater value on points that are further away from the player so that they maintain a good distance away from the player
                  </li>
                </ol>
        </ol>
    )
}

export default ProtoImgDesc