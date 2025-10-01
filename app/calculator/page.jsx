'use client'

import { useState } from 'react'
import { defaultAppliances, batteryCapacities } from '../data/appliances'
import {
  calculateTotalLoad,
  calculateRecommendedInverterRating,
  calculateBackupTime,
  calculateRecommendedPanels,
  calculateRecommendedBatteries,
} from '../utils/calculations'

export default function InverterCalculatorPage() {
  const [appliances, setAppliances] = useState(defaultAppliances)
  const [inverterRating, setInverterRating] = useState(calculateRecommendedInverterRating(calculateTotalLoad(defaultAppliances)))
  const [batteryCount, setBatteryCount] = useState(1)
  const [batteryCapacity, setBatteryCapacity] = useState(batteryCapacities[0].value)
  const [panelCount, setPanelCount] = useState(1)

  // Auto-recommend toggles
  const [autoInverter, setAutoInverter] = useState(true)
  const [autoBattery, setAutoBattery] = useState(true)
  const [autoPanel, setAutoPanel] = useState(true)

  // Manual backup time calculation
  const [manualBackupTime, setManualBackupTime] = useState(null)

  const totalLoad = calculateTotalLoad(appliances)
  const recommendedInverter = calculateRecommendedInverterRating(totalLoad)
  const recommendedBatteries = calculateRecommendedBatteries(totalLoad, batteryCapacity)
  const recommendedPanels = calculateRecommendedPanels(totalLoad)
  const autoBackupTime = calculateBackupTime(totalLoad, batteryCapacity * batteryCount)

  // Handlers
  const handleApplianceChange = (id, field, value) => {
    setAppliances(appliances.map(app =>
      app.id === id ? { ...app, [field]: Number(value) } : app
    ))
  }

  // Sync auto recommendations
  if (autoInverter && inverterRating !== recommendedInverter) setInverterRating(recommendedInverter)
  if (autoBattery && batteryCount !== recommendedBatteries) setBatteryCount(recommendedBatteries)
  if (autoPanel && panelCount !== recommendedPanels) setPanelCount(recommendedPanels)

  // Determine if all are auto
  const allAuto = autoInverter && autoBattery && autoPanel

  // Calculate backup time manually
  const handleManualCalculate = () => {
    setManualBackupTime(calculateBackupTime(totalLoad, batteryCapacity * batteryCount))
  }

  // Update toggles to immediately set recommended values
  const handleAutoInverter = (checked) => {
    setAutoInverter(checked)
    if (checked) setInverterRating(recommendedInverter)
  }
  const handleAutoBattery = (checked) => {
    setAutoBattery(checked)
    if (checked) setBatteryCount(recommendedBatteries)
  }
  const handleAutoPanel = (checked) => {
    setAutoPanel(checked)
    if (checked) setPanelCount(recommendedPanels)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="bg-blue-700 py-16 px-4 shadow-lg">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg mb-4 transition-all duration-500">
            Inverter Load Calculator
          </h1>
          <p className="text-white text-center text-xl mb-2">
            Get smart recommendations for inverter, batteries, solar panels and backup time.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 transition-all duration-500">
          <h2 className="text-3xl font-bold mb-8 text-blue-700">Your Appliances</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-lg border-separate border-spacing-y-2">
              <thead>
                <tr className="bg-blue-100">
                  <th className="py-3 px-4 rounded-l-xl">Appliance</th>
                  <th className="py-3 px-4">Wattage (W)</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4 rounded-r-xl">Total Power (W)</th>
                </tr>
              </thead>
              <tbody>
                {appliances.map(app => (
                  <tr key={app.id} className="bg-blue-50 transition-all duration-300 hover:bg-blue-200">
                    <td className="py-2 px-4 font-semibold">{app.name}</td>
                    <td className="py-2 px-4">
                      <input
                        type="number"
                        min={1}
                        value={app.defaultWattage}
                        onChange={e => handleApplianceChange(app.id, 'defaultWattage', e.target.value)}
                        className="w-24 border rounded-lg px-2 py-1 text-lg"
                      />
                    </td>
                    <td className="py-2 px-4">
                      <input
                        type="number"
                        min={0}
                        value={app.quantity}
                        onChange={e => handleApplianceChange(app.id, 'quantity', e.target.value)}
                        className="w-20 border rounded-lg px-2 py-1 text-lg"
                      />
                    </td>
                    <td className="py-2 px-4 font-bold text-blue-700">
                      {app.defaultWattage * app.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-blue-700">Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-blue-50 rounded-2xl p-6 shadow transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <label className="block font-semibold text-xl text-blue-800">Inverter Rating (VA)</label>
                <label className="flex items-center gap-2 text-blue-600 text-sm">
                  <input
                    type="checkbox"
                    checked={autoInverter}
                    onChange={e => handleAutoInverter(e.target.checked)}
                  />
                  Auto Recommend
                </label>
              </div>
              <input
                type="number"
                min={recommendedInverter}
                value={inverterRating}
                onChange={e => setInverterRating(Number(e.target.value))}
                disabled={autoInverter}
                className={`w-full border-2 rounded-xl px-4 py-2 text-2xl ${autoInverter ? 'bg-blue-100' : 'bg-white'} transition-all duration-300`}
              />
              <div className="text-xs text-blue-500 mt-2">
                Recommended: <span className="font-bold">{recommendedInverter} VA</span>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 shadow transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <label className="block font-semibold text-xl text-blue-800">Battery Capacity (Ah)</label>
                <label className="flex items-center gap-2 text-blue-600 text-sm">
                  <input
                    type="checkbox"
                    checked={autoBattery}
                    onChange={e => handleAutoBattery(e.target.checked)}
                  />
                  Auto Recommend
                </label>
              </div>
              <select
                value={batteryCapacity}
                onChange={e => setBatteryCapacity(Number(e.target.value))}
                className="w-full border-2 rounded-xl px-4 py-2 text-2xl bg-white"
              >
                {batteryCapacities.map(bat => (
                  <option key={bat.id} value={bat.value}>{bat.label}</option>
                ))}
              </select>
              <label className="block font-semibold mt-4 mb-2 text-blue-800">Number of Batteries</label>
              <input
                type="number"
                min={1}
                value={batteryCount}
                onChange={e => setBatteryCount(Number(e.target.value))}
                disabled={autoBattery}
                className={`w-full border-2 rounded-xl px-4 py-2 text-2xl ${autoBattery ? 'bg-blue-100' : 'bg-white'} transition-all duration-300`}
              />
              <div className="text-xs text-blue-500 mt-2">
                Recommended: <span className="font-bold">{recommendedBatteries} battery(s)</span>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 shadow transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <label className="block font-semibold text-xl text-blue-800">Number of Solar Panels</label>
                <label className="flex items-center gap-2 text-blue-600 text-sm">
                  <input
                    type="checkbox"
                    checked={autoPanel}
                    onChange={e => handleAutoPanel(e.target.checked)}
                  />
                  Auto Recommend
                </label>
              </div>
              <input
                type="number"
                min={1}
                value={panelCount}
                onChange={e => setPanelCount(Number(e.target.value))}
                disabled={autoPanel}
                className={`w-full border-2 rounded-xl px-4 py-2 text-2xl ${autoPanel ? 'bg-blue-100' : 'bg-white'} transition-all duration-300`}
              />
              <div className="text-xs text-blue-500 mt-2">
                Recommended: <span className="font-bold">{recommendedPanels} panel(s)</span>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 shadow transition-all duration-300 hover:scale-105 flex flex-col justify-between">
              <label className="block font-semibold text-xl text-blue-800 mb-2">Estimated Backup Time (hours)</label>
              <input
                type="number"
                value={allAuto ? autoBackupTime : (manualBackupTime ?? '')}
                readOnly
                className="w-full border-2 rounded-xl px-4 py-2 text-2xl bg-blue-100 mb-4"
              />
              {!allAuto && (
                <button
                  onClick={handleManualCalculate}
                  className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300"
                >
                  Calculate Backup Time
                </button>
              )}
              <div className="text-xs text-blue-500 mt-2">
                This is calculated based on your selections.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}