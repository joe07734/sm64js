// Bitdw

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0700F790 - 0x0700F7F0
export const bitdw_seg7_collision_moving_pyramid = [
    COL_INIT(),
    COL_VERTEX_INIT(0x6),
    COL_VERTEX(0, 102, 0),
    COL_VERTEX(307, 0, -306),
    COL_VERTEX(-306, 0, -306),
    COL_VERTEX(307, 0, 307),
    COL_VERTEX(0, -306, 0),
    COL_VERTEX(-306, 0, 307),
    COL_TRI_INIT(SURFACE_DEFAULT, 8),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 3, 1),
    COL_TRI(1, 3, 4),
    COL_TRI(2, 1, 4),
    COL_TRI(3, 0, 5),
    COL_TRI(5, 4, 3),
    COL_TRI(4, 5, 2),
    COL_TRI(2, 5, 0),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)
