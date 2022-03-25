import { writable, readable } from 'svelte/store'

// const initialScenarios = [
//   { _id: 223, name: 'Test DoS Attack', activated: true },
//   { _id: 324, name: 'Sample Scenario', activated: false },
// ];

// for now, single configuration for scenario
// const initScenarioConfig = {
  // "_id": "ObjectIdentifier",
  // "ref": "scenario_identifier",
  // "configurations": [
  //   {
  //     "container_info": {"short_id": "123", "name": "DoS Attack", "ports": "8010"},
  //     "configs": {"delay": "0", "duration": "0", "interval": "1000", "jitter": "0", "target": ""}
  //   },
  //   {
  //     "container_info": {"short_id": "1243", "name": "Replay Attack", "ports": "8020"},
  //     "configs": {"delay": "5", "duration": "12", "interval": "1000", "jitter": "0", "target": ""}
  //   }
  // ]
// };

export const scenarioStore = writable([]); // initialScenarios
export const scenarioConfigsStore = writable({}); // initScenarioConfig
export const testingStore = readable(true);
export const scenarioTypeStore = writable("Communication");
export const drivingData = writable([]);