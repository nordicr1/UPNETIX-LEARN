import '../Header/index.css'
import upnetix5 from '/Users/Tonkp/Desktop/UPNETIX/UPNETIX-LEARN/tutoriais/src/img/upnetix5.svg'

function Headerr() {
    return(
        <>
        <div>
            <header>              
                <div className='box-1'>
                    <img className='img-1' src={upnetix5} alt='UPNETIX'/>
                        <button className='fonte-1'>INÍCIO</button>
                        <button className='fonte-1'>TUTORIAIS</button>
                        <button className='fonte-1'>LINKS</button>
                        <button className='fonte-1'>SMBOT</button>
                </div>                  
            </header>            
        </div>
        
        </>
    )
}

export default Headerr;