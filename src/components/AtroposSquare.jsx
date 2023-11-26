
import Atropos from 'atropos/react';
import 'atropos/css'

export default function AtroposSquare(props) {
    return (
        <Atropos
            activeOffset={60}
            shadowScale={1}
            onEnter={() => console.log('Enter')}
            onLeave={() => console.log('Leave')}
            onRotate={(x, y) => console.log('Rotate', x, y)}
            className='h-[300px]'
        >
            <section className=' w-full h-full bg-white '>
                <img className='h-full w-full' alt={props.srcImg} src={props.srcImg} />

            </section>
        </Atropos>
    )

}