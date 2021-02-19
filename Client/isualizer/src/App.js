import React, { useState } from 'react'
import data from './Data/jsondata.json'
import Chart from 'react-google-charts'
import './App.css'
export const App = () => {
  const [datas, updateDatas] = useState(data);
  console.log(datas[0])
  const y_axis = datas.map(res => {
    return res.intensity

  }
  )
  console.log(y_axis)

  const x_axis = datas.map(res => {
    return res.likelihood
  })
  console.log(x_axis)
  return (
    <div>
      <div style={{ display: 'flex', maxWidth: 900 }} className="App">
        <Chart
          width={'1200px'}
          height={'900px'}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}
          data={[['Generation', 'Descendants'], [datas.map(res => res.intensity), datas.map(res => res.likelihood)]]}
          options={{
            title: 'Descendants by Generation',
            hAxis: { title: 'Generation', minValue: 0, maxValue: 10000 },
            vAxis: { title: 'Descendants', minValue: 0, maxValue: 10000 },
            trendlines: {
              0: {
                type: 'exponential',
                visibleInLegend: true,
              },
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
/</div>
    </div>
  )
}
export default App;