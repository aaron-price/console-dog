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
    var value = ''
    while (value.length < str.length) {
        // Add space
        if (value !== '') { value += ' ' }
        // Add a random sound
        value += sounds[Math.floor(Math.random() * sounds.length)]
    }
    console.log(value)
}