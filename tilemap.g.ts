// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000706060202060606060605000000000008020202100e1002020d0400000000000802020211101102020204000000000008020202020201010202040000000000080202020f0202020102040000000000080202020201020201010400000000000c0202020201020201010b000000000008020202020f020101010400000000000802020f020202020201040000000000080202020202020202010400000000000802020202020202020204000000000008020202020202020202040000000000090a0a0a0a0a0a0a0a0a03000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundCenter,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.stairEast,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
