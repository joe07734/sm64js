// Yoshi

import { ANIMINDEX_NUMPARTS } from "../../include/types"

// 0x050227D8
const yoshi_seg5_animvalue_050227D8 = [
    0x0000, 0x0120, 0x0120, 0x011E, 0x011C, 0x0119, 0x0116, 0x0113,
    0x010F, 0x010C, 0x010A, 0x0107, 0x0106, 0x0105, 0x0106, 0x0107,
    0x0109, 0x010B, 0x010E, 0x0111, 0x0114, 0x0117, 0x011A, 0x011D,
    0x011F, 0x0120, 0x0120, 0x0120, 0x011E, 0x011C, 0x0119, 0x0116,
    0x0113, 0x010F, 0x010C, 0x010A, 0x0107, 0x0106, 0x0105, 0x0106,
    0x0107, 0x0109, 0x010C, 0x010F, 0x0112, 0x0116, 0x0119, 0x011C,
    0x011E, 0x0120, 0x0120, 0xFFF2, 0xFFF3, 0xFFF3, 0xFFF5, 0xFFF6,
    0xFFF8, 0xFFFA, 0xFFFC, 0xFFFD, 0xFFFF, 0x0000, 0x0000, 0x0000,
    0x0000, 0x0000, 0xFFFF, 0xFFFE, 0xFFFC, 0xFFFB, 0xFFF9, 0xFFF7,
    0xFFF6, 0xFFF4, 0xFFF3, 0xFFF3, 0xFFF2, 0xFFF3, 0xFFF3, 0xFFF5,
    0xFFF6, 0xFFF8, 0xFFFA, 0xFFFC, 0xFFFD, 0xFFFF, 0x0000, 0x0000,
    0x0000, 0x0000, 0x0000, 0xFFFF, 0xFFFD, 0xFFFC, 0xFFFA, 0xFFF8,
    0xFFF6, 0xFFF5, 0xFFF4, 0xFFF3, 0xFFF2, 0x3FFF, 0xA69D, 0xA6E1,
    0xA7A0, 0xA8C3, 0xAA33, 0xABDB, 0xADA5, 0xAF79, 0xB142, 0xB2EA,
    0xB45B, 0xB57D, 0xB63C, 0xB681, 0xB678, 0xB65D, 0xB631, 0xB5F7,
    0xB5AD, 0xB556, 0xB4F3, 0xB484, 0xB40B, 0xB389, 0xB2FE, 0xB26C,
    0xB1D3, 0xB136, 0xB094, 0xAFEF, 0xAF47, 0xAE9F, 0xADF7, 0xAD4F,
    0xACA9, 0xAC07, 0xAB68, 0xAACF, 0xAA3B, 0xA9AF, 0xA92B, 0xA8B0,
    0xA83F, 0xA7D9, 0xA780, 0xA734, 0xA6F6, 0xA6C8, 0xA6AA, 0xA69D,
    0x2432, 0x2458, 0x24C4, 0x2572, 0x2659, 0x2776, 0x28C0, 0x2A33,
    0x2BC7, 0x2D78, 0x2F3D, 0x3113, 0x32F1, 0x34D3, 0x36B1, 0x3887,
    0x3A4C, 0x3BFD, 0x3D91, 0x3F04, 0x404E, 0x416B, 0x4252, 0x4300,
    0x436C, 0x4392, 0x4369, 0x42F6, 0x423E, 0x4147, 0x401A, 0x3EBD,
    0x3D35, 0x3B8C, 0x39C6, 0x37EB, 0x3602, 0x3412, 0x3220, 0x3036,
    0x2E57, 0x2C8D, 0x2ADE, 0x294F, 0x27E9, 0x26B2, 0x25B1, 0x24EC,
    0x246B, 0x2434, 0xCA58, 0xCA37, 0xC9D8, 0xC93F, 0xC872, 0xC777,
    0xC653, 0xC50C, 0xC3A6, 0xC229, 0xC098, 0xBEF9, 0xBD53, 0xBBAA,
    0xBA03, 0xB865, 0xB6D4, 0xB556, 0xB3F1, 0xB2AA, 0xB186, 0xB08B,
    0xAFBE, 0xAF25, 0xAEC5, 0xAEA4, 0xAEC7, 0xAF2D, 0xAFD0, 0xB0AA,
    0xB1B4, 0xB2E8, 0xB442, 0xB5BA, 0xB74B, 0xB8EE, 0xBA9E, 0xBC54,
    0xBE0B, 0xBFBD, 0xC163, 0xC2F8, 0xC475, 0xC5D5, 0xC711, 0xC824,
    0xC907, 0xC9B4, 0xCA27, 0xCA57, 0xB176, 0xB180, 0xB19A, 0xB1C5,
    0xB1FE, 0xB244, 0xB296, 0xB2F1, 0xB355, 0xB3C0, 0xB430, 0xB4A4,
    0xB51A, 0xB591, 0xB607, 0xB67B, 0xB6EB, 0xB755, 0xB7B9, 0xB814,
    0xB866, 0xB8AC, 0xB8E5, 0xB910, 0xB92B, 0xB934, 0xB92A, 0xB90E,
    0xB8E0, 0xB8A3, 0xB859, 0xB803, 0xB7A2, 0xB739, 0xB6C9, 0xB654,
    0xB5DC, 0xB561, 0xB4E6, 0xB46D, 0xB3F7, 0xB386, 0xB31C, 0xB2B9,
    0xB261, 0xB214, 0xB1D5, 0xB1A4, 0xB184, 0xB177, 0x2432, 0x2458,
    0x24C4, 0x2572, 0x2659, 0x2776, 0x28C0, 0x2A33, 0x2BC7, 0x2D78,
    0x2F3D, 0x3113, 0x32F1, 0x34D3, 0x36B1, 0x3887, 0x3A4C, 0x3BFD,
    0x3D91, 0x3F04, 0x404E, 0x416B, 0x4252, 0x4300, 0x436C, 0x4392,
    0x4369, 0x42F4, 0x4238, 0x413F, 0x400D, 0x3EAB, 0x3D1E, 0x3B6F,
    0x39A4, 0x37C5, 0x35D7, 0x33E2, 0x31ED, 0x2FFF, 0x2E20, 0x2C55,
    0x2AA5, 0x2919, 0x27B7, 0x2685, 0x258B, 0x24D0, 0x245B, 0x2432,
    0xCA58, 0xCA37, 0xC9D8, 0xC93F, 0xC872, 0xC777, 0xC653, 0xC50C,
    0xC3A6, 0xC229, 0xC098, 0xBEF9, 0xBD53, 0xBBAA, 0xBA03, 0xB865,
    0xB6D4, 0xB556, 0xB3F1, 0xB2AA, 0xB186, 0xB08B, 0xAFBE, 0xAF25,
    0xAEC5, 0xAEA4, 0xAEC8, 0xAF30, 0xAFD5, 0xB0B1, 0xB1BF, 0xB2F8,
    0xB456, 0xB5D3, 0xB768, 0xB910, 0xBAC4, 0xBC7E, 0xBE39, 0xBFED,
    0xC194, 0xC32A, 0xC4A6, 0xC604, 0xC73D, 0xC84B, 0xC928, 0xC9CD,
    0xCA35, 0xCA58, 0xB176, 0xB180, 0xB19A, 0xB1C5, 0xB1FE, 0xB244,
    0xB296, 0xB2F1, 0xB355, 0xB3C0, 0xB430, 0xB4A4, 0xB51A, 0xB591,
    0xB607, 0xB67B, 0xB6EB, 0xB755, 0xB7B9, 0xB814, 0xB866, 0xB8AC,
    0xB8E5, 0xB910, 0xB92B, 0xB934, 0xB92A, 0xB90D, 0xB8DF, 0xB8A1,
    0xB856, 0xB7FE, 0xB79D, 0xB732, 0xB6C1, 0xB64B, 0xB5D1, 0xB555,
    0xB4DA, 0xB460, 0xB3E9, 0xB378, 0xB30E, 0xB2AC, 0xB255, 0xB209,
    0xB1CC, 0xB19D, 0xB180, 0xB176, 0xFD4A, 0xFD50, 0xFD62, 0xFD7D,
    0xFD9F, 0xFDC6, 0xFDEE, 0xFE17, 0xFE3E, 0xFE60, 0xFE7B, 0xFE8D,
    0xFE93, 0xFE8E, 0xFE7E, 0xFE67, 0xFE49, 0xFE26, 0xFE01, 0xFDDB,
    0xFDB6, 0xFD94, 0xFD76, 0xFD5F, 0xFD4F, 0xFD4A, 0xFD43, 0xFD2F,
    0xFD12, 0xFCED, 0xFCC3, 0xFC97, 0xFC6A, 0xFC40, 0xFC1C, 0xFBFE,
    0xFBEB, 0xFBE4, 0xFBEA, 0xFBFD, 0xFC1A, 0xFC3E, 0xFC67, 0xFC92,
    0xFCBE, 0xFCE8, 0xFD0D, 0xFD2B, 0xFD40, 0xFD49, 0xFAFB, 0xFB08,
    0xFB2C, 0xFB61, 0xFBA5, 0xFBF1, 0xFC42, 0xFC93, 0xFCDF, 0xFD22,
    0xFD58, 0xFD7B, 0xFD88, 0xFD7D, 0xFD5F, 0xFD30, 0xFCF5, 0xFCB1,
    0xFC67, 0xFC1C, 0xFBD3, 0xFB8F, 0xFB54, 0xFB25, 0xFB06, 0xFAFB,
    0xFAF1, 0xFAD5, 0xFAAA, 0xFA75, 0xFA38, 0xF9F8, 0xF9B8, 0xF97B,
    0xF946, 0xF91B, 0xF8FF, 0xF8F5, 0xF8FE, 0xF91A, 0xF943, 0xF977,
    0xF9B3, 0xF9F2, 0xFA31, 0xFA6D, 0xFAA3, 0xFACF, 0xFAED, 0xFAFB,
    0xBD4B, 0xBD13, 0xBC78, 0xBB8E, 0xBA68, 0xB91B, 0xB7BB, 0xB65A,
    0xB50D, 0xB3E8, 0xB2FE, 0xB263, 0xB22B, 0xB25B, 0xB2E0, 0xB3AC,
    0xB4AE, 0xB5D7, 0xB717, 0xB85F, 0xB99F, 0xBAC8, 0xBBCA, 0xBC95,
    0xBD1B, 0xBD4B, 0xBD14, 0xBC7E, 0xBB9A, 0xBA7D, 0xB93A, 0xB7E3,
    0xB68C, 0xB549, 0xB42C, 0xB348, 0xB2B2, 0xB27B, 0xB2B0, 0xB342,
    0xB41F, 0xB535, 0xB672, 0xB7C2, 0xB915, 0xBA56, 0xBB75, 0xBC5F,
    0xBD01, 0xBD49, 0x328A, 0x32EC, 0x33FC, 0x3598, 0x379B, 0x39E5,
    0x3C51, 0x3EBD, 0x4106, 0x430A, 0x44A5, 0x45B5, 0x4618, 0x45C4,
    0x44D9, 0x4373, 0x41AE, 0x3FA4, 0x3D71, 0x3B30, 0x38FE, 0x36F4,
    0x352E, 0x33C9, 0x32DE, 0x328A, 0x32EC, 0x33FC, 0x3598, 0x379B,
    0x39E5, 0x3C51, 0x3EBD, 0x4106, 0x430A, 0x44A5, 0x45B5, 0x4618,
    0x45B8, 0x44B0, 0x4320, 0x4129, 0x3EEC, 0x3C8C, 0x3A28, 0x37E2,
    0x35DB, 0x3435, 0x3310, 0x328D, 0x0423, 0x0418, 0x03F9, 0x03CA,
    0x038F, 0x034D, 0x0306, 0x02BE, 0x027B, 0x023E, 0x020E, 0x01EC,
    0x01DE, 0x01E2, 0x01F4, 0x0212, 0x0238, 0x0266, 0x0299, 0x02CE,
    0x0305, 0x0339, 0x036A, 0x0395, 0x03B8, 0x03D1, 0x03E1, 0x03E9,
    0x03ED, 0x03EB, 0x03E7, 0x03E0, 0x03D8, 0x03CF, 0x03C7, 0x03C1,
    0x03BF, 0x03C0, 0x03C4, 0x03CC, 0x03D5, 0x03DF, 0x03EA, 0x03F5,
    0x0401, 0x040B, 0x0414, 0x041C, 0x0421, 0x0423, 0x034F, 0x0349,
    0x033A, 0x0322, 0x0305, 0x02E3, 0x02BF, 0x029B, 0x0278, 0x025A,
    0x0241, 0x022F, 0x0227, 0x0227, 0x022C, 0x0236, 0x0244, 0x0255,
    0x0268, 0x027E, 0x0296, 0x02AE, 0x02C7, 0x02E0, 0x02F7, 0x030E,
    0x0326, 0x0343, 0x0363, 0x0385, 0x03A8, 0x03CA, 0x03EB, 0x0409,
    0x0423, 0x0438, 0x0446, 0x044D, 0x044B, 0x043F, 0x042B, 0x0412,
    0x03F5, 0x03D5, 0x03B6, 0x0397, 0x037C, 0x0366, 0x0356, 0x034F,
    0xA49B, 0xA476, 0xA40E, 0xA371, 0xA2AD, 0xA1CE, 0xA0E2, 0x9FF6,
    0x9F17, 0x9E52, 0x9DB5, 0x9D4D, 0x9D27, 0x9D47, 0x9DA0, 0x9E27,
    0x9ED3, 0x9F99, 0xA06E, 0xA149, 0xA21E, 0xA2E5, 0xA391, 0xA41A,
    0xA474, 0xA495, 0xA471, 0xA40D, 0xA374, 0xA2B4, 0xA1DA, 0xA0F3,
    0xA00C, 0x9F32, 0x9E71, 0x9DD8, 0x9D72, 0x9D4E, 0x9D71, 0x9DD4,
    0x9E6A, 0x9F26, 0x9FFC, 0xA0DF, 0xA1C3, 0xA29C, 0xA35E, 0xA3FC,
    0xA469, 0xA49A, 0x154F, 0x1572, 0x15D2, 0x1664, 0x171B, 0x17EA,
    0x18C6, 0x19A1, 0x1A71, 0x1B27, 0x1BB9, 0x1C19, 0x1C3C, 0x1C1E,
    0x1BCB, 0x1B4D, 0x1AAC, 0x19F3, 0x192C, 0x1860, 0x1798, 0x16DF,
    0x163F, 0x15C0, 0x156D, 0x154F, 0x1572, 0x15D2, 0x1664, 0x171B,
    0x17EA, 0x18C6, 0x19A1, 0x1A71, 0x1B27, 0x1BB9, 0x1C19, 0x1C3C,
    0x1C1A, 0x1BBD, 0x1B2F, 0x1A7D, 0x19B2, 0x18DB, 0x1802, 0x1734,
    0x167C, 0x15E6, 0x157F, 0x1550, 0x051A, 0x0521, 0x0534, 0x0551,
    0x0575, 0x059D, 0x05C9, 0x05F4, 0x061D, 0x0640, 0x065D, 0x0670,
    0x0677, 0x0671, 0x0661, 0x0648, 0x0628, 0x0604, 0x05DD, 0x05B5,
    0x058D, 0x0569, 0x0549, 0x0530, 0x0520, 0x051A, 0x0521, 0x0534,
    0x0551, 0x0575, 0x059D, 0x05C9, 0x05F4, 0x061D, 0x0640, 0x065D,
    0x0670, 0x0677, 0x0670, 0x065E, 0x0642, 0x061F, 0x05F7, 0x05CD,
    0x05A2, 0x057A, 0x0555, 0x0538, 0x0524, 0x051B, 0x094E, 0x0956,
    0x096C, 0x098E, 0x09B7, 0x09E7, 0x0A19, 0x0A4C, 0x0A7B, 0x0AA5,
    0x0AC7, 0x0ADD, 0x0AE5, 0x0ADE, 0x0ACB, 0x0AAE, 0x0A89, 0x0A5F,
    0x0A31, 0x0A02, 0x09D4, 0x09AA, 0x0985, 0x0968, 0x0955, 0x094E,
    0x0956, 0x096C, 0x098E, 0x09B7, 0x09E7, 0x0A19, 0x0A4C, 0x0A7B,
    0x0AA5, 0x0AC7, 0x0ADD, 0x0AE5, 0x0ADD, 0x0AC8, 0x0AA7, 0x0A7E,
    0x0A50, 0x0A1E, 0x09EC, 0x09BD, 0x0993, 0x0971, 0x0959, 0x094E,
    0xBDB6, 0xBD80, 0xBCEB, 0xBC09, 0xBAEF, 0xB9AE, 0xB85A, 0xB707,
    0xB5C6, 0xB4AB, 0xB3CA, 0xB335, 0xB2FF, 0xB32D, 0xB3AE, 0xB472,
    0xB56A, 0xB688, 0xB7BC, 0xB8F8, 0xBA2D, 0xBB4B, 0xBC43, 0xBD07,
    0xBD88, 0xBDB6, 0xBD80, 0xBCEB, 0xBC09, 0xBAEF, 0xB9AE, 0xB85A,
    0xB707, 0xB5C6, 0xB4AB, 0xB3CA, 0xB335, 0xB2FF, 0xB333, 0xB3C4,
    0xB49F, 0xB5B3, 0xB6ED, 0xB83A, 0xB989, 0xBAC8, 0xBBE4, 0xBCCC,
    0xBD6C, 0xBDB4, 0x328A, 0x32EC, 0x33FC, 0x3598, 0x379B, 0x39E5,
    0x3C51, 0x3EBD, 0x4106, 0x430A, 0x44A5, 0x45B5, 0x4618, 0x45C4,
    0x44D9, 0x4373, 0x41AE, 0x3FA4, 0x3D71, 0x3B30, 0x38FE, 0x36F4,
    0x352E, 0x33C9, 0x32DE, 0x328A, 0x32EC, 0x33FC, 0x3598, 0x379B,
    0x39E5, 0x3C51, 0x3EBD, 0x4106, 0x430A, 0x44A5, 0x45B5, 0x4618,
    0x45B8, 0x44B0, 0x4320, 0x4129, 0x3EEC, 0x3C8C, 0x3A28, 0x37E2,
    0x35DB, 0x3435, 0x3310, 0x328D, 0xFC2F, 0xFC33, 0xFC3F, 0xFC52,
    0xFC69, 0xFC83, 0xFC9F, 0xFCBB, 0xFCD5, 0xFCEC, 0xFCFF, 0xFD0B,
    0xFD0F, 0xFD0B, 0xFD01, 0xFCF1, 0xFCDD, 0xFCC5, 0xFCAC, 0xFC92,
    0xFC79, 0xFC61, 0xFC4D, 0xFC3D, 0xFC33, 0xFC2F, 0xFC33, 0xFC3F,
    0xFC52, 0xFC69, 0xFC83, 0xFC9F, 0xFCBB, 0xFCD5, 0xFCEC, 0xFCFF,
    0xFD0B, 0xFD0F, 0xFD0B, 0xFCFF, 0xFCED, 0xFCD7, 0xFCBD, 0xFCA2,
    0xFC86, 0xFC6C, 0xFC55, 0xFC42, 0xFC35, 0xFC2F, 0xFCF2, 0xFCF0,
    0xFCEC, 0xFCE5, 0xFCDC, 0xFCD3, 0xFCC8, 0xFCBE, 0xFCB4, 0xFCAB,
    0xFCA5, 0xFCA0, 0xFC9E, 0xFCA0, 0xFCA4, 0xFCAA, 0xFCB1, 0xFCBA,
    0xFCC3, 0xFCCD, 0xFCD6, 0xFCDF, 0xFCE7, 0xFCED, 0xFCF1, 0xFCF2,
    0xFCF0, 0xFCEC, 0xFCE5, 0xFCDC, 0xFCD3, 0xFCC8, 0xFCBE, 0xFCB4,
    0xFCAB, 0xFCA5, 0xFCA0, 0xFC9E, 0xFCA0, 0xFCA4, 0xFCAB, 0xFCB3,
    0xFCBD, 0xFCC7, 0xFCD1, 0xFCDB, 0xFCE4, 0xFCEB, 0xFCF0, 0xFCF2,
    0xA495, 0xA470, 0xA409, 0xA36F, 0xA2AD, 0xA1D1, 0xA0E7, 0x9FFE,
    0x9F22, 0x9E60, 0x9DC6, 0x9D5F, 0x9D3A, 0x9D5A, 0x9DB2, 0x9E39,
    0x9EE3, 0x9FA7, 0xA07B, 0xA154, 0xA228, 0xA2EC, 0xA396, 0xA41D,
    0xA475, 0xA495, 0xA470, 0xA409, 0xA36F, 0xA2AD, 0xA1D1, 0xA0E7,
    0x9FFE, 0x9F22, 0x9E60, 0x9DC6, 0x9D5F, 0x9D3A, 0x9D5E, 0x9DC1,
    0x9E58, 0x9F15, 0x9FEC, 0xA0D1, 0xA1B7, 0xA292, 0xA355, 0xA3F4,
    0xA462, 0xA494, 0xBD95, 0xA543, 0x8948, 0xA543, 0x8948, 0xF6E8,
    0xF714, 0xF78D, 0xF849, 0xF93D, 0xFA5B, 0xFB9A, 0xFCED, 0xFE48,
    0xFFA0, 0x00E9, 0x0218, 0x0320, 0x0420, 0x0535, 0x0659, 0x0784,
    0x08AE, 0x09D1, 0x0AE6, 0x0BE4, 0x0CC4, 0x0D7F, 0x0E0E, 0x0E69,
    0x0E89, 0x0E63, 0x0DF6, 0x0D4E, 0x0C73, 0x0B70, 0x0A4E, 0x0917,
    0x07D4, 0x0691, 0x0556, 0x042D, 0x0320, 0x0211, 0x00E0, 0xFF9A,
    0xFE46, 0xFCF1, 0xFBA5, 0xFA6C, 0xF952, 0xF860, 0xF7A2, 0xF722,
    0xF6EA, 0xE7AF, 0xE7B7, 0xE7CE, 0xE7F0, 0xE81B, 0xE84C, 0xE87F,
    0xE8B3, 0xE8E4, 0xE90F, 0xE931, 0xE948, 0xE950, 0xE949, 0xE935,
    0xE918, 0xE8F2, 0xE8C6, 0xE897, 0xE867, 0xE839, 0xE80D, 0xE7E7,
    0xE7C9, 0xE7B6, 0xE7AF, 0xE7B7, 0xE7CE, 0xE7F0, 0xE81B, 0xE84C,
    0xE87F, 0xE8B3, 0xE8E4, 0xE90F, 0xE931, 0xE948, 0xE950, 0xE948,
    0xE932, 0xE911, 0xE8E7, 0xE8B7, 0xE884, 0xE851, 0xE821, 0xE7F6,
    0xE7D2, 0xE7BA, 0xE7AF, 0x8948, 0xE406, 0xE3F9, 0xE3D7, 0xE3A4,
    0xE363, 0xE31A, 0xE2CD, 0xE27F, 0xE236, 0xE1F6, 0xE1C2, 0xE1A0,
    0xE194, 0xE19E, 0xE1BC, 0xE1E8, 0xE221, 0xE262, 0xE2A9, 0xE2F1,
    0xE337, 0xE378, 0xE3B1, 0xE3DE, 0xE3FB, 0xE406, 0xE3F9, 0xE3D7,
    0xE3A4, 0xE363, 0xE31A, 0xE2CD, 0xE27F, 0xE236, 0xE1F6, 0xE1C2,
    0xE1A0, 0xE194, 0xE1A0, 0xE1C1, 0xE1F3, 0xE232, 0xE279, 0xE2C5,
    0xE312, 0xE35B, 0xE39B, 0xE3D0, 0xE3F5, 0xE405, 0x76B8, 0x0000,
];

