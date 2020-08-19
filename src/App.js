import React, { useEffect, useState } from "react";

const CheckBox1 = () =>{
  return (
    <div>
      <div class="field">
        <div class="control">
          <div className = "menu">
              <ul className = "menu-list">
                <li>
                  <label class="checkbox"><input type="checkbox" /> 北海道/東北地方</label>
                    <ul>
                        <li><label class="checkbox"><input type="checkbox" /> 北海道</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 青森県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 岩手県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 宮城県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 秋田県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 山形県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 福島県</label></li>
                    </ul>
                </li>
                <li>
                  <label class="checkbox"><input type="checkbox" /> 関東地方</label>
                    <ul>
                        <li><label class="checkbox"><input type="checkbox" /> 茨城県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 栃木県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 群馬県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 埼玉県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 千葉県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 東京都</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 神奈川県</label></li>
                    </ul>
                </li>
                <li>
                  <label class="checkbox"><input type="checkbox" /> 中部地方</label>
                    <ul>
                        <li><label class="checkbox"><input type="checkbox" /> 新潟県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 富山県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 石川県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 福井県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 山梨県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 長野県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 岐阜県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 静岡県</label></li>
                        <li><label class="checkbox"><input type="checkbox" /> 愛知県</label></li>
                    </ul>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const CheckBox2 = () =>{
  return (
    <div>
      <div class="field">
        <div class="control">
          <div className = "menu">
              <ul className = "menu-list">
              <li>
                    <label class="checkbox"><input type="checkbox" /> 近畿地方</label>
                      <ul>
                          <li><label class="checkbox"><input type="checkbox" /> 三重県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 滋賀県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 京都府</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 大阪府</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 兵庫県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 奈良県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 和歌山県</label></li>
                      </ul>
                  </li>
                  <li>
                    <label class="checkbox"><input type="checkbox" /> 中国地方</label>
                      <ul>
                          <li><label class="checkbox"><input type="checkbox" /> 鳥取県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 島根県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 岡山県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 広島県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 山口県</label></li>
                      </ul>
                  </li>
                  <li>
                    <label class="checkbox"><input type="checkbox" /> 四国地方</label>
                      <ul>
                          <li><label class="checkbox"><input type="checkbox" /> 徳島県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 香川県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 愛媛県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 高知県</label></li>
                      </ul>
                  </li>
                  <li>
                    <label class="checkbox"><input type="checkbox" /> 九州地方/沖縄</label>
                      <ul>
                          <li><label class="checkbox"><input type="checkbox" /> 福岡県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 佐賀県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 長崎県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 熊本県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 大分県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 宮崎県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 鹿児島県</label></li>
                          <li><label class="checkbox"><input type="checkbox" /> 沖縄県</label></li>
                      </ul>
                  </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
const App = () => {
  const [now, setNow] = useState(0);
  useEffect(function() {
    const intervalId = setInterval(function() {
      setNow(now+1);
    }, 2000);
    return function(){clearInterval(intervalId)};
  }, [now]);

  const customData = require('./output.json');
  const tempData = customData.slice();

  const width = 1000;
  const height = 1200;
  const barHeight = 18;

  const drawGraph =()=> {
    tempData.sort((a, b) => b.population[now] - a.population[now]);
    const MaxLength = tempData[0].population[now];
    const draw =  tempData.map((item, i) => {
      return (
        <g key={i} transform={`translate(0,${20 * (i + 1)})`}>
          <rect
            x="0"
            y={-barHeight / 2}
            width={(width-200)*item.population[now]/MaxLength}
            height={barHeight}
            fill={item.color}
          />
          <text x={(width-200)*item.population[now]/MaxLength +20} y="5" textAnchor="start">
            {item.population[now]}
          </text>
          <line x1="-10" y1="0" x2="0" y2="0" stroke="black"/>
          <text x="-15" y="5" textAnchor="end">
            {item.name}
          </text>
        </g>
      );
    });
    return draw;
  }

  const [start, setStart] = React.useState(1920);
  const setStartYear = s => setStart(s.target.value);
  const [end, setEnd] = React.useState(2000);
  const setEndYear = g => setEnd(g.target.value);

  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              日本の人口推移
            </h1>
          </div>
        </div>
      </section>

      <div className = "container">
        <div class="columns">
          <div class="column is-4">
            <input class="input" value={start} type="text" placeholder="Start Year" onChange={setStartYear}/>
            <input class="input" value={end}   type="text" placeholder="End Year"   onChange={setEndYear}/>
          <div class="columns is-mobile">
            <div class="column">
              {CheckBox1()}
            </div>
            <div class="column">
              {CheckBox2()}
            </div>
          </div>
          </div>
          <div class="column">
          <div class="buttons has-addons  is-right">
            <button class="button">Start</button>
            <button class="button">Stop</button>
          </div>
            <svg width={width} height={height}>
              <text x="100" y="75" textAnchor="start" font-size="30">{start}年〜{end}年</text> 
              <text x={width/2} y="75" textAnchor="start" font-size="50">{now+1920}年</text>
              <g transform="translate(100,100)" >
                <line x1="0" y1="0" x2="0" y2={48*(barHeight+2)} stroke="black" />
                <line x1="0" y1={48*(barHeight+2)} x2={width-200} y2={48*(barHeight+2)} stroke="black" />
                {drawGraph()}
              </g>
            </svg>
          </div>
        </div>
      </div>

      <footer className = 'footer'>
        <div className = 'container'>
          <div className = 'content has-text-centered'>
            <hr></hr>
            <p>&copy; 2020 Naoya Oda </p>
            <p><a href = "mailto:oden6680@gmail.com">oden6680@gmail.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;