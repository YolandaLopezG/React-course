import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning outline>
          Hide Adds!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Hello!
        </Button>
      </div>
      <div>
        <Button success outline rounded>
          Look here!
        </Button>
      </div>
    </div>
  );
}

export default App;
