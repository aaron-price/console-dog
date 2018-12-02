console.dog = function(str) {
    var sounds = [
        'woof',
        'bark',
        'grr',
        'sniff',
        'howl',
        '*chases own tail*',
        '*plays fetch*'
    ]

    var value = str.split('').reduce(function(acc, curr) {
        return str.length <= acc.length
            ? acc
            : acc + sounds[Math.floor(Math.random() * sounds.length)] + ' '
    }, '')

    console.log(value)
}
