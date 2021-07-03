import {useState} from 'react';
import './App.css';
import './pictures.css';

import Lightbox from './Lightbox';

const requestImageFile = require.context('./images', true, /.jpg$/);

const tabs = [
  {
    name: 'Round Cakes',
    directory: 'round',
    pictures: [
      "5412_113063043199_47773828199_2963306_7821094_n",
      "5412_113065408199_47773828199_2963365_1154514_n",
      "5972_126898803199_47773828199_3219099_5350363_n",
      "40301_447016188199_47773828199_6203854_2632141_n",
      "n47773828199_1698680_1785",
      "n47773828199_1698681_2025",
      "n47773828199_1698682_2213",
      "n47773828199_1698683_2402",
      "n47773828199_1698684_2582",
      "n47773828199_2542711_3435571",
    ]
  },
  {
    name: 'Square Cakes',
    directory: 'square',
    pictures: [
      "n47773828199_2542739_5641344",
      "5412_113066863199_47773828199_2963381_7254189_n",
      "5972_126878953199_47773828199_3218760_1740967_n",
      "n47773828199_1698559_6204",
      "n47773828199_1698560_6514",
      "n47773828199_1698561_6793",
      "n47773828199_1698562_7065",
      "n47773828199_1698563_7373",
      "n47773828199_1698564_7681",
      "n47773828199_1698565_8004",
    ]
  },
  {
    name: 'Cakes that don\'t look like cake',
    directory: 'sculpted',
    pictures: [
      "n47773828199_1698697_9547",
      "314974_10150419668653200_47773828199_10222156_2053608709_n",
      "n47773828199_1698695_9094",
      "n47773828199_1698696_9336",
      "n47773828199_1703196_3270",
      "n47773828199_1703197_3510",
      "n47773828199_1703198_3735",
      "n47773828199_1703199_3949",
      "n47773828199_1703200_4161",
      "n47773828199_1703201_4376",
      "n47773828199_1703202_4596",
      "n47773828199_1703203_4857",
      "n47773828199_1703204_5084",
      "n47773828199_1703205_5311",
      "n47773828199_1703206_5532",
      "n47773828199_1703207_5794",
      "n47773828199_1703208_6025",
    ]
  },
]

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [lightboxPicture, setLightboxPicture] = useState();

  return (
    <div className="App">
      <div className="content">
        <div className="header">
          <div className="logo" />
        </div>
        <div className="nav">
          {tabs.map((tab, index) => {
            return (
              <div className={`navButton ${selectedTab === index ? 'selected' : ''}`} key={index} onClick={() => setSelectedTab(index)}>
                {tab.name}
              </div>
            )
          })}
        </div>
        <div className="pictures">
          {tabs[selectedTab].pictures.map(picture => {
            return (
              <div
                className="pictureFrame"
                onClick={() => setLightboxPicture(picture)}
              >
                <div className={`picture p_${picture}`} />
              </div>
            )
          })}
        </div>
        <div className="footer">&copy; 2021 Seretta's Cakes</div>
      </div>
      <Lightbox
        picture={lightboxPicture}
        close={setLightboxPicture}
      />
    </div>
  );
}

export default App;
