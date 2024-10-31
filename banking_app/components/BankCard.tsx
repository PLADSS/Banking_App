import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BankCard({account, userName, showBalance = true}:CrediCardProps) {
  return (
    <div className='flex flex-col' >
        <Link href="/"className='bank-card' >
        <div className="bank-car_content">
            <div>
                <h1 className='text-16 font-semibold text-white'>{account.name ||userName}</h1>
                <p className='font-ibm-plex-serif font-black text-white'>
                    {formatAmount(account.currentBalance)}
                </p>
            </div>
            <article className='flex flex-col gap-2'>
                <div className="flex justify-between">
                    <h1 className='text-12 font-semibold text-white'>{userName}</h1>
                    <h2 className='text-12 font-semibold text-white'>●● / ●●</h2>
                </div>
                <p className='text-14 font-semibold tracking-[1.1px] text-white'> ●●●● ●●●● ●●●● <span className='text-16'>{account.mask} 1234</span></p>
            </article>
        </div>
        <div className="bank-car_icon">
            <Image src="/icons/Paypass.svg" height={20} width={20} alt='pay'/>
            <Image src="/icons/mastercard.svg" height={45} width={32} alt='mastercard' className='ml-5'/>
        </div>
        <Image src="/icons/lines.png" height={316} width={190} alt='lines' className='absolute top-0 left-0'/>
        </Link>
        {/* Copy */}
    </div>
  )
}

export default BankCard