// 0x05023278
const yoshi_seg5_animindex_5023278 = [
    0x0001, 0x0000, 0x0032, 0x0001, 0x0032, 0x0033, 0x0001, 0x0000, 0x0001, 0x0065, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x054E,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0032, 0x051C,
    0x0032, 0x04B7, 0x0001, 0x0000, 0x0032, 0x04E9,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x04B2,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0032, 0x0066,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x04B5,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0032, 0x00FC,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0032, 0x00CA,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0032, 0x0098,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x04B3,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0032, 0x0192,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0032, 0x0160,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0032, 0x012E,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x051B,
    0x0032, 0x028C, 0x0032, 0x02BE, 0x0032, 0x02F0,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0032, 0x025A,
    0x0032, 0x01C4, 0x0032, 0x01F6, 0x0032, 0x0228,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x04B6,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0032, 0x0322,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x04B4,
    0x0032, 0x041C, 0x0032, 0x044E, 0x0032, 0x0480,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0032, 0x03EA,
    0x0032, 0x0354, 0x0032, 0x0386, 0x0032, 0x03B8,
];

// 0x050233A4
const yoshi_seg5_anim_050233A4 = {
    flags: 0,
    unk02: 0,
    unk04: 0,
    unk06: 0,
    unk08: 0x32,
    unk0A: ANIMINDEX_NUMPARTS(yoshi_seg5_animindex_5023278),
    values: yoshi_seg5_animvalue_050227D8,
    indices: yoshi_seg5_animindex_5023278,
    ignore: 0,
};

