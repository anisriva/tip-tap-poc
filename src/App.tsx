import Tiptap from "./TipTap";
import DefaultEditor from "./DefaultEditor";
function App() {
  return (
    <div>
      <header>
        <h1>React Workspace</h1>
      </header>
      <main>
        <div className="card">
          <Tiptap />
          <DefaultEditor />
        </div>
      </main>
    </div>
  );
}

export default App;
