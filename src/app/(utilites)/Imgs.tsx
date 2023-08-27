import Image from 'next/image';
import g1 from '../../../public/g9.svg'

function Imagens() {
  return (
    <div>
      <Image
        src={g1}
        alt="My SVG"
        width={700}
        height={700}
      />
    </div>
  );
}
export default Imagens