// 0x050233BC
const yoshi_seg5_animvalue_050233BC = [
    0x0000, 0x013D, 0x0138, 0x012C, 0x011C, 0x010B, 0x00FA, 0x00EF,
    0x00EA, 0x00ED, 0x00F7, 0x0104, 0x0113, 0x0123, 0x0130, 0x0139,
    0x013D, 0x0139, 0x012F, 0x0121, 0x0111, 0x0103, 0x00F9, 0x00F5,
    0x00F9, 0x0103, 0x0111, 0x0121, 0x012F, 0x0139, 0xFFF2, 0x3FFF,
    0x9C6D, 0x9CDD, 0x9DFE, 0x9F88, 0xA136, 0xA2C1, 0xA3E1, 0xA451,
    0xA3E3, 0xA2C8, 0xA142, 0x9F99, 0x9E0F, 0x9CEA, 0x9C6D, 0x9CC4,
    0x9DBF, 0x9F1D, 0xA09D, 0xA200, 0xA304, 0xA369, 0xA31C, 0xA252,
    0xA133, 0x9FEB, 0x9EA3, 0x9D85, 0x9CBA, 0xF639, 0xF6C4, 0xF82A,
    0xFA13, 0xFC27, 0xFE10, 0xFF76, 0x0000, 0xFF95, 0xFE79, 0xFCE8,
    0xFB1D, 0xF951, 0xF7C0, 0xF6A5, 0xF639, 0xF6C4, 0xF82A, 0xFA13,
    0xFC27, 0xFE10, 0xFF76, 0x0000, 0xFF76, 0xFE10, 0xFC27, 0xFA13,
    0xF82A, 0xF6C4, 0x35C7, 0x3674, 0x3833, 0x3A97, 0x3D31, 0x3F94,
    0x4153, 0x4200, 0x417A, 0x4017, 0x3E22, 0x3BE4, 0x39A5, 0x37B0,
    0x364E, 0x35C7, 0x3674, 0x3833, 0x3A97, 0x3D31, 0x3F94, 0x4153,
    0x4200, 0x4153, 0x3F94, 0x3D31, 0x3A97, 0x3833, 0x3674, 0xC68E,
    0xC56D, 0xC284, 0xBE8A, 0xBA34, 0xB639, 0xB350, 0xB22F, 0xB30F,
    0xB55E, 0xB8A1, 0xBC5F, 0xC01C, 0xC35F, 0xC5AE, 0xC68E, 0xC56D,
    0xC284, 0xBE8A, 0xBA34, 0xB639, 0xB350, 0xB22F, 0xB350, 0xB639,
    0xBA34, 0xBE8A, 0xC284, 0xC56D, 0x1580, 0x14CF, 0x1305, 0x1093,
    0x0DE9, 0x0B77, 0x09AE, 0x08FC, 0x0986, 0x0AF1, 0x0CF2, 0x0F3E,
    0x118A, 0x138B, 0x14F6, 0x1580, 0x14CF, 0x1305, 0x1093, 0x0DE9,
    0x0B77, 0x09AE, 0x08FC, 0x09AE, 0x0B77, 0x0DE9, 0x1093, 0x1305,
    0x14CF, 0x058C, 0x05DE, 0x06B0, 0x07CF, 0x0909, 0x0A28, 0x0AFA,
    0x0B4C, 0x0B0D, 0x0A66, 0x097A, 0x086C, 0x075E, 0x0672, 0x05CB,
    0x058C, 0x05DE, 0x06B0, 0x07CF, 0x0909, 0x0A28, 0x0AFA, 0x0B4C,
    0x0AFA, 0x0A28, 0x0909, 0x07CF, 0x06B0, 0x05DE, 0xA5D5, 0xA5BE,
    0xA585, 0xA535, 0xA4DF, 0xA490, 0xA456, 0xA440, 0xA451, 0xA47F,
    0xA4C0, 0xA50A, 0xA555, 0xA596, 0xA5C3, 0xA5D5, 0xA5BE, 0xA585,
    0xA535, 0xA4DF, 0xA490, 0xA456, 0xA440, 0xA456, 0xA490, 0xA4DF,
    0xA535, 0xA585, 0xA5BE, 0x930A, 0x91FC, 0x8F44, 0x8B8C, 0x877F,
    0x83C7, 0x810F, 0x8001, 0x80D3, 0x82FB, 0x8607, 0x8986, 0x8D04,
    0x9011, 0x9239, 0x930A, 0x91FC, 0x8F44, 0x8B8C, 0x877F, 0x83C7,
    0x810F, 0x8001, 0x810F, 0x83C7, 0x877F, 0x8B8C, 0x8F44, 0x91FC,
    0x76FF, 0x777E, 0x78C7, 0x7A89, 0x7C74, 0x7E36, 0x7F7F, 0x8001,
    0x7F9C, 0x7E97, 0x7D26, 0x7B7F, 0x79D8, 0x7867, 0x7762, 0x76FF,
    0x777E, 0x78C7, 0x7A89, 0x7C74, 0x7E36, 0x7F7F, 0x8001, 0x7F7F,
    0x7E36, 0x7C74, 0x7A89, 0x78C7, 0x777E, 0xB86B, 0xB8B4, 0xB96E,
    0xBA6E, 0xBB84, 0xBC84, 0xBD3E, 0xBD87, 0xBD4F, 0xBCBB, 0xBBE9,
    0xBAF9, 0xBA09, 0xB937, 0xB8A3, 0xB86B, 0xB8B4, 0xB96E, 0xBA6E,
    0xBB84, 0xBC84, 0xBD3E, 0xBD87, 0xBD3E, 0xBC84, 0xBB84, 0xBA6E,
    0xB96E, 0xB8B4, 0x8001, 0x8001, 0x3F9F, 0x3F54, 0x3E92, 0x3D89,
    0x3C69, 0x3B60, 0x3A9E, 0x3A53, 0x3A8D, 0x3B27, 0x3C00, 0x3CF9,
    0x3DF2, 0x3ECB, 0x3F65, 0x3F9F, 0x3F54, 0x3E92, 0x3D89, 0x3C69,
    0x3B60, 0x3A9E, 0x3A53, 0x3A9E, 0x3B60, 0x3C69, 0x3D89, 0x3E92,
    0x3F54, 0xE168, 0xE255, 0xE4B7, 0xE7F9, 0xEB86, 0xEEC8, 0xF12A,
    0xF216, 0xF15F, 0xEF7B, 0xECCF, 0xE9BF, 0xE6AF, 0xE403, 0xE220,
    0xE168, 0xE255, 0xE4B7, 0xE7F9, 0xEB86, 0xEEC8, 0xF12A, 0xF216,
    0xF12A, 0xEEC8, 0xEB86, 0xE7F9, 0xE4B7, 0xE255, 0xFB41, 0xFAF9,
    0xFA3E, 0xF93F, 0xF829, 0xF72A, 0xF66F, 0xF627, 0xF65F, 0xF6F3,
    0xF7C4, 0xF8B4, 0xF9A4, 0xFA75, 0xFB09, 0xFB41, 0xFAF9, 0xFA3E,
    0xF93F, 0xF829, 0xF72A, 0xF66F, 0xF627, 0xF66F, 0xF72A, 0xF829,
    0xF93F, 0xFA3E, 0xFAF9, 0xAF35, 0xAE74, 0xAC84, 0xA9DD, 0xA6FA,
    0xA453, 0xA263, 0xA1A2, 0xA238, 0xA3C1, 0xA5EE, 0xA86C, 0xAAE9,
    0xAD16, 0xAEA0, 0xAF35, 0xAE74, 0xAC84, 0xA9DD, 0xA6FA, 0xA453,
    0xA263, 0xA1A2, 0xA263, 0xA453, 0xA6FA, 0xA9DD, 0xAC84, 0xAE74,
    0xFD99, 0xFDA1, 0xFDB8, 0xFDD6, 0xFDF8, 0xFE16, 0xFE2C, 0xFE35,
    0xFE2F, 0xFE20, 0xFE0B, 0xFDF1, 0xFDD6, 0xFDBC, 0xFDA6, 0xFD96,
    0xFD8F, 0xFD91, 0xFD98, 0xFDA2, 0xFDB6, 0xFDCF, 0xFDDE, 0xFDD7,
    0xFDC4, 0xFDB5, 0xFDAB, 0xFDA2, 0xFD9B, 0x006F, 0x0054, 0x000B,
    0xFFA8, 0xFF3A, 0xFED2, 0xFE82, 0xFE5A, 0xFE59, 0xFE6D, 0xFE93,
    0xFEC4, 0xFEFD, 0xFF38, 0xFF71, 0xFFA3, 0xFFE2, 0x002E, 0x0068,
    0x006F, 0xFFFF, 0xFF45, 0xFECB, 0xFEC8, 0xFEFB, 0xFF3D, 0xFF8F,
    0xFFF5, 0x004B, 0xBE55, 0xBC5D, 0xB740, 0xB034, 0xA86D, 0xA120,
    0x9B80, 0x98C3, 0x98C6, 0x9A5A, 0x9D26, 0xA0CE, 0xA4F7, 0xA946,
    0xAD60, 0xB0EA, 0xB530, 0xBA4C, 0xBE18, 0xBE6C, 0xB6C9, 0xAA42,
    0xA210, 0xA1E6, 0xA575, 0xA9F5, 0xAF69, 0xB62A, 0xBBE8, 0xFD29,
    0xFD2A, 0xFD2C, 0xFD2E, 0xFD32, 0xFD35, 0xFD39, 0xFD3D, 0xFD40,
    0xFD43, 0xFD45, 0xFD48, 0xFD4B, 0xFD50, 0xFD57, 0xFD60, 0xFD74,
    0xFD93, 0xFDAE, 0xFDB7, 0xFD9A, 0xFD66, 0xFD41, 0xFD3D, 0xFD44,
    0xFD48, 0xFD41, 0xFD37, 0xFD2D, 0xFFBF, 0xFFCE, 0xFFF4, 0x0027,
    0x005D, 0x008D, 0x00AB, 0x00AD, 0x0093, 0x0066, 0x002B, 0xFFE8,
    0xFFA0, 0xFF59, 0xFF19, 0xFEE4, 0xFEB3, 0xFE88, 0xFE77, 0xFE95,
    0xFF2F, 0x0011, 0x008D, 0x0034, 0xFF7A, 0xFF03, 0xFF10, 0xFF52,
    0xFF9C, 0x4411, 0x44EB, 0x4717, 0x4A02, 0x4D18, 0x4FC5, 0x5177,
    0x5198, 0x5020, 0x4D94, 0x4A3D, 0x4662, 0x424C, 0x3E43, 0x3A8E,
    0x3776, 0x3453, 0x3147, 0x2FC5, 0x3142, 0x3A71, 0x4817, 0x4FC8,
    0x4B04, 0x408D, 0x39D8, 0x3A80, 0x3E1E, 0x4227, 0xBBA9, 0xBB48,
    0xBA3D, 0xB8AD, 0xB6BD, 0xB493, 0xB252, 0xB020, 0xADCD, 0xAB29,
    0xA854, 0xA570, 0xA29D, 0x9FFF, 0x9DB5, 0x9BE2, 0x9B15, 0x9B70,
    0x9C6B, 0x9D81, 0x9E25, 0x9F47, 0xA2A1, 0xABC8, 0xB82E, 0xC05C,
    0xC1A3, 0xBFCC, 0xBD11, 0x0166, 0x0157, 0x012F, 0x00F6, 0x00B3,
    0x006F, 0x0030, 0x0000, 0xFFD9, 0xFFB2, 0xFF8F, 0xFF70, 0xFF58,
    0xFF48, 0xFF42, 0xFF46, 0xFF52, 0xFF65, 0xFF7D, 0xFF99, 0xFFBA,
    0xFFDC, 0x0000, 0x002E, 0x006C, 0x00B0, 0x00F4, 0x012E, 0x0157,
    0x0585, 0x054A, 0x04AC, 0x03C9, 0x02C2, 0x01B4, 0x00BE, 0x0000,
    0xFF69, 0xFED8, 0xFE54, 0xFDE4, 0xFD8C, 0xFD52, 0xFD3E, 0xFD4D,
    0xFD77, 0xFDBA, 0xFE12, 0xFE7B, 0xFEF3, 0xFF76, 0x0000, 0x00B6,
    0x01A8, 0x02B7, 0x03C1, 0x04A7, 0x0548, 0x0A48, 0x0B41, 0x0DC2,
    0x112F, 0x14EB, 0x1858, 0x1ADA, 0x1BD4, 0x1ADD, 0x185E, 0x14F4,
    0x113B, 0x0DD1, 0x0B51, 0x0A59, 0x0B19, 0x0D15, 0x0FE2, 0x1318,
    0x164D, 0x191A, 0x1B15, 0x1BD4, 0x1ADA, 0x1858, 0x14EB, 0x112F,
    0x0DC2, 0x0B41, 0x0271, 0x0272, 0x0271, 0x026D, 0x0261, 0x0244,
    0x021D, 0x0205, 0x0201, 0x0203, 0x020A, 0x0214, 0x0221, 0x0239,
    0x025A, 0x026D, 0x026A, 0x025D, 0x024D, 0x0242, 0x023D, 0x023C,
    0x0241, 0x024E, 0x0260, 0x026D, 0x0272, 0x0273, 0x0272, 0x0006,
    0xFFF7, 0xFFD8, 0xFFC5, 0xFFD9, 0x004A, 0x00F0, 0x0156, 0x0161,
    0x014E, 0x0127, 0x00FA, 0x00D2, 0x00A4, 0x006E, 0x004A, 0x0040,
    0x0042, 0x004B, 0x0058, 0x0072, 0x0095, 0x00A1, 0x007F, 0x0047,
    0x001D, 0x000D, 0x0006, 0x0005, 0xB69B, 0xB7B2, 0xB9C0, 0xBAF9,
    0xB98E, 0xB1BB, 0xA647, 0x9F37, 0x9E52, 0x9F83, 0xA202, 0xA507,
    0xA7C9, 0xAB3A, 0xAF64, 0xB222, 0xB2DC, 0xB2AA, 0xB1EB, 0xB0FF,
    0xAF24, 0xACC0, 0xABF1, 0xAE49, 0xB235, 0xB51C, 0xB634, 0xB69F,
    0xB6A9, 0x829F, 0x829C, 0x8296, 0x8291, 0x8290, 0x8299, 0x82A9,
    0x82B6, 0x82BE, 0x82C6, 0x82CD, 0x82D3, 0x82D8, 0x82DB, 0x82DB,
    0x82D6, 0x82CF, 0x82C5, 0x82B8, 0x82A4, 0x827A, 0x8247, 0x8231,
    0x8257, 0x829C, 0x82C9, 0x82CB, 0x82BC, 0x82A9, 0x7EDC, 0x7ED6,
    0x7ED0, 0x7EDC, 0x7F0B, 0x7F98, 0x805C, 0x80D3, 0x80E3, 0x80CE,
    0x80A4, 0x8071, 0x8044, 0x8006, 0x7FBB, 0x7FA7, 0x7FDC, 0x8039,
    0x80A1, 0x80FE, 0x8160, 0x81BD, 0x81DB, 0x818B, 0x80FC, 0x8073,
    0x7FF4, 0x7F6F, 0x7F06, 0xB710, 0xB6A7, 0xB628, 0xB6AF, 0xB956,
    0xC17A, 0xCCBD, 0xD3AD, 0xD4A4, 0xD381, 0xD114, 0xCE2F, 0xCBA3,
    0xC816, 0xC3FD, 0xC2DB, 0xC5D8, 0xCAED, 0xD0D3, 0xD647, 0xDC63,
    0xE273, 0xE475, 0xDF83, 0xD683, 0xCE26, 0xC6E5, 0xBF5D, 0xB974,
    0x9970, 0x997B, 0x99B3, 0x9A36, 0x9B26, 0x9C74, 0x9E70, 0xA1C8,
    0xA69C, 0xAC45, 0xB24A, 0xB831, 0xBD82, 0xC29C, 0xC6F4, 0xC8B3,
    0xC7C3, 0xC556, 0xC180, 0xBC54, 0xB3E2, 0xA904, 0x9FFB, 0x9A24,
    0x9623, 0x9424, 0x9471, 0x9652, 0x986F, 0xBD95, 0x8001, 0x8001,
    0x2541, 0x8948, 0xA543, 0x8948, 0x067A, 0x063C, 0x0595, 0x04A1,
    0x037C, 0x0242, 0x010F, 0x0000, 0xFEF0, 0xFDB7, 0xFC6D, 0xFB29,
    0xFA03, 0xF911, 0xF86C, 0xF82A, 0xF88C, 0xF999, 0xFB11, 0xFCB7,
    0xFE4B, 0xFF8E, 0x00A1, 0x01C8, 0x02F1, 0x0409, 0x0501, 0x05C7,
    0x064B, 0xFF4F, 0xFF56, 0xFF68, 0xFF82, 0xFFA1, 0xFFC3, 0xFFE4,
    0x0000, 0x001D, 0x003F, 0x0062, 0x0083, 0x009F, 0x00B2, 0x00B9,
    0x00B2, 0x009E, 0x0082, 0x0060, 0x003D, 0x001C, 0x0000, 0xFFE6,
    0xFFCA, 0xFFAC, 0xFF90, 0xFF76, 0xFF62, 0xFF54, 0xDF49, 0xE03F,
    0xE2BA, 0xE61E, 0xE9D0, 0xED35, 0xEFB0, 0xF0A5, 0xEFAF, 0xED32,
    0xE9CD, 0xE61A, 0xE2B4, 0xE038, 0xDF42, 0xE038, 0xE2B4, 0xE61A,
    0xE9CD, 0xED32, 0xEFAF, 0xF0A5, 0xEFE7, 0xEDEF, 0xEB28, 0xE7F7,
    0xE4C7, 0xE1FF, 0xE008, 0x8948, 0xFA6B, 0xFA8A, 0xFADF, 0xFB60,
    0xFC03, 0xFCBE, 0xFD86, 0xFE51, 0xFF42, 0x006E, 0x01BB, 0x030C,
    0x0443, 0x0545, 0x05F4, 0x0635, 0x05E0, 0x04FD, 0x03BA, 0x0241,
    0x00BF, 0xFF61, 0xFE51, 0xFD7A, 0xFCAD, 0xFBF3, 0xFB54, 0xFAD8,
    0xFA88, 0x01D5, 0x0199, 0x00FB, 0x001C, 0xFF20, 0xFE25, 0xFD4F,
    0xFCBF, 0xFC6C, 0xFC35, 0xFC14, 0xFC05, 0xFC03, 0xFC07, 0xFC0E,
    0xFC11, 0xFC0E, 0xFC08, 0xFC07, 0xFC12, 0xFC2F, 0xFC67, 0xFCBF,
    0xFD55, 0xFE2E, 0xFF28, 0x0022, 0x00FE, 0x019A, 0xEE08, 0xED14,
    0xEA9C, 0xE73D, 0xE390, 0xE030, 0xDDB8, 0xDCC1, 0xDD7C, 0xDF6D,
    0xE22C, 0xE553, 0xE879, 0xEB39, 0xED2B, 0xEDE8, 0xECF5, 0xEA81,
    0xE726, 0xE37F, 0xE026, 0xDDB3, 0xDCC1, 0xDDB8, 0xE031, 0xE391,
    0xE73D, 0xEA9C, 0xED14, 0x01FC, 0x0210, 0x0243, 0x0287, 0x02CF,
    0x030C, 0x032F, 0x032C, 0x02F5, 0x0291, 0x0211, 0x0186, 0x0101,
    0x0092, 0x0031, 0xFFD0, 0xFF72, 0xFF1D, 0xFED8, 0xFEA9, 0xFE94,
    0xFEAD, 0xFEFB, 0xFF6F, 0xFFF9, 0x008A, 0x0116, 0x018C, 0x01DD,
    0x0075, 0x007B, 0x0088, 0x009A, 0x00AC, 0x00BB, 0x00C1, 0x00BC,
    0x00A9, 0x008E, 0x006C, 0x0045, 0x001E, 0xFFF8, 0xFFD6, 0xFFBA,
    0xFFA1, 0xFF89, 0xFF72, 0xFF60, 0xFF54, 0xFF51, 0xFF59, 0xFF72,
    0xFF9F, 0xFFD6, 0x000F, 0x0042, 0x0067, 0x76BB, 0x76BB, 0x76BB,
    0x76BC, 0x76BD, 0x76BE, 0x76BF, 0x76BF, 0x76BF, 0x76BE, 0x76BE,
    0x76BD, 0x76BC, 0x76BB, 0x76BB, 0x76BB, 0x76BB, 0x76BB, 0x76BC,
    0x76BD, 0x76BD, 0x76BE, 0x76BE, 0x76BE, 0x76BD, 0x76BD, 0x76BC,
    0x76BB, 0x76BB,
];

