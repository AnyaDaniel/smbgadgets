export interface Appliance {
  id: string
  name: string
  defaultWattage: number
  quantity: number
  power: number
}

export interface BatteryCapacity {
  id: string
  value: number
  label: string
}