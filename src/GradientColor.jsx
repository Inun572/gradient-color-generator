import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Pallete from './components/Pallete';
import { addColor, changeColor, removeColor } from './store/slicer/colorSlicer';

const ReduxColor = () => {
  const colors = useSelector((state) => state.colors);
  const dispatch = useDispatch();

  const onAddColor = () => {
    if (colors.length >= 5) {
      alert('Maximum color is 5');
      return;
    }
    dispatch(addColor());
  };

  const onRemoveColor = () => {
    if (colors.length < 3) {
      alert('Minimum color is 2');
      return;
    }
    dispatch(removeColor());
  };

  const markdown = `background-image: linear-gradient(to right top, ${colors.join(
    ', '
  )});`;

  const onChangeColor = (e, index) => {
    const newColor = [...colors];
    newColor[index] = e.target.value;
    dispatch(changeColor(newColor));
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right top, ${colors.join(', ')} )`,
      }}
      className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <ReactMarkdown className={'my-8 p-4 text-xl font-semibold bg-white'}>
        {markdown}
      </ReactMarkdown>

      <button className="bg-lime-400 w-[200px] m-2 p-2" onClick={onAddColor}>
        Add Color
      </button>
      <button className="bg-red-400 w-[200px] p-2" onClick={onRemoveColor}>
        Remove Color
      </button>
      <div className="mt-8 flex justify-center items-center gap-2">
        {colors?.map((color, index) => {
          return (
            <Pallete
              key={index}
              name={index}
              value={color}
              onChange={(e) => onChangeColor(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReduxColor;
