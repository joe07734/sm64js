import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE, gsSP1Triangle, G_CC_MODULATERGBA, G_TX_CLAMP
} from "../../../include/gbi"

import { ddd_seg7_texture_07000000, ddd_seg7_texture_07001800 } from "../texture.inc"
import { water_0900A000 } from "../../../textures/water"

// 0x07009288 - 0x070092A0
export const ddd_seg7_lights_07009288 = gdSPDefLights1(
    0x3f, 0x1f, 0x19,
    0xff, 0x7f, 0x65, 0x28, 0x28, 0x28
);

// 0x070092A0 - 0x070092B8
export const ddd_seg7_lights_070092A0 = gdSPDefLights1(
    0x2f, 0x1a, 0x0f,
    0xbf, 0x6a, 0x3f, 0x28, 0x28, 0x28
);

// 0x070092B8 - 0x070092D0
export const ddd_seg7_lights_070092B8 = gdSPDefLights1(
    0x0c, 0x0c, 0x0c,
    0x33, 0x33, 0x33, 0x28, 0x28, 0x28
);

// 0x070092D0 - 0x070092E8
export const ddd_seg7_lights_070092D0 = gdSPDefLights1(
    0x1d, 0x1d, 0x1d,
    0x77, 0x77, 0x77, 0x28, 0x28, 0x28
);

// 0x070092E8 - 0x07009300
export const ddd_seg7_lights_070092E8 = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07009300 - 0x07009400
export const ddd_seg7_vertex_07009300 = [
    [[  3923,     20,   4198], 0, [  7896,  11122], [0x23, 0x3d, 0x69, 0xff]],
    [[  3911,     20,   4198], 0, [  8392,  11122], [0xef, 0x44, 0x69, 0xff]],
    [[  3911,     -3,   4198], 0, [  8542,  11122], [0xee, 0xdf, 0x79, 0xff]],
    [[  3905,      2,   4198], 0, [  8822,  11122], [0xad, 0xe8, 0x5c, 0xff]],
    [[  3905,     14,   4198], 0, [  8684,  11122], [0xc4, 0x23, 0x69, 0xff]],
    [[  3814,     59,   4045], 0, [ 10188,  10868], [0x92, 0x1f, 0x36, 0xff]],
    [[  3814,    -42,   4045], 0, [ 12232,  10868], [0x9d, 0xc8, 0x37, 0xff]],
    [[  3866,    110,   4045], 0, [  8982,  10868], [0xd2, 0x67, 0x38, 0xff]],
    [[  3968,    110,   4045], 0, [  7306,  10868], [0x29, 0x69, 0x39, 0xff]],
    [[  4019,     59,   4045], 0, [  6100,  10868], [0x66, 0x31, 0x38, 0xff]],
    [[  3968,    -94,   4045], 0, [ 18364,  10868], [0x37, 0x9e, 0x39, 0xff]],
    [[  3923,     -3,   4198], 0, [  7746,  11122], [0x13, 0xab, 0x5c, 0xff]],
    [[  3866,    -94,   4045], 0, [ 14276,  10868], [0xe0, 0x94, 0x39, 0xff]],
    [[  3929,     14,   4198], 0, [  7604,  11122], [0x44, 0x11, 0x69, 0xff]],
    [[  4019,    -42,   4045], 0, [  4056,  10868], [0x6e, 0xe2, 0x35, 0xff]],
    [[  3929,      2,   4198], 0, [  7466,  11122], [0x3b, 0xdc, 0x6a, 0xff]],
]

// 0x07009400 - 0x07009490
export const ddd_seg7_vertex_07009400 = [
    [[  4019,    -42,   4045], 0, [  4056,  10868], [0x6e, 0xe2, 0x35, 0xff]],
    [[  3929,      2,   4198], 0, [  7466,  11122], [0x3b, 0xdc, 0x6a, 0xff]],
    [[  3968,    -94,   4045], 0, [  2012,  10868], [0x37, 0x9e, 0x39, 0xff]],
    [[  3923,     -3,   4198], 0, [  7746,  11122], [0x13, 0xab, 0x5c, 0xff]],
    [[  3911,     -3,   4198], 0, [  8542,  11122], [0xee, 0xdf, 0x79, 0xff]],
    [[  3866,    -94,   4045], 0, [ 14276,  10868], [0xe0, 0x94, 0x39, 0xff]],
    [[  3814,    -42,   4045], 0, [ 12232,  10868], [0x9d, 0xc8, 0x37, 0xff]],
    [[  3905,      2,   4198], 0, [  8822,  11122], [0xad, 0xe8, 0x5c, 0xff]],
    [[  3905,     14,   4198], 0, [  8684,  11122], [0xc4, 0x23, 0x69, 0xff]],
]

// 0x07009490 - 0x07009590
export const ddd_seg7_vertex_07009490 = [
    [[  3917,      8,   4147], 0, [  8144,  11038], [0x9c, 0xb3, 0x0a, 0xff]],
    [[  3743,    -97,   4170], 0, [ 13026,  11074], [0xbc, 0xf0, 0x69, 0xff]],
    [[  3811,   -165,   4125], 0, [ 14466,  11000], [0xef, 0x86, 0x1d, 0xff]],
    [[  4091,    114,   4170], 0, [  5968,  11074], [0x44, 0x10, 0x69, 0xff]],
    [[  4023,    182,   4125], 0, [  7000,  11000], [0x11, 0x7a, 0x1d, 0xff]],
    [[  4097,    108,   4151], 0, [  5872,  11044], [0x7a, 0x0d, 0xe3, 0xff]],
    [[  4029,    176,   4106], 0, [  6914,  10970], [0x0a, 0x41, 0x94, 0xff]],
    [[  4084,   -103,   4106], 0, [  3150,  10970], [0x3e, 0xf5, 0x92, 0xff]],
    [[  4017,   -171,   4151], 0, [  1684,  11044], [0x0d, 0x86, 0xe1, 0xff]],
    [[  4023,   -165,   4170], 0, [  1822,  11074], [0x10, 0xbc, 0x69, 0xff]],
    [[  4091,    -97,   4125], 0, [  3262,  11000], [0x7a, 0xee, 0x1a, 0xff]],
    [[  3743,    114,   4125], 0, [ 10320,  11000], [0x86, 0x11, 0x1d, 0xff]],
    [[  3811,    182,   4170], 0, [  9288,  11074], [0xf0, 0x44, 0x69, 0xff]],
    [[  3817,    188,   4151], 0, [  9204,  11044], [0xf3, 0x7a, 0xe3, 0xff]],
    [[  3737,    -91,   4151], 0, [ 12918,  11044], [0x86, 0xf3, 0xe3, 0xff]],
    [[  3805,   -159,   4106], 0, [ 14328,  10970], [0xf6, 0xbf, 0x94, 0xff]],
]