// 0x05023D20
const yoshi_seg5_animindex_5023D20 = [
    0x0001, 0x0000, 0x001D, 0x0001, 0x0001, 0x001E, 0x0001, 0x0000, 0x0001, 0x001F, 0x0001, 0x0000,
    0x001D, 0x045B, 0x001D, 0x0478, 0x001D, 0x0495,
    0x001D, 0x0404, 0x001D, 0x0421, 0x001D, 0x043E,
    0x001D, 0x03AC, 0x001D, 0x03C9, 0x001D, 0x03E6,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x03A5,
    0x0001, 0x0000, 0x0001, 0x0000, 0x001D, 0x0020,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x03AA,
    0x001D, 0x0094, 0x001D, 0x00B1, 0x001D, 0x00CE,
    0x0001, 0x0000, 0x0001, 0x0000, 0x001D, 0x0077,
    0x001D, 0x003D, 0x0001, 0x0000, 0x001D, 0x005A,
    0x0001, 0x03A6, 0x0001, 0x03A7, 0x0001, 0x03A8,
    0x001D, 0x0161, 0x001D, 0x017E, 0x001D, 0x019B,
    0x0001, 0x0142, 0x0001, 0x0143, 0x001D, 0x0144,
    0x001D, 0x00EB, 0x001D, 0x0108, 0x001D, 0x0125,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0403,
    0x0001, 0x0000, 0x0001, 0x0000, 0x001D, 0x0266,
    0x001D, 0x020F, 0x001D, 0x022C, 0x001D, 0x0249,
    0x001D, 0x01B8, 0x001D, 0x01D5, 0x001D, 0x01F2,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x03AB,
    0x001D, 0x0283, 0x001D, 0x02A0, 0x001D, 0x02BD,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x03A9,
    0x0001, 0x0000, 0x0001, 0x0000, 0x001D, 0x0388,
    0x001D, 0x0331, 0x001D, 0x034E, 0x001D, 0x036B,
    0x001D, 0x02DA, 0x001D, 0x02F7, 0x001D, 0x0314,
];

