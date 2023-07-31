import { useMagicColor } from './useMagicColor';
import "./style.css"
export default function Circle() {
  const color = useMagicColor();
  return (
    <div>
      <h3 className='circle square' style={{ backgroundColor: color }}>Circle</h3>
    </div>
  )
}
