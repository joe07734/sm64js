import { AREA, CALL, CALL_LOOP, CLEAR_LEVEL, END_AREA, EXIT, INIT_LEVEL, JUMP_LINK,
         LOAD_MODEL_FROM_GEO, MACRO_OBJECTS, MARIO, MARIO_POS, OBJECT, OBJECT_WITH_ACTS,
         RETURN, SLEEP_BEFORE_EXIT, TERRAIN, TERRAIN_TYPE
} from "../../engine/LevelCommands"

import { script_func_global_1, script_func_global_4, script_func_global_15 } from "../global_scripts"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"

import { MODEL_MARIO, MODEL_BOB_BARS_GRILLS, MODEL_BOB_BUBBLY_TREE, MODEL_BOB_CHAIN_CHOMP_GATE,
         MODEL_BOB_SEESAW_PLATFORM, MODEL_BOBOMB_BUDDY, MODEL_BOWLING_BALL, MODEL_CANNON_BASE,
         MODEL_CHECKERBOARD_PLATFORM, MODEL_DL_CANNON_LID, MODEL_KING_BOBOMB, MODEL_NONE,
         MODEL_KOOPA_WITH_SHELL, MODEL_PURPLE_SWITCH, MODEL_STAR, ALL_ACTS, ACT_1, ACT_2, ACT_3,
         ACT_4, ACT_5, ACT_6
} from "../../include/model_ids"

import { DIALOG_000, DIALOG_001, DIALOG_002, DIALOG_003 } from "../../text/us/dialogs"

import { TERRAIN_GRASS            } from "../../include/surface_terrains"

import { bob_seg7_collision_level } from "./areas/1/collision.inc"
import { bob_geo_000488           } from "./areas/1/geo.inc"
import { bob_seg7_macro_objs      } from "./areas/1/macro.inc"
import { bob_geo_000458           } from "./seesaw_platform/geo.inc"
import { bob_geo_000440           } from "./chain_chomp_gate/geo.inc"
import { bob_geo_000470           } from "./grate_door/geo.inc"

import { bubbly_tree_geo          } from "../../actors/tree/geo.inc"


const script_func_local_1 = [
    // OBJECT(/*model*/ MODEL_BOB_CHAIN_CHOMP_GATE,  /*pos*/  1456,   768,   446, /*angle*/ 0, 326, 0,  /*behParam*/ 0x00000000, /*beh*/ bhvChainChompGate),
    OBJECT(/*model*/ MODEL_BOB_SEESAW_PLATFORM,   /*pos*/ -2303,   717,  1024, /*angle*/ 0, 45, 0,   /*behParam*/ 0x00030000, /*beh*/ 'bhvSeesawPlatform'),
    // OBJECT(/*model*/ MODEL_NONE,                  /*pos*/ -2050,     0, -3069, /*angle*/ 0, 25, 0,   /*behParam*/ 0x00000000, /*beh*/ bhvOpenableGrill),
    // OBJECT(/*model*/ MODEL_PURPLE_SWITCH,         /*pos*/ -2283,     0, -3682, /*angle*/ 0, 27, 0,   /*behParam*/ 0x00000000, /*beh*/ bhvFloorSwitchGrills),
    OBJECT(/*model*/ MODEL_CHECKERBOARD_PLATFORM, /*pos*/  1612,   300,  4611, /*angle*/ 0, 0, 0,    /*behParam*/ 0x00280000, /*beh*/ 'bhvCheckerboardElevatorGroup'),
    RETURN(),
]

