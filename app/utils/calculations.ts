import { Appliance } from "../types/calculator"

// Calculate total load in Watts
export function calculateTotalLoad(appliances: Appliance[]): number {
  return appliances.reduce((sum, app) => sum + (app.quantity * app.defaultWattage), 0)
}

// Recommend inverter rating (VA) - add 20% safety margin
export function calculateRecommendedInverterRating(totalLoad: number): number {
  return Math.ceil(totalLoad / 0.8)
}

// Calculate backup time (hours) = (Battery Capacity * Battery Count * 12V) / (Total Load * 1.2)
export function calculateBackupTime(totalLoad: number, totalBatteryCapacity: number): number {
  if (totalLoad === 0 || totalBatteryCapacity === 0) return 0
  // 12V system, 1.2 is inverter efficiency factor
  return Number(((totalBatteryCapacity * 12) / (totalLoad * 1.2)).toFixed(2))
}

// Recommend number of batteries (rounded up)
export function calculateRecommendedBatteries(totalLoad: number, batteryCapacity: number): number {
  if (batteryCapacity === 0) return 0
  // Assume 4 hours backup as standard
  const requiredAh = Math.ceil((totalLoad * 4 * 1.2) / 12)
  return Math.max(1, Math.ceil(requiredAh / batteryCapacity))
}

// Recommend number of solar panels (rounded up)
// Assume 300W panel, 5 hours sunlight/day
export function calculateRecommendedPanels(totalLoad: number): number {
  if (totalLoad === 0) return 1
  const dailyEnergy = totalLoad * 4 // 4 hours backup
  const panelOutputPerDay = 300 * 5 // 300W panel * 5 hours
  return Math.max(1, Math.ceil(dailyEnergy / panelOutputPerDay))
}