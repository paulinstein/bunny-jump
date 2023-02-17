import Phaser from '../../lib/phaser.js'

export default class Game extends Phaser.Scene
{
    constructor()
    {
        super('game')
    }

    preload()
    {
        this.load.image('background', '/bg_layer1.png')
        // load the platform image
        this.load.image('platform', '/ground_grass.png')
        
    }

    create()
    {
        this.add.image(240, 320, 'background')

        // add a platform image in the middle
        this.add.image(240, 320, 'platform')
    }
}