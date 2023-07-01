import Button from "./Button";
import {
  BsBell,
  BsBugFill,
  BsCashCoin,
  BsCloudLightningRain,
  BsController,
} from "react-icons/bs";

function App() {
  const handleClick = () => {
    console.log("Click!!");
  };

  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5" onClick={handleClick}>
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