// 0x05023E4C
const yoshi_seg5_anim_05023E4C = {
    flags: 0,
    unk02: 0,
    unk04: 0,
    unk06: 0,
    unk08: 0x1D,
    unk0A: ANIMINDEX_NUMPARTS(yoshi_seg5_animindex_5023D20),
    values: yoshi_seg5_animvalue_050233BC,
    indices: yoshi_seg5_animindex_5023D20,
    ignore: 0,
};

// 0x05023E64
const yoshi_seg5_animvalue_05023E64 = [
    0x0000, 0x0104, 0x0113, 0x0136, 0x0161, 0x0186, 0x0198, 0xFFF2,
    0x3FFF, 0xA69D, 0x26A4, 0x2666, 0x25D1, 0x251C, 0x2480, 0x2434,
    0xBC7E, 0xBCE6, 0xBDDF, 0xBF0C, 0xC011, 0xC08F, 0xA747, 0xA9D4,
    0xAFF4, 0xB75E, 0xBDC7, 0xC0E6, 0x2ECA, 0x2DBD, 0x2B36, 0x2826,
    0x2581, 0x2437, 0xB86B, 0xBA3E, 0xBE9E, 0xC3E9, 0xC87E, 0xCAB9,
    0xA676, 0xA87C, 0xAD59, 0xB33B, 0xB852, 0xBACC, 0xFFA4, 0xFF2F,
    0xFE15, 0xFCC1, 0xFB9B, 0xFB0C, 0xFA4F, 0xFA98, 0xFB48, 0xFC1D,
    0xFCD5, 0xFD2E, 0xABA1, 0xAFA7, 0xB950, 0xC501, 0xCF1E, 0xD40A,
    0x48F2, 0x46D7, 0x41C9, 0x3BAA, 0x3660, 0x33CC, 0x031B, 0x0343,
    0x03AA, 0x0433, 0x04C3, 0x053C, 0x044B, 0x03EE, 0x0309, 0x01E2,
    0x00C1, 0xFFEF, 0x999A, 0x9CC1, 0xA49C, 0xAEC5, 0xB8D5, 0xC064,
    0x1A9B, 0x1964, 0x1679, 0x12F2, 0x0FE4, 0x0E68, 0x0170, 0x0248,
    0x0450, 0x06C6, 0x08E6, 0x09EF, 0x0A7F, 0x09D1, 0x0830, 0x0637,
    0x0483, 0x03AE, 0xAEA5, 0xB30B, 0xBD9B, 0xCA64, 0xD573, 0xDAD5,
    0x4547, 0x42DA, 0x3D04, 0x35F5, 0x2FDA, 0x2CE0, 0xFD05, 0xFCE1,
    0xFC89, 0xFC12, 0xFB96, 0xFB2D, 0xFC20, 0xFC79, 0xFD54, 0xFE6D,
    0xFF7E, 0x0042, 0x9ACD, 0x9E06, 0xA608, 0xB05A, 0xBA83, 0xC20A,
    0xBD95, 0xA543, 0x8948, 0xA543, 0x8948, 0xF7AD, 0xF79A, 0xF76E,
    0xF738, 0xF709, 0xF6F2, 0xFC52, 0xFCC4, 0xFDD7, 0xFF23, 0x0041,
    0x00CD, 0xD6F3, 0xD8F8, 0xDDD0, 0xE3AE, 0xE8C1, 0xEB39, 0x8948,
    0xF10F, 0xF069, 0xEEDB, 0xECF9, 0xEB58, 0xEA8D, 0x7D3D, 0x7BAA,
    0x77C5, 0x72C9, 0x6DF2, 0x6A7E,
];

