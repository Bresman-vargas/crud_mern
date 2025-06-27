import {Routes, Route} from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import FormPage from './pages/FormPage'
import NotFound from './pages/NotFound'
import NavBar from './component/NavBar'

export default function App() {
  return (
    <> 
      <NavBar/>
      <Routes>
        <Route path='/' element= {<TasksPage/>}/>
        <Route path='/new' element={<FormPage/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}