const script_func_local_2 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,                  /*pos*/  1535, 3840, -5561, /*angle*/ 0, 0, 0,   /*behParam*/ 0x00000000, /*beh*/ 'bhvBobBowlingBallSpawner',  /*acts*/ ACT_1 | ACT_2),
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,                  /*pos*/  1535, 3840, -5561, /*angle*/ 0, 0, 0,   /*behParam*/ 0x00000000, /*beh*/ 'bhvTtmBowlingBallSpawner',  /*acts*/ ACT_3 | ACT_4 | ACT_5 | ACT_6),
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,                  /*pos*/   524, 2825, -5400, /*angle*/ 0, 0, 0,   /*behParam*/ 0x00020000, /*beh*/ 'bhvBobBowlingBallSpawner',  /*acts*/ ACT_1 | ACT_2),
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,                  /*pos*/   524, 2825, -5400, /*angle*/ 0, 0, 0,   /*behParam*/ 0x00020000, /*beh*/ 'bhvTtmBowlingBallSpawner',  /*acts*/ ACT_3 | ACT_4 | ACT_5 | ACT_6),
    OBJECT          (/*model*/ MODEL_BOWLING_BALL,          /*pos*/  -993,  886, -3565, /*angle*/ 0, 0, 0,   /*behParam*/ 0x00000000, /*beh*/ 'bhvPitBowlingBall'),
    OBJECT          (/*model*/ MODEL_BOWLING_BALL,          /*pos*/  -785,  886, -4301, /*angle*/ 0, 0, 0,   /*behParam*/ 0x00000000, /*beh*/ 'bhvPitBowlingBall'),
    OBJECT_WITH_ACTS(/*model*/ MODEL_BOWLING_BALL,          /*pos*/   -93,  886, -3414, /*angle*/ 0, 0, 0,   /*behParam*/ 0x00000000, /*beh*/ 'bhvPitBowlingBall',         /*acts*/ ACT_2 | ACT_3 | ACT_4 | ACT_5 | ACT_6),
    OBJECT_WITH_ACTS(/*model*/ MODEL_BOBOMB_BUDDY,          /*pos*/ -5723,  140,  6017, /*angle*/ 0, 0, 0,   /*behParam*/ DIALOG_002 << 16, /*beh*/ 'bhvBobombBuddy',            /*acts*/ ACT_1),
    OBJECT_WITH_ACTS(/*model*/ MODEL_BOBOMB_BUDDY,          /*pos*/ -6250,    0,  6680, /*angle*/ 0, 0, 0,   /*behParam*/ DIALOG_001 << 16, /*beh*/ 'bhvBobombBuddy',            /*acts*/ ACT_1),
    // OBJECT_WITH_ACTS(/*model*/ MODEL_BOBOMB_BUDDY,          /*pos*/ -5723,  140,  6017, /*angle*/ 0, 0, 0,   /*behParam*/ 0x00000000,       /*beh*/ bhvBobombBuddyOpensCannon, /*acts*/ ACT_2 | ACT_3 | ACT_4 | ACT_5 | ACT_6),
    // OBJECT_WITH_ACTS(/*model*/ MODEL_BOBOMB_BUDDY,          /*pos*/ -6250,    0,  6680, /*angle*/ 0, 0, 0,   /*behParam*/ DIALOG_003 << 16, /*beh*/ bhvBobombBuddy,            /*acts*/ ACT_2 | ACT_3 | ACT_4 | ACT_5 | ACT_6),
    OBJECT_WITH_ACTS(/*model*/ MODEL_CANNON_BASE,           /*pos*/ -5694,  128,  5600, /*angle*/ 0, 135, 0, /*behParam*/ 0x00010000, /*beh*/ 'bhvWaterBombCannon',        /*acts*/ ACT_1),
    OBJECT_WITH_ACTS(/*model*/ MODEL_DL_CANNON_LID,         /*pos*/ -5694,  128,  5600, /*angle*/ 0, 180, 0, /*behParam*/ 0x00000000, /*beh*/ 'bhvCannonClosed',           /*acts*/ ACT_2 | ACT_3 | ACT_4 | ACT_5 | ACT_6),
    // OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,                  /*pos*/  3304, 4242, -4603, /*angle*/ 0, 0, 0,   /*behParam*/ 0x00000000, /*beh*/ bhvKoopaRaceEndpoint,      /*acts*/ ACT_2),
    // OBJECT_WITH_ACTS(/*model*/ MODEL_KOOPA_WITH_SHELL,      /*pos*/  3400,  770,  6500, /*angle*/ 0, 0, 0,   /*behParam*/ 0x00010000, /*beh*/ bhvKoopa,                  /*acts*/ ACT_3 | ACT_4 | ACT_5 | ACT_6),
    RETURN(),
]

const script_func_local_3 = [
    // OBJECT_WITH_ACTS(/*model*/ MODEL_KING_BOBOMB,           /*pos*/  1636, 4242, -5567, /*angle*/ 0, -147, 0, /*behParam*/ 0x00000000, /*beh*/ bhvKingBobomb,            /*acts*/ ACT_1),
    // OBJECT_WITH_ACTS(/*model*/ MODEL_KOOPA_WITH_SHELL,      /*pos*/ -4004,    0,  5221, /*angle*/ 0, 0, 0,    /*behParam*/ 0x01020000, /*beh*/ bhvKoopa,                 /*acts*/ ACT_2),
    // OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,                  /*pos*/ -6000, 1000,  2400, /*angle*/ 0, 0, 0,    /*behParam*/ 0x03000000, /*beh*/ bhvHiddenRedCoinStar,     /*acts*/ ALL_ACTS),
    // OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,                  /*pos*/ -6600, 1000,  1250, /*angle*/ 0, 0, 0,    /*behParam*/ 0x04040000, /*beh*/ bhvHiddenStar,            /*acts*/ ALL_ACTS),
    // OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,                  /*pos*/  1550, 1200,   300, /*angle*/ 0, 0, 0,    /*behParam*/ 0x05000000, /*beh*/ bhvStar,                  /*acts*/ ALL_ACTS),
    RETURN(),
]