// 0x07009590 - 0x070095E0
export const ddd_seg7_vertex_07009590 = [
    [[  3917,      8,   4147], 0, [  8144,  11038], [0x9c, 0xb3, 0x0a, 0xff]],
    [[  3743,    114,   4125], 0, [ 10320,  11000], [0x86, 0x11, 0x1d, 0xff]],
    [[  3749,    120,   4106], 0, [ 10224,  10970], [0xbf, 0x0a, 0x94, 0xff]],
    [[  3817,    188,   4151], 0, [  9204,  11044], [0xf3, 0x7a, 0xe3, 0xff]],
    [[  3811,    182,   4170], 0, [  9288,  11074], [0xf0, 0x44, 0x69, 0xff]],
]

// 0x070095E0 - 0x07009660
export const ddd_seg7_vertex_070095E0 = [
    [[  3814,   1185,   -306], 0, [  2778,  -2076], [0xcc, 0x72, 0xef, 0xff]],
    [[  3866,   1185,    154], 0, [   480,  -2076], [0xd8, 0x65, 0x41, 0xff]],
    [[  3968,   1185,    154], 0, [   480,  -2076], [0x20, 0x56, 0x57, 0xff]],
    [[  4019,   1185,   -306], 0, [  2778,  -2076], [0x67, 0x47, 0xf1, 0xff]],
    [[  3968,   1185,   -409], 0, [  3290,  -2076], [0x39, 0x40, 0xa4, 0xff]],
    [[  4019,   1185,     51], 0, [   990,  -2076], [0x64, 0x49, 0x18, 0xff]],
    [[  3814,   1185,     51], 0, [   990,  -2076], [0x88, 0x21, 0x15, 0xff]],
    [[  3866,   1185,   -409], 0, [  3290,  -2076], [0xc7, 0x40, 0xa3, 0xff]],
]

// 0x07009660 - 0x07009750
export const ddd_seg7_vertex_07009660 = [
    [[  3907,   -503,   3942], 0, [     0,    990], [0xb1, 0xaf, 0x38, 0xff]],
    [[  3886,   -503,   3840], 0, [     0,    650], [0x97, 0xba, 0x07, 0xff]],
    [[  3907,   -503,   3635], 0, [     0,      0], [0xed, 0x8b, 0xd5, 0xff]],
    [[  4429,     39,   3738], 0, [   650,      0], [0x28, 0x78, 0xf8, 0xff]],
    [[  4429,     39,   3840], 0, [   308,      0], [0x46, 0x68, 0x0e, 0xff]],
    [[  4429,     18,   3635], 0, [   990,      0], [0x75, 0x26, 0xe5, 0xff]],
    [[  4429,     18,   3942], 0, [     0,      0], [0x51, 0x27, 0x59, 0xff]],
    [[  4429,    -22,   3738], 0, [   650,      0], [0x46, 0x98, 0xf2, 0xff]],
    [[  4429,     -1,   3635], 0, [   990,      0], [0x30, 0xd1, 0x95, 0xff]],
    [[  4429,    -22,   3840], 0, [   308,      0], [0x46, 0x97, 0x07, 0xff]],
    [[  4429,     -1,   3942], 0, [     0,      0], [0x51, 0xb1, 0x38, 0xff]],
    [[  3927,   -503,   3635], 0, [     0,      0], [0x5f, 0xd0, 0xbd, 0xff]],
    [[  3947,   -503,   3738], 0, [     0,    308], [0x69, 0xba, 0xfa, 0xff]],
    [[  3947,   -503,   3840], 0, [     0,    650], [0x68, 0xba, 0x0d, 0xff]],
    [[  3927,   -503,   3942], 0, [     0,    990], [0x27, 0xaf, 0x59, 0xff]],
]

// 0x07009750 - 0x07009800
export const ddd_seg7_vertex_07009750 = [
    [[  3907,    520,   3635], 0, [  5078,      0], [0xb1, 0x51, 0xc8, 0xff]],
    [[  3886,    520,   3738], 0, [  5078,    308], [0x88, 0x28, 0xf8, 0xff]],
    [[  3886,    520,   3840], 0, [  5078,    650], [0xc8, 0x71, 0x07, 0xff]],
    [[  3886,   -503,   3840], 0, [     0,    650], [0x97, 0xba, 0x07, 0xff]],
    [[  3886,   -503,   3738], 0, [     0,    308], [0x89, 0xd8, 0xf0, 0xff]],
    [[  3907,   -503,   3635], 0, [     0,      0], [0xed, 0x8b, 0xd5, 0xff]],
    [[  3907,    520,   3942], 0, [  5078,    990], [0xd1, 0x30, 0x6b, 0xff]],
    [[  3927,    520,   3942], 0, [  5078,    990], [0x4f, 0x51, 0x38, 0xff]],
    [[  3947,    520,   3840], 0, [  5078,    650], [0x69, 0x46, 0x06, 0xff]],
    [[  3947,    520,   3738], 0, [  5078,    308], [0x68, 0x46, 0xf3, 0xff]],
    [[  3927,    520,   3635], 0, [  5078,      0], [0x27, 0x51, 0xa7, 0xff]],
]

// 0x07009800 - 0x070098E0
export const ddd_seg7_vertex_07009800 = [
    [[  3814,   -606,   2765], 0, [ 15852,   8738], [0xe2, 0x8a, 0x22, 0xff]],
    [[  4019,   -606,   2765], 0, [ 16788,   8738], [0x15, 0x88, 0x23, 0xff]],
    [[  3866,    -94,   4045], 0, [ 14276,  10868], [0xe0, 0x94, 0x39, 0xff]],
    [[  3814,   -810,   1741], 0, [ 15976,   7034], [0xec, 0x84, 0x0c, 0xff]],
    [[  3968,    -94,   4045], 0, [ 18364,  10868], [0x37, 0x9e, 0x39, 0xff]],
    [[  4019,   -810,   1741], 0, [ 16664,   7034], [0x10, 0x83, 0x09, 0xff]],
    [[  3610,   -503,   2765], 0, [ 14790,   8738], [0xb4, 0xa2, 0x23, 0xff]],
    [[  3814,    -42,   4045], 0, [ 12232,  10868], [0x9d, 0xc8, 0x37, 0xff]],
    [[  3405,     39,   3840], 0, [   308,   5076], [0xba, 0x69, 0x07, 0xff]],
    [[  3405,     39,   3738], 0, [   650,   5076], [0xba, 0x68, 0xf2, 0xff]],
    [[  3405,    -22,   3738], 0, [   650,   5076], [0x8f, 0xc8, 0xfd, 0xff]],
    [[  3405,     18,   3942], 0, [     0,   5076], [0xaf, 0x4f, 0x38, 0xff]],
    [[  4429,     39,   3840], 0, [   308,      0], [0x46, 0x68, 0x0e, 0xff]],
    [[  4429,     39,   3738], 0, [   650,      0], [0x28, 0x78, 0xf8, 0xff]],
]

