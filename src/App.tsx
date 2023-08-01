import './App.css';
import './componets/Button/button';
import { Button } from './componets/Button/button';
import './componets/UserName/userName';
import { User } from './componets/UserName/userName';

function App() {
  const hendlePrimariButtonClick = () => {
    console.log('clicked');
  };

  return (
    <div>
      <Button
        text='Primary'
        mode='primary'
        disabled={false}
        onClick={hendlePrimariButtonClick}
      />
      <Button
        text='Primary'
        mode='primary'
        disabled={true}
        onClick={hendlePrimariButtonClick}
      />
      <Button
        text='Secondary'
        mode='secondary'
        disabled={false}
        onClick={hendlePrimariButtonClick}
      />
      <Button
        text='Secondary'
        mode='secondary'
        disabled={true}
        onClick={hendlePrimariButtonClick}
      />
      <Button
        text='Secondary 2'
        mode='secondary2'
        disabled={false}
        onClick={hendlePrimariButtonClick}
      />
      <Button
        text='Secondary 2'
        mode='secondary2'
        disabled={true}
        onClick={hendlePrimariButtonClick}
      />
      <User userName='Alex Box' />
    </div>
  );
}

export default App;
