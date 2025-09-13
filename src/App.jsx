import './App.css'
import Create from './Create'
import Hero from './Hero'
import Issue from './Issue'
import Nav from './Nav'
import { Form, Route, Routes } from 'react-router-dom'
import User from './User'
import IssueForm from './IssueForm'
import Community from './Community'
function App() {


  return (
    <>
      <Routes>
        <Route path='/'
          element={
            <>
              <header><Nav /></header>
              <main>
                <Hero />
                <Issue />
              </main>
            </>
          }
        />

        <Route path='/sign-up' element={<Create/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/form' element={<IssueForm/>}/>
         <Route path='/community' element={<Community/>}/>

      </Routes>
    </>
  )
}

export default App