// 0x070098E0 - 0x070099E0
export const ddd_seg7_vertex_070098E0 = [
    [[  4429,     -1,   3635], 0, [   990,      0], [0x30, 0xd1, 0x95, 0xff]],
    [[  4429,    -22,   3738], 0, [   650,      0], [0x46, 0x98, 0xf2, 0xff]],
    [[  3405,     -1,   3635], 0, [   990,   5076], [0xd0, 0xa1, 0xbc, 0xff]],
    [[  3405,     -1,   3942], 0, [     0,   5076], [0xaf, 0xd9, 0x59, 0xff]],
    [[  3405,     18,   3942], 0, [     0,   5076], [0xaf, 0x4f, 0x38, 0xff]],
    [[  3405,    -22,   3738], 0, [   650,   5076], [0x8f, 0xc8, 0xfd, 0xff]],
    [[  4429,     18,   3942], 0, [     0,      0], [0x51, 0x27, 0x59, 0xff]],
    [[  4429,     39,   3840], 0, [   308,      0], [0x46, 0x68, 0x0e, 0xff]],
    [[  3405,     39,   3738], 0, [   650,   5076], [0xba, 0x68, 0xf2, 0xff]],
    [[  4429,     39,   3738], 0, [   650,      0], [0x28, 0x78, 0xf8, 0xff]],
    [[  4429,     18,   3635], 0, [   990,      0], [0x75, 0x26, 0xe5, 0xff]],
    [[  3405,     18,   3635], 0, [   990,   5076], [0xaf, 0x27, 0xa7, 0xff]],
    [[  3405,     39,   3840], 0, [   308,   5076], [0xba, 0x69, 0x07, 0xff]],
    [[  4429,    -22,   3840], 0, [   308,      0], [0x46, 0x97, 0x07, 0xff]],
    [[  3405,    -22,   3840], 0, [   308,   5076], [0xd8, 0x89, 0x10, 0xff]],
    [[  4429,     -1,   3942], 0, [     0,      0], [0x51, 0xb1, 0x38, 0xff]],
]

// 0x070099E0 - 0x07009AD0
export const ddd_seg7_vertex_070099E0 = [
    [[  3907,   -503,   3942], 0, [     0,    990], [0xb1, 0xaf, 0x38, 0xff]],
    [[  3907,    520,   3942], 0, [  5078,    990], [0xd1, 0x30, 0x6b, 0xff]],
    [[  3886,    520,   3840], 0, [  5078,    650], [0xc8, 0x71, 0x07, 0xff]],
    [[  3405,     -1,   3635], 0, [   990,   5076], [0xd0, 0xa1, 0xbc, 0xff]],
    [[  3405,     18,   3635], 0, [   990,   5076], [0xaf, 0x27, 0xa7, 0xff]],
    [[  4429,     -1,   3635], 0, [   990,      0], [0x30, 0xd1, 0x95, 0xff]],
    [[  4429,     18,   3635], 0, [   990,      0], [0x75, 0x26, 0xe5, 0xff]],
    [[  3907,    520,   3635], 0, [  5078,      0], [0xb1, 0x51, 0xc8, 0xff]],
    [[  3927,    520,   3635], 0, [  5078,      0], [0x27, 0x51, 0xa7, 0xff]],
    [[  3907,   -503,   3635], 0, [     0,      0], [0xed, 0x8b, 0xd5, 0xff]],
    [[  3927,   -503,   3635], 0, [     0,      0], [0x5f, 0xd0, 0xbd, 0xff]],
    [[  3927,   -503,   3942], 0, [     0,    990], [0x27, 0xaf, 0x59, 0xff]],
    [[  3927,    520,   3942], 0, [  5078,    990], [0x4f, 0x51, 0x38, 0xff]],
    [[  3947,    520,   3840], 0, [  5078,    650], [0x69, 0x46, 0x06, 0xff]],
    [[  3947,   -503,   3840], 0, [     0,    650], [0x68, 0xba, 0x0d, 0xff]],
]

// 0x07009AD0 - 0x07009BD0
export const ddd_seg7_vertex_07009AD0 = [
    [[  3886,   -503,   3840], 0, [     0,    650], [0x97, 0xba, 0x07, 0xff]],
    [[  3886,    520,   3840], 0, [  5078,    650], [0xc8, 0x71, 0x07, 0xff]],
    [[  3886,    520,   3738], 0, [  5078,    308], [0x88, 0x28, 0xf8, 0xff]],
    [[  3886,   -503,   3738], 0, [     0,    308], [0x89, 0xd8, 0xf0, 0xff]],
    [[  3907,   -503,   3942], 0, [     0,    990], [0xb1, 0xaf, 0x38, 0xff]],
    [[  3907,    520,   3635], 0, [  5078,      0], [0xb1, 0x51, 0xc8, 0xff]],
    [[  3907,   -503,   3635], 0, [     0,      0], [0xed, 0x8b, 0xd5, 0xff]],
    [[  3927,    520,   3635], 0, [  5078,      0], [0x27, 0x51, 0xa7, 0xff]],
    [[  3947,    520,   3738], 0, [  5078,    308], [0x68, 0x46, 0xf3, 0xff]],
    [[  3927,   -503,   3635], 0, [     0,      0], [0x5f, 0xd0, 0xbd, 0xff]],
    [[  4173,   -554,  -1996], 0, [  1174,    820], [0x3c, 0x9f, 0xcb, 0xff]],
    [[  4019,   -606,  -1996], 0, [   436,    820], [0x0e, 0x95, 0xbe, 0xff]],
    [[  4019,   -196,  -2457], 0, [  1498,     54], [0x1f, 0xc4, 0x96, 0xff]],
    [[  3947,   -503,   3738], 0, [     0,    308], [0x69, 0xba, 0xfa, 0xff]],
    [[  3947,    520,   3840], 0, [  5078,    650], [0x69, 0x46, 0x06, 0xff]],
    [[  3947,   -503,   3840], 0, [     0,    650], [0x68, 0xba, 0x0d, 0xff]],
]

