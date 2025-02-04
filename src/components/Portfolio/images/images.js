const portfolioimgs = require.context('../../../assets/Portfolio', true)
const finalImgs = portfolioimgs.keys().map(v => portfolioimgs(v))

const imgs = [
    {
        original: finalImgs[0],
        originalHeight: '640px',
        description: 'Contact Area code',
    },
    {
        original: finalImgs[1],
        originalHeight: '640px',
        description: 'Project File Structure',
    },
    {
        original: finalImgs[2],
        originalHeight: '640px',
        description: 'Navbar code',
    },
    {
        original: finalImgs[3],
        originalHeight: '640px',
        description: 'Portfolio Image Section Code',
    },
];

export { imgs };