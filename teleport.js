/*
    might work on 1.2.5
*/
ModAPI.require("player");
ModAPI.require("network");

// handle message and teleport player
ModAPI.addEventListener("key", (e) => {
    if (e.key == 49) {
        let X = prompt("Teleporter v1\nInput an X-coordinate");
        let Y = prompt("Teleporter v1\nInput a Y-coordinate");
        let Z = prompt("Teleporter v1\nInput a Z-coordinate");
        ModAPI.network.sendPacketPlayerPosition({
            posX: X,
            posY: Y,
            posZ: Z,
            isOnGround: true
        });
        ModAPI.player.reload();
    }
});
