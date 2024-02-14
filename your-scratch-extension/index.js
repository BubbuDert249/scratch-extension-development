const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class Scratch3YourExtension {

    constructor (runtime) {
        // put any setup for your extension here
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
            // unique ID for your extension
            id: 'robloxgame',

            // name that will be displayed in the Scratch UI
            name: 'Roblox Game',

            // colours to use for your extension blocks
            color1: '#b86800',
            color2: '#660066',

            // icons to display
            blockIconURI: 'data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECAwQGCAX/xAA4EAACAQMBBQUFBwMFAAAAAAAAAQIDBAURBgcSITETQVGRoRQiYXGBFSMyQnKxwVKS4Qg0gqLR/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAbEQEAAwEBAQEAAAAAAAAAAAAAAQIRMSESUf/aAAwDAQACEQMRAD8Ag0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXR+A0fgBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKpaoofS2ex0stm7HHwjKTuK8KbUeujfP01AmvZfc/g8tsbjLm+d3QyNxQjVqVqdTmuLmlwtacly6HxM1uHy1FSnhsnb3UdW1Srp0paeGq1TfkT7b0o0KFOlD8NOKivoi/QDyBmdh9p8Km8lhLynBLV1IQ7SC+coapeZz0oyjJxlFxa6prQ9v6Hxsvslgc0pLJ4q1rylzc3TSlr80B440a7ih6LzW4zA3KlLF3l1ZT05Rb7SGv15nBZvcntPYKTxztslTXTs5dnN/SXL1AjEH0srgsth5cOVxt1Z8+HWvRlFN/BtaPo+h87QCgK6MoAAAAAAAAAAAAAAAAAAAAkncNilf7bxuZpOFjQlV+UnyX7kbrmegv9OeK7DAZHKVIaO6uFTpt98YLn6v0Al9dEVLVJJFrmgMhTUxuoWOobgztlrkYHULHUGMZqvDUhKE4xlCS0lGS1TXemjks1u52RzHFK4xFGhVl1qWn3T9OXodK6hY6nxGGokzG4m1qNzw2Yq0vCFzDiS+GqODzW6jazFqU4WCvaUU3xWkuN6fp6+Wp6VdRrpoW9p8TcNeOryyubKs6N5b1bequtOtTcJeHRmHhPYV7bWl/SdG/tbe6ovrTr0ozj5NHGZfdXsjkXKdKzrWNWXfa1Wo6/plqvLTqZhrzfoUOz3j7G0Nj7q0o0Mi7v2iEp6Tp8MopPRa+vkcYY0AAAAAAAAAAAAAXw0056/Q9bbAYz7D2Kw+PlHgqwt4zqx71OfvyXXxkzzHsRi/travF49wjKFW4i6iktU4J8Utfomesp1Ob06GwNh1PiWOoa7mWOZWM1sup8Sx1DXczDVuqNKrCnUr0oVJ84xlJJy+SBrcdQt4zXdTvLXUNZrYcy1zNd1PiWup8RjNbDmWufxNd1GWOZuMbDn8SnaNdGa7mYLu6ha2ta4qSUY0oSm2/ggIF3v5P7R20uYRlrTtIRoxXg1zfqziTayN1O+vri7qfjr1JVGvDV66GqcnQAAAAAAAAAAAAqgJS3A45Vtob3JTg+G0t+GL05cU3p56InB1GR9uYx/sGw6upLSd/cSn/xj7q9dTuHU5F1jxMs7qFrqmBzLHMrEth1CCt9mVdztPRs4S9yxoro+anLn+3D5k2OaSbk9F3s8v7SZN5jPX+Qcm1XrSlDX+npH0SJsqG7iNtNosT/ALXKXDh14KsuOPqdpid8l7T4YZXHUq6750Z8EvJ8iKwTsqx6Fwm8rZ/MVqVtGrXt7qrJRjSrUn70n3Jx1Xnodc5acn1IF3NWHtu29tWnHWnY0p3Un4OK0j/2lEnJ1NW3r1ZdZRZmdQo5mBzKORSWZ1Dkt6GT9g2NvIxklUuWqEU+/i6+ikdLxkUb6cj2lzjsbGXKnTlXqR7tZPhj9Uoy/uMtxsdRhqygBydAAAAAAAAAAAC+GiWupYdVuxxn2tttjKEot0qVX2ir+mHvc/hqkvqB6Bxtj9j4bHYnk5WdrTpTa6Oaj7z89TNKZiq1nUqzm23xSb5ljmdohzmfWd1C3jMDkUc/iax8nbjJSxuyeTuotqo6LpU2u5y93+W/oecXy5HpHPYey2gsfYck63YcSl9zJRlqunVPxODyO6WnJSeJy8dW+VO6p6P5arkc7QuqKCqOnyuwW0mMjKVTHTr046feWz7ReS5+hzbhKlUlCrGUJwekoyWjTXVMhSYtyOPVtgcplZx0nc1o21NtflguKWnzcor6HeuofI2XsXh9kcPj5Jqp2HbVU+qnUfE0/lrp9Df4+R1rxzt1n4y3jMDmUdQpLPxavkQHt9f/AGjtXfVYy1hCfZQ58tIrQmrK30bHGXV3OWkaNKUvJHnarUdWrKpLTim3KXzZzuujGACFgAAAAAAAAAAEr7jce4PL5eUfwU421KWvfLnJeSiRSift31k8XsNj4OKVS8crqfLm03pHX6I2vWTx0jn4PUtczC5ruLXM7OTM5lrkYXMo5gZnMt4+ZgcyjmBsKrKL9xtfJmvfULTIxUMlZWt5FdFXpKWn16p9efxLXMo5jDWzWryqz4pJLkkkuiS7jE5Mw8TGrNYycZRyMeoA5XeZfu22blQjLSdzUVNaeC5v9iHTu96l72uYtrJdKFHilo/zS/wl5nCHG3XWvAAEqAAAAAAAAAABdHTXmTNY7xdn61C2oS9osoUKEKUVVpuUfdil1jr4eBDCehXiZsThMa9EWuRs72DnZ3lCvHxpVFL9uhnc9NOp5ypV6lGoqlKcoVI9Jwlo19Ufex+2mdsdFG9lWgvyV1x+vX1Li/65zRNrnr0KOTI5x+8xaJZCwa8Z0ZfwzpbDbHBX3CoX0aM5dI11wevT1Ki0Sn5mH39WNWW05wqwU6clOL/NF6rzRcbrAAGgAAA5A+dtDeLH4O+um/ehSfDp4vkhPhHqGNpr77Qz9/da6xnWaj+lcl6JHyysm223zbKHndwAAAAAAAAAAAAAAAAAAV1ZXi+C8i0AbNlfXdjU47O5rUJd7pzcdfI6XH7wM3atKvUp3cO/tYaS0+a/nU5LUam6zEqY7eRjqqSv7atby05uHvr/ANOlx+fxOQ0Vrf0Jy74uXC19GQNqyqk09UyovLJrD0U1y15+Q7yB8dn8tjmvY8hcU4/0cfFH+18jpcdvIyVDhjkLejdRX4pR+7m/Ll6FRdPwlM4renfdhhqFmpaSuKurWv5Y/wCdDZx28DCXSSryq2s33VIarzX8nGbxstQymapqzrwrW9CkoxlB6pyb1fPyFrRhWvrk2UAOToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKpjVlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=',
            menuIconURI: 'data:image/png;base64,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',

            // your Scratch blocks
            blocks: [
                {
                    // name of the function where your block code lives
                    opcode: 'myFirstBlock',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.REPORTER,

                    // label to display on the block
                    text: 'Roblox Game ID [MY_NUMBER] Roblox Game URL [MY_STRING]',

                    // true if this block should end a stack
                    terminal: false,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],

                    // arguments used in the block
                    arguments: {
                        MY_NUMBER: {
                            // default value before the user sets something
                            defaultValue: 5484785643759,

                            // type/shape of the parameter - choose from:
                            //     ArgumentType.ANGLE - numeric value with an angle picker
                            //     ArgumentType.BOOLEAN - true/false value
                            //     ArgumentType.COLOR - numeric value with a colour picker
                            //     ArgumentType.NUMBER - numeric value
                            //     ArgumentType.STRING - text value
                            //     ArgumentType.NOTE - midi music value with a piano picker
                            type: ArgumentType.NUMBER
                        },
                        MY_STRING: {
                            // default value before the user sets something
                            defaultValue: 'roblox.com',

                            // type/shape of the parameter - choose from:
                            //     ArgumentType.ANGLE - numeric value with an angle picker
                            //     ArgumentType.BOOLEAN - true/false value
                            //     ArgumentType.COLOR - numeric value with a colour picker
                            //     ArgumentType.NUMBER - numeric value
                            //     ArgumentType.STRING - text value
                            //     ArgumentType.NOTE - midi music value with a piano picker
                            type: ArgumentType.STRING
                        }
                    }
                }
            ]
        };
    }


    /**
     * implementation of the block with the opcode that matches this name
     *  this will be called when the block is used
     */
    myFirstBlock ({ MY_NUMBER, MY_STRING }) {
        // example implementation to return a string
        return MY_STRING + ' : Roblox Game Loaded ' + (MY_NUMBER * 2);
    }
}

module.exports = Scratch3YourExtension;
