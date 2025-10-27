import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Alert color="primary">
        <span>hello world</span>
      </Alert>

      <ListGroup
        items={["new york", "sf", "tokyo", "london", "paris"]}
        heading="Cities"
        onSelectItem={(item: string) => {
          console.log(item);
        }}
      ></ListGroup>
    </div>
  );
}

export default App;
