function solution(genres, plays) {
    const hash = plays.reduce((hash, times, id) => {      
        const genre = genres[id];
        if (!hash[genre]) {
            hash[genre] = {
                'playCount': 0,
                'songs': [],
            };
        }
        hash[genre].playCount += times;
        hash[genre].songs.push({id, times});
        return hash;
    }, {});
    
    // bestSongs 배열들을 추출해서 2차원 배열을 만들고 playCount 내림차순으로 정렬한 다음 배열 flat
    
    const sortedHash = Object.values(hash).sort((a, b) => b.playCount - a.playCount);
    const bestAlbum = sortedHash.reduce((album, {songs}) => {
        const bestSongs = songs.sort((a,b) => b.times - a.times).slice(0, 2).reduce((bestSongs, {id}) => [...bestSongs, id], []);
        album.push(...bestSongs);
        return album;
    }, []);

    return bestAlbum;
}

/*
클래식: 0(500), 2(150), 3(800) => 1450
팝: 1(600), 4(2500) => 3100

팝부터 수록
4, 1, 3, 0
*/