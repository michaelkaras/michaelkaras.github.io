export const outdoorUnits = [
  { model: "DZ20VC", type: "Heat Pump", SEER2: 20, HSPF2: 10.0, EER2: 13, motorType: "Variable-Speed", refrigerantType: "R-410A", communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DZ18VC", type: "Heat Pump", SEER2: 18, HSPF2: 10.0, EER2: 12.5, motorType: "Variable-Speed", refrigerantType: "R-410A", communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DZ18TC", type: "Heat Pump", SEER2: 18, HSPF2: 10.0, EER2: 12.2, motorType: "Two-Stage", refrigerantType: "R-410A", communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DZ17VSA", type: "Heat Pump", SEER2: 17.2, HSPF2: 10.0, EER2: 12.0, motorType: "Variable-Speed", refrigerantType: "R-410A", communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DZ16TC", type: "Heat Pump", SEER2: 16.0, HSPF2: 9.7, EER2: 11.5, motorType: "Two-Stage", refrigerantType: "R-410A", communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DX16TC", type: "AC", SEER2: 16.0, EER2: 11.7, motorType: "Two-Stage", refrigerantType: "R-410A", communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DX18TC", type: "AC", SEER2: 18, EER2: 12.5, motorType: "Two-Stage", refrigerantType: "R-410A", communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DX17VSS", type: "AC", SEER2: 17.2, EER2: 12.0, motorType: "Variable-Speed", refrigerantType: "R-410A", communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "DX20VC", type: "AC", SEER2: 20, EER2: 13.5, motorType: "Variable-Speed", refrigerantType: "R-410A", communicating: true, brand: "Daikin", equipmentType: "Unitary" },
  { model: "Non-communicating 24v AC", type: "AC", SEER2: null, EER2: null, motorType: "Single-Speed", refrigerantType: "R-410A", communicating: false, brand: "Daikin", equipmentType: "Unitary" },

  // Amana Outdoor Units
  { model: "AVZC20", type: "Heat Pump", SEER2: null, HSPF2: null, EER2: null, motorType: "Variable-Speed", refrigerantType: "R-410A", communicating: true, brand: "Amana", equipmentType: "Unitary" },

  // Goodman Outdoor Units
  { model: "GVXC", type: "AC", SEER2: null, EER2: null, motorType: "Variable-Speed", refrigerantType: "R-410A", communicating: true, brand: "Goodman", equipmentType: "Unitary" },

  // Daikin Single/Multizone Outdoor Units
  { model: "RXL__WMVJU9", type: "Heat Pump", SEER2: 19.5, HSPF2: 10.0, EER2: 13.2, motorType: "Inverter-Driven", refrigerantType: "R-32", communicating: true, brand: "Daikin", equipmentType: "Single/Multizone" },
  { model: "2MXL18QMVJUA", type: "Heat Pump", SEER2: 17.0, HSPF2: 10.3, EER2: 12.0, motorType: "Inverter-Driven", refrigerantType: "R-32", communicating: true, brand: "Daikin", equipmentType: "Single/Multizone" },
  { model: "3MXL24RMVJUA", type: "Heat Pump", SEER2: 18.0, HSPF2: 12.5, EER2: 12.8, motorType: "Inverter-Driven", refrigerantType: "R-32", communicating: true, brand: "Daikin", equipmentType: "Single/Multizone" },
  { model: "4MXL36TVJU", type: "Heat Pump", SEER2: 21.7, HSPF2: 11.2, EER2: 14.0, motorType: "Inverter-Driven", refrigerantType: "R-32", communicating: true, brand: "Daikin", equipmentType: "Single/Multizone" },

  // Daikin VRV Outdoor Units
  { model: "RXL__WMVJU9", type: "Heat Pump", SEER2: 21, HSPF2: null, EER2: 14.2, motorType: "Inverter-Driven", refrigerantType: "R-32", communicating: true, brand: "Daikin", equipmentType: "VRV" }
];

export const indoorUnits = [
  { model: "DVFEC", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary", installationType: "ducted" },
  { model: "DVPEC", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary", installationType: "ducted" },
  { model: "DVPVC", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary", installationType: "ducted" },
  { model: "DVPTC", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary", installationType: "ducted" },
  { model: "MBVC", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary", installationType: "ducted" },
  { model: "DM97MC", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary", installationType: "ducted" },
  { model: "DC97MC", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary", installationType: "ducted" },
  { model: "DM96VC", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary", installationType: "ducted" },
  { model: "DC96VC", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary", installationType: "ducted" },
  { model: "DM96SC-U", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary", installationType: "ducted" },
  { model: "DM80VC", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary", installationType: "ducted" },
  { model: "DC80VC", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary", installationType: "ducted" },
  { model: "DM80SC-U", type: "Furnace", compatible: "communicating", brand: "Daikin", equipmentType: "Unitary", installationType: "ducted" },

  // Amana Indoor Units
  { model: "AHVE", type: "Air Handler", compatible: "communicating", brand: "Amana", equipmentType: "Unitary", installationType: "ducted" },

  // Goodman Indoor Units
  { model: "AHVE*1400", type: "Air Handler", compatible: "communicating", brand: "Goodman", equipmentType: "Unitary", installationType: "ducted" },

  // Daikin Mini/MultiSplit Indoor Units
  { model: "FTX__WMVJU9", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "Single/Multizone", installationType: "wall-mounted" },
  { model: "CDXS__LVJU", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "Single/Multizone", installationType: "ducted" },

  // Daikin VRV Indoor Units
  { model: "FDMQ__WVJU9", type: "Air Handler", compatible: "communicating", brand: "Daikin", equipmentType: "VRV", installationType: "ceiling-mounted" }
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