// 0x07009BD0 - 0x07009CD0
export const ddd_seg7_vertex_07009BD0 = [
    [[  4173,   -554,  -1996], 0, [  1174,    820], [0x3c, 0x9f, 0xcb, 0xff]],
    [[  4019,   -196,  -2457], 0, [  1498,     54], [0x1f, 0xc4, 0x96, 0xff]],
    [[  4378,   -350,  -1996], 0, [  2526,    820], [0x61, 0xc9, 0xc5, 0xff]],
    [[  4019,   -810,  -1330], 0, [   312,   1924], [0x17, 0x85, 0xeb, 0xff]],
    [[  4019,   -606,  -1996], 0, [   436,    820], [0x0e, 0x95, 0xbe, 0xff]],
    [[  4326,   -708,  -1330], 0, [  1404,   1924], [0x47, 0x99, 0xf1, 0xff]],
    [[  4531,   -503,  -1330], 0, [  2382,   1924], [0x6a, 0xbf, 0xed, 0xff]],
    [[  4122,    -94,  -2457], 0, [  3418,     54], [0x48, 0xee, 0x9a, 0xff]],
    [[  4634,   -196,  -1330], 0, [  3506,   1924], [0x7c, 0xee, 0xee, 0xff]],
    [[  4429,   -145,  -1996], 0, [  3542,    820], [0x73, 0xf5, 0xcd, 0xff]],
    [[  3814,   -606,  -1996], 0, [ 15852,    820], [0xf2, 0x90, 0xc8, 0xff]],
    [[  3814,   -196,  -2457], 0, [ 14790,     54], [0xee, 0xc0, 0x95, 0xff]],
    [[  4019,   -606,  -1996], 0, [ 16788,    820], [0x0e, 0x95, 0xbe, 0xff]],
    [[  3814,   -810,  -1330], 0, [ 15976,   1924], [0xec, 0x84, 0xee, 0xff]],
    [[  4019,   -810,  -1330], 0, [ 16664,   1924], [0x17, 0x85, 0xeb, 0xff]],
    [[  4019,   -196,  -2457], 0, [ 17850,     54], [0x1f, 0xc4, 0x96, 0xff]],
]

// 0x07009CD0 - 0x07009DD0
export const ddd_seg7_vertex_07009CD0 = [
    [[  4173,    571,  -1996], 0, [  7116,    820], [0x2a, 0x6c, 0xcd, 0xff]],
    [[  4019,    213,  -2457], 0, [  7154,     54], [0x0f, 0x3d, 0x92, 0xff]],
    [[  3661,    571,  -1996], 0, [  9172,    820], [0xe4, 0x70, 0xce, 0xff]],
    [[  3814,    213,  -2457], 0, [  9134,     54], [0xd9, 0x43, 0x9c, 0xff]],
    [[  4122,    110,  -2457], 0, [  5730,     54], [0x41, 0x1f, 0x98, 0xff]],
    [[  4378,    366,  -1996], 0, [  5948,    820], [0x65, 0x35, 0xcb, 0xff]],
    [[  4429,    161,  -1996], 0, [  5046,    820], [0x70, 0x0b, 0xc6, 0xff]],
    [[  4480,    571,  -1330], 0, [  6214,   1924], [0x49, 0x66, 0xf0, 0xff]],
    [[  4634,    213,  -1330], 0, [  4948,   1924], [0x7a, 0x1a, 0xeb, 0xff]],
    [[  4429,   -145,  -1996], 0, [  3542,    820], [0x73, 0xf5, 0xcd, 0xff]],
    [[  4122,    -94,  -2457], 0, [  3418,     54], [0x48, 0xee, 0x9a, 0xff]],
    [[  4634,   -196,  -1330], 0, [  3506,   1924], [0x7c, 0xee, 0xee, 0xff]],
    [[  4480,    571,   1741], 0, [  6214,   7034], [0x51, 0x60, 0x09, 0xff]],
    [[  4326,   -708,  -1330], 0, [  1404,   1924], [0x47, 0x99, 0xf1, 0xff]],
    [[  4531,   -503,  -1330], 0, [  2382,   1924], [0x6a, 0xbf, 0xed, 0xff]],
    [[  4531,   -503,   1741], 0, [  2382,   7034], [0x68, 0xba, 0x0f, 0xff]],
]

// 0x07009DD0 - 0x07009ED0
export const ddd_seg7_vertex_07009DD0 = [
    [[  4019,   -810,  -1330], 0, [   312,   1924], [0x17, 0x85, 0xeb, 0xff]],
    [[  4326,   -708,  -1330], 0, [  1404,   1924], [0x47, 0x99, 0xf1, 0xff]],
    [[  4326,   -708,   1741], 0, [  1404,   7034], [0x3c, 0x92, 0x0d, 0xff]],
    [[  4531,   -503,   1741], 0, [  2382,   7034], [0x68, 0xba, 0x0f, 0xff]],
    [[  4531,   -503,  -1330], 0, [  2382,   1924], [0x6a, 0xbf, 0xed, 0xff]],
    [[  4634,   -196,   1741], 0, [  3506,   7034], [0x7c, 0xec, 0x0c, 0xff]],
    [[  4634,   -196,  -1330], 0, [  3506,   1924], [0x7c, 0xee, 0xee, 0xff]],
    [[  4019,   -810,   1741], 0, [   312,   7034], [0x10, 0x83, 0x09, 0xff]],
    [[  3814,   -810,   1741], 0, [ 15976,   7034], [0xec, 0x84, 0x0c, 0xff]],
    [[  3814,   -810,  -1330], 0, [ 15976,   1924], [0xec, 0x84, 0xee, 0xff]],
    [[  4019,   -810,   1741], 0, [ 16664,   7034], [0x10, 0x83, 0x09, 0xff]],
    [[  4019,   -810,  -1330], 0, [ 16664,   1924], [0x17, 0x85, 0xeb, 0xff]],
    [[  4429,   -145,   2765], 0, [  3542,   8738], [0x78, 0xe6, 0x1f, 0xff]],
    [[  4429,    161,   2765], 0, [  5046,   8738], [0x79, 0x0f, 0x20, 0xff]],
    [[  4634,    213,  -1330], 0, [  4948,   1924], [0x7a, 0x1a, 0xeb, 0xff]],
    [[  4634,    213,   1741], 0, [  4948,   7034], [0x7b, 0x18, 0x0c, 0xff]],
]

// 0x07009ED0 - 0x07009FD0
export const ddd_seg7_vertex_07009ED0 = [
    [[  4634,    213,   1741], 0, [  4948,   7034], [0x7b, 0x18, 0x0c, 0xff]],
    [[  4634,    213,  -1330], 0, [  4948,   1924], [0x7a, 0x1a, 0xeb, 0xff]],
    [[  4480,    571,   1741], 0, [  6214,   7034], [0x51, 0x60, 0x09, 0xff]],
    [[  4634,   -196,   1741], 0, [  3506,   7034], [0x7c, 0xec, 0x0c, 0xff]],
    [[  4634,   -196,  -1330], 0, [  3506,   1924], [0x7c, 0xee, 0xee, 0xff]],
    [[  4019,   -606,   2765], 0, [   436,   8738], [0x15, 0x88, 0x23, 0xff]],
    [[  4019,   -810,   1741], 0, [   312,   7034], [0x10, 0x83, 0x09, 0xff]],
    [[  4326,   -708,   1741], 0, [  1404,   7034], [0x3c, 0x92, 0x0d, 0xff]],
    [[  4224,   -503,   2765], 0, [  1498,   8738], [0x4a, 0xa0, 0x22, 0xff]],
    [[  4531,   -503,   1741], 0, [  2382,   7034], [0x68, 0xba, 0x0f, 0xff]],
    [[  4326,   -401,   2765], 0, [  2186,   8738], [0x62, 0xba, 0x24, 0xff]],
    [[  4429,   -145,   2765], 0, [  3542,   8738], [0x78, 0xe6, 0x1f, 0xff]],
    [[  4429,    161,   2765], 0, [  5046,   8738], [0x79, 0x0f, 0x20, 0xff]],
    [[  4326,    417,   2765], 0, [  6252,   8738], [0x62, 0x48, 0x22, 0xff]],
    [[  3968,    -94,   4045], 0, [  2012,  10868], [0x37, 0x9e, 0x39, 0xff]],
    [[  4122,    571,   2765], 0, [  7306,   8738], [0x19, 0x79, 0x1b, 0xff]],
]

