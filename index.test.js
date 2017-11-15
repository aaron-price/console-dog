const sounds = [
    'woof',
    'bark',
    'grr',
    'sniff',
    'howl',
    '*chases own tail*',
    '*plays fetch*',
]
let output_data = ""
const storeLog = inputs => (output_data += inputs);
test("console.dog Hi", () => {
  console["log"] = jest.fn(storeLog);

  require("./index.js")
  console.dog('Hi')
  let matches = 0
  sounds.forEach(sound => {
      if (output_data.indexOf(sound) !== -1) { matches++ }
  })

  expect(matches).toBeGreaterThan(0)
  expect(output_data).not.toBe('Hi')
});