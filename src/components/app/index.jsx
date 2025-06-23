import React from 'react';
import { useMedia } from 'react-use';
import Homepage from 'components/homepage';
import Header from 'components/header';
import TitlePage from 'components/titlePage';
import MobileLanding from 'components/mobileLanding';
import './index.scss';

function App() {
  const requiredWidth = useMedia('(min-width: 1330px)');
  return (
    <div>
      <Header requiredWidth={requiredWidth} />
      { requiredWidth ? <TitlePage /> : <MobileLanding /> }
      { requiredWidth && <Homepage /> }
    </div>
  );
}

export default App;