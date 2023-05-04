import { useInput } from './useInput';

function App() {
    // const [sound, setSound] = useState("");
    // const [color, setColor] = useState("#000000");
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    // const sound = useRef();
    // const color = useRef();
  
    const submit = (e) => {
      e.preventDefault();
      // const soundValue = sound.current.value;
      // const colorValue = color.current.value;
      // alert(`${soundValue} sounds like ${colorValue}`)
      alert(`${titleProps.value} sounds like ${colorProps.value}`)
      resetTitle();
      resetColor();
      // sound.current.value = "";
      // color.current.value = "";
      // setSound("");
      // setColor("#000000")
    }
    
    return (
      <form onSubmit={submit}>      
        <input 
          // ref={sound} 
          // value={sound} 
          {...titleProps} 
          type="text" 
          placeholder='Sound...'
          // onChange={(e) => setSound(e.target.value)}
          /><br />  
        <input 
          // ref={color} 
          // value={color} 
          {...colorProps} 
          type="color"
          // onChange={(e) => setColor(e.target.value)}
          /><br />
        <button>ADD</button>     
      </form>
    )
  }

  export default App;