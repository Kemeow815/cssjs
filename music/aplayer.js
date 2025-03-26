!(function() {
  var oldLoadAp = window.onload;
  window.onload = function () {
    oldLoadAp && oldLoadAp();

new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: '一句话形容不了终极笔记',
            artist: '应有棠 / 御A桑 / 灬阿楚灬 / 绯言 / 小山xl / 霄镁 / 堇墨安歌 / 天罗 / 叶落梦中 / 烫不直的自然卷',
            url: 'http://music.163.com/song/media/outer/url?id=1957502053.mp3',
            cover: 'https://s2.loli.net/2025/03/23/sqe5bQ8pzB9IWmc.jpg',
            lrc: 'https://music-source.kemeow.top/lrc/1.lrc',
            theme: '#ebd0c2'
        // },
        // {
        //     name: 'name2',
        //     artist: 'artist2',
        //     url: 'url2.mp3',
        //     cover: 'cover2.jpg',
        //     lrc: 'lrc2.lrc',
        //     theme: '#46718b'
        }
      ]
    });
  }
})();
