import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Thermometer, Droplets, Gauge, Zap, Power } from "lucide-react";

export default function DashboardUI() {
  const sensors = {
    temperatures: [
      { label: "Temp 1", value: "-25 °C" },
      { label: "Temp 2", value: "-25 °C" },
      { label: "Temp 3", value: "-25.01 °C" },
      { label: "Temp 4", value: "29.35 °C" },
      { label: "Temp 5", value: "-25 °C" },
      { label: "Temp 6", value: "54.97 °C" },
      { label: "Temp 7", value: "55.49 °C" },
      { label: "Temp 8", value: "30.87 °C" }
    ],
    humidity: [
      { label: "Humidity 1", value: "28.33 %" },
      { label: "Humidity 2", value: "27.34 %" }
    ],
    pressure: [
      { label: "Pressure 1", value: "143.51 psi" },
      { label: "Pressure 2", value: "166.04 psi" },
      { label: "Pressure 3", value: "145.16 psi" },
      { label: "Pressure 4", value: "167.59 psi" }
    ],
    electrical: [
      { label: "Voltage", value: "42.9 V" },
      { label: "Current", value: "0 A" },
      { label: "Power", value: "0 kW" }
    ],
    solenoids: ["Solenoid 1", "Solenoid 2", "Solenoid 3", "Solenoid 4"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Activity className="w-7 h-7 text-green-400" /> System Monitoring Dashboard
      </h1>

      {/* Temperature Section */}
      <section className="mb-6">
        <h2 className="text-xl mb-3 flex items-center gap-2"><Thermometer /> Temperature Sensors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sensors.temperatures.map((t, i) => (
            <Card key={i} className="bg-zinc-900/70 border-zinc-800">
              <CardHeader className="text-sm text-zinc-400">{t.label}</CardHeader>
              <CardContent className="text-2xl font-semibold text-green-400">{t.value}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Humidity & Pressure */}
      <section className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-xl mb-3 flex items-center gap-2"><Droplets /> Humidity</h2>
          <div className="grid grid-cols-2 gap-4">
            {sensors.humidity.map((h, i) => (
              <Card key={i} className="bg-zinc-900/70 border-zinc-800">
                <CardHeader className="text-sm text-zinc-400">{h.label}</CardHeader>
                <CardContent className="text-2xl font-semibold text-cyan-400">{h.value}</CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-3 flex items-center gap-2"><Gauge /> Pressure</h2>
          <div className="grid grid-cols-2 gap-4">
            {sensors.pressure.map((p, i) => (
              <Card key={i} className="bg-zinc-900/70 border-zinc-800">
                <CardHeader className="text-sm text-zinc-400">{p.label}</CardHeader>
                <CardContent className="text-2xl font-semibold text-yellow-400">{p.value}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Electrical */}
      <section className="mb-6">
        <h2 className="text-xl mb-3 flex items-center gap-2"><Zap /> Electrical Parameters</h2>
        <div className="grid grid-cols-3 gap-4">
          {sensors.electrical.map((e, i) => (
            <Card key={i} className="bg-zinc-900/70 border-zinc-800">
              <CardHeader className="text-sm text-zinc-400">{e.label}</CardHeader>
              <CardContent className="text-2xl font-semibold text-purple-400">{e.value}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Solenoid Status */}
      <section>
        <h2 className="text-xl mb-3 flex items-center gap-2"><Power /> Actuator Status</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sensors.solenoids.map((s, i) => (
            <Card key={i} className="bg-zinc-900/70 border-zinc-800 flex items-center justify-between p-4">
              <span className="text-sm">{s}</span>
              <Badge variant="destructive">OFF</Badge>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
