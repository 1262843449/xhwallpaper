const WALLPAPERS = [
    { id: 1, title: 'Nature 1', url: 'https://picsum.photos/id/11/300/300' },
    { id: 2, title: 'Nature 2', url: 'https://picsum.photos/id/12/300/300' },
    { id: 3, title: 'Nature 3', url: 'https://picsum.photos/id/13/300/300' },
    { id: 4, title: 'Nature 4', url: 'https://picsum.photos/id/14/300/300' },
    { id: 5, title: 'Nature 5', url: 'https://picsum.photos/id/15/300/300' },
    { id: 6, title: 'Nature 6', url: 'https://picsum.photos/id/16/300/300' },
    { id: 7, title: 'Nature 7', url: 'https://picsum.photos/id/17/300/300' },
    { id: 8, title: 'Nature 8', url: 'https://picsum.photos/id/18/300/300' },
    { id: 9, title: 'Nature 9', url: 'https://picsum.photos/id/19/300/300' },
    { id: 10, title: 'Nature 10', url: 'https://picsum.photos/id/20/300/300' },
];

function getWallpapers(type, page) {
    const perPage = 16; // 每页显示的数量
    const startIndex = (page - 1) * perPage;
    const endIndex = Math.min(startIndex + perPage, WALLPAPERS.length);

    return WALLPAPERS.slice(startIndex, endIndex);
}