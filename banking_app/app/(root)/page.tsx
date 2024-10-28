import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {

    const loggedIn = {firstName : "Furkan"}


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
        </div>
    </section>
  )
}

export default Home