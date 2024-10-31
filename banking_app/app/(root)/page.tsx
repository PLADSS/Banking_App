import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import React from 'react'

const Home = () => {

    const loggedIn = {firstName : "Furkan",lastName : "Karakoyun", email:"iyifark@gmail.com"}


  return (
    <section className='home'>
        <div className="home-content">
            <header className='home-header'>
                <HeaderBox 
                 type="greeting"
                 title="Welcome"
                 user={loggedIn?.firstName || "Guest"}
                 subtext="Acces and Manage your account"
                />

                <TotalBalanceBox
                accounts ={[]}
                totalBanks={1} 
                totalCurrentBalance={1250.35}/>
            </header>

            Recent Transactions
        </div>
        <RightSidebar
        user ={loggedIn}
        transactionas={[]}
        banks={[{currentBalance:155.50},{currentBalance:500}]} />
    </section>
  )
}

export default Home