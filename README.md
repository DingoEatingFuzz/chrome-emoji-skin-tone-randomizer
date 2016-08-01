<p align="center"><img src="https://raw.githubusercontent.com/DingoEatingFuzz/chrome-emoji-skintone-randomizer/master/images/icon/icon-256.png" title="Multi-toned Emoji Fist"/></p>

# Emoji Skin Tone Randomizer for Chrome

The default yellow (or non-human) skintones are a great feature of the emoji spec. A vast improvement over default white for sure, but it isn't realistic. It simply avoids the racial diversity issue.

If you would like to bring race back to your emoji in an impartial way, install this extension.

**[Download from the Chrome Webstore](https://chrome.google.com/webstore/detail/emoji-skintone-randomizer/ohhjagdgpnjmffkbdmgocehijcppnicj)**

## Contributing

Bug reports and patches for bugs are welcome, but this extension is more or less feature complete. I am not accepting feature requests.

## Building the project

```sh
./bin/build.py
```

This will save a `emoji-support.js` file in `./bin`. It will also inject that file into `postprocess.js` and `options.js`.

Now you can add the `./dist` directory as an unpacked extension in Chrome and start hacking.

