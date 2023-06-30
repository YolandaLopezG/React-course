import Button from "./Button";
import {
  BsBell,
  BsBugFill,
  BsCashCoin,
  BsCloudLightningRain,
  BsController,
} from "react-icons/bs";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          <BsBugFill />
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <BsCashCoin />
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning outline>
          <BsBell />
          Hide Adds!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <BsCloudLightningRain />
          Hello!
        </Button>
      </div>
      <div>
        <Button success outline rounded>
          <BsController />
          Look here!
        </Button>
      </div>
    </div>
  );
}

export default App;
