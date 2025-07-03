export const outdoorUnits = [
  { model: "DZ20VC", type: "Heat Pump", SEER2: 20, HSPF2: 10.0, communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DZ18VC", type: "Heat Pump", SEER2: 18, HSPF2: 10.0, communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DZ18TC", type: "Heat Pump", SEER2: 18, HSPF2: 10.0, communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DZ17VSA", type: "Heat Pump", SEER2: 17.2, HSPF2: 10.0, communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DZ16TC", type: "Heat Pump", SEER2: 16.0, HSPF2: 9.7, communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DX16TC", type: "AC", SEER2: 16.0, communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DX18TC", type: "AC", SEER2: 18, communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DX17VSS", type: "AC", SEER2: 17.2, communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DX20VC", type: "AC", SEER2: 20, communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "Non-communicating 24v AC", type: "AC", communicating: false, brand: "Daikin", equipmentType: "Unitary" },

  // Amana Outdoor Units
  { model: "AVZC20", type:"Heat Pump", SEER2: null, communicating: true, brand: "Amana", equipmentType: "Unitary"},

  // Goodman Outdoor Units
  { model: "GVXC", type: "AC", SEER2: null, communicating: true, brand: "Goodman", equipmentType: "Unitary"},

  // Daikin Single/Multizone Outdoor Units
  { model: "RXL__WMVJU9", type: "Heat Pump", SEER2: 18, communicating: true, brand: "Daikin", equipmentType: "Single/Multizone" },

  // Daikin VRV Outdoor Units
  { model: "RXL__WMVJU9", type: "Heat Pump", SEER2: 21, communicating: true, brand: "Daikin", equipmentType: "VRV" }
];

export const indoorUnits = [
  { model: "DVFEC", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary" },
  { model: "DVPEC", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary" },
  { model: "DVPVC", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary" },
  { model: "DVPTC", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary" },
  { model: "MBVC", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary" },
  { model: "DM97MC", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary" },
  { model: "DC97MC", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary" },
  { model: "DM96VC", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary" },
  { model: "DC96VC", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary" },
  { model: "DM96SC-U", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary" },
  { model: "DM80VC", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary" },
  { model: "DC80VC", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary" },
  { model: "DM80SC-U", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary" },

  //Amana Indoor Units
  { model: "AHVE", type: "Air Handler", compatible: "communicating", brand: "Amana", equipmentType: "Unitary"},

  // Goodman Indoor Units
  { model: "AHVE*1400", type: "Air Handler", compatible: "communicating", brand: "Goodman", equipmentType: "Unitary"},

  // Daikin Mini/MultiSplit Indoor Units
  { model: "FTX__WMVJU9", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "Single/Multizone" },

  // Daikin VRV Indoor Units
  { model: "FDMQ__WVJU9", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "VRV" }
];

export const thermostats = [
  { name: "Daikin One Plus", part: "DTST-CWBSA-NI-A", equipmentType: "Unitary" },
  { name: "Daikin One Touch", part: "DTST-TOU-A", equipmentType: "Unitary" },
  { name: "Daikin One Lite", part: "DTST-LTE-LA-A", equipmentType: "Single/Multizone" },
  { name: "Goodman GTST", part: "GTST-CW-WH-A", equipmentType: "Unitary" },
  { name: "Amana Smart Thermostat", part: "ATST-CWE-BL-A", equipmentType: "Unitary" },
  { name: "Daikin One Plus", part: "DTST-ONE-ADA-A", equipmentType: "Single/Multizone" },
  { name: "Daikin One Plus", part: "DTST-ONE-ADA-A", equipmentType: "VRV" },
  { name: "Daikin One Touch", part: "DTST-TOU-ADA-A", equipmentType: "Single/Multizone" },
  { name: "Daikin One Touch", part: "DTST-TOU-ADA-A", equipmentType: "VRV" }
];
