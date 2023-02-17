// 74
// import './categories.style.scss';
// import CategoryItem from './components/category-item/category-item.component';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

    </Routes>

  );
}

export default App;