// 0x07009FD0 - 0x0700A0D0
export const ddd_seg7_vertex_07009FD0 = [
    [[  3968,    110,   4045], 0, [  7306,  10868], [0x29, 0x69, 0x39, 0xff]],
    [[  4019,     59,   4045], 0, [  6100,  10868], [0x66, 0x31, 0x38, 0xff]],
    [[  4326,    417,   2765], 0, [  6252,   8738], [0x62, 0x48, 0x22, 0xff]],
    [[  4122,    571,   2765], 0, [  7306,   8738], [0x19, 0x79, 0x1b, 0xff]],
    [[  4429,    161,   2765], 0, [  5046,   8738], [0x79, 0x0f, 0x20, 0xff]],
    [[  4019,    -42,   4045], 0, [  4056,  10868], [0x6e, 0xe2, 0x35, 0xff]],
    [[  4429,   -145,   2765], 0, [  3542,   8738], [0x78, 0xe6, 0x1f, 0xff]],
    [[  4326,   -401,   2765], 0, [  2186,   8738], [0x62, 0xba, 0x24, 0xff]],
    [[  3866,    110,   4045], 0, [  8982,  10868], [0xd2, 0x67, 0x38, 0xff]],
    [[  3712,    571,   2765], 0, [  8982,   8738], [0xda, 0x75, 0x1d, 0xff]],
    [[  3968,    -94,   4045], 0, [  2012,  10868], [0x37, 0x9e, 0x39, 0xff]],
    [[  3712,    -94,  -2457], 0, [ 12870,     54], [0xb3, 0xdc, 0xa3, 0xff]],
    [[  3456,   -350,  -1996], 0, [ 13762,    820], [0x9c, 0xc6, 0xcc, 0xff]],
    [[  3405,   -145,  -1996], 0, [ 12746,    820], [0x90, 0xf5, 0xc6, 0xff]],
    [[  4019,   -606,   2765], 0, [   436,   8738], [0x15, 0x88, 0x23, 0xff]],
    [[  4224,   -503,   2765], 0, [  1498,   8738], [0x4a, 0xa0, 0x22, 0xff]],
]

// 0x0700A0D0 - 0x0700A1D0
export const ddd_seg7_vertex_0700A0D0 = [
    [[  3814,   -196,  -2457], 0, [ 14790,     54], [0xee, 0xc0, 0x95, 0xff]],
    [[  3814,   -606,  -1996], 0, [ 15852,    820], [0xf2, 0x90, 0xc8, 0xff]],
    [[  3661,   -554,  -1996], 0, [ 15114,    820], [0xc6, 0xa1, 0xc4, 0xff]],
    [[  3814,   -810,  -1330], 0, [ 15976,   1924], [0xec, 0x84, 0xee, 0xff]],
    [[  3507,   -708,  -1330], 0, [ 14884,   1924], [0xbf, 0x96, 0xed, 0xff]],
    [[  3456,   -350,  -1996], 0, [ 13762,    820], [0x9c, 0xc6, 0xcc, 0xff]],
    [[  3712,    -94,  -2457], 0, [ 12870,     54], [0xb3, 0xdc, 0xa3, 0xff]],
    [[  3712,    110,  -2457], 0, [ 10558,     54], [0xd5, 0x0a, 0x8a, 0xff]],
    [[  3405,   -145,  -1996], 0, [ 12746,    820], [0x90, 0xf5, 0xc6, 0xff]],
    [[  3200,   -196,  -1330], 0, [ 12782,   1924], [0x85, 0xeb, 0xeb, 0xff]],
    [[  3302,   -503,  -1330], 0, [ 13906,   1924], [0x99, 0xb9, 0xf1, 0xff]],
    [[  3405,    161,  -1996], 0, [ 11242,    820], [0x8d, 0x0b, 0xcd, 0xff]],
    [[  3456,    366,  -1996], 0, [ 10340,    820], [0x9f, 0x39, 0xc6, 0xff]],
    [[  3200,    213,  -1330], 0, [ 11340,   1924], [0x85, 0x15, 0xee, 0xff]],
    [[  3354,    571,  -1330], 0, [ 10074,   1924], [0xa0, 0x50, 0xf0, 0xff]],
    [[  3661,    571,  -1996], 0, [  9172,    820], [0xe4, 0x70, 0xce, 0xff]],
]

// 0x0700A1D0 - 0x0700A2D0
export const ddd_seg7_vertex_0700A1D0 = [
    [[  3814,    213,  -2457], 0, [  9134,     54], [0xd9, 0x43, 0x9c, 0xff]],
    [[  3712,    110,  -2457], 0, [ 10558,     54], [0xd5, 0x0a, 0x8a, 0xff]],
    [[  3456,    366,  -1996], 0, [ 10340,    820], [0x9f, 0x39, 0xc6, 0xff]],
    [[  3661,    571,  -1996], 0, [  9172,    820], [0xe4, 0x70, 0xce, 0xff]],
    [[  3507,   -401,   2765], 0, [ 14102,   8738], [0x9b, 0xbd, 0x23, 0xff]],
    [[  3610,   -503,   2765], 0, [ 14790,   8738], [0xb4, 0xa2, 0x23, 0xff]],
    [[  3814,    -42,   4045], 0, [ 12232,  10868], [0x9d, 0xc8, 0x37, 0xff]],
    [[  3302,   -503,   1741], 0, [ 13906,   7034], [0x94, 0xc1, 0x0f, 0xff]],
    [[  3507,   -708,   1741], 0, [ 14884,   7034], [0xbb, 0x97, 0x0d, 0xff]],
    [[  3814,   -606,   2765], 0, [ 15852,   8738], [0xe2, 0x8a, 0x22, 0xff]],
    [[  3302,   -503,  -1330], 0, [ 13906,   1924], [0x99, 0xb9, 0xf1, 0xff]],
    [[  3507,   -708,  -1330], 0, [ 14884,   1924], [0xbf, 0x96, 0xed, 0xff]],
    [[  3814,   -810,   1741], 0, [ 15976,   7034], [0xec, 0x84, 0x0c, 0xff]],
    [[  3814,   -810,  -1330], 0, [ 15976,   1924], [0xec, 0x84, 0xee, 0xff]],
    [[  3405,   -145,   2765], 0, [ 12746,   8738], [0x87, 0xee, 0x1f, 0xff]],
    [[  3200,   -196,   1741], 0, [ 12782,   7034], [0x83, 0xf0, 0x0a, 0xff]],
]

