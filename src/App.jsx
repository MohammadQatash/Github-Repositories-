import React from 'react'
import SearchForm from './components/SearchForm'

const App = () => {
  return (
    <main className='main'>
      <div className='container'>
      <section className='repos-search'>
        <SearchForm />
      </section>
      <section className='repos-section'>
        Repos
      </section>
      </div>
    </main>
  )
}

export default App
