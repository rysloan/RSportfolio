const IverfallPrototype = require.context('../../../assets/IvorfallProto', true)
const prototypeImgs = IverfallPrototype.keys().map(v => IverfallPrototype(v))

const prototype = [
    {
        original: prototypeImgs[0],
        originalHeight: '640px',
        description: 'Base Enemy AI Controller',
    },
    {
        original: prototypeImgs[1],
        originalHeight: '640px',
        description: 'Melee Behavior Tree Image 1',
    },
    {
        original: prototypeImgs[2],
        originalHeight: '640px',
        description: 'Melee Behavior Tree Image 2',
    },
    {
        original: prototypeImgs[3],
        originalHeight: '640px',
        description: 'Melee Behavior Tree Image 3',
    },
    {
        original: prototypeImgs[4],
        originalHeight: '640px',
        description: 'Melee Environment Query System',
    },
    {
        original: prototypeImgs[5],
        originalHeight: '640px',
        description: 'Prototype Behavior Tree Decorators',
    },
    {
        original: prototypeImgs[6],
        originalHeight: '640px',
        description: 'Enemy Patrol Behavior Tree',
    },
    {
        original: prototypeImgs[7],
        originalHeight: '640px',
        description: 'Prototype Behavior Tree Tasks',
    },
    {
        original: prototypeImgs[8],
        originalHeight: '640px',
        description: 'Ranged Behavior Tree',
    },
    {
        original: prototypeImgs[9],
        originalHeight: '640px',
        description: 'Ranged Environment Query System',
    },
];

export { prototype };