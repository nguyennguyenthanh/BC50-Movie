import { useMagicColor } from './useMagicColor';
import "./style.css";
export default function Square() {
  const color = useMagicColor();
  return (
    <div>
      <h3 className='square' style={{ backgroundColor: color }}>Square</h3>
    </div>
  )
}