export const level_bob_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO, /*behParam*/ 0x00000001, /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_1),
    JUMP_LINK(script_func_global_4),
    JUMP_LINK(script_func_global_15),
    LOAD_MODEL_FROM_GEO(MODEL_BOB_BUBBLY_TREE,      bubbly_tree_geo),
    LOAD_MODEL_FROM_GEO(MODEL_BOB_CHAIN_CHOMP_GATE, bob_geo_000440),
    LOAD_MODEL_FROM_GEO(MODEL_BOB_SEESAW_PLATFORM,  bob_geo_000458),
    LOAD_MODEL_FROM_GEO(MODEL_BOB_BARS_GRILLS,      bob_geo_000470),

    AREA(/*index*/ 1, bob_geo_000488),
        JUMP_LINK(script_func_local_1),
        JUMP_LINK(script_func_local_2),
        JUMP_LINK(script_func_local_3),
        // OBJECT(/*model*/ MODEL_NONE, /*pos*/ -6558,  1000,  6464, /*angle*/ 0, 135, 0,  /*behParam*/ 0x000A0000, /*beh*/ bhvSpinAirborneWarp),
        // OBJECT(/*model*/ MODEL_NONE, /*pos*/   583,  2683, -5387, /*angle*/ 0, -154, 0, /*behParam*/ 0x000B0000, /*beh*/ bhvFadingWarp),
        // OBJECT(/*model*/ MODEL_NONE, /*pos*/  1680,  3835, -5523, /*angle*/ 0, -153, 0, /*behParam*/ 0x000C0000, /*beh*/ bhvFadingWarp),
        // OBJECT(/*model*/ MODEL_NONE, /*pos*/ -6612,  1024, -3351, /*angle*/ 0, 107, 0,  /*behParam*/ 0x000D0000, /*beh*/ bhvFadingWarp),
        // OBJECT(/*model*/ MODEL_NONE, /*pos*/  1980,   768,  6618, /*angle*/ 0, -151, 0, /*behParam*/ 0x000E0000, /*beh*/ bhvFadingWarp),
        // WARP_NODE(/*id*/ 0x0A, /*destLevel*/ LEVEL_BOB, /*destArea*/ 0x01, /*destNode*/ 0x0A, /*flags*/ WARP_NO_CHECKPOINT),
        // WARP_NODE(/*id*/ 0x0B, /*destLevel*/ LEVEL_BOB, /*destArea*/ 0x01, /*destNode*/ 0x0C, /*flags*/ WARP_NO_CHECKPOINT),
        // WARP_NODE(/*id*/ 0x0C, /*destLevel*/ LEVEL_BOB, /*destArea*/ 0x01, /*destNode*/ 0x0B, /*flags*/ WARP_NO_CHECKPOINT),
        // WARP_NODE(/*id*/ 0x0D, /*destLevel*/ LEVEL_BOB, /*destArea*/ 0x01, /*destNode*/ 0x0E, /*flags*/ WARP_NO_CHECKPOINT),
        // WARP_NODE(/*id*/ 0x0E, /*destLevel*/ LEVEL_BOB, /*destArea*/ 0x01, /*destNode*/ 0x0D, /*flags*/ WARP_NO_CHECKPOINT),
        // WARP_NODE(/*id*/ 0xF0, /*destLevel*/ LEVEL_CASTLE, /*destArea*/ 0x01, /*destNode*/ 0x32, /*flags*/ WARP_NO_CHECKPOINT),
        // WARP_NODE(/*id*/ 0xF1, /*destLevel*/ LEVEL_CASTLE, /*destArea*/ 0x01, /*destNode*/ 0x64, /*flags*/ WARP_NO_CHECKPOINT),
        TERRAIN(/*terrainData*/ bob_seg7_collision_level),
        MACRO_OBJECTS(/*objList*/ bob_seg7_macro_objs),
        // SHOW_DIALOG(/*index*/ 0x00, DIALOG_000),
        // SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000, /*seq*/ SEQ_LEVEL_GRASS),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_GRASS),
    END_AREA(),

    MARIO_POS(/*area*/ 1, /*yaw*/ 135, /*pos*/ -6558, 0, 6464),
    CALL(/*arg*/ 0, /*func*/ LevelUpdate.lvl_init_or_update, LevelUpdate),
    CALL_LOOP(/*arg*/ 1, /*func*/ LevelUpdate.lvl_init_or_update, LevelUpdate),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
]