// 0x0700A2D0 - 0x0700A3C0
export const ddd_seg7_vertex_0700A2D0 = [
    [[  3200,   -196,  -1330], 0, [ 12782,   1924], [0x85, 0xeb, 0xeb, 0xff]],
    [[  3302,   -503,  -1330], 0, [ 13906,   1924], [0x99, 0xb9, 0xf1, 0xff]],
    [[  3302,   -503,   1741], 0, [ 13906,   7034], [0x94, 0xc1, 0x0f, 0xff]],
    [[  3200,   -196,   1741], 0, [ 12782,   7034], [0x83, 0xf0, 0x0a, 0xff]],
    [[  3405,   -145,   2765], 0, [ 12746,   8738], [0x87, 0xee, 0x1f, 0xff]],
    [[  3814,    -42,   4045], 0, [ 12232,  10868], [0x9d, 0xc8, 0x37, 0xff]],
    [[  3814,     59,   4045], 0, [ 10188,  10868], [0x92, 0x1f, 0x36, 0xff]],
    [[  3405,    161,   2765], 0, [ 11242,   8738], [0x88, 0x17, 0x20, 0xff]],
    [[  3200,    213,   1741], 0, [ 11340,   7034], [0x86, 0x1c, 0x0e, 0xff]],
    [[  3200,    213,  -1330], 0, [ 11340,   1924], [0x85, 0x15, 0xee, 0xff]],
    [[  3507,    417,   2765], 0, [ 10036,   8738], [0x9e, 0x48, 0x22, 0xff]],
    [[  3354,    571,   1741], 0, [ 10074,   7034], [0xda, 0x78, 0x06, 0xff]],
    [[  3354,    571,  -1330], 0, [ 10074,   1924], [0xa0, 0x50, 0xf0, 0xff]],
    [[  3712,    571,   2765], 0, [  8982,   8738], [0xda, 0x75, 0x1d, 0xff]],
    [[  3866,    110,   4045], 0, [  8982,  10868], [0xd2, 0x67, 0x38, 0xff]],
]

// 0x0700A3C0 - 0x0700A4C0
export const ddd_seg7_vertex_0700A3C0 = [
    [[  4019,    571,     51], 0, [   990,    990], [0x7e, 0x00, 0x0a, 0xff]],
    [[  4019,   1185,     51], 0, [   990,  -2076], [0x64, 0x49, 0x18, 0xff]],
    [[  3968,    571,    256], 0, [     0,    990], [0x5e, 0x0b, 0x54, 0xff]],
    [[  3814,    213,  -2457], 0, [   990,    138], [0xd9, 0x43, 0x9c, 0xff]],
    [[  4019,    213,  -2457], 0, [   990,    138], [0x0f, 0x3d, 0x92, 0xff]],
    [[  3712,    110,  -2457], 0, [   990,    308], [0xd5, 0x0a, 0x8a, 0xff]],
    [[  4122,    110,  -2457], 0, [   990,    308], [0x41, 0x1f, 0x98, 0xff]],
    [[  4122,    -94,  -2457], 0, [   990,    650], [0x48, 0xee, 0x9a, 0xff]],
    [[  4019,   -196,  -2457], 0, [   990,    820], [0x1f, 0xc4, 0x96, 0xff]],
    [[  3814,   -196,  -2457], 0, [   990,    820], [0xee, 0xc0, 0x95, 0xff]],
    [[  3712,    -94,  -2457], 0, [   990,    650], [0xb3, 0xdc, 0xa3, 0xff]],
    [[  4019,   1185,   -306], 0, [  2778,  -2076], [0x67, 0x47, 0xf1, 0xff]],
    [[  4019,    571,   -306], 0, [  2778,    990], [0x79, 0x00, 0xda, 0xff]],
    [[  3968,   1185,    154], 0, [   480,  -2076], [0x20, 0x56, 0x57, 0xff]],
    [[  3866,    571,    256], 0, [     0,    990], [0xb8, 0x0f, 0x67, 0xff]],
    [[  3866,   1185,    154], 0, [   480,  -2076], [0xd8, 0x65, 0x41, 0xff]],
]

// 0x0700A4C0 - 0x0700A580
export const ddd_seg7_vertex_0700A4C0 = [
    [[  4019,    571,   -306], 0, [  2778,    990], [0x79, 0x00, 0xda, 0xff]],
    [[  3968,   1185,   -409], 0, [  3290,  -2076], [0x39, 0x40, 0xa4, 0xff]],
    [[  4019,   1185,   -306], 0, [  2778,  -2076], [0x67, 0x47, 0xf1, 0xff]],
    [[  3968,    571,   -409], 0, [  3290,    990], [0x42, 0x00, 0x95, 0xff]],
    [[  3814,   1185,   -306], 0, [  2778,  -2076], [0xcc, 0x72, 0xef, 0xff]],
    [[  3866,    571,   -409], 0, [  3290,    990], [0xbe, 0x00, 0x94, 0xff]],
    [[  3814,    571,   -306], 0, [  2778,    990], [0x83, 0x00, 0xed, 0xff]],
    [[  3866,   1185,   -409], 0, [  3290,  -2076], [0xc7, 0x40, 0xa3, 0xff]],
    [[  3814,   1185,     51], 0, [   990,  -2076], [0x88, 0x21, 0x15, 0xff]],
    [[  3814,    571,     51], 0, [   990,    990], [0x82, 0x00, 0x0f, 0xff]],
    [[  3866,    571,    256], 0, [     0,    990], [0xb8, 0x0f, 0x67, 0xff]],
    [[  3866,   1185,    154], 0, [   480,  -2076], [0xd8, 0x65, 0x41, 0xff]],
]

