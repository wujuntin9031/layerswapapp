import Image from 'next/image'
import firstGuidePic from './../public/images/withdrawGuideImages/01.png'
import secondNetworkGuidePic from './../public/images/withdrawGuideImages/02Network.png'
import secondExchangeGuideGuidePic from './../public/images/withdrawGuideImages/02Exchange.png'
import thirdGuidePic from './../public/images/withdrawGuideImages/03.png'
import shortenAddress from './utils/ShortenAddress'
import { SwapItem } from '../lib/layerSwapApiClient'

const SwapGuide = ({ swap }: { swap: SwapItem }) => {
    return (
        <div className='rounded-md w-full flex flex-col items-left justify-center space-y-4 text-left text-primary-text'>
            <p className='text-primary-text'>To complete the swap, <strong>manually send</strong> assets from your wallet, to the <strong>Deposit Address</strong> generated by Layerswap.</p>
            <div className='space-y-3'>
                <p className='text-base font-semibold text-white'>🪜 Steps</p>
                <div className='space-y-5 text-base text-primary-text'>
                    <div className='space-y-3'>
                        <p><span className='text-primary'>.01</span> Copy the Deposit Address <span className='text-white'>({shortenAddress(swap?.deposit_address)})</span>, or scan the QR code</p>
                        <div className='border-2 border-darkblue-400 rounded-xl p-2 bg-darkblue-500'>
                            <Image src={firstGuidePic} className='w-full rounded-xl' alt={''} />
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <p><span className='text-primary'>.02</span> Send <span className='text-white'>{swap?.destination_network_asset}</span> to that address from your {swap?.source_exchange ? 'exchange account' : 'wallet'}</p>
                        <div className='border-2 border-darkblue-400 rounded-xl p-2 bg-darkblue-500'>
                            <Image src={swap?.source_exchange ? secondExchangeGuideGuidePic : secondNetworkGuidePic} className='w-full rounded-xl' alt={''} />
                        </div>
                    </div>
                    {swap?.source_exchange && <div className='space-y-3'>
                        <p><span className='text-primary'>.03</span> Make sure to send via one of the supported networks</p>
                        <div className='border-2 border-darkblue-400 rounded-xl p-2 bg-darkblue-500'>
                            <Image src={thirdGuidePic} className='w-full rounded-xl' alt={''} />
                        </div>
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default SwapGuide