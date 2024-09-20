const IverfallFinal = require.context('../../../assets/IvorfallFinal', true)
const finalImgs = IverfallFinal.keys().map(v => IverfallFinal(v))

const final = [
    {
        original: finalImgs[0],
        originalHeight: '640px',
        description: 'Base Enemy Environment Query System',
    },
    {
        original: finalImgs[1],
        originalHeight: '640px',
        description: 'Blunderbuss Enemy Environment Query System',
    },
    {
        original: finalImgs[2],
        originalHeight: '640px',
        description: 'Boxer Behavior Tree Image 1',
    },
    {
        original: finalImgs[3],
        originalHeight: '640px',
        description: 'Boxer Behavior Tree Image 2',
    },
    {
        original: finalImgs[4],
        originalHeight: '640px',
        description: 'Base AI Controller',
    },
    {
        original: finalImgs[5],
        originalHeight: '640px',
        description: 'Final Behavior Tree Decorators',
    },
    {
        original: finalImgs[6],
        originalHeight: '640px',
        description: 'Final Behavior Tree Tasks',
    },
    {
        original: finalImgs[7],
        originalHeight: '640px',
        description: 'Patrol Behavior Tree',
    },
    {
        original: finalImgs[8],
        originalHeight: '640px',
        description: 'Thug AI Controller',
    },
    {
        original: finalImgs[9],
        originalHeight: '640px',
        description: 'Thug Behavior Tree Image 1',
    },
    {
        original: finalImgs[10],
        originalHeight: '640px',
        description: 'Thug Behavior Tree Image 2',
    },
    {
        original: finalImgs[11],
        originalHeight: '640px',
        description: 'Thug Behavior Tree Image 3',
    },
    {
        original: finalImgs[12],
        originalHeight: '640px',
        description: 'Thug Behavior Tree Image 4',
    },
];

export { final };