// 0x05023FBC
const yoshi_seg5_animindex_5023FBC = [
    0x0001, 0x0000, 0x0006, 0x0001, 0x0001, 0x0007, 0x0001, 0x0000, 0x0001, 0x0008, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0006, 0x00A6,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0006, 0x00A0,
    0x0006, 0x008D, 0x0006, 0x0093, 0x0006, 0x0099,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0088,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0009,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x008B,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0006, 0x0016,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0006, 0x0010,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0006, 0x000A,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0089,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0006, 0x0028,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0006, 0x0022,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0006, 0x001C,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x009F,
    0x0006, 0x0046, 0x0006, 0x004C, 0x0006, 0x0052,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0006, 0x0040,
    0x0006, 0x002E, 0x0006, 0x0034, 0x0006, 0x003A,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x008C,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0006, 0x0058,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x008A,
    0x0006, 0x0076, 0x0006, 0x007C, 0x0006, 0x0082,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0006, 0x0070,
    0x0006, 0x005E, 0x0006, 0x0064, 0x0006, 0x006A,
];

// 0x050240E8
const yoshi_seg5_anim_050240E8 = {
    flags: 0,
    unk02: 0,
    unk04: 0,
    unk06: 0,
    unk08: 0x06,
    unk0A: ANIMINDEX_NUMPARTS(yoshi_seg5_animindex_5023FBC),
    values: yoshi_seg5_animvalue_05023E64,
    indices: yoshi_seg5_animindex_5023FBC,
    ignore: 0,
};

// 0x05024100
export const yoshi_seg5_anims_05024100 = [
    yoshi_seg5_anim_050233A4,
    yoshi_seg5_anim_05023E4C,
    yoshi_seg5_anim_050240E8,
];


// 1619756659 - 2021-04-29 18:44:51 -1000