// 0x0700A580 - 0x0700A600
export const ddd_seg7_vertex_0700A580 = [
    [[  3712,    571,   2765], 0, [ 12488,   -288], [0xda, 0x75, 0x1d, 0xff]],
    [[  4122,    571,   2765], 0, [ 12488,   1754], [0x19, 0x79, 0x1b, 0xff]],
    [[  3354,    571,   1741], 0, [  7378,  -2076], [0xda, 0x78, 0x06, 0xff]],
    [[  4480,    571,   1741], 0, [  7378,   3544], [0x51, 0x60, 0x09, 0xff]],
    [[  4173,    571,  -1996], 0, [-11272,   2010], [0x2a, 0x6c, 0xcd, 0xff]],
    [[  3661,    571,  -1996], 0, [-11272,   -544], [0xe4, 0x70, 0xce, 0xff]],
    [[  4480,    571,  -1330], 0, [ -7950,   3542], [0x49, 0x66, 0xf0, 0xff]],
    [[  3354,    571,  -1330], 0, [ -7950,  -2076], [0xa0, 0x50, 0xf0, 0xff]],
]

// 0x0700A600 - 0x0700AEB8
export const ddd_seg7_dl_0700A600 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, ddd_seg7_texture_07001800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(ddd_seg7_lights_07009288.l, 1),
    gsSPLight(ddd_seg7_lights_07009288.a, 2),
    gsSPVertex(ddd_seg7_vertex_07009300, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  3,  5, 0x0,  5,  4,  7, 0x0),
    gsSP2Triangles( 4,  1,  7, 0x0,  8,  7,  1, 0x0),
    gsSP2Triangles( 0,  8,  1, 0x0,  9,  8,  0, 0x0),
    gsSP2Triangles( 1,  4,  2, 0x0, 10, 11, 12, 0x0),
    gsSP2Triangles(13,  9,  0, 0x0,  9, 13, 14, 0x0),
    gsSP2Triangles(13,  0,  2, 0x0, 15, 13,  2, 0x0),
    gsSP1Triangle(13, 15, 14, 0x0),
    gsSPVertex(ddd_seg7_vertex_07009400, 9, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  4, 0x0),
    gsSP2Triangles( 1,  3,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 5,  4,  6, 0x0,  4,  7,  6, 0x0),
    gsSP1Triangle( 8,  7,  4, 0x0),
    gsSPLight(ddd_seg7_lights_070092A0.l, 1),
    gsSPLight(ddd_seg7_lights_070092A0.a, 2),
    gsSPVertex(ddd_seg7_vertex_07009490, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  4, 0x0),
    gsSP2Triangles( 4,  3,  5, 0x0,  5,  3,  0, 0x0),
    gsSP2Triangles( 6,  4,  5, 0x0,  0,  4,  6, 0x0),
    gsSP2Triangles( 6,  5,  0, 0x0,  0,  7,  8, 0x0),
    gsSP2Triangles( 8,  9,  0, 0x0,  0, 10,  7, 0x0),
    gsSP2Triangles( 9, 10,  0, 0x0, 10,  9,  8, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles(14,  1,  0, 0x0,  2,  1, 14, 0x0),
    gsSP2Triangles(15,  2, 14, 0x0,  0,  2, 15, 0x0),
    gsSP1Triangle(15, 14,  0, 0x0),
    gsSPVertex(ddd_seg7_vertex_07009590, 5, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  0, 0x0),
    gsSP2Triangles( 0,  2,  3, 0x0,  4,  1,  0, 0x0),
    gsSP1Triangle( 2,  1,  3, 0x0),
    gsSPLight(ddd_seg7_lights_070092B8.l, 1),
    gsSPLight(ddd_seg7_lights_070092B8.a, 2),
    gsSPVertex(ddd_seg7_vertex_070095E0, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  4, 0x0),
    gsSP2Triangles( 0,  5,  3, 0x0,  0,  2,  5, 0x0),
    gsSP2Triangles( 0,  6,  1, 0x0,  0,  4,  7, 0x0),
    gsSPLight(ddd_seg7_lights_070092D0.l, 1),
    gsSPLight(ddd_seg7_lights_070092D0.a, 2),
    gsSPVertex(ddd_seg7_vertex_07009660, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 4,  6,  5, 0x0,  7,  8,  5, 0x0),
    gsSP2Triangles( 9,  7,  5, 0x0, 10,  9,  5, 0x0),
    gsSP2Triangles( 6, 10,  5, 0x0, 11, 12,  2, 0x0),
    gsSP2Triangles(12, 13,  2, 0x0, 13, 14,  2, 0x0),
    gsSP1Triangle(14,  0,  2, 0x0),
    gsSPVertex(ddd_seg7_vertex_07009750, 11, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  2, 0x0,  7,  8,  2, 0x0),
    gsSP2Triangles( 8,  9,  2, 0x0,  9, 10,  2, 0x0),
    gsSP1Triangle(10,  0,  2, 0x0),
    gsSPLight(ddd_seg7_lights_070092E8.l, 1),
    gsSPLight(ddd_seg7_lights_070092E8.a, 2),
    gsSPVertex(ddd_seg7_vertex_07009800, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 1,  4,  2, 0x0,  3,  5,  1, 0x0),
    gsSP2Triangles( 6,  2,  7, 0x0,  6,  0,  2, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0, 11,  8, 10, 0x0),
    gsSP2Triangles( 8, 11, 12, 0x0,  8, 12, 13, 0x0),
    gsSPVertex(ddd_seg7_vertex_070098E0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 4,  6,  7, 0x0,  6,  4,  3, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0, 11,  8, 10, 0x0),
    gsSP2Triangles( 8, 12,  9, 0x0, 11,  2,  5, 0x0),
    gsSP2Triangles( 1, 13,  5, 0x0,  1,  5,  2, 0x0),
    gsSP2Triangles(13, 14,  5, 0x0, 13, 15, 14, 0x0),
    gsSP2Triangles(15,  3, 14, 0x0, 14,  3,  5, 0x0),
    gsSP2Triangles(15,  6,  3, 0x0,  8, 11,  5, 0x0),
    gsSPVertex(ddd_seg7_vertex_070099E0, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 4,  6,  5, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 8, 10,  9, 0x0,  0, 11,  1, 0x0),
    gsSP2Triangles(11, 12,  1, 0x0, 13, 12, 14, 0x0),
    gsSP1Triangle(12, 11, 14, 0x0),
    gsSPVertex(ddd_seg7_vertex_07009AD0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
    gsSP2Triangles( 0,  4,  1, 0x0,  3,  2,  5, 0x0),
    gsSP2Triangles( 6,  3,  5, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0,  8, 13,  9, 0x0),
    gsSP2Triangles( 8, 14, 13, 0x0, 14, 15, 13, 0x0),
    gsSPVertex(ddd_seg7_vertex_07009BD0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  0, 0x0),
    gsSP2Triangles( 3,  0,  5, 0x0,  5,  0,  6, 0x0),
    gsSP2Triangles( 0,  2,  6, 0x0,  1,  7,  2, 0x0),
    gsSP2Triangles( 6,  2,  8, 0x0,  2,  9,  8, 0x0),
    gsSP2Triangles( 9,  2,  7, 0x0, 10, 11, 12, 0x0),
    gsSP2Triangles(13, 10, 14, 0x0, 10, 12, 14, 0x0),
    gsSP1Triangle(11, 15, 12, 0x0),
    gsSPVertex(ddd_seg7_vertex_07009CD0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  5,  0, 0x0),
    gsSP2Triangles( 8,  5,  7, 0x0,  8,  6,  5, 0x0),
    gsSP2Triangles( 5,  4,  0, 0x0,  4,  1,  0, 0x0),
    gsSP2Triangles( 9, 10,  6, 0x0, 11,  9,  8, 0x0),
    gsSP2Triangles( 9,  6,  8, 0x0, 10,  4,  6, 0x0),
    gsSP2Triangles( 8,  7, 12, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(ddd_seg7_vertex_07009DD0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
    gsSP2Triangles( 3,  4,  5, 0x0,  4,  6,  5, 0x0),
    gsSP2Triangles( 7,  0,  2, 0x0,  8,  9, 10, 0x0),
    gsSP2Triangles( 9, 11, 10, 0x0, 12,  5, 13, 0x0),
    gsSP1Triangle( 6, 14, 15, 0x0),
    gsSPVertex(ddd_seg7_vertex_07009ED0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  0, 0x0),
    gsSP2Triangles( 5,  6,  7, 0x0,  5,  7,  8, 0x0),
    gsSP2Triangles( 8,  7,  9, 0x0, 10,  9, 11, 0x0),
    gsSP2Triangles( 9,  3, 11, 0x0,  8,  9, 10, 0x0),
    gsSP2Triangles(12,  0, 13, 0x0,  0,  2, 13, 0x0),
    gsSP2Triangles( 3,  0, 12, 0x0, 14,  8, 10, 0x0),
    gsSP1Triangle(13,  2, 15, 0x0),
    gsSPVertex(ddd_seg7_vertex_07009FD0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 1,  4,  2, 0x0,  1,  5,  4, 0x0),
    gsSP2Triangles( 5,  6,  4, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 0,  3,  8, 0x0,  3,  9,  8, 0x0),
    gsSP2Triangles( 5, 10,  7, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(10, 14, 15, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700A0D0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
    gsSP2Triangles( 4,  2,  3, 0x0,  5,  6,  2, 0x0),
    gsSP2Triangles( 6,  0,  2, 0x0,  5,  2,  4, 0x0),
    gsSP2Triangles( 7,  6,  8, 0x0,  9,  5, 10, 0x0),
    gsSP2Triangles( 9,  8,  5, 0x0, 10,  5,  4, 0x0),
    gsSP2Triangles(11,  8,  9, 0x0, 11,  7,  8, 0x0),
    gsSP2Triangles(12, 11, 13, 0x0, 13, 11,  9, 0x0),
    gsSP2Triangles(11, 12,  7, 0x0, 14, 12, 13, 0x0),
    gsSP1Triangle(15, 12, 14, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700A1D0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 7,  8,  5, 0x0,  5,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 10, 11,  8, 0x0),
    gsSP2Triangles( 8, 12,  9, 0x0,  8, 11, 12, 0x0),
    gsSP2Triangles(11, 13, 12, 0x0, 14,  4,  6, 0x0),
    gsSP2Triangles(14,  7,  4, 0x0, 14, 15,  7, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700A2D0, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  4,  6, 0x0),
    gsSP2Triangles( 7,  8,  4, 0x0,  8,  3,  4, 0x0),
    gsSP2Triangles( 8,  9,  3, 0x0,  9,  0,  3, 0x0),
    gsSP2Triangles(10,  7,  6, 0x0, 10,  8,  7, 0x0),
    gsSP2Triangles(11, 12,  8, 0x0, 12,  9,  8, 0x0),
    gsSP2Triangles(10, 11,  8, 0x0, 13, 10, 14, 0x0),
    gsSP2Triangles(10,  6, 14, 0x0, 13, 11, 10, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700A3C0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 4,  6,  5, 0x0,  7,  8,  5, 0x0),
    gsSP2Triangles( 8,  9,  5, 0x0,  9, 10,  5, 0x0),
    gsSP2Triangles( 6,  7,  5, 0x0,  0, 11,  1, 0x0),
    gsSP2Triangles( 0, 12, 11, 0x0,  1, 13,  2, 0x0),
    gsSP2Triangles(14,  2, 13, 0x0, 14, 13, 15, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700A4C0, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  4,  6, 0x0,  5,  1,  3, 0x0),
    gsSP2Triangles( 8,  6,  9, 0x0, 10,  8,  9, 0x0),
    gsSP2Triangles(10, 11,  8, 0x0,  5,  7,  1, 0x0),
    gsSPEndDisplayList(),
]

// 0x0700AEB8 - 0x0700AF10
export const ddd_seg7_dl_0700AEB8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, water_0900A000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(ddd_seg7_vertex_0700A580, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  5,  2, 0x0,  3,  6,  2, 0x0),
    gsSP2Triangles( 6,  4,  2, 0x0,  5,  7,  2, 0x0),
    gsSPEndDisplayList(),
]

// 0x0700AF10 - 0x0700AF78
export const ddd_seg7_dl_0700AF10 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ddd_seg7_dl_0700A600),
    gsSPDisplayList(ddd_seg7_dl_0700AEB8),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
]

// 0x0700AF78 - 0x0700AF90
export const ddd_seg7_lights_0700AF78 = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x0700AF90 - 0x0700B010
export const ddd_seg7_vertex_0700AF90 = [
    [[  3804,    776,     61], 0, [   990,   2012], [0x81, 0x00, 0x00, 0xff]],
    [[  3804,   1134,   -296], 0, [     0,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  3804,    776,   -296], 0, [     0,   2012], [0x81, 0x00, 0x00, 0xff]],
    [[  3804,   1134,     61], 0, [   990,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  4029,    776,   -296], 0, [     0,   2012], [0x7f, 0x00, 0x00, 0xff]],
    [[  4029,   1134,     61], 0, [   990,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[  4029,    776,     61], 0, [   990,   2012], [0x7f, 0x00, 0x00, 0xff]],
    [[  4029,   1134,   -296], 0, [     0,      0], [0x7f, 0x00, 0x00, 0xff]],
]

// 0x0700B010 - 0x0700B068
export const ddd_seg7_dl_0700B010 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, ddd_seg7_texture_07000000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 64 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(ddd_seg7_lights_0700AF78.l, 1),
    gsSPLight(ddd_seg7_lights_0700AF78.a, 2),
    gsSPVertex(ddd_seg7_vertex_0700AF90, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSPEndDisplayList(),
]

// 0x0700B068 - 0x0700B0D8
export const ddd_seg7_dl_0700B068 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGBA, G_CC_MODULATERGBA),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 6, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (64 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ddd_seg7_dl_0700B010),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
]