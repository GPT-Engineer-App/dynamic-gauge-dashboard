// Update this page (the content is just a fallback if you fail to update the page)

import { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Slider } from "@/components/ui/slider";

const StepIcon = ({ value, color, step }) => (
  <svg width="144.9" height="112" viewBox="0 0 144.9 112" className="w-full h-auto">
    <g>
      <path fill={color} d="M116.9,40.5H10.6c-7.4,0-11.8,8.4-7.5,14.5l11.1,16c2.2,3.1,2.2,7.2,0,10.4l-11,16c-4.2,6.1,0.2,14.5,7.6,14.5h106.1c3,0,5.9-1.5,7.6-4l18.2-26.5c2.1-3.1,2.1-7.2,0-10.3l-18.2-26.5C122.7,42,119.9,40.5,116.9,40.5z"/>
    </g>
    <g>
      <g>
        <path fill="#FEFBFF" d="M30.8,0.5h80v80h-80V0.5z"/>
        <path fill="none" stroke="#FFA945" strokeWidth="4" d="M70.8,0.5c-22.1,0-40,17.9-40,40s17.9,40,40,40c22.1,0,40-17.9,40-40S92.9,0.5,70.8,0.5z"/>
      </g>
    </g>
    <text x="72" y="65" textAnchor="middle" fill="#FEFBFF" fontSize="24" fontWeight="bold">{value}%</text>
    <text x="72" y="85" textAnchor="middle" fill="#FEFBFF" fontSize="16">Step {step}</text>
  </svg>
);

const Index = () => {
  const [gaugeValue, setGaugeValue] = useState(50);

  const data1 = [
    { name: 'Step 1', value: gaugeValue },
    { name: 'Step 2', value: gaugeValue * 1.2 },
    { name: 'Step 3', value: gaugeValue * 0.8 },
    { name: 'Step 4', value: gaugeValue * 1.5 },
  ];

  const data2 = [
    { name: 'Item 1', value: gaugeValue },
    { name: 'Item 2', value: gaugeValue * 1.2 },
    { name: 'Item 3', value: gaugeValue * 0.8 },
    { name: 'Item 4', value: gaugeValue * 1.5 },
  ];

  const data3 = [
    { name: 'Group A', value: gaugeValue },
    { name: 'Group B', value: 100 - gaugeValue },
  ];

  const data4 = [
    { name: 'Title 1', value: gaugeValue * 0.8 },
    { name: 'Title 2', value: gaugeValue * 1.28 },
    { name: 'Title 3', value: gaugeValue * 1.44 },
  ];

  const COLORS = ['#FFA945', '#FF5733', '#8A2BE2', '#4169E1'];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-4">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-4">Informational Data Infographic</h1>
      <p className="text-center text-gray-600 mb-8">This infographic showcases dynamic data visualization controlled by the gauge at the bottom.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        <div className="bg-white rounded-lg shadow-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold mb-2">Data 1: Step Progress</h2>
          <div className="flex flex-wrap justify-around items-center">
            {data1.map((item, index) => (
              <div key={index} className="w-1/2 sm:w-1/4 p-2">
                <StepIcon
                  value={Math.round(item.value)}
                  color={COLORS[index % COLORS.length]}
                  step={index + 1}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Data 2: Item Comparison</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data2}>
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Data 3: Group Distribution</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data3}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data3.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Data 4: Title Percentages</h2>
          <div className="flex justify-around">
            {data4.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={COLORS[index % COLORS.length]}
                      strokeWidth="3"
                      strokeDasharray={`${item.value}, 100`}
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold">
                    {Math.round(item.value)}%
                  </div>
                </div>
                <p className="mt-2">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Data 5: Gauge</h2>
          <div className="relative w-full h-40">
            <svg className="w-full h-full" viewBox="0 0 100 50">
              <path
                d="M 5 45 A 40 40 0 0 1 95 45"
                fill="none"
                stroke="#eee"
                strokeWidth="10"
              />
              <path
                d="M 5 45 A 40 40 0 0 1 95 45"
                fill="none"
                stroke="#8884d8"
                strokeWidth="10"
                strokeDasharray={`${gaugeValue * 1.8}, 180`}
              />
              <line
                x1="50"
                y1="45"
                x2={50 + 40 * Math.cos((gaugeValue / 100) * Math.PI)}
                y2={45 - 40 * Math.sin((gaugeValue / 100) * Math.PI)}
                stroke="#333"
                strokeWidth="2"
              />
            </svg>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-lg font-semibold">
              {gaugeValue}%
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4">
        <h2 className="text-xl font-semibold mb-2">Gauge Controller</h2>
        <Slider
          value={[gaugeValue]}
          onValueChange={(value) => setGaugeValue(value[0])}
          max={100}
          step={1}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Index;
