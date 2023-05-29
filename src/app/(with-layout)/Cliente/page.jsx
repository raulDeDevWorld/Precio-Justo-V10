'use client'

import style from './Cliente.module.css'
import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'

import Tag from '../../../components/Tag'
import { useRouter } from 'next/navigation';

import { useMask } from '@react-input/mask';
import { WithAuth } from '@/HOCs/WithAuth'


function Home() {
    const inputRefCard = useMask({ mask: '____ ____ ____ ____', replacement: { _: /\d/ } });

    const inputRefDate = useMask({ mask: '__/__', replacement: { _: /\d/ } });
    const inputRefCVC = useMask({ mask: '___', replacement: { _: /\d/ } });
    const router = useRouter()


    function seeMore() {
        router.push('/Producto')
    }


    return (


        <main className={style.main}>
            <Subtitle htmlFor="">Categorias</Subtitle>

            <div className="flex flex-wrap justify-between">
                <Tag styled='tagPrimary'>Los mas recientes</Tag>
                <Tag styled='tagSecondary'>En oferta</Tag>
                <Tag styled='tagSecondary'>Recientes</Tag>
                <Tag styled='tagSecondary'>Otros</Tag>
            </div>


            <br />





            <div className={style.card}>
                <p>
                    <span>Cartera</span><span>Bs 100</span>
                </p>
                <img src="/cartera.svg" alt="" />
                <div>
                    <Button theme='Primary' styled='miniButtonSecondaryGreen' click={seeMore}>Ver +</Button>
                    <Button theme='Success' click={seeMore}>Comprar</Button>
                </div>
                <span>Nombre de la empresa</span>
            </div>




            <div className={style.card}>
                <p>
                    <span>Cartera</span><span>Bs 100</span>
                </p>
                <img src="/cartera.svg" alt="" />
                <div>
                    <Button theme='Primary' styled='miniButtonSecondaryGreen' click={seeMore}>Ver +</Button>
                    <Button theme='Success' click={seeMore}>Comprar</Button>
                </div>
                <span>Nombre de la empresa</span>
            </div>
            <div className={style.card}>
                <p>
                    <span>Cartera</span><span>Bs 100</span>
                </p>
                <img src="/cartera.svg" alt="" />
                <div>
                    <Button theme='Primary' styled='miniButtonSecondaryGreen' click={seeMore}>Ver +</Button>
                    <Button theme='Success' click={seeMore}>Comprar</Button>
                </div>
                <span>Nombre de la empresa</span>
            </div>
            <div className={style.card}>
                <p>
                    <span>Cartera</span><span>Bs 100</span>
                </p>
                <img src="/cartera.svg" alt="" />
                <div>
                    <Button theme='Primary' styled='miniButtonSecondaryGreen' click={seeMore}>Ver +</Button>
                    <Button theme='Success' click={seeMore}>Comprar</Button>
                </div>
                <span>Nombre de la empresa</span>
            </div>
            <div className={style.card}>
                <p>
                    <span>Cartera</span><span>Bs 100</span>
                </p>
                <img src="/cartera.svg" alt="" />
                <div>
                    <Button theme='Primary' styled='miniButtonSecondaryGreen' click={seeMore}>Ver +</Button>
                    <Button theme='Success' click={seeMore}>Comprar</Button>
                </div>
                <span>Nombre de la empresa</span>
            </div>
            <div className={style.card}>
                <p>
                    <span>Cartera</span><span>Bs 100</span>
                </p>
                <img src="/cartera.svg" alt="" />
                <div>
                    <Button theme='Primary' styled='miniButtonSecondaryGreen' click={seeMore}>Ver +</Button>
                    <Button theme='Success' click={seeMore}>Comprar</Button>
                </div>
                <span>Nombre de la empresa</span>
            </div>
            <div className={style.card}>
                <p>
                    <span>Cartera</span><span>Bs 100</span>
                </p>
                <img src="/cartera.svg" alt="" />
                <div>
                    <Button theme='Primary' styled='miniButtonSecondaryGreen' click={seeMore}>Ver +</Button>
                    <Button theme='Success' click={seeMore}>Comprar</Button>
                </div>
                <span>Nombre de la empresa</span>
            </div>








        </main>


    )
}

export default  WithAuth(Home)




