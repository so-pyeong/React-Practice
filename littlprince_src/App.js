import './App1.css';
import Content1 from './components/Content1';
import Image from './components/Image';

function App() {
    return (
      <div className='App'>
        <nav className='Menu'>
          <a href='http://www.naver.com'>네이버</a> |
          <a href='http://www.google.com'>구글</a> |
          <a href='http://openai.com'>오픈AI</a>
        </nav>
        <div className='Contents'>
          <Image className="Image" />
          <Content1 className="Content1" />
        </div>
      </div>
    )
}

export default